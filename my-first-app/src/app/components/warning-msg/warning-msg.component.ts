import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-msg',
  template: "<div class='warningMsg'>Error!</div>",
  styles: [
    `
      .warningMsg {
        background: red;
        font-weight: 700;
        color: white;
        padding: 20px;
        width: 100px;
        text-align: center;
      }
    `,
  ],
})
export class WarningMsgComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
