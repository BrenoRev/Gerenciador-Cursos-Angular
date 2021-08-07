import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { Error404Component } from './error-404/error-404.component';

import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
         // Rota vázia
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      
      {
          // Rota não encontrada
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
