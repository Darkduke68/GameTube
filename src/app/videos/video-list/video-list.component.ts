import { Component, OnInit, OnDestroy } from '@angular/core';

import { VideoItem } from '../video';
import { VideoService } from '../../shared/services/videos.service';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
  private req: any;
  videoList: [VideoItem];

  constructor(private _video: VideoService) {}

  ngOnInit() {
    // this.todayDate = new Date()
    this.req = this._video.list().subscribe(data => {
      this.videoList = data as [VideoItem];
    });

  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}