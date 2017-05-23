import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ClassicComponent } from './classic/classic.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  /*{ path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },*/
  {path:'about',pathMatch: 'full',component :AboutComponent},
  {path:'blog',pathMatch: 'full',component :BlogComponent},

  {path:'classic',pathMatch: 'full',component :ClassicComponent},
  {path:'header',pathMatch: 'full',component :HeaderComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
