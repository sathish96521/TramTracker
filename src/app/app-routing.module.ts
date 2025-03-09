import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TramDisplayComponent } from './components/tram-display/tram-display.component';

const routes: Routes = [
  { path: '', redirectTo: 'tramView', pathMatch: 'full' },
  { path: 'tramView', component: TramDisplayComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
