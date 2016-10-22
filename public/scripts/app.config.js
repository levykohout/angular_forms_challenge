angular.module('routeApp').config(function($routeProvider,$locationProvider){
    $routeProvider.when('/frodo', {  //browser
        templateUrl:'views/frodo.html'  //file
    }).when('/indiana-jones', {
        templateUrl:'views/indiana-jones.html'
    }).when('/storm',{
        templateUrl:'views/storm.html'
    }),
    //let us use normal looking links.Remember to use base tag in html to use this.
    $locationProvider.html5Mode(true);

});
