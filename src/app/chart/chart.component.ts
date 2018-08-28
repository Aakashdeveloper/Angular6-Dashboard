import {Component,OnInit, AfterViewInit} from '@angular/core';
import * as Chart from 'chart.js';
import {ProductService} from '../products/product.service'

@Component({
    selector:'ang-chart',
    templateUrl:'./chart.component.html'
})

export class angChart {
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

    constructor(private _movieData:ProductService){}

    onMon():void{
        this.showMonday = !this.showMonday
        this.showThrusday = false
    }
    onThru():void{
        this.showThrusday = !this.showThrusday
        this.showMonday = false
    }
    highMonday():void{
        alert("hiii")
        this.showTableMonday = !this.showTableMonday
    }
    ngOnInit():void{
       
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
                            label:'Number of Query',
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
                            text:"BarChart",
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
                            labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
                            datasets: [{ 
                                data: {
                                    labels: ["Jan",1600,1700,1750,1800,1850,1900,1950,1999,2010],
                                    datasets: [{ 
                                        data: [86,114,106,106,107,111,133,221,783,2478],
                                        label: "Total",
                                        borderColor: "#3e95cd",
                                        fill: false
                                    }, { 
                                        data: [282,350,411,502,635,809,947,1402,3700,5267],
                                        label: "DropOff",
                                        borderColor: "#8e5ea2",
                                        fill: false
                                    }, { 
                                        data: [168,170,178,190,203,276,408,547,675,734],
                                        label: "Applied",
                                        borderColor: "#3cba9f",
                                        fill: false
                                    }, { 
                                        data: [40,20,10,16,24,38,74,167,508,784],
                                        label: "Enquired",
                                        borderColor: "#e8c3b9",
                                        fill: false
                                    }
                                    ]
                                }
                            }]
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

/*
people arrive vs conversion*/
