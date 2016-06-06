
angular.module("eLearningApp")
    .controller("storeTagCtrl", function ($rootScope, $scope, $state, $http) {
        //alert("TTTTTTYYYYYYY");
        $scope.showReviewBtn = false;
        var req = {
            method: 'GET',
            url: "http://shopbox.apphb.com/allTags"
        }
        $http(req)

        .success(function (resp, data) {
            $rootScope.allTags = resp;
        })
       .error(function (err) {
           alert("ERROR in getting Tags . " + err);
       })
    

        $scope.tagClicked = function (tId, tName, tAdd, tCity) {
            $scope.showReviewBtn = true;
            $scope.clickedTagId = tId;
            //alert("TTT");
            var req3 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/reviewsOfSpecificTag?tagID=" + tId
            }
            $http(req3)

            .success(function (resp, data) {
                $scope.tagReviews = resp;

                for (var i = 0 ; i < $scope.tagReviews.reviews.length ; i++) {
                    $scope.tagReviews.reviews[i].image = "http://shopbox.apphb.com/GetProfileImage?imageId=" + $scope.tagReviews.reviews[i].userID;
                }

                $scope.clickedTagName = tName;
                $scope.clickedTagAdd = tAdd;
                $scope.clickedTagCity = tCity;
                //$state.go("account.StoreTag");
            })
           .error(function (err) {
               alert("ERROR in getting reviews . " + err);
           })

        }


        $scope.createNewTag = function () {
            //alert("CREATIIINNGGGGG");
            var obj = {};
            obj.storeName = $('#StName').val();
            obj.storeAddress = $('#stAddress').val();
            obj.city = $('#city').val();
            $scope.userDataForID = $rootScope.userData;
            obj.userID = $scope.userDataForID.userId;
            //obj.userID = 1;

            var req = {
                method: 'POST',
                url: "http://shopbox.apphb.com/createStoreTag",
                data: obj
            }
            $http(req)

           .success(function (resp, data) {

               $rootScope.createNewTagResponse = resp;
               $('#StName').val() = '';
               $('#stAddress').val() = '';
               $('#city').val() = '';
               //alert($rootScope.createNewTagResponse.status);
           })
           .error(function (err) {
               alert("There is some problem in creating Store Tag . " + err);
           })
        }


        $scope.writeTagReview = function (tid , uid) {
            var obj = {};
            obj.userID = uid;
            obj.storeID = tid;
            obj.review = $('#revT').val();
            obj.rating = $('#rateT').val();
            
            var req23 = {
                method: 'POST',
                url: "http://shopbox.apphb.com/writeTagReview",
                data: obj
            }
            $http(req23)

           .success(function (resp, data) {
               $('#myModalT').modal('hide');
               $rootScope.tagRevMsg = resp;
               $('#revT').val() = '';
               $('#rateT').val() = '';
               //alert($rootScope.tagRevMsg.status);
           })
           .error(function (err) {
               alert("There is some problem in writing review to Tag . " + err);
           })
        }


    });
