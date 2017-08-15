import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { VideoItem } from '../videos/video';
import { VideoService } from '../shared/services/videos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit, OnDestroy {
  private req: any;
  homeVideoList: [VideoItem] = [] as [VideoItem];

  constructor(private http: Http, private router: Router, private _video: VideoService) { }

  ngOnInit() {
    this.req = this._video.list().subscribe(data => {
      data.filter(item => {
        if (item.featured) {
          this.homeVideoList.push(item);
        }
      });
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
