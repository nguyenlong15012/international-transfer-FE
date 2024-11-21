import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  transactions: any[] = [];
  //@Input() transactions: any[] = [];

  constructor(private transactionService: TransactionService) {
    this.transactions = this.transactionService.getTransactions();
  }

  // ngOnChanges() {
  //   console.log('Transactions updated: ', this.transactions);
  // }
}
