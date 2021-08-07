import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StartComponent } from './star/start.component';
import { ReplacePipe } from './pipe/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StartComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
