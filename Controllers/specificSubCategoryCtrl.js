angular.module("eLearningApp")
    .controller("specificSubCategoryCtrl", function ($rootScope, $scope, $state, $http) {

        $rootScope.oneSubCat = $rootScope.specificSubCategoryStore;
        $rootScope.subCatN = $rootScope.sCName;

        for (var i = 0 ; i < $rootScope.specificSubCategoryStore.storesList.length ; i++) {
            $rootScope.oneSubCat.storesList[i].storePic = "http://shopbox.apphb.com/GetImage?imageId=" + $rootScope.oneSubCat.storesList[i].storeID;
        }

        $scope.writeStoreReviewClickSSC = function (sid, mid) {
            //alert("SIDDDD SIDDDDD SIIDDDDD");
            //alert(sid + " , " + mid);
            $scope.clickedStoreIdSSC = sid;
            $scope.clickedMarketIdSSC = mid;
            $('#myModal').modal();
        }

    });
