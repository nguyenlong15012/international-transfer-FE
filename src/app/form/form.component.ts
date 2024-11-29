import { CurrencyService } from './../services/currency.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from '../transaction.service';

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
    sender: '',
    receiver: '',
    cif: null,
    amount: 0,
    currency: 'VND',
    date: this.date,
  };

  currencies: string[] = [];
  //currencies: string[] = ['USD', 'EUR', 'GBP', 'VND'];
  constructor(
    private transactionService: TransactionService,
    private currService: CurrencyService
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
    this.transactionService.addTransaction({ ...this.transaction });
    alert('Giao dịch đã được thêm vào lịch sử giao dịch!');

    this.transaction = {
      sender: '',
      receiver: '',
      amount: 0,
      cif: null,
      currency: '',
      date: '',
    };
  }
}
