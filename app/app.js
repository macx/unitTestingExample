'use strict';

angular.module('myapp', ['pascalprecht.translate'])

	// Example service
	.factory('additionService', function() {
		return {
			add: function(x, y) {
				return x + y;
			}
		}
	})

	// Module config
	.config(function($translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix: 'strings-',
			suffix: '.json'
		});
		$translateProvider.preferredLanguage('en');
	})

	// Single controller
	.controller('MyController', function($scope, additionService) {
		$scope.number1 = 1;
		$scope.number2 = 2;

		$scope.findAnswer = function() {
			$scope.answer = additionService.add(
				parseInt($scope.number1),
				parseInt($scope.number2)
			);
		};

		$scope.findAnswer();
	});
