import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    //   $(function () {
    //     $('#a1').on('click', function () {
    //       console.log('aaaaaa');
    //     });
    //   });
    // }


    // $(function () {
    //   $(document).on('click', '[toggle]', function () {
    //     const way = $(this).attr('way');
    //     const id = $(this).attr('toggle');
    //     $('#' + id).addClass('sb-active');
    //     if (way === 'left') {
    //       $('#' + id).css({'transform': 'translate(300px)'});
    //     } else {
    //       $('#' + id).css({'transform': 'translate(-300px)'});
    //     }
    //     //  $(this).toggleClass('sb-active').css({ 'transform': 'translate(300px)' });
    //   });
    //   $(document).on('focusout', '[toggle]', function () {
    //     const id = $(this).attr('toggle');
    //     setTimeout(function () {
    //       console.log($(document.activeElement));
    //       if ($('#' + id).is(':focus')) {
    //         return false;
    //       }
    //       $('#' + id).removeClass('sb-active').css('transform', '');
    //     }, 2);
    //
    //   });
    //   $(document).on('focusout', 'ms-slidebar', function () {
    //     $(this).removeClass('sb-active').css('transform', '');
    //   });
    // });

    $(function () {
      $('#ul1 li').on('click', function () {
        $(this).css({'border-bottom': '#03A9F4 solid 3px', 'margin-bottom': '-3px'});
        $(this).siblings().css({'border-bottom': '', 'margin-bottom': ''});
      });
    });

  }
}
