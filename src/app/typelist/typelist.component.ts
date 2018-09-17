import {Component, OnInit, Pipe, Input, Output} from '@angular/core';
import {Http} from '@angular/http';
import {Link} from '../data';
import {LocalStorage} from '../local.storage';
import {YewuComponent} from '../yewu/yewu.component';
import {ActivatedRoute} from '@angular/router';


// import {DataService} from '../data.service';

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrls: ['./typelist.component.css']
})
export class TypelistComponent implements OnInit {
  // @Input() rd : YewuComponent;
  // @Output() id: YewuComponent;
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private ls: LocalStorage
  ) {
  }

  // public LINK: Link[];
  public Li: any[];
  public op: any;

  ngOnInit(): void {
    this.ListData();
  }

  // get(): void {
  //   this.cache= this.ls.getObject('logincache');
  // }

  ListData(): void {
    const da = this;
    // const id = +this.route.snapshot.paramMap.get('id'); //直接获取上层数据id
    // this.op = null;
    // this.op = id;
    // console.log(this.op);
    this.route.queryParams.subscribe(function (id) {
      // console.log(id);
      da.op = id.id;
    });
    this.http.get('../../assets/json/CateList.json').subscribe(function (data) {
      da.Li = JSON.parse(data['_body']);
      console.log(da.Li);

    }, function () {

    });
    // return da.Li;
  }


}

