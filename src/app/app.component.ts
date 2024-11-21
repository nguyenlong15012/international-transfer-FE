import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  transactions = [
    {
      sender: 'Nguyễn Bá Long',
      receiver: 'John Doe',
      amount: 50,
      currency: 'USD',
      date: '2024-11-19',
    },
    {
      sender: 'Hoàng Công Tuấn Anh',
      receiver: 'Jane Smith',
      amount: 300,
      currency: 'EUR',
      date: '2024-11-18',
    },
    {
      sender: 'Lê Minh Tuấn',
      receiver: 'Chris Johnson',
      amount: 150,
      currency: 'GBP',
      date: '2024-11-17',
    },
  ];
  addTransaction(newTransaction: any) {
    console.log('Received transaction:', newTransaction);
    this.transactions.push(newTransaction);
  }
}
