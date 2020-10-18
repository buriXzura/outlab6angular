import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component'

const routes: Routes = [
  { path: 'form', component: ReviewComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/contact' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
