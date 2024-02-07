import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bts-custom-lib',
  template: `
  <div *ngFor="let idol of bts">
    <li>
      <ul>
        {{idol}}
      </ul>
    </li>
  </div>
  `,
  styles: [
  ]
})
export class BtsCustomLibComponent implements OnInit{
  bts=['Kim Namjoon','Kim SoekJin','Min Yoongi','Jeon Hoesok','Park Jimin','Kim Taehyung','Jeon Jungkook']
  ngOnInit(){

  }

}
