angular.module("eLearningApp")
    .controller("collapseCtrl", function ($rootScope, $scope, $state, $http) {
        $scope.x = true;
        
        var req = {
            method: 'GET',
            url: "http://shopbox.apphb.com/highestRatedStore"
        }
        $http(req)

        .success(function (resp, data) {
            $scope.HRS = resp;

            for (var i = 0 ; i < $scope.HRS.highestRatedStore.length ; i++)
            {
                //alert("Before");
                $scope.HRS.highestRatedStore[i].storePic = "http://shopbox.apphb.com/GetImage?imageId=" + $scope.HRS.highestRatedStore[i].storeID;
                //alert("After " + $scope.HRS.highestRatedStore[i].storePic);
            }

         })
       .error(function (err) {
            alert("ERROR in getting HRS . " + err);
       })


        var req2 = {
            method: 'GET',
            url: "http://shopbox.apphb.com/lowestRatedStore"
        }
        $http(req2)

        .success(function (resp, data) {
            $scope.LRS = resp;

            for (var i = 0 ; i < $scope.LRS.lowestRatedStore.length ; i++) {
                $scope.LRS.lowestRatedStore[i].storePic = "http://shopbox.apphb.com/GetImage?imageId=" + $scope.LRS.lowestRatedStore[i].storeID;
            }

        })
       .error(function (err) {
           alert("ERROR in getting LRS . " + err);
       })

    });
