import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './feature/form-builder/form-builder.component';
import { FormAnswerComponent } from './feature/form-answer/form-answer.component';

export const routes: Routes = [
    { path: '', redirectTo: '/form/builder', pathMatch: 'full' },
   { path: 'form/builder', component: FormBuilderComponent },
   { path: 'form/answer', component: FormAnswerComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

