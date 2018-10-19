import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
                              'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 ' +
                                    '(KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11',
                              'Access-Control-Allow-Origin': 'http://localhost:4200',
                              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE' })
};
 
@Injectable()
export class AdsbService {
 
    constructor(private http:HttpClient) {}
 
    getAircraft(latitude: number, longitude: number, range: number) {

        // Overcoming CORS: https://itnext.io/angular-cli-proxy-configuration-4311acec9d6f
        //                  https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/
        // Basically enabling a proxy when starting up: ng serve --proxy-config proxy.conf.json

        let url = "/VirtualRadar/AircraftList.json?lat=" 
            + latitude + "&lng=" + longitude +"&fDstL=0&fDstU=" + range

        return this.http.get(url);
    }
}