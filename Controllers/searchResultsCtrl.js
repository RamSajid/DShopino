angular.module("eLearningApp")
    .controller("searchResultsCtrl", function ($rootScope, $scope, $state, $http) {

        $rootScope.sR = $rootScope.searchBarData;
        $scope.y1 = 2;

        for (var i = 0 ; i < $rootScope.searchBarData.storesList.length ; i++) {
            $rootScope.sR.storesList[i].storePic = "http://shopbox.apphb.com/GetImage?imageId=" + $rootScope.sR.storesList[i].storeID;
        }

        for (var i = 0 ; i < $rootScope.searchBarData.marketList.length ; i++) {
            $rootScope.sR.marketList[i].marketPic = "http://shopbox.apphb.com/GetmarketImage?imageId=" + $rootScope.sR.marketList[i].marketID;
        }

        for (var i = 0 ; i < $rootScope.searchBarData.productList.length ; i++) {
            $rootScope.sR.productList[i].prodPic = "http://shopbox.apphb.com/GetProductImage?imageId=" + $rootScope.sR.productList[i].prodID;
        }



        $scope.writeStoreReviewClickSR = function (sid , mid) {
            //alert("SIDDDD SIDDDDD SIIDDDDD");
            //alert(sid + " , " + mid);
            $scope.clickedStoreIdSR = sid;
            $scope.clickedMarketIdSR = mid;
            $('#myModalStoreRev').modal();
        }

        $scope.writeProductReviewClickSR = function (pid, sid) {
            //alert("pIDDDD PIDDDDD PIIDDDDD");
            //alert(pid + " , " + sid);
            $scope.clickedProductIdSR = pid;
            $scope.clickedStorePIdSR = sid;
            $('#myModalProductRev').modal();
        }

    });
