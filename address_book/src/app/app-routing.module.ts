import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contact-list', pathMatch: 'full' },
  {
    path: 'contact-list',
    loadChildren: () => import('./pages/contact-list/contact-list.module').then(m => m.ContactListPageModule)
  },
  {
    path: 'contact-details/:id',
    loadChildren: () => import('./pages/contact-details/contact-details.module').then(m => m.ContactDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
