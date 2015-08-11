/**
 * Created by gdai on 8/6/2015.
 */
"use strict";
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import * as UserModule from './features/users/usermodule';

angular.module('myApp', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/list');

            $stateProvider
                .state('user-list', {
                    url:"/list",
                    templateUrl: "/myApp/src/features/users/user-list.html",
                    controller: UserModule.ctrl,
                    controllerAs: "vm"
                })
                .state('user-detail', {
                    url: "/detail",
                    templateUrl: "/myApp/src/features/users/user-detail.html",
                    controller: UserModule.ctrl,
                    controllerAs: 'userDetail'
                });
        }])
    .service('userSvc', UserModule.svc)
    .controller('userCtrl', UserModule.ctrl);
