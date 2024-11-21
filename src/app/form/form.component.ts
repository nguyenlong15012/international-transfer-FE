import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() transactionAdded = new EventEmitter<any>();

  senderName: string = '';
  receiverName: string = '';
  amount: number = 0;
  currency: string = 'USD';
  currencies: string[] = ['USD', 'EUR', 'GBP', 'VND'];
  date: string = new Date().toISOString().split('T')[0];

  constructor(private transactionService: TransactionService) {}

  onSubmit() {
    if (this.senderName && this.receiverName && this.amount) {
      const newTransaction = {
        sender: this.senderName,
        receiver: this.receiverName,
        amount: this.amount,
        currency: this.currency,
        date: new Date().toISOString().split('T')[0],
      };
      this.transactionAdded.emit(newTransaction);
      console.log('transactionAdded = ', this.transactionAdded);
      this.clearForm();
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  }

  clearForm() {
    this.senderName = '';
    this.receiverName = '';
    this.amount = 0;
    this.currency = 'USD';
  }
}