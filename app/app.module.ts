import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { BlogdetailsComponent } from './modules/features/blogdetails/blogdetails.component';
import { ContentpageComponent } from './modules/features/contentpage/contentpage.component';
import { CommentsComponent } from './modules/features/comments/comments.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogdetailsComponent,
    ContentpageComponent,
    CommentsComponent




    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

