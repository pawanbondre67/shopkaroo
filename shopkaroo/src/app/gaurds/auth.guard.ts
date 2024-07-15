import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/authservice/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

   const authservice =  inject(AuthService) as AuthService;
   const router = inject(Router) as Router;

   if(route.routeConfig?.path === 'auth') {
        return authservice.isAuthenticated().pipe(
            map(() => {
                router.navigate(['/home']);
                return false;
            }),
            catchError(() => {
                return of(true);
            })
        );
    }

    return authservice.isAuthenticated().pipe(
        map(() => {

                return true;
        }),
            catchError(() => {
                router.navigate(['/auth']);
                return of(false);

        })
    );
};
