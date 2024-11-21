import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // transactions = [
  //   {
  //     sender: 'Nguyễn Bá Long',
  //     receiver: 'John Doe',
  //     amount: 50,
  //     currency: 'USD',
  //     date: '2024-11-19',
  //   },
  //   {
  //     sender: 'Hoàng Công Tuấn Anh',
  //     receiver: 'Jane Smith',
  //     amount: 300,
  //     currency: 'EUR',
  //     date: '2024-11-18',
  //   },
  //   {
  //     sender: 'Lê Minh Tuấn',
  //     receiver: 'Chris Johnson',
  //     amount: 150,
  //     currency: 'GBP',
  //     date: '2024-11-17',
  //   },
  // ];
  // addTransaction(newTransaction: any) {
  //   console.log('Received transaction:', newTransaction);
  //   this.transactions.push(newTransaction);
  // }
}

// template: `
//   <nav class="nav nav-pills">
//     <a class=nav-link" routerLink="/" routerLinkActive ="active">Chuyển tiền </a>
//     <a class=nav-link" routerLink="/>history" routerLinkActive="active">Lịch sử giao dịch</a>
//   </nav>
//   <div class="container">
//     <app-form (transactionAdded)="addTransaction($event)"></app-form>
//     <hr />
//     <app-history [transactions]="transactions"> </app-history>
//   </div>
// `,
// styles: [
//   `
//     .container {
//       margin-top: 20px;
//     }
//     hr {
//       margin: 40px 0;
//       border: 1px solid #ccc;
//     }
//   `,
// ],
