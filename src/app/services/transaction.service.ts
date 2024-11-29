import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions = new BehaviorSubject<any[]>(this.loadTransactions());
  transactions$ = this.transactions.asObservable();

  constructor() {}

  addTransaction(transaction: any) {
    const currentTransactions = this.transactions.value;
    const updatedTransactions = [...currentTransactions, transaction];
    this.transactions.next(updatedTransactions);
    this.saveTransactions(updatedTransactions);
  }

  // private transactions: any[] = [];

  getTransactions() {
    return this.transactions;
  }

  private loadTransactions(): any[] {
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  }

  private saveTransactions(transactions: any[]) {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }

  clearTransactions() {
    this.transactions.next([]);
    localStorage.removeItem('transactions');
  }
}
