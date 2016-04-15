angular
	.module('MyApp.UserFactory', ['ngRoute'])
	.factory('UserFactory', UserFactory);

function UserFactory() {
	return {
		name: '[user factory name]'
	}
}
