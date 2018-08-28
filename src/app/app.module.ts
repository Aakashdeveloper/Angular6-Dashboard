import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
    MatSortModule, MatTableModule } from "@angular/material";
  
  

import { AppComponent } from './app.component';
import { CarComponent } from "./car.component";
import { ProductComponent } from "./products/products.component";
import { ProductUpperPipe } from "./products/product-upper.pipe";
import { ProductFilter } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { Notfound } from "./shared/notFound.component";
import { ProductDetail } from "./products/product-detail.component";
import { OrderComponent } from "./orders/order.component";
import { HomeComponent } from "./home/home.component";
import { dashBoardComponent } from './dashboard/dashboard.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TableOverviewExample } from './dashboard1/dashboard1.component';
import { angChart } from './chart/chart.component';


@NgModule({
    //We decl modules here
    imports:[
        BrowserModule,
        CdkTableModule,
        HttpClientModule,
        MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
    MatSortModule, MatTableModule,
        BrowserAnimationsModule,
        FormsModule,
        
        MatCheckboxModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'dashboard',component:dashBoardComponent},
            {path:'dashboard1',component:TableOverviewExample},
            {path:'products', component:ProductComponent},
            {path:'products/:id',component:ProductDetail},
            {path:'orders', component:OrderComponent},
            {path:'home', component:HomeComponent},
            {path:'',redirectTo:'dashboard1', pathMatch:'full'},
            {path:'**', component:Notfound}
        ])
    ],
    //We will decl component & pipe
    declarations:[
        AppComponent,
        dashBoardComponent,
        TableOverviewExample,
        CarComponent,
        ProductComponent,
        ProductUpperPipe,
        ProductFilter,
        StarComponent,
        Notfound,
        ProductDetail,
        OrderComponent,
        HomeComponent,
        angChart

    ],
    //Conation only main component
    bootstrap:[
        AppComponent
    ],
    //Service decl here
    providers:[
        ProductService
    ]
})

export class AppModule{

}