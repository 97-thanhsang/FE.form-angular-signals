import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './feature/form-builder/form-builder.component';

export const routes: Routes = [
    { path: '', redirectTo: '/form/builder', pathMatch: 'full' },
   { path: 'form/builder', component: FormBuilderComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

