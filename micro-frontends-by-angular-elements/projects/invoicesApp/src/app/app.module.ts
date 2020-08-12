import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const invoicesApp = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('invoices-app', invoicesApp);
  }

}
