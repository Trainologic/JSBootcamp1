var module = angular.module("myApp", []);

module.run(function(calcService) {
    console.log("%O", calcService);
});

