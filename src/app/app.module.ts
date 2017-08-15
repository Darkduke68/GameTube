import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { SearchComponent } from './search/search/search.component';
import { SearchDetailComponent } from './search/search-detail/search-detail.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component';
import { VideoService } from './shared/services/videos.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

    
@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    HomeComponent,
    SearchComponent,
    SearchDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    // ngx-bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
