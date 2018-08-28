    import { Component, OnInit, ViewChild } from '@angular/core';
    import {ProductService} from '../products/product.service';
    import * as Chart from 'chart.js';
    import { Observable } from 'rxjs/Observable';
    import 'rxjs/add/observable/of';
    import {DataSource} from '@angular/cdk/collections';
    import { IProduct } from '../products/product.model';
    import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
    
    @Component({
        styleUrls: ['dashboard1.component.css'],
        templateUrl: 'dashboard1.component.html'
    })
    export class TableOverviewExample implements OnInit {
        barChart:any;
        doughnutChart:any;
        PieChart:any;
        barData;
        lineChart:any;
        lineChart1:any;
        labelArray:any[]=[];
        dataArray:any[]=[];
        showMonday=false;
        showThrusday=false;
        showTableMonday=false;
        showChart=true;
    displayedColumns = ['id', 'email', 'jaarlijks_inkomen', 'gem_hypotheek_waarde', 'button'];
    dataSource: MatTableDataSource<UserData>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

      constructor(private userService: ProductService,
                     private _movieData:ProductService) {

                        const users: UserData[] = [];
                        for (let i = 1; i <= 12; i++) { users.push(createNewUser(i)); }
                    
                        // Assign the data to the data source for the table to render
                        this.dataSource = new MatTableDataSource(users);
                      }
      
     
    
      /**
       * Set the paginator and sort after the view init since this component will
       * be able to query its view for the initialized paginator and sort.
       **/
      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    
      applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
      }
    onMon():void{
        this.showMonday = !this.showMonday
        this.showThrusday = false
    }
    onThru():void{
        this.showThrusday = !this.showThrusday
        this.showMonday = false
    }
    highMonday():void{
        this.showTableMonday = !this.showTableMonday;
        this.showChart=false
    }
    onCancel():void{
        this.showMonday=false;
        this.showTableMonday=false
    }
    onCancel1():void{
        this.showThrusday=false;
        this.showTableMonday=false
    }
    
      ngOnInit() {
          
            this._movieData.getMovies()
            .subscribe((data) =>{ this.barData = data
                for(var i=0;i<this.barData.length;i++){
                    this.labelArray.push(this.barData[i].name)
                    this.dataArray.push(this.barData[i].rate)
                    this.barChart = new Chart('barChart',{
                        type:'bar',
                    data:{
                        labels:["","","","",""],
                        datasets:[{
                            label:'Aantal verzoeken',
                            data:[28,18,15,23,19],
                            backgroundColor:[
                                'rgb(1, 156, 222)',
                                'rgb(1, 156, 222)',
                                'rgb(1, 156, 222)',
                                'rgb(1, 156, 222)',
                                'rgb(1, 156, 222)',
                            ],
                            borderColor:[
                                'gray','gray','gray','gray','gray'
                            ],
                            borderWidth:1
                        }]
            
                    },
                    options:{
                        title:{
                            text:"",
                            display:true
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                    });

                    this.PieChart = new Chart('pieChart',{
                        type:'pie',
                    data:{
                        labels:this.labelArray,
                        datasets:[{
                            label:'Ratio of query',
                            data:this.dataArray,
                            backgroundColor:[
                                'rgb(176, 118, 231)',
                                'rgb(236, 85, 123)',
                                'rgb(23, 235, 164)',
                                'rgb(144, 194, 110)', 
                                'rgb(176, 118, 231)',
                                'rgb(236, 85, 123)',
                                'rgb(23, 235, 164)',
                                'rgb(144, 194, 110)'
                            ],
                            borderWidth:1
                        }]
            
                    },
                    options:{
                        title:{
                            text:"Pie Chart",
                            display:true
                        },
                        responsive:false,
                        display:true
                    }
                    });
                    this.lineChart = new Chart('lineChart',{
                        type: 'line',
                        data: {
                            labels: ["Aug","Sep","Okt","Nov","Dec","Jan","Feb","Mar","Apr","May"],
                            datasets: [ 
                            { 
                                data: [168,270,178,400,203,276,408,501,605,434],
                                label: "Aanvr. gestart",
                                borderColor: "#3e95cd",
                                fill: false
                            }, { 
                                data: [40,120,64,179,189,38,74,290,408,384],
                                label: "Aanvr. afgerond",
                                borderColor: "#8e5ea2",
                                fill: false
                            }
                            ]
                        },
                        options: {
                            title: {
                            display: true,
                            text: ''
                            }
                        }
                        })
                        this.lineChart1 = new Chart('lineChart1',{
                            type: 'line',
                            data: {
                                labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2010],
                                datasets: [{ 
                                    data: [86,114,106,106,107,111,133,221,783,2478],
                                    label: "Africa",
                                    borderColor: "#3e95cd",
                                    fill: false
                                }, { 
                                    data: [282,350,411,502,635,809,947,1402,3700,5267],
                                    label: "Asia",
                                    borderColor: "#8e5ea2",
                                    fill: false
                                }, { 
                                    data: [168,170,178,190,203,276,408,547,675,734],
                                    label: "Europe",
                                    borderColor: "#3cba9f",
                                    fill: false
                                }, { 
                                    data: [40,20,10,16,24,38,74,167,508,784],
                                    label: "Latin America",
                                    borderColor: "#e8c3b9",
                                    fill: false
                                }, { 
                                    data: [6,3,2,2,7,26,82,172,312,433],
                                    label: "North America",
                                    borderColor: "#c45850",
                                    fill: false
                                }
                                ]
                            },
                            options: {
                                title: {
                                display: true,
                                text: 'World population per region (in millions)'
                                }
                            }
                            })
                }
            })
      }

      

    
    }
    
    export class UserDataSource extends DataSource<IProduct> {
        filter: string;
        sort: MatSort;
        paginator: MatPaginator;
       
        
    
      constructor(private userService: ProductService) {
        super();
      }
      connect(): Observable<IProduct[]> {
        return this.userService.getUser();
      }
      disconnect() {}
    }

/** Builds and returns a new User.**/
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    email: name,
    jaarlijks_inkomen: Math.round(Math.random() * 100000).toString(),
    gem_hypotheek_waarde: Math.round(Math.random() * 1000).toString(),
    button:''
  };

}

/** Constants used to fill up our data base.**/
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  email: string;
  jaarlijks_inkomen: string;
  gem_hypotheek_waarde: string;
  button:string
}