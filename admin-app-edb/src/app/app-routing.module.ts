import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsBackofficeComponent } from './transactions-backoffice/transactions-backoffice.component';

const routes: Routes = [
{path:"transactions",component:TransactionsBackofficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
