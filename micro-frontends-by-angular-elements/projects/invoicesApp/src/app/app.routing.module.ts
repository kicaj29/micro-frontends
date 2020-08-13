import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'invoices', component: InvoicesListComponent }
      ], { useHash: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
