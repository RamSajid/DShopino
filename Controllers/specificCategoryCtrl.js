angular.module("eLearningApp")
    .controller("specificCategoryCtrl", function ($rootScope, $scope, $state, $http) {

        $rootScope.oneCat = $rootScope.specificCategoryStore;
        $rootScope.catN = $rootScope.catName;

        for (var i = 0 ; i < $rootScope.specificCategoryStore.storesList.length ; i++) {
            $rootScope.oneCat.storesList[i].storePic = "http://shopbox.apphb.com/GetImage?imageId=" + $rootScope.oneCat.storesList[i].storeID;
        }

        $scope.writeStoreReviewClickSC = function (sid, mid) {
            //alert("SIDDDD SIDDDDD SIIDDDDD");
            //alert(sid + " , " + mid);
            $scope.clickedStoreIdSC = sid;
            $scope.clickedMarketIdSC = mid;
            $('#myModal').modal();
        }

    });
