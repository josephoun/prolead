import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'tables',
    templateUrl: './tables.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./table.css']
})

export class TablesPage implements OnInit {
    ngOnInit() {
    }

    rows = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;

    columns = [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company', sortable: false }
    ];

    constructor() {
      this.fetch((data) => {
        this.rows = data;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
      });
    }

    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', 'assets/data/company.json');

      req.onload = () => {
        cb(JSON.parse(req.response));
      };

      req.send();
    }
}

