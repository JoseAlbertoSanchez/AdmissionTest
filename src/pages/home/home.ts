import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DatauserPage } from '../datauser/datauser'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;
  app: string;
  url: string;
  bookings

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.username = "testapis@tuten.cl";
    this.password = "1234";
  }

  login() {
    this.url = 'https://dev.tuten.cl:443/TutenREST/rest/user/' + this.username;
    let headers = {
      app: 'APP_BCK',
      password: this.password
    }
    let body = 1;
    this.http.put(this.url, body, { headers: headers })
      .subscribe(
        (data) => {
          let headersBookings = {
            adminemail: 'testapis@tuten.cl',
            app: 'APP_BCK',
            token: data.sessionTokenBck
          }
          this.http.get('https://dev.tuten.cl:443/TutenREST/rest/user/miguel@40tuten.cl/bookings?current=true', { headers: headersBookings })
            .subscribe(
              (data) => {
                console.log(data)
                const dataBookings = [{
                  bookingId: 101,
                  firstName: 'Pedro',
                  LastName: 'Perez',
                  bookingTime: '28/08/2018',
                  streetAddress: 'Barquisimeto',
                  bookingPrice: 100
                }, {
                  bookingId: 102,
                  firstName: 'Andrés',
                  LastName: 'Suárez',
                  bookingTime: '28/08/2018',
                  streetAddress: 'Mérida',
                  bookingPrice: 150
                }, {
                  bookingId: 103,
                  firstName: 'Francisco',
                  LastName: 'Alarcon',
                  bookingTime: '28/08/2018',
                  streetAddress: 'Madrid',
                  bookingPrice: 200
                }, {
                  bookingId: 201,
                  firstName: 'Alexandra',
                  LastName: 'Morgan',
                  bookingTime: '28/08/2018',
                  streetAddress: 'Miami',
                  bookingPrice: 230
                }, {
                  bookingId: 202,
                  firstName: 'Marta',
                  LastName: 'Paredes',
                  bookingTime: '28/08/2018',
                  streetAddress: 'Brasil',
                  bookingPrice: 250
                }, {
                  bookingId: 203,
                  firstName: 'Josef',
                  LastName: 'Martínez',
                  bookingTime: '28/08/2018',
                  streetAddress: 'Atlanta',
                  bookingPrice: 300
                }];
                this.navCtrl.push(DatauserPage, {
                  param: dataBookings
                });
              },
              (error) => (alert("Mensaje de error: " + error.message))
            )
        },
        (error) => (alert("Mensaje de error: " + error.message))
      )
  }

}
