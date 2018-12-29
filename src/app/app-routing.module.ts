import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarslistComponent } from './starslist/starslist.component';
import { VideoComponent } from './video/video.component';
import { CategoriesComponent } from './categories/categories.component';
import { VideoPlaybackComponent } from './video-playback/video-playback.component';
import { VideoslistComponent } from './videoslist/videoslist.component';
import { VideoPlaybackResolver } from './services/video-playback-resolver.service';
import { EmbedVideoResolver } from './services/embed-video-resolver.service';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  {path: '', component:VideoslistComponent},
  {path:'stars', component:StarslistComponent},
  {path:'videos', component:VideoslistComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'videoplayback/:id', component:VideoPlaybackComponent,
   resolve: {video: VideoPlaybackResolver, embed: EmbedVideoResolver }},
  {path:'videos/:category', component:VideoslistComponent},
  {path:'videos/:search', component:VideoslistComponent},
  {path:'tags', component:TagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
