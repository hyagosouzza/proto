import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { AdmComponent } from './adm/adm.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'eventos', component: EventosComponent},
    {path: 'adm', component: AdmComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);