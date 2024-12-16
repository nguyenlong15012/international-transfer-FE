import { ReturnStatement } from '@angular/compiler';
import { AuthService } from './../services/Auth/auth.service';
import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  return true;
};

// @Injectable({
//   providedIn: 'root',
// })
// export class authGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if (!this.authService.isAuthenticated()) {
//       this.router.navigate(['/login'], {
//         queryParams: { returnUrl: state.url },
//       });
//       return false;
//     }

//     return true;
//   }
// }
