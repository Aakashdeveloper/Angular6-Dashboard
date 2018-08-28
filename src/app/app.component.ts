import {Component} from '@angular/core';

@Component({
    selector:'app-comp',
    styleUrls:['./app.component.css'],
    template:`<div>
                <nav class="navbar navbar-inverse">
                  <div class="container-fluid">
                    <a class="navbar-brand">
                      <img src="../assets/logo.png" />
                    </a>
                    <ul class="nav navbar-nav">
                      <li><a></a></li>
                     
                    </ul>
                  </div>
                </nav>
                <div>
                  <router-outlet></router-outlet>
                </div>
              </div>`
})

export class AppComponent{

}