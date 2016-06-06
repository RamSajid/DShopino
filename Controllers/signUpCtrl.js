angular.module("eLearningApp")
    .controller("signUpCtrl", function ($rootScope, $scope, $state, $http) {
        
        $scope.signup = function () {
            //alert("OOKKK");
            var obj = {};
            if ($('#userFName').val() == '') {
                $('#errorUserFName').append("  *fill the field");
            } else {
                obj.firstname = $('#userFName').val();
            }
            if ($('#userLName').val() == '') {
                $('#errorUserLName').append("  *fill the field");
            } else {
                obj.lastname = $('#userLName').val();
            }
            if ($('#userEmail').val() == '') {
                $('#errorUserEmail').append("  *fill the field");
            } else {
                obj.email = $('#userEmail').val();
            }
            if ($('#userPassword').val() == '') {
                $('#errorUserPassword').append("  *fill the field");
            } else {
                obj.password = $('#userPassword').val();
            }

            obj.userOrmerchant = $('#uOrM').val();



            //if(obj.firstName=='' || obj.lastName=='' || obj.email=='' || obj.password==''){
            //    alert("All feilds are necessary to fill");
            //    $state.go("account.userSignUp");
            //}
            if (obj.email != null && obj.firstname != null && obj.lastname != null && obj.password != null) {
                var req = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/signupInfo",
                    data: obj
                }
                $http(req)

               .success(function (resp, data) {

                   $rootScope.signUpMsg = resp;
                   alert($rootScope.signUpMsg.status);
                   if ($rootScope.signUpMsg.status == "OK") {
                       $state.go("account.userLogin");
                   }
                   else {
                       alert("There is some problem in signing in, Please check all your information & try again.");
                   }

               })
               .error(function (err) {
                   alert("There is some problem in signIn . " + err);
               })
            }
        }

    
    });
