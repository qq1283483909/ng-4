import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {mobileValidator, passValidator} from '../form/form';
import {Router} from '@angular/router';

@Component({
  selector: 'app-xiaoyan',
  templateUrl: './xiaoyan.component.html',
  styleUrls: ['./xiaoyan.component.css']
})
export class XiaoyanComponent implements OnInit {
  private myForm: FormGroup;
  private myid: FormGroup;

  constructor(private location: Location, private fb: FormBuilder, private  router: Router) {
  }

  ngOnInit() {
    this.createForm();
    this.createform();
  }


  createForm() {
    this.myForm = this.fb.group({
      // /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/
      // '^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$'
      inputEmail: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(16), Validators.pattern(/^(0|86|17951)?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/)]],
      inputPassword: ['', [Validators.required]]
    });
  }

  createform() {
    this.myid = this.fb.group({
      inputemail: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      inputpassword: ['', [Validators.required]]
    });
  }

  golist() {
    this.location.back();
  }

  postDate() {
    /**
     * valid:是否有效
     * invalid:无效
     * dirty:脏
     * status:状态
     * errors:显示错误
     */
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }

  golou() {
    // window.location.reload();
    // this.router.navigate(['loupanbiao']);
    // this.router.navigate(['loupanbiao'], { preserveQueryParams: false });
    window.location.href = '/loupanbiao';
  }

}
