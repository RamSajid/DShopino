angular.module("eLearningApp")
    .controller("navbarCtrl", function ($rootScope, $scope, $state, $http) {
        
        //alert("NAVBARRRR");
        //$scope.loggedInUser = $rootScope.userData;

        var req = {
            method: 'GET',
            url: "http://shopbox.apphb.com/navbarCatSubCat"
        }
        $http(req)

        .success(function (resp, data) {
            $scope.catSubCat = resp;
            $rootScope.catSubCatRS = resp;
        })
       .error(function (err) {
           alert("ERROR in getting catSubCat . " + err);
       })


        var req2 = {
            method: 'GET',
            url: "http://shopbox.apphb.com/navbarCityMarket"
        }
        $http(req2)

        .success(function (resp, data) {
            $scope.cityMarkets = resp;
        })
       .error(function (err) {
           alert("ERROR in getting cityMarkets . " + err);
       })

        $rootScope.toSpecificCityFromNavbar = 0;
        $scope.toSpecificCity = function (cId , cN) {
            //alert("YYY");
            var req3 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/allMarketsOfCity?cityID=" + cId
            }
            $http(req3)

            .success(function (resp, data) {
                $rootScope.allCityMarkets = resp;
                $rootScope.cName = cN;
                $rootScope.toSpecificCityFromNavbar = 1;
                //alert($rootScope.cName);
                $state.go("account.SpecificCity");
            })
           .error(function (err) {
               alert("ERROR in getting cityMarkets . " + err);
           })

        }

        $scope.toSpecificCat = function (cId, cN) {
            //alert("CCCCCC");
            var req4 = {
                method: 'GET',
                url: " http://shopbox.apphb.com/specificCatagory?catID=" + cId
            }
            $http(req4)

            .success(function (resp, data) {
                $rootScope.specificCategoryStore = resp;
                $rootScope.catName = cN;
                //alert($rootScope.cName);
                $state.go("account.SpecificCategory");
            })
           .error(function (err) {
               alert("ERROR in getting categories . " + err);
           })

        }

        $scope.toSpecificSubCat = function (cId, cN) {
            //alert("SSSSSSS");
            var req5 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/specificSubCategory?subCatID=" + cId
            }
            $http(req5)

            .success(function (resp, data) {
                $rootScope.specificSubCategoryStore = resp;
                $rootScope.sCName = cN;
                //alert($rootScope.cName);
                $state.go("account.SpecificSubCategory");
            })
           .error(function (err) {
               alert("ERROR in getting subCategories . " + err);
           })

        }

        $scope.searchBar = function () {
            sB = $('#searchBox').val();
            //alert(sB);
            var req6 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/search?name=" + sB
            }
            $http(req6)

            .success(function (resp, data) {
                $rootScope.searchBarData = resp;
                //alert($rootScope.cName);
                $state.go("account.searchResults");
            })
           .error(function (err) {
               alert("ERROR in getting Search Results . " + err);
           })

        }

        $scope.subCatsDropdown = function () {
            sB = $('#searchBox').val();
            //alert(sB);
            var req6 = {
                method: 'GET',
                url: " http://shopbox.apphb.com/search?name=" + sB
            }
            $http(req6)

            .success(function (resp, data) {
                $rootScope.searchBarData = resp;
                //alert($rootScope.cName);
                $state.go("account.searchResults");
            })
           .error(function (err) {
               alert("ERROR in getting Search Results . " + err);
           })

        }

        $scope.userLogout = function (id) {
            var req7 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/logout?userID=" + id
            }
            $http(req7)

            .success(function (resp, data) {
                $.cookie('userID', null);
                $.cookie('userMerchant', null);
                $.cookie('userFName', null);

                $rootScope.logInUserId = null;
                $rootScope.logInUserUserMer = null;
                $rootScope.logInUserFName = null;
                $rootScope.logInUserPic = null;
                $rootScope.logInUserEmail = null;
                $rootScope.logInUserPassword = null;
                $rootScope.imgSrc4ui = null;

                $state.go("account.Home");
            })
           .error(function (err) {
               alert("ERROR in Logout . " + err);
           })

        }

        $scope.viewAnyUserP = function (uid) {

            var req7 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/userProfile?userID=" + uid,
            }
            $http(req7)

            .success(function (resp, data) {
                $rootScope.randomUserData = resp;
                //alert("JKJKJHJHGFFDFDS");
                $state.go("account.viewAnyUserProfile");
            })
           .error(function (err) {
               alert("ERROR in getting User Profile . " + err);
           })

        }

        $scope.viewMyProfile = function () {
            var obj = {};
            obj.email = $rootScope.logInUserEmail;
            obj.password = $rootScope.logInUserPassword;


            var req = {
                method: 'POST',
                url: "http://shopbox.apphb.com/signin",
                data: obj
            }
            $http(req)

           .success(function (resp, data) {
               $rootScope.userData = resp;
               //alert("Navbar User Pic " + $rootScope.userData.userId);
               $scope.imgSrc4 = "http://shopbox.apphb.com/GetProfileImage?imageId=" + $rootScope.userData.userId;
               $state.go("account.Profile");

           })
           .error(function (err) {
               alert("There is some problem in getting user profile . " + err);
           })
        }

    });
