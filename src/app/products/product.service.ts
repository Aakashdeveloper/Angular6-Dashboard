import {Injectable} from '@angular/core';
import {IProduct} from './product.model';
import {Http, Response} from '@angular/http';
import { HttpClient }   from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService{

    private _productUrl="https://ngapi4.herokuapp.com/api/getProducts"
    private _movieUrl="https://ngmovies.herokuapp.com/api/getMovies"

    constructor(private _http:Http,
                private _httpClient:HttpClient){}

    getProducts():Observable<IProduct[]>{
        return this._http.get(this._productUrl)
            .map((response:Response) => response.json())
            .catch(this.handleError)
    }

    getMovies():Observable<IProduct[]>{
        return this._http.get(this._movieUrl)
            .map((response:Response) => response.json())
            .catch(this.handleError)
    }
    getUser(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl);
      }

    private handleError(error:Response){
        return Observable.throw(error.json().error)
    }
}



/*
A coding pattern in which a class receives the instance of object it need 
from an external source
rather than creating them itself


function add(a,b){
    return a+b
}

(a,b) =>{return a+b}
*/
