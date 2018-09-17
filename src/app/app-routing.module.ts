import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// 办理业务
import {YewuComponent} from './yewu/yewu.component';
// 显示业务
import {TypelistComponent} from './typelist/typelist.component';
import {from} from 'rxjs';
// 手册
import {ShouceComponent} from './shouce/shouce.component';
// 首页
import {HomeComponent} from './home/home.component';
// 校验
import {XiaoyanComponent} from './xiaoyan/xiaoyan.component';
// 楼盘表
import {LoupanbiaoComponent} from './loupanbiao/loupanbiao.component';
// 个人中心
import {PersonComponent} from './person/person.component';
// 登录界面
import {LoginComponent} from './login/login.component';
// 登录成功后界面
import {LoafterComponent} from './loafter/loafter.component';
// 楼盘表
import {LoctionComponent} from './loction/loction.component';
import {LocajingComponent} from './locajing/locajing.component';


// const appChildRoutes: Routes = [
//   {path: 'typelist', component: TypelistComponent},
//   {path: '', redirectTo: '/typelist'}
// ];
// {path: 'yewu', loadChildren: './yewu/yewu.module#yewuModule'},
// {path: 'yewu', component: YewuComponent, children: appChildRoutes},
// , {path: 'typelist', component: TypelistComponent}

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'loafter', component: LoafterComponent},
      {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ]
  },
  {path: 'person', component: PersonComponent},
  {
    path: 'yewu', component: YewuComponent, children: [
      {path: '', redirectTo: 'shouce', pathMatch: 'full'},
      {path: 'typelist', component: TypelistComponent},
      {path: 'shouce', component: ShouceComponent},
      {path: '**', redirectTo: 'shouce', pathMatch: 'full'}
    ]
  },
  {path: 'xiaoyan', component: XiaoyanComponent},
  {
    path: 'loupanbiao', component: LoupanbiaoComponent, children: [
      {path: '', redirectTo: 'locajing', pathMatch: 'full'},
      {path: '', component: LocajingComponent},
      {path: 'loction', component: LoctionComponent},
      {path: '**', component: LocajingComponent}
    ]
  }

];


// const appRoutes: Routes = [
//   {path: '', redirectTo: 'yewu', pathMatch: 'full'},
//   {path: 'yewu', loadChildren: './yewu/yewu.module#YewuModule'}
//   // {path: 'yewu', component: YewuComponent}
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
    // RouterModule.forChild()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // navigate(commands: any[], extras?: NavigationExtras): Promise<boolean>


}
