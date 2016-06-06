angular.module("eLearningApp")
    .controller("specificCityCtrl", function ($rootScope, $scope, $state, $http) {
        
        if ($rootScope.toSpecificCityFromNavbar == 1)
        {
            $rootScope.oneCityMarkets = $rootScope.allCityMarkets;
            $rootScope.cityN = $rootScope.cName;

            for (var i = 0 ; i < $rootScope.allCityMarkets.marketList.length ; i++) {
                $rootScope.oneCityMarkets.marketList[i].marketPic = "http://shopbox.apphb.com/GetmarketImage?imageId=" + $rootScope.oneCityMarkets.marketList[i].marketID;
            }
            $rootScope.toSpecificCityFromNavbar == 0;
        }


        $rootScope.storePicsNotLoggedIn = 0;

        $scope.toSpecificMarket = function (mId , mN) {

            
            var req3 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/allStoresOfMarket?marketID=" + mId
            }
            $http(req3)

            .success(function (resp, data) {
                $rootScope.specificMarketStore = resp;
                $rootScope.mName = mN;
                $rootScope.mNameId = mId;
                $rootScope.storePicsNotLoggedIn = 1;
                $state.go("account.SpecificMarket");
            })
           .error(function (err) {
               alert("ERROR in getting MarketStores . " + err);
           })

        }
    });
