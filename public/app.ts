/// reference path="_reference.ts" />

var mainModuleName = "app";
var app = angular.module(mainModuleName, []);

//wait until the document loads
angular.element(document).ready(function(){
	// manually boostrap angular 
	angular.bootstrap(document, [mainModuleName]);
});

console.log("Angular added to app");
