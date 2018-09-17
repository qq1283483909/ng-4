import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import * as  $ from 'jquery';

@Component({
  selector: 'app-loction',
  templateUrl: './loction.component.html',
  styleUrls: ['./loction.component.css']
})
export class LoctionComponent implements OnInit {

  public lt: any;
  public DATA;
  public he;
  public id;
  public c;
  public c0;
  public c1;
  public c2;
  public c3;
  public i;
  public lo;
  public idobj;
  public idobj1;
  public idobj2;
  public idobj3;
  public idobj0;
  public arr;

  // public a: any[];


  constructor(private http: Http, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.id == '南宁市西乡塘区高新大道55号南宁安吉万达广场10栋'
    this.loudata();
    const da = this;
    this.route.queryParams.subscribe(function (Loction) {
      // this.Loction = '南宁市西乡塘区高新大道55号南宁安吉万达广场10栋'
      // console.log(Loction);
      da.id = Loction.Loction;
      console.log(da.id);
      return da.id;
    });
    // for (const i = 0; i < da.id.length; i++) {
    //   da.idobj = i;
    // }

    // da.id[this.idobj] = da.DATA.[this.idobj];
    if (da.id == '南宁市西乡塘区高新大道55号南宁安吉万达广场10栋') {
      da.idobj = 0;
    } else if (da.id == '南宁市西乡塘区高新大道55号南宁安吉万达广场7栋') {
      da.idobj = 1;
    } else if (da.id == '南宁市西乡塘区高新大道55号南宁安吉万达广场8栋') {
      da.idobj = 2;
    } else if (da.id == '南宁市西乡塘区高新大道55号南宁安吉万达广场9栋') {
      da.idobj = 3;
    }

    // if (da.DATA[da.idobj] == da.id) {
    //   return this.idobj;
    // }

    // $(function () {
    //   console.log(0)
    //   if ($('.he').length < 100) {
    //     console.log(1)
    //     $('.he').css('display', 'block');
    //   } else {
    //     console.log(2)
    //     $('.he').css('display', 'none');
    //   }
    // });
  }

  loudata() {
    // const j = Math.random() * 10;
    const hd = this;
    this.http.get('../../assets/json/c2-1.json').subscribe(function (data) {
      hd.lt = JSON.parse(data['_body']);
      hd.DATA = hd.lt.Data.BuildingTable;
      console.log(hd.DATA);

      // hd.i = hd.lt.Data.BuildingTable.Location;
      // console.log(hd.i);
      hd.he = hd.lt.Data.BuildingTable[hd.idobj].BdcUnits;
      hd.idobj0 = hd.lt.Data.BuildingTable[0].BdcUnits;
      hd.idobj1 = hd.lt.Data.BuildingTable[1].BdcUnits;
      hd.idobj2 = hd.lt.Data.BuildingTable[2].BdcUnits;
      hd.idobj3 = hd.lt.Data.BuildingTable[3].BdcUnits;

      hd.c0 = hd.idobj0.reverse().filter(function (item, index) {
        const _index = hd.idobj0.findIndex(function (_item) {
          return item.FloorNo == _item.FloorNo;
        });
        // console.log(item);
        // console.log(index);
        // console.log(item.FloorNo);
        return index == _index;
      });
      hd.c0.reverse();
      hd.c3 = hd.idobj3.reverse().filter(function (item, index) {
        const _index = hd.idobj3.findIndex(function (_item) {
          return item.FloorNo == _item.FloorNo;
        });
        // console.log(item);
        // console.log(index);
        // console.log(item.FloorNo);
        return index == _index;
      });
      hd.c3.reverse();
      hd.c1 = hd.idobj1.reverse().filter(function (item, index) {
        const _index = hd.idobj1.findIndex(function (_item) {
          return item.FloorNo == _item.FloorNo;
        });
        // console.log(item);
        // console.log(index);
        // console.log(item.FloorNo);
        return index == _index;
      });
      hd.c1.reverse();
      hd.c2 = hd.idobj2.reverse().filter(function (item, index) {
        const _index = hd.idobj2.findIndex(function (_item) {
          return item.FloorNo == _item.FloorNo;
        });
        // console.log(item);
        // console.log(index);
        // console.log(item.FloorNo);
        return index == _index;
      });
      hd.c2.reverse();
      hd.arr = [hd.c0, hd.c1, hd.c2, hd.c3];
      console.log(hd.arr);
      console.log(hd.arr[0]);
      console.log(hd.i);
      // hd.i = hd.lt.Data.BuildingTable.BdcUnits
      // hd.i = hd.lt.Data.BuildingTable[0].BdcUnits;
      // console.log(hd.he);
      hd.lo = hd.lt.Data.BuildingTable;
      // hd.he.filter(function (ser) {
      //   hd.idobj = ser.FloorNo;
      //   console.log(hd.idobj);
      //   return hd.idobj;
      // });
      hd.c = hd.he.reverse().filter(function (item, index) {
        const _index = hd.he.findIndex(function (_item) {
          return item.FloorNo == _item.FloorNo;
        });
        // console.log(item);
        // console.log(index);
        // console.log(item.FloorNo);
        return index == _index;
      });
      // hd.c.reverse();
      console.log(hd.c);
      // hd.he.reverse();
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
}
