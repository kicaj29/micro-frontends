import { Component, ViewEncapsulation, Input, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mainApp';

  @Input() public authToken: string;

  constructor(private cd: ChangeDetectorRef){

  }

  ngOnInit() {
    window.addEventListener('ce_subApp', this.customEventListenerFunction.bind(this), true);
  }

  customEventListenerFunction(event) {
    this.title = event.detail.action;
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    window.removeEventListener('ce_subApp', this.customEventListenerFunction, true);
  }
}
