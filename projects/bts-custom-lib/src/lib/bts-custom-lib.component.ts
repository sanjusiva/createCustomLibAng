import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bts-custom-lib',
  template: `
    <div *ngFor="let idol of bts">
      <ul>
        <li>
          {{ idol }}
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class BtsCustomLibComponent implements OnInit {
  bts = [
    'Kim Namjoon',
    'Kim SoekJin',
    'Min Yoongi',
    'Jeon Hoesok',
    'Park Jimin',
    'Kim Taehyung',
    'Jeon Jungkook',
  ];
  ngOnInit() {}
}
