describe('Testing my first angular js app', function() {
	describe('Testing my first angular js controllers', function() {

		it('should initialize the title in the scope.', function() {
			module('myApp');

			var scope = {};
			var ctrl;

			inject(function($controller) {
				ctrl = $controller('simpleController', { $scope: scope});
			});

			expect(scope.title).toBeDefined();
			expect(scope.title).toBe("Testing angular js applications.");
		});

	});
});