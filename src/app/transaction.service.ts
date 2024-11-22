import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions = new BehaviorSubject<any[]>([]);
  transactions$ = this.transactions.asObservable();

  addTransaction(transaction: any) {
    const currentTransactions = this.transactions.value;
    this.transactions.next([...currentTransactions, transaction]);
  }

  // private transactions: any[] = [];

  // getTransactions() {
  //   return this.transactions;
  // }

  // addTransaction(transaction: any) {
  //   this.transactions.push(transaction);
  // }
  constructor() {}
}
