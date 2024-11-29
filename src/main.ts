import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {
  PreloadAllModules,
  provideRouter,
  Routes,
  withPreloading,
} from '@angular/router';
import { FormComponent } from './app/form/form.component';
import { HistoryComponent } from './app/history/history.component';
import { provideHttpClient } from '@angular/common/http';

const router: Routes = [
  { path: '', component: FormComponent },
  { path: 'history', component: HistoryComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(router), provideHttpClient()],
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter([
//       { path: '', component: FormComponent },
//       { path: 'history', component: HistoryComponent },
//     ]),
//   ],
// }).catch((err) => console.error(err));
