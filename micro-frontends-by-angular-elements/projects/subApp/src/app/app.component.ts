import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'subApp';

  changeHead() {
    const data = {
      action: 'do something'
    };

    const event = new CustomEvent('ce_subApp', { detail: data });
    window.dispatchEvent(event);
  }
}
