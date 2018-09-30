import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'customers',
    templateUrl: './customers.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../tables/table.css']
})

export class Customers {
  
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company'}
  ];

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/company.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  constructor(private router: Router) {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = true; }, 5000);
    });
  }

}
