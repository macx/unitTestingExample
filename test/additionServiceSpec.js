'use strict';

describe('additionService', function() {

	beforeEach(myappModule);

	it('should add numbers correctly', inject(function(additionService) {
		expect(additionService.add(1,1)).toBe(2);
	}));
});