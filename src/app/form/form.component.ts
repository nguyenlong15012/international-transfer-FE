import { CurrencyService } from './../services/currency.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from '../transaction.service';
import { TransService } from '../services/TransTest/trans.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  date: string = new Date().toISOString().split('T')[0];
  transaction = {
    transactionCode: '',
    sender: '',
    receiver: '',
    cif: null,
    amount: 0,
    currency: 'VND',
    holiday: this.date,
  };

  currencies: string[] = [];

  timestamp = new Date().valueOf();

  transactionCode = `HT.${(new Date().getMonth() + 1)
    .toString()
    .padStart(2, '0')}${new Date()
    .getDate()
    .toString()
    .padStart(2, '0')}.${JSON.stringify(this.timestamp).slice(-10)}`;

  constructor(
    private transactionService: TransactionService,
    private currService: CurrencyService,
    private transService: TransService
  ) {}

  ngOnInit(): void {
    this.currService.getCurrencies().subscribe(
      (data) => {
        console.log('Dữ liệu nhận từ API:', data); // Log dữ liệu API trả về
        this.currencies = data
          .filter((currency) => currency.status) // Lọc các currency có status = true
          .map((currency) => currency.code); // Lấy code của currency
        console.log('Danh sách currencies:', this.currencies); // Log danh sách sau khi xử lý
      },
      (error) => {
        console.error('Lỗi khi gọi API:', error); // Log lỗi nếu xảy ra
      }
    );
  }

  submitTransaction() {
    this.transaction.transactionCode = this.transactionCode;
    this.transService.SaveTransaction(this.transaction).subscribe(
      (response) => {
        console.log('Response from backend:', response);
      },
      (error) => {
        console.error('Error from backend:', error);
      }
    );

    this.transactionService.addTransaction({ ...this.transaction });
    console.log('Giao dịch đã được thêm vào lịch sử giao dịch!');

    this.resetTransaction();
  }

  resetTransaction() {
    this.transaction = {
      transactionCode: '',
      sender: '',
      receiver: '',
      amount: 0,
      cif: null,
      currency: '',
      holiday: '',
    };
  }
}
