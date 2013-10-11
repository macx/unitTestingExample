'use strict';

describe('translation system', function() {

	beforeEach(function() {
		myappModule({'FOO':'Bar'});
	});

	it('should translate strings correctly', inject(function($translate) {
		expect($translate('FOO')).toBe('Bar');
	}));
});