'use strict';

describe('additionService', function() {

	beforeEach(function() {
		module('myapp');
	});

	it('should add numbers correctly', inject(function(additionService) {
		expect(additionService.add(1,1)).toBe(2);
	}));
});