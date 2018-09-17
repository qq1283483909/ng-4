import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import * as $ from 'jquery';
// import {Observable} from "rxjs/internal/Observable";
// import 'rxjs/Rx';

@Component({
  selector: 'app-loupanbiao',
  templateUrl: './loupanbiao.component.html',
  styleUrls: ['./loupanbiao.component.css']
})
export class LoupanbiaoComponent implements OnInit {

  public lt: any;
  public DATA;
  public he;
  public id;
  public c;
  public idobj: any;
  public loction;

  constructor(private http: Http, private  route: Router) {
  }

  ngOnInit() {
    this.loudata();
    // $(function () {
    //   $('.bl').on('click', function () {
    //     $(this).css('background-color', 'red');
    //     // $(this).siblings().css('background-color', 'rgba(0,0,0,.1)');
    //   });
    // });
    //   if (this.){
    //   //
    //   //   }
  }

  loudata() {
    const hd = this;
    this.http.get('../../assets/json/c2-1.json').subscribe(function (data) {
      hd.lt = JSON.parse(data['_body']);
      hd.DATA = hd.lt.Data.BuildingTable;
      // hd.he.filter(function (ser) {
      //   hd.idobj = ser.FloorNo;
      //   console.log(hd.idobj);
      //   return hd.idobj;
      // });


      // hd.c = hd.he.reverse().filter(function (item, index) {
      //   const _index = hd.he.findIndex(function (_item) {
      //     return item.FloorNo == _item.FloorNo;
      //   });
      //   // console.log(item);
      //   // console.log(index);
      //   // console.log(item.FloorNo);
      //   return index == _index;
      // });
      // hd.c.reverse();
      // console.log(hd.c);
      // hd.idobj = hd.he.FlooaNo;
      // console.log(hd.idobj);
      // console.log(hd.idobj);
      // console.log(hd.he);
      // console.log(hd.lt);
      // console.log(hd.DATA);
      // console.log(1);
    }, function () {

    });
  }

  dong(Location) {
    this.loction = Location;
    console.log(this.loction);
    this.route.navigate(['./loupanbiao/loction'], {queryParams: {'Loction': this.loction}});
    // window.location.reload();

  }


  // loudata() {
  //   const hd = this;
  //   this.http.get('../../assets/json/c2-1.json').map(res => res.json()).subscribe(function () {
  //
  //   }, function () {
  //
  //   });
  // }
}
