angular.module("eLearningApp")
    .controller("orderListCtrl", function ($rootScope, $scope, $state, $http) {

        $scope.oLData = $rootScope.merchantOrderList;

        $scope.acceptReq = function (oid) {

            var req7 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/acceptDeliveryReuest?orderID=" + oid,
            }
            $http(req7)

            .success(function (resp, data) {
                $scope.acceptMsg = resp;
                alert($scope.acceptMsg.status);
                $state.go("account.orderList");
            })
           .error(function (err) {
               alert("ERROR in accepting order status . " + err);
           })

        }

        $scope.orderDelivered = function (oid) {

            var req7 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/orderDelivered?orderID=" + oid,
            }
            $http(req7)

            .success(function (resp, data) {
                $scope.deliveredMsg = resp;
                alert($scope.deliveredMsg.status);
                $state.go("account.orderList");
            })
           .error(function (err) {
               alert("ERROR in delivering order status . " + err);
           })

        }

        $scope.cancelOrder = function (oid) {

            var req7 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/cancelDeliverRequestByMerchant?orderID=" + oid,
            }
            $http(req7)

            .success(function (resp, data) {
                $scope.cancelMsg = resp;
                alert($scope.cancelMsg.status);
                $state.go("account.orderList");
            })
           .error(function (err) {
               alert("ERROR in delivering order status . " + err);
           })

        }
    });
