import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {RouterModule, Routes} from '@angular/router';
// import {dataService} from '../data.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-yewu',
  templateUrl: './yewu.component.html',
  styleUrls: ['./yewu.component.css']
})

export class YewuComponent implements OnInit {
  op = null;
  id = null;

  constructor(private http: Http, private activatedroute: ActivatedRoute, private router: Router) {
  }

  public yd: any[];
  public rd: number;

  ngOnInit(): void {
    this.yewuData();
  }

  yewuData(): void {
    const dd = this;
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.rd = id;
    // console.log(this.rd);
    this.http.get('../../assets/json/Category.json').subscribe(function (data) {
      dd.yd = JSON.parse(data['_body']);
      console.log(dd.yd);
    }, function () {
    });
  }

  five() {
    // window.location.reload();
  }

  GOlink(id) {
    this.rd = id;
    // console.log(this.rd);
    this.router.navigate(['./yewu/typelist'], {queryParams: {'id': this.rd}});
  }
}
