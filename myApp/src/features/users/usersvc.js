/**
 * Created by gdai on 8/6/2015.
 */
"use strict";
class UserSvc {
    constructor($http) {
        this.$http = $http;
    }

    getUsers() {
        return this.$http.get('https://api.github.com/users')
            .then(response=>response.data);
    }
}

UserSvc.$inject = ['$http'];

export {UserSvc};