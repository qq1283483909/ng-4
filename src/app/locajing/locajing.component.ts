import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-locajing',
  templateUrl: './locajing.component.html',
  styleUrls: ['./locajing.component.css']
})
export class LocajingComponent implements OnInit {
  public i;
  public lt;
  public c;
  constructor(private http: Http) {
  }

  ngOnInit() {
    const hd = this
    this.http.get('../../assets/json/c2-1.json').subscribe(function (data) {
      hd.lt = JSON.parse(data['_body']);
      hd.i = hd.lt.Data.BuildingTable[0].BdcUnits;
      hd.c = hd.i.reverse().filter(function (item, index) {
        const _index = hd.i.findIndex(function (_item) {
          return item.FloorNo == _item.FloorNo;
        });
        // console.log(item);
        // console.log(index);
        // console.log(item.FloorNo);
        return index == _index;
      });
      hd.c.reverse();
      // console.log(hd.c);
      hd.i.reverse();
    });
  }

}
