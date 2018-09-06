import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  var app = angular.module('starter', ['ionic'])
  app.controller('LoginCtrl', function($scope, $state, $http) {
    $scope.person = {
        user: "testapis@tuten.cl",
        password: "1234",
        app: 'APP_BCK'
    }
  updateData = function(person) {
    const user = $scope.person.user;
    const url = 'https://dev.tuten.cl:443/TutenREST/rest/user/'
    const headers = {
        app: 'APP_BCK',
        password: $scope.person.password
    }
    $http({
        headers: headers,
        method: 'PUT',
        url: 'https://dev.tuten.cl:443/TutenREST/rest/user/' + user,
        data: headers,
    }).then(function successCallback(response) {
        const headers = {
            adminemail: 'testapis@tuten.cl',
            app: 'APP_BCK',
            token: response.data.sessionTokenBck
        }
        $http({
            headers: headers,
            method: 'GET',
            url: 'https://dev.tuten.cl:443/TutenREST/rest/user/miguel@40tuten.cl/bookings',
            data: headers,
        }).then(function successCallback(response) {
            console.log(response)
            const data = [{
                bookingId: 101,
                firstName: 'Pedro',
                LastName: 'Perez',
                bookingTime: '28/08/2018',
                streetAddress: 'Barquisimeto',
                bookingPrice: 100
            }, {
                bookingId: 1012,
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
                bookingId: 101,
                firstName: 'Josef',
                LastName: 'Martínez',
                bookingTime: '28/08/2018',
                streetAddress: 'Atlanta',
                bookingPrice: 300
            }];
            console.log(data)
        }, function errorCallback(response) {
            console.log(response)
            alert("todo mal")
        });
    }, function errorCallback(response) {
        console.log(response)
        alert("todo mal")
    });
};

}
