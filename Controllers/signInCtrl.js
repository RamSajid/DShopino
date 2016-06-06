angular.module("eLearningApp")
    .controller("signInCtrl", function ($rootScope, $scope, $state, $http) {
        $scope.login = function () {
            var obj = {} ;
            obj.email = $('#userEmail').val();
            obj.password = $('#userPassword').val();
            var uPassword = $('#userPassword').val();

            var req = {
                method: 'POST',
                url: "http://shopbox.apphb.com/signin",
                data: obj
            }
            $http(req)

           .success(function (resp, data) {

               $rootScope.userData = resp;
               $.cookie('userID', $rootScope.userData.userId);
               $.cookie('userMerchant', $rootScope.userData.userOrMerchant);
               $.cookie('userFName', $rootScope.userData.userPro.firstname);

               $rootScope.imgSrc4ui = "http://shopbox.apphb.com/GetProfileImage?imageId=" + $rootScope.userData.userId;

               $rootScope.logInUserId = $.cookie('userID');
               $rootScope.logInUserUserMer = $.cookie('userMerchant');
               $rootScope.logInUserFName = $.cookie('userFName');
               $rootScope.logInUserPic = $rootScope.userData.userPro.image;
               $rootScope.logInUserEmail = $rootScope.userData.userPro.email;
               $rootScope.logInUserPassword = uPassword;

               //$state.go("account");
               $state.go("account.Profile");
             
           })
           .error(function (err) {
               alert("There is some problem in signIn . " + err);
           })
        }

    });
