describe('Testing my first angular js app', function() {

	beforeEach(module('myApp'));

	describe('Testing my first angular js controllers', function() {
		var scope = {};
		var ctrl;
		
		beforeEach(inject(function($controller) {
			ctrl = $controller('simpleController', { $scope: scope});
		}))

		it('should initialize the title in the scope.', function() {
			expect(scope.title).toBeDefined();
			expect(scope.title).toBe("Trip application.");
		});

		it('should add 2 destinations to the destination list', function() {
			expect(scope.destination).toBeDefined();
			expect(scope.destination.length).toBe(0);

			scope.newDestination = {
				city : "London",
				country: "England"
			}

			scope.addDestination();

			expect(scope.destination.length).toBe(1);
			expect(scope.destination[0].city).toBe("London");
			expect(scope.destination[0].country).toBe("England");

			scope.newDestination = {
				city : "Bangalore",
				country: "India"
			}

			scope.addDestination();

			expect(scope.destination.length).toBe(2);
			expect(scope.destination[1].city).toBe("Bangalore");
			expect(scope.destination[1].country).toBe("India");

			expect(scope.destination[0].city).toBe("London");
			expect(scope.destination[0].country).toBe("England");
		});

	});
});