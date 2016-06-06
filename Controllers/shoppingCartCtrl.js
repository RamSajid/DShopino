angular.module("eLearningApp")
    .controller("shoppingCartCtrl", function ($rootScope, $scope, $state, $http) {

        $rootScope.cartData = $rootScope.userShoppingCart;

        $scope.cancelOrderCustomer = function (oid) {

            var req7 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/CancelOrder?orderID=" + oid,
            }
            $http(req7)

            .success(function (resp, data) {
                $scope.cancelMsg = resp;
                alert($scope.cancelMsg.status);
                $state.go("account.shoppingCart");
            })
           .error(function (err) {
               alert("ERROR in getting User Profile . " + err);
           })

        }

    });
