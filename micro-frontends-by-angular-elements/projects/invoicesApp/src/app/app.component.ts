import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'invoicesApp';

  constructor(private router: Router) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.urlUpdateStrategy = 'eager';
  }

  ngOnInit() {
    this.router.navigate(['/invoices']);
    console.log('navigate to: invoices');
    console.log(window.location.href);
    console.log(this.router.url);
  }
}
