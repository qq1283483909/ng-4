import {Component, OnInit} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(function () {
      $('#gotop').on('click', function () {
        $('html ,body').animate({scrollTop: 0}, 500);
      });
    });
  }

  // public test($event) {
  //   // console.log(scroll());
  // }

  // gotop() {
  //   // console.log(scrollY);
  //   scroll(0, 0);
  // }
}
