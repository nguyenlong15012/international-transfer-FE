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
import { LoginComponent } from './app/login/login.component';
import { SearchComponent } from './app/search/search.component';

const router: Routes = [
  { path: 'transfer', component: FormComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
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
