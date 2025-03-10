import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TramData, Departure, StopDeviation } from '../models/tram.model';

@Injectable({
  providedIn: 'root',
})
export class TramDataService {
  private tramData: TramData = {
    departures: [
      {
        destination: 'Solna station',
        direction_code: 1,
        direction: 'Solna station',
        state: 'ATSTOP',
        display: 'Nu',
        scheduled: '2024-08-26T15:30:30',
        expected: '2024-08-26T15:31:48',
        journey: {
          id: 2024082611526,
          state: 'NORMALPROGRESS',
          prediction_state: 'NORMAL',
        },
        stop_area: {
          id: 4529,
          name: 'Luma',
          type: 'TRAMSTN',
        },
        stop_point: {
          id: 4529,
          name: 'Luma',
          designation: '1',
        },
        line: {
          id: 30,
          designation: '30',
          transport_mode: 'TRAM',
          group_of_lines: 'Tvärbanan',
        },
        deviations: [],
      },
      {
        destination: 'Sickla',
        direction_code: 2,
        direction: 'Sickla',
        state: 'EXPECTED',
        display: '2 min',
        scheduled: '2024-08-26T15:34:30',
        expected: '2024-08-26T15:34:30',
        journey: {
          id: 2024082621447,
          state: 'NORMALPROGRESS',
          prediction_state: 'NORMAL',
        },
        stop_area: {
          id: 4529,
          name: 'Luma',
          type: 'TRAMSTN',
        },
        stop_point: {
          id: 4530,
          name: 'Luma',
          designation: '2',
        },
        line: {
          id: 30,
          designation: '30',
          transport_mode: 'TRAM',
          group_of_lines: 'Tvärbanan',
        },
        deviations: [],
      },
      {
        destination: 'Solna station',
        direction_code: 1,
        direction: 'Solna station',
        state: 'EXPECTED',
        display: '5 min',
        scheduled: '2024-08-26T15:37:30',
        expected: '2024-08-26T15:37:30',
        journey: {
          id: 2024082611533,
          state: 'ATORIGIN',
          prediction_state: 'NORMAL',
        },
        stop_area: {
          id: 4529,
          name: 'Luma',
          type: 'TRAMSTN',
        },
        stop_point: {
          id: 4529,
          name: 'Luma',
          designation: '1',
        },
        line: {
          id: 30,
          designation: '30',
          transport_mode: 'TRAM',
          group_of_lines: 'Tvärbanan',
        },
        deviations: [],
      },
      {
        destination: 'Hornsberg',
        direction_code: 2,
        direction: 'Moa Martinsons torg',
        state: 'EXPECTED',
        display: '7 min',
        scheduled: '2024-08-26T15:39:31',
        expected: '2024-08-26T15:39:31',
        journey: {
          id: 2024082605127,
          state: 'EXPECTED',
        },
        stop_area: {
          id: 10682,
          name: 'Luma',
          type: 'BUSTERM',
        },
        stop_point: {
          id: 13232,
          name: 'Luma',
        },
        line: {
          id: 74,
          designation: '74',
          transport_mode: 'BUS',
        },
        deviations: [],
      },
      {
        destination: 'Sickla udde',
        direction_code: 1,
        direction: 'Sickla udde',
        state: 'EXPECTED',
        display: '8 min',
        scheduled: '2024-08-26T15:40:55',
        expected: '2024-08-26T15:40:24',
        journey: {
          id: 2024082605117,
          state: 'NORMALPROGRESS',
          prediction_state: 'UNRELIABLE',
        },
        stop_area: {
          id: 10682,
          name: 'Luma',
          type: 'BUSTERM',
        },
        stop_point: {
          id: 10682,
          name: 'Luma',
        },
        line: {
          id: 74,
          designation: '74',
          transport_mode: 'BUS',
        },
        deviations: [],
      },
      {
        destination: 'Sickla',
        direction_code: 2,
        direction: 'Sickla',
        state: 'EXPECTED',
        display: '8 min',
        scheduled: '2024-08-26T15:40:30',
        expected: '2024-08-26T15:40:39',
        journey: {
          id: 2024082621453,
          state: 'NORMALPROGRESS',
          prediction_state: 'NORMAL',
        },
        stop_area: {
          id: 4529,
          name: 'Luma',
          type: 'TRAMSTN',
        },
        stop_point: {
          id: 4530,
          name: 'Luma',
          designation: '2',
        },
        line: {
          id: 30,
          designation: '30',
          transport_mode: 'TRAM',
          group_of_lines: 'Tvärbanan',
        },
        deviations: [],
      },
      {
        destination: 'Solna station',
        direction_code: 1,
        direction: 'Solna station',
        state: 'EXPECTED',
        display: '11 min',
        scheduled: '2024-08-26T15:43:30',
        expected: '2024-08-26T15:43:30',
        journey: {
          id: 2024082611539,
          state: 'EXPECTED',
        },
        stop_area: {
          id: 4529,
          name: 'Luma',
          type: 'TRAMSTN',
        },
        stop_point: {
          id: 4529,
          name: 'Luma',
          designation: '1',
        },
        line: {
          id: 30,
          designation: '30',
          transport_mode: 'TRAM',
          group_of_lines: 'Tvärbanan',
        },
        deviations: [],
      },
      {
        destination: 'Sickla',
        direction_code: 2,
        direction: 'Sickla',
        state: 'EXPECTED',
        display: '15 min',
        scheduled: '2024-08-26T15:47:30',
        expected: '2024-08-26T15:47:47',
        journey: {
          id: 2024082621500,
          state: 'NORMALPROGRESS',
          prediction_state: 'NORMAL',
        },
        stop_area: {
          id: 4529,
          name: 'Luma',
          type: 'TRAMSTN',
        },
        stop_point: {
          id: 4530,
          name: 'Luma',
          designation: '2',
        },
        line: {
          id: 30,
          designation: '30',
          transport_mode: 'TRAM',
          group_of_lines: 'Tvärbanan',
        },
        deviations: [],
      },
      {
        destination: 'Hornsberg',
        direction_code: 2,
        direction: 'Moa Martinsons torg',
        state: 'EXPECTED',
        display: '17 min',
        scheduled: '2024-08-26T15:49:31',
        expected: '2024-08-26T15:49:31',
        journey: {
          id: 2024082605131,
          state: 'EXPECTED',
        },
        stop_area: {
          id: 10682,
          name: 'Luma',
          type: 'BUSTERM',
        },
        stop_point: {
          id: 13232,
          name: 'Luma',
        },
        line: {
          id: 74,
          designation: '74',
          transport_mode: 'BUS',
        },
        deviations: [],
      },
      {
        destination: 'Sickla udde',
        direction_code: 1,
        direction: 'Sickla udde',
        state: 'EXPECTED',
        display: '20 min',
        scheduled: '2024-08-26T15:50:55',
        expected: '2024-08-26T15:52:42',
        journey: {
          id: 2024082605120,
          state: 'NORMALPROGRESS',
          prediction_state: 'UNRELIABLE',
        },
        stop_area: {
          id: 10682,
          name: 'Luma',
          type: 'BUSTERM',
        },
        stop_point: {
          id: 10682,
          name: 'Luma',
        },
        line: {
          id: 74,
          designation: '74',
          transport_mode: 'BUS',
        },
        deviations: [],
      },
      {
        destination: 'Hornsberg',
        direction_code: 2,
        direction: 'Moa Martinsons torg',
        state: 'EXPECTED',
        display: '26 min',
        scheduled: '2024-08-26T15:58:31',
        expected: '2024-08-26T15:58:31',
        journey: {
          id: 2024082605133,
          state: 'EXPECTED',
        },
        stop_area: {
          id: 10682,
          name: 'Luma',
          type: 'BUSTERM',
        },
        stop_point: {
          id: 13232,
          name: 'Luma',
        },
        line: {
          id: 74,
          designation: '74',
          transport_mode: 'BUS',
        },
        deviations: [],
      },
      {
        destination: 'Sickla udde',
        direction_code: 1,
        direction: 'Sickla udde',
        state: 'EXPECTED',
        display: '29 min',
        scheduled: '2024-08-26T16:00:55',
        expected: '2024-08-26T16:01:48',
        journey: {
          id: 2024082605123,
          state: 'NORMALPROGRESS',
          prediction_state: 'UNRELIABLE',
        },
        stop_area: {
          id: 10682,
          name: 'Luma',
          type: 'BUSTERM',
        },
        stop_point: {
          id: 10682,
          name: 'Luma',
        },
        line: {
          id: 74,
          designation: '74',
          transport_mode: 'BUS',
        },
        deviations: [],
      },
    ],
    stop_deviations: [
      {
        id: 3795465,
        importance_level: 5,
        message:
          'Tvärbanan 30: Extrainsatta spårvagnar från Globen mot Solna station c:a kl 21:00 - 22:00 med anledning av evenemang på Tele2 Arena.',
        scope: {
          stop_areas: [
            {
              id: 4501,
              name: 'Gullmarsplan',
              type: 'TRAMSTN',
            },
            {
              id: 4503,
              name: 'Globen',
              type: 'TRAMSTN',
            },
            {
              id: 4505,
              name: 'Linde',
              type: 'TRAMSTN',
            },
            {
              id: 4507,
              name: 'Valla torg',
              type: 'TRAMSTN',
            },
            {
              id: 4509,
              name: 'Årstafältet',
              type: 'TRAMSTN',
            },
            {
              id: 4511,
              name: 'Årstaberg',
              type: 'TRAMSTN',
            },
            {
              id: 4513,
              name: 'Årstadal',
              type: 'TRAMSTN',
            },
            {
              id: 4515,
              name: 'Liljeholmen',
              type: 'TRAMSTN',
            },
            {
              id: 4517,
              name: 'Trekanten',
              type: 'TRAMSTN',
            },
            {
              id: 4519,
              name: 'Gröndal',
              type: 'TRAMSTN',
            },
            {
              id: 4521,
              name: 'Stora Essingen',
              type: 'TRAMSTN',
            },
            {
              id: 4523,
              name: 'Alviks strand',
              type: 'TRAMSTN',
            },
            {
              id: 4525,
              name: 'Alvik',
              type: 'TRAMSTN',
            },
            {
              id: 4527,
              name: 'Mårtensdal',
              type: 'TRAMSTN',
            },
            {
              id: 4529,
              name: 'Luma',
              type: 'TRAMSTN',
            },
            {
              id: 4531,
              name: 'Sickla kaj',
              type: 'TRAMSTN',
            },
            {
              id: 4533,
              name: 'Sickla udde',
              type: 'TRAMSTN',
            },
            {
              id: 4535,
              name: 'Johannesfred',
              type: 'TRAMSTN',
            },
            {
              id: 4539,
              name: 'Karlsbodavägen',
              type: 'TRAMSTN',
            },
            {
              id: 4541,
              name: 'Bällsta bro',
              type: 'TRAMSTN',
            },
            {
              id: 4543,
              name: 'Sundbybergs centrum',
              type: 'TRAMSTN',
            },
            {
              id: 4545,
              name: 'Solna Business Park',
              type: 'TRAMSTN',
            },
            {
              id: 4547,
              name: 'Solna centrum',
              type: 'TRAMSTN',
            },
            {
              id: 4549,
              name: 'Solna station',
              type: 'TRAMSTN',
            },
            {
              id: 4561,
              name: 'Bromma Blocks',
              type: 'TRAMSTN',
            },
            {
              id: 7615,
              name: 'Sickla',
              type: 'TRAMSTN',
            },
          ],
          stop_points: [
            {
              id: 4537,
              name: 'Norra Ulvsunda',
              designation: '1',
            },
            {
              id: 4538,
              name: 'Norra Ulvsunda',
              designation: '2',
            },
            {
              id: 4564,
              name: 'Bromma flygplats',
              designation: '2',
            },
          ],
          lines: [
            {
              id: 30,
              designation: '30',
              transport_mode: 'TRAM',
              group_of_lines: 'Tvärbanan',
            },
            {
              id: 31,
              designation: '31',
              transport_mode: 'TRAM',
              group_of_lines: 'Tvärbanan',
            },
          ],
        },
      },
    ],
  };

  getDepartures(): Observable<Departure[]> {
    return of(this.tramData.departures);
  }
  getStopDeviations(): StopDeviation[] {
    return this.tramData.stop_deviations;
  }
}
