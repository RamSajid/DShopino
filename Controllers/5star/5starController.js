angular.module("eLearningApp")
    .controller("5starController", function ($rootScope, $scope, $state, $http, apiURL) {

        $scope.rateFunction = function (rating) {
            //var _url = 'your service url';

            //var data = {
            //    rating: rating
            //};

            //$http.post(_url, angular.toJson(data), { cache: false })
            // .success(function (data) {
            //     success(data);
            // })
            // .error(function (data) {
            //     error(data);
            // });
            alert("Rating is " + rating);

        };


    });



