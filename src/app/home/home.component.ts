import {Component, OnInit, Directive, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {window} from 'rxjs/operators';

// @Directive({
//   selector: '[onScroll]',
// })
//
// export class OnScrollDirective {
//   @HostListener('scroll', ['$event']) public onscroll = ($event) => {
//     console.log(scroll());
//   };
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit() {

  }


  // gotop() {
  //   this.router.navigate(['home'], {fragment: 'top'});
  // }
}
