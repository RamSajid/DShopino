angular.module("eLearningApp")
    .controller("specificMarketCtrl", function ($rootScope, $scope, $state, $http) {

        if ($rootScope.storePicsNotLoggedIn == 1)
        {
            $rootScope.oneMarket = $rootScope.specificMarketStore;
            $rootScope.marketN = $rootScope.mName;
            $rootScope.marketNId = $rootScope.mNameId;
            //alert("hyyyyyy123");
            for (var i = 0 ; i < $rootScope.specificMarketStore.storeList.length ; i++) {
                // alert("before");
                $rootScope.oneMarket.storeList[i].storePic = "http://shopbox.apphb.com/GetImage?imageId=" + $rootScope.oneMarket.storeList[i].storeID;
                //alert($scope.oneMarket.storeList[i].storePic);
                // alert("after");
            }
            $rootScope.storePicsNotLoggedIn = 0;
        }

       
        $rootScope.toSpecificStoreFromMarket = 0;
        $scope.toSpecificStore = function (sId, sN) {


            var req3 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/specificStore?storeID=" + sId
            }
            $http(req3)

            .success(function (resp, data) {
                $rootScope.specificStore = resp;
                $rootScope.sName = sN;
                $rootScope.toSpecificStoreFromMarket = 1;
                $state.go("account.SpecificStore");
            })
           .error(function (err) {
               alert("ERROR in getting Store . " + err);
           })

        }


        $scope.writeStoreReviewClick = function (sid) {
          //  alert("SIDDDD SIDDDDD SIIDDDDD");
           // alert(sid);
            $scope.clickedStoreId = sid;
            $('#myModalStoreRev').modal();
        }

    });
