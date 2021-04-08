import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { FormParentComponent } from './components/form-parent/form-parent.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: '', component: FormParentComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
