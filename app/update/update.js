import updatectrl from './updatectrl';

angular.module('myApp.update', ['ngRoute' , 'ngStorage'])
.config(function($routeProvider) {
  $routeProvider.when('/updateobj/:id',{
		templateUrl:'./update/updateobj.html',
		controller:'updatectrl',
		controllerAs:'uc'
	})
  .when('/insert',{
  templateUrl:'./update/updateobj.html',
  controller:'updatectrl',
  controllerAs:'uc'
});

})
.controller('updatectrl', updatectrl);
