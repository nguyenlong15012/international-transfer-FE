import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { routes } from './app/app.routes';
import { FormComponent } from './app/form/form.component';
import { HistoryComponent } from './app/history/history.component';

// bootstrapApplication(AppComponent, appConfig, {
//   providers: [provideRouter(appRoutes, withPreloading(PreloadAllModules))],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: FormComponent },
      { path: 'history', component: HistoryComponent },
    ]),
  ],
}).catch((err) => console.error(err));
