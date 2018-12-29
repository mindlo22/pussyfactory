import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IVideo } from '../models/video';
import { Observable } from 'rxjs';
import { VideoService } from './video.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class VideoPlaybackResolver implements Resolve<IVideo> {

  constructor(private router: Router,
    private videoService: VideoService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<IVideo> {
      let id = route.params['id'];
      if (isNullOrUndefined(id)) {
        console.log(`video id was not a number: ${id}`);
        this.router.navigate(['/products']);
        return null;
    }
    this.videoService.setPage("video_by_id");
    return this.videoService.getById(id);
  }
}
