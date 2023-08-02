import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { RiesgoComponent } from './views/riesgo/riesgo.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}

const routes: Routes = [

  { path: '', component: RiesgoComponent },
  // Resto de las rutas
  { path: 'riesgo', component: RiesgoComponent },

  // { path: 'login', component: LoginComponent },
  // { path: 'tabla', component: RiesgoComponent, canActivate: [AuthGuard] },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'tabla' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
