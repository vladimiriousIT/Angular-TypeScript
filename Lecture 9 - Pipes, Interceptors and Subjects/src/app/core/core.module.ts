import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { appIntterceptorProvider } from './app.interceptor';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[appIntterceptorProvider],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
