import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'customers', component: CustomersListComponent }
      ], { useHash: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
