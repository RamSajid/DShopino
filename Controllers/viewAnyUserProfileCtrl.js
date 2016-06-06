angular.module("eLearningApp")
    .controller("viewAnyUserProfileCtrl", function ($rootScope, $scope, $state, $http) {
        //alert("REACHEDDDDD");
        $rootScope.anyUserData = $rootScope.randomUserData;
        $rootScope.imgSrc3a = "http://shopbox.apphb.com/GetProfileImage?imageId=" + $rootScope.anyUserData.userId;
        if ($rootScope.anyUserData.userOrMerchant == "user") { $scope.uM = 1; }
        else if ($rootScope.anyUserData.userOrMerchant == "merchant") { $scope.uM = 2; }
        //alert($scope.uM);
        $scope.xx1 = "0";
        $scope.xx2 = false;
        $scope.xx3 = false;

    });
