import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-transactions-backoffice',
  templateUrl: './transactions-backoffice.component.html',
  styleUrls: ['./transactions-backoffice.component.css']
})

export class TransactionsBackofficeComponent {
  constructor(private apiService: ApiServiceService) {}
  transactions: any[] = [];
  transReq: any = {
    reference: ''
  };
  ngOnInit() {
    this.apiService.getAllTransactions().subscribe(
      (transactionsData) => {
        this.transactions = transactionsData.map((t: any) => {
          let t1: any = { ...t };
          t1.selected = false;
          return t1;
        });
        this.renderedTransactions = this.transactions;
        console.log('transactions', this.transactions);
      },
      (error) => {
        console.log('error getting transactions', error);
      }
    );
  }  
  renderedTransactions = this.transactions;
  searchTerm = '';
  handleSearch() {
    this.transactions = this.transactions;
    this.renderedTransactions = this.transactions.filter((c) => {
      let valuesString = JSON.stringify(Object.values(c));
      return valuesString.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
  issuerLabels: any = {
    nom: 'Nom',
    prenom: 'Prénom',
    email: 'E-mail',
    phone: 'Télephone',
  };
  benefLabels: any = {
    nom: 'Nom',
    prenom: 'Prénom',
    email: 'E-mail',
    phone: 'Télephone',
  };
  transactionLabels: any = {
    paymentType: 'Type de paiement',
    issueDate: 'Date de paiement',
    amount: 'Montant',
    fraisTransfert: 'Frais de transfert',
  };
  selectedTransaction: any = {};

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  get isTableEmpty() {
    return !(this.renderedTransactions && this.renderedTransactions.length > 0);
  }

  modalClass = 'modal-bg';
  openModal(event: Event) {
    this.modalClass = 'modal-bg modal-opened';
  }
  closeModal(event: Event) {
    this.modalClass = 'modal-bg';
  }
  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  editModalClass = 'modal-bg';
  openEditModal(id: any) {
    console.log('openEditModal : ' + id);
    this.selectedTransaction = this.transactions.find(
      (t) => t.transactionId === id
    );
    this.editModalClass = 'modal-bg modal-opened';
  }
  closeEditModal() {
    this.selectedTransaction = {};
    this.editModalClass = 'modal-bg';
  }
  handleBlockButton(transactionRef: string): void {
    this.transReq.reference = transactionRef;
    console.log(this.transReq)
    this.apiService.blockTransaction(this.transReq).subscribe(
      response => {
        console.log('Transaction blocked successfully', response);
        // Handle successful response
      },
      error => {
        console.error('Error blocking transaction', error);
        // Handle error response
      }
    );
  }
  handleUnblockButton(transactionRef: string): void {
    this.transReq.reference = transactionRef;
    console.log(this.transReq)
    this.apiService.UnblockTransaction(this.transReq).subscribe(
      response => {
        console.log('Transaction blocked successfully', response);
        // Handle successful response
      },
      error => {
        console.error('Error blocking transaction', error);
        // Handle error response
      }
    );
  }
}
