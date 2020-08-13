import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hash } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'customersApp';

  constructor(private router: Router) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.urlUpdateStrategy = 'eager';
  }

  ngOnInit() {
    this.router.navigate(['/customers']);
    console.log('navigate to: customers');
    console.log(window.location.href);
    console.log(this.router.url);
  }
}
