'use strict';

describe('translation system', function() {

	beforeEach(function() {
		module('myapp', function($translateProvider) {
			$translateProvider.translations('en', {
				'FOO': 'Bar'
			});
			$translateProvider.preferredLanguage('en');
		})
	});

	it('should translate strings correctly', inject(function($translate) {
		expect($translate('FOO')).toBe('Bar');
	}));
});