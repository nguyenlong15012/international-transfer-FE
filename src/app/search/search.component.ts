import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { error } from 'console';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTrans = {
    transactionCode: '',
    sender: '',
    receiver: '',
    cif: '',
    fromDate: '',
    toDate: '',
  };

  searchResults: any[] = [];
  selectAll: boolean = false;

  constructor(private searchService: SearchService) {}

  submitSearch() {
    this.searchService.SearchTrans(this.searchTrans).subscribe(
      (result) => {
        console.log('Dữ liệu nhận từ API:', result);
        this.searchResults = result;
      },
      (error) => {
        console.error('Lỗi khi tìm kiếm: ', error);
      }
    );
  }

  // @Output() onSearch = new EventEmitter<any>();

  // submitSearch() {
  //   this.onSearch.emit(this.searchTrans);
  // }

  resetSearch() {
    this.searchTrans = {
      transactionCode: '',
      sender: '',
      receiver: '',
      cif: '',
      fromDate: '',
      toDate: '',
    };
    this.searchResults = [];
  }

  toggleSelectAll() {
    this.searchResults.forEach((result) => {
      result.selected = this.selectAll;
    });
  }

  toggleSelection(result: any) {
    this.selectAll = this.searchResults.every((r) => r.selected);
  }
}
