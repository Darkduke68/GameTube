import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query: string;
  private routeSub: any;
  public isCollapsed: boolean = true;

  constructor(private route: ActivatedRoute) {
    this.routeSub = route.params.subscribe(params => {
      this.query = params['q'];
    });
  }

  ngOnInit() {}
}
