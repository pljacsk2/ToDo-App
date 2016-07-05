import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouter, $locationProvider) =>{
	$urlRouterProvider.other('/');

	$stateProvider
		// main url 
		.state('todos'){
			url: '/',
			template: require('todos/todos.html')
		}
		// example of ng routing. not used in application
		.state('about',{
			url: '/about',
			template: require('about/about.html')
		})
	// cleans url routing no hash marks
	$locationProvider.html5Mode(true);

});
export default app;

