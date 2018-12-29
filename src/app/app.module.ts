import { AppErrorHandler } from './utils/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { from } from 'rxjs';
import { MaterialModule } from './material';
import { StarslistComponent } from './starslist/starslist.component';
import { StarComponent } from './star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { VideoComponent } from './video/video.component';
import { HeaderComponent } from './header/header.component';
import { VideoPlaybackComponent } from './video-playback/video-playback.component';
import { CategoriesComponent } from './categories/categories.component';
import { VideoslistComponent } from './videoslist/videoslist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TagsComponent } from './tags/tags.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    StarslistComponent,
    StarComponent,
    VideoComponent,
    HeaderComponent,
    VideoPlaybackComponent,
    CategoriesComponent,
    VideoslistComponent,
    FooterComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule,
    NgbModule,
    FormsModule
  ],
  entryComponents: [
    CategoriesComponent
  ],
  providers: [
    { provide:ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
