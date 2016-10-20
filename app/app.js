import direct1 from './directive/direct1';
import direct2 from './directive/direct2';
import direct3 from './directive/direct3';
import factoryDetails from './services/factDetails';
import './login/login';
import './detail/detail';
import './update/update';

angular.module('myApp', ['ngRoute' , 'ngStorage' , 'myApp.login' , 'myApp.update' , 'myApp.detail'])
.config(function($routeProvider) {
		$routeProvider.when('/newdetail',{
		redirectTo : '/detail'
	})

  .otherwise('/');

})


  .service('factDetails',factoryDetails)
 	.directive('dir1', () => new direct1)
	.directive('dir2', () => new direct2)
  .directive('dir3', () => new direct3);
