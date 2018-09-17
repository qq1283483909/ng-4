import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import * as $ from 'jquery';
// import {dataService} from './data.service';
import {CommonModule} from '@angular/common';
import {LocalStorage} from './local.storage';
import {ReactiveFormsModule} from '@angular/forms';
// import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
// import {InMemoryDataService} from './in-memory-data.service';



import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {YewuComponent} from './yewu/yewu.component';
import {TypelistComponent} from './typelist/typelist.component';
import {from} from 'rxjs';
import {XiaoyanComponent} from './xiaoyan/xiaoyan.component';
import {LoupanbiaoComponent} from './loupanbiao/loupanbiao.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FootComponent} from './foot/foot.component';
import {ShouceComponent} from './shouce/shouce.component';
import {HomeComponent} from './home/home.component';
import {PersonComponent} from './person/person.component';
import {FormComponent} from './form/form.component';
import {LoginComponent} from './login/login.component';
import {LoafterComponent} from './loafter/loafter.component';
import {LoctionComponent} from './loction/loction.component';
import {LocajingComponent} from './locajing/locajing.component';

// import {MyFilterPiple} from './typelist/MyFilterPiple';

@NgModule({
  declarations: [
    AppComponent,
    YewuComponent,
    TypelistComponent,
    XiaoyanComponent,
    LoupanbiaoComponent,
    NavbarComponent,
    FootComponent,
    ShouceComponent,
    HomeComponent,
    PersonComponent,
    FormComponent,
    LoginComponent,
    LoafterComponent,
    LoctionComponent,
    LocajingComponent,
    // MyFilterPiple
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule {
}
