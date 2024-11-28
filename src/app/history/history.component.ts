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
  //@Input() transactions: any[] = [];
  transactions: any[] = [];
  constructor(private transactionService: TransactionService) {
    //this.transactions = this.transactionService.getTransactions();
  }

  ngOnInit() {
    this.transactionService.transactions$.subscribe(
      (data) => (this.transactions = data)
    );
  }
  ngOnChanges() {
    console.log('Transactions updated: ', this.transactions);
  }

  //2
  // ngOnInit() {
  //   this.transactions = this.transactionService.getTransactions();
  // }
}
