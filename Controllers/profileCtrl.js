angular.module("eLearningApp")
    .controller("profileCtrl", function ($rootScope, $scope, $state, $http) {
        
        //alert("rootscope" + $rootScope.logInUserId + "    " + $.cookie('userID'));
        $rootScope.imgSrc3 = "http://shopbox.apphb.com/GetProfileImage?imageId=" + $rootScope.logInUserId;

        //alert("cookie" + $.cookie('userID'));

        $rootScope.profileData = $rootScope.userData;
        if ($rootScope.profileData.userOrMerchant == "user") { $scope.pUM = 1; }
        else if ($rootScope.profileData.userOrMerchant == "merchant") {
            $scope.pUM = 2;
            //alert("StoreName" + $rootScope.profileData.userPro.storeCreated[0].storeName);
        }
        $scope.x1 = "0";
        $scope.x2 = false;
        $scope.x3 = false;

       
        $scope.toSpecificTag = function (id, name, add, city) {

            $state.go("account.StoreTag");

        }

        $scope.editProfileInfo = function (uid) {

            var obj = {};
            obj.id = uid;
            obj.firstName = $('#userFName').val();
            obj.lastName = $('#userLName').val();
            obj.email = $('#userEmail').val();
            obj.password = $('#userPassword').val();
            obj.newPassword = $('#newPassword').val();
            var req7 = {
                method: 'POST',
                url: "http://shopbox.apphb.com/changeInfo",
                object: obj
            }
            $http(req7)

            .success(function (resp, data) {
                //alert("YAYYYA");
            })
           .error(function (err) {
               alert("ERROR in Updating Info . " + err);
           })

        }

        $scope.viewShopCart = function (uid) {

            var req6 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/viewCart?userID=" + uid
            }
            $http(req6)

            .success(function (resp, data) {
                $rootScope.userShoppingCart = resp;
                $state.go("account.shoppingCart");
            })
           .error(function (err) {
               alert("ERROR in getting shopping cart . " + err);
           })

        }

        $scope.viewOrderList = function (mid) {

            var req6 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/viewOrderList?merchantID=" + mid
            }
            $http(req6)

            .success(function (resp, data) {
                $rootScope.merchantOrderList = resp;
                $state.go("account.orderList");
            })
           .error(function (err) {
               alert("ERROR in getting order List . " + err);
           })

        }
        
    });
