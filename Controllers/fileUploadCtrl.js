//inject angular file upload directives and services.
//var app = angular.module('fileUpload', ['ngFileUpload']);

angular.module('eLearningApp').controller('fileUploadCtrl', ['$scope', 'Upload', '$timeout' , '$rootScope', function ($scope, Upload, $timeout, $rootScope, $state) {

    //alert("In file controller");

    $scope.uploadFiles = function (file) {
        //alert("FILE CTRL CALLED");
        var ext = file.name.split(".").pop();
        if (!(ext.toLowerCase() == "jpg" || ext.toLowerCase() == "jpeg")) {
            alert(ext + " is invalid file format. your file should be .jpg or .jpeg");
            return;
        }


        $scope.f = file;
        //alert("In file controller11");
        if (file && !file.$error) {
            //alert("In file controller1122");
            file.upload = Upload.upload({
                url: 'http://shopbox.apphb.com/changePic?userID=' + $.cookie('userID'),
                data: { file: file },
                headers: {
            }
                
 
            });
            file.upload.then(function (response) {
                //alert("In file controller112233");
                $timeout(function () {
                    file.result = response.data;
                    //$scope.res = 
                    //alert("In file controller116767" + response.status);
                    

                    });
            //}, function (response) {
            //    if (response.status == "Done!!!") { alert("DONE!!!"); }
            //    else { alert("ERROR"); }
                    //$scope.errorMsg = response.status + ': ' + response.data;
                    
            });

            //file.upload.progress(function (evt) {
            //    file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
           
            //});
        } 
    }



    $scope.uploadFilesCreateNewStore = function (uid, file1) {
        //alert("mcFILE CTRL CALLED");

        $scope.f1 = file1;
        //alert("In mcFile controller11");
        //if ((file1 && !file1.$error)) {
        //alert("In mcFile controller1122");
        file1.upload = Upload.upload({
            url: 'http://shopbox.apphb.com/createStorePic?storeID=' + uid,
            data: {
                file1: file1
            },
            headers: {
            }


        });
        file1.upload.then(function (response) {
            //alert("In mcFile controller112233");
            $timeout(function () {
                //file.result = response.data;
                //alert("In mcFile controller116767" + response.status);


            });

        });

        //}
    }

    $scope.uploadFilesProduct1 = function (id, file1) {
        //alert("ProductFILE CTRL CALLED");
        //alert("In ProductFile controller11");
        $scope.f1 = file1;
        //if ((file1 && !file1.$error) && (file2 && !file2.$error) && (file3 && !file3.$error) && (file4 && !file4.$error)) {
        //alert("In ProductFile controller1122");
        file1.upload = Upload.upload({
            url: 'http://shopbox.apphb.com/productPic1?productID=' + id,
            data: {
                file1: file1,
            },
            headers: {
            }
        });
        file1.upload.then(function (response) {
            //alert("In ProductFile controller112233");
            $timeout(function () {
                //file.result = response.data;
                //alert("In ProductFile controller116767" + response.status);


            });

        });

        // }
    }

    $scope.uploadFilesProduct2 = function (id, file2) {
        //alert("ProductFILE CTRL CALLED");
        //alert("In ProductFile controller11");
        $scope.f2 = file2;
        //if ((file1 && !file1.$error) && (file2 && !file2.$error) && (file3 && !file3.$error) && (file4 && !file4.$error)) {
        //alert("In ProductFile controller1122");
        file2.upload = Upload.upload({
            url: 'http://shopbox.apphb.com/productPic2?productID=' + id,
            data: {
                file2: file2,
            },
            headers: {
            }
        });
        file2.upload.then(function (response) {
            //alert("In ProductFile controller112233");
            $timeout(function () {
                //file.result = response.data;
                //alert("In ProductFile controller116767" + response.status);


            });

        });

        // }
    }

    $scope.uploadFilesProduct3 = function (id, file3) {
        //alert("ProductFILE CTRL CALLED");
        //alert("In ProductFile controller11");
        $scope.f3 = file3;
        //if ((file1 && !file1.$error) && (file2 && !file2.$error) && (file3 && !file3.$error) && (file4 && !file4.$error)) {
        //alert("In ProductFile controller1122");
        file3.upload = Upload.upload({
            url: 'http://shopbox.apphb.com/productPic3?productID=' + id,
            data: {
                file3: file3,
            },
            headers: {
            }
        });
        file3.upload.then(function (response) {
            //alert("In ProductFile controller112233");
            $timeout(function () {
                //file.result = response.data;
                //alert("In ProductFile controller116767" + response.status);


            });

        });

        // }
    }

    $scope.uploadFilesProduct4 = function (id, file4) {
        //alert("ProductFILE CTRL CALLED");
        //alert("In ProductFile controller11");
        $scope.f4 = file4;
        //if ((file1 && !file1.$error) && (file2 && !file2.$error) && (file3 && !file3.$error) && (file4 && !file4.$error)) {
        //alert("In ProductFile controller1122");
        file4.upload = Upload.upload({
            url: 'http://shopbox.apphb.com/productPic4?productID=' + id,
            data: {
                file4: file4,
            },
            headers: {
            }
        });
        file4.upload.then(function (response) {
            //alert("In ProductFile controller112233");
            $timeout(function () {
                //file.result = response.data;
                //alert("In ProductFile controller116767" + response.status);


            });

        });

        // }
    }


}]);