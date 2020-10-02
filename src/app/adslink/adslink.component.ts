import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-adslink',
  templateUrl: './adslink.component.html',
  styleUrls: ['./adslink.component.css']
})
export class AdslinkComponent implements OnInit {
  queryResult = {};
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    const paramsToSend = {
      utm_source: params.utm_source,
      utm_medium: params.utm_medium,
      utm_campaign: params.utm_campaign,
      utm_content: params.utm_content,
      utm_term: params.utm_term
    };
    this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      {body: paramsToSend}
      ).subscribe((data) => this.queryResult = data);
  }

  goToTasks(): void {
    this.router.navigate(['/tasks']);
  }

  goToLinks(): void {
    this.router.navigate(['/useful']);
  }
}
