import { Component, OnInit } from '@angular/core';
import { TramDataService } from '../../services/tram-data.service';
import { Departure, StopDeviation } from 'src/app/models/tram.model';
import * as moment from 'moment';

@Component({
  selector: 'app-tram-display',
  templateUrl: './tram-display.component.html',
  styleUrls: ['./tram-display.component.css'],
})
export class TramDisplayComponent implements OnInit {
  departures: Departure[] = [];
  deviations: StopDeviation[] = [];

  constructor(private tramService: TramDataService) {}

  ngOnInit(): void {
    this.tramService.getDepartures().subscribe((data: Departure[]) => {
      this.departures = data.filter(
        (departure) =>
          departure.stop_area.name === 'Luma' &&
          departure.line.transport_mode === 'TRAM' &&
          this.isDepartureTowardsLinde(departure)
      );
    });

    this.deviations = this.tramService.getStopDeviations();
    // console.log(this.deviations);
  }

  private isDepartureTowardsLinde(departure: Departure): boolean {
    const stopDeviations = this.tramService.getStopDeviations();

    const lindeDeviation = stopDeviations.find((deviation) =>
      deviation.scope.stop_areas.some((stop) => stop.name === 'Linde')
    );

    if (!lindeDeviation) {
      return false;
    }

    return lindeDeviation.scope.lines.some(
      (line) => line.id === departure.line.id
    );
  }

  getTimeUntilDeparture(expectedTime: string): string {
    const now = moment();
    const expected = moment(expectedTime);
    const diff = expected.diff(now);
    return moment.utc(diff).format('mm:ss');
  }
}
