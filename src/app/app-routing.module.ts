import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DocumentsEntryComponent } from './documents-entry/documents-entry.component';
import { DocumentsSearchComponent } from './documents-search/documents-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'documents-search',
    component: DocumentsSearchComponent,
  },
  {
    path: 'documents-entry',
    component: DocumentsEntryComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
