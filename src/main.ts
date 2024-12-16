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
import { LoginComponent } from './app/login/login/login.component';
import { SearchComponent } from './app/search/search.component';
import { UploadComponent } from './app/upload/upload.component';
import { RegisterComponent } from './app/login/register/register.component';
import { authGuard } from './app/auth/auth.guard';

const router: Routes = [
  { path: 'transfer', component: FormComponent, canActivate: [authGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent },
  // { path: 'upload', component: UploadComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(router), provideHttpClient()],
}).catch((err) => console.error(err));
