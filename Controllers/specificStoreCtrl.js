
angular.module("eLearningApp")
    .controller("specificStoreCtrl", ['$scope', 'Upload', '$timeout', '$rootScope', '$state', '$http', function ($scope, Upload, $timeout, $rootScope, $state, $http) {
        //alert("JJJJJJJJJJJJJJOOOOOOOOOOOOGGGGGGGGGGGGG");

        if ($rootScope.toSpecificStoreFromMarket == 1)
        {
            $rootScope.oneStore = $rootScope.specificStore;
            $rootScope.storeN = $rootScope.sName;

            $rootScope.imgSrc1 = "http://shopbox.apphb.com/GetImage?imageId=" + $rootScope.oneStore.infoOfSpecificStore.store.storeID;

            for (var i = 0 ; i < $rootScope.specificStore.infoOfSpecificStore.reviews.length ; i++) {
                $rootScope.oneStore.infoOfSpecificStore.reviews[i].userImage = "http://shopbox.apphb.com/GetProfileImage?imageId=" + $rootScope.oneStore.infoOfSpecificStore.reviews[i].userID;
            }

            for (var i = 0 ; i < $rootScope.specificStore.infoOfSpecificStore.products.length ; i++) {
                $rootScope.oneStore.infoOfSpecificStore.products[i].prodPic = "http://shopbox.apphb.com/GetProductImage1?imageId=" + $rootScope.oneStore.infoOfSpecificStore.products[i].prodID;
            }

            $rootScope.toSpecificStoreFromMarket = 0;
        }


        //alert("id : " + $scope.oneStore.infoOfSpecificStore.store.storeID);

        
        $rootScope.toSpecificProductFromStore = 0;
        $scope.toSpecificProduct = function (pId, pN) {

            //alert("SSTDTYT");
            //alert(pId);
            //alert(pN);
            var req3 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/SpecificProductPage?productID=" + pId
            }
            $http(req3)

            .success(function (resp, data) {
                $rootScope.specificProduct = resp;
                $rootScope.pName = pN;
                $rootScope.toSpecificProductFromStore = 1;
                $state.go("account.SpecificProduct");
            })
           .error(function (err) {
               alert("ERROR in getting Product . " + err);
           })

        }


        $scope.selectedCat = function (catId) {
            
            //alert("alllllleeeerttttttttttt");
            var req13 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/listOfSubCat?catID=" + catId
            }
            $http(req13)

            .success(function (resp, data) {
                $scope.selectedSubCatList = resp;
                //alert(catId);
            })
           .error(function (err) {
               alert("ERROR in getting SubCategories . " + err);
           })
        }


        //$scope.selectedSubCatId = "1";
        $scope.selectedSubCat = function (sCatId) {

            //var sCatId = $('#sCatV').val();
            alert(sCatId);
            if (sCatId == 1 || sCatId == 2 || sCatId == 3 || sCatId == 4 || sCatId == 5) {
                $scope.selectedSubCatId = "1";
            }
            else if (sCatId == 25) {
                $scope.selectedSubCatId = "25";
            }
            else if (sCatId == 9 || sCatId == 10) {
                $scope.selectedSubCatId = "9";
            }
            else if (sCatId == 19 || sCatId == 20) {
                $scope.selectedSubCatId = "19";
            }
            if (sCatId == 22) {
                $scope.selectedSubCatId = "22";
            }
            if (sCatId == 21) {
                $scope.selectedSubCatId = "21";
            }
            if (sCatId == 24) {
                $scope.selectedSubCatId = "24";
            }
            if (sCatId == 26) {
                $scope.selectedSubCatId = "26";
            }
            if (sCatId == 23) {
                $scope.selectedSubCatId = "23";
            }
            if (sCatId == 27) {
                $scope.selectedSubCatId = "27";
            }
            if (sCatId == 6 || sCatId == 7 || sCatId == 8) {
                $scope.selectedSubCatId = "6";
            }
            if (sCatId == 11 || sCatId == 12 || sCatId == 13 || sCatId == 14 || sCatId == 15 || sCatId == 16 || sCatId == 17 || sCatId == 18) {
                $scope.selectedSubCatId = "11";
            }
            alert($scope.selectedSubCatId + " , " + sCatId);
        }


        

        $scope.addStroller = function (sId) {

            var obj = {};
            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }
            obj.storeID = sId;
            
            if ($('#babyBrand').val() == '') {
                $('#errorBabyBrand').append("  *fill the field");
            }
            else {
                obj.brand = $('#babyBrand').val();
            }

            if ($('#babyColor').val() == '') {
                $('#errorBabyColor').append("  *fill the field");
            }
            else {
                obj.color = $('#babyColor').val();
            }

            obj.gender = $('#babyGender').val();

            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.strollerTitle = $('#title').val();
            }
            
            if ($('#mpn').val() == '') {
                $('#errorMpn').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#mpn').val())) {
                    alert('Not integer');
                }
                else {
                    obj.strollerMPN = $('#mpn').val();
                }
            }
            
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#price').val())) {
                    alert('Not integer');
                }
                else {
                    obj.price = $('#price').val();
                }
            }
            obj.strollerCondition = $('#condition').val();
            
            if ($('#com').val() == '') {
                $('#errorCom').append("  *fill the field");
            }
            else {
                obj.country = $('#com').val();
            }
            
            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }
            else {
                obj.detail = $('#detail').val();
            }
            if (obj.brand != null && obj.color != null && obj.country != null && obj.detail != null && obj.gender != null && obj.price != null && obj.strollerCondition != null && obj.strollerMPN != null && obj.strollerTitle != null) {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addBabyStrollerinfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;

                    $('#detail').val() = '';
                    $('#com').val() = '';
                    $('#price').val() = '';
                    $('#mpn').val() = '';
                    $('#title').val() = '';
                    $('#babyColor').val() = '';
                    $('#babyBrand').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.babyStrollerID, file1, file2, file3, file4);
                    //alert("END");

                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.bookBodyArea1 = false;
        $scope.bookBodyArea2 = false;
        $scope.bookBodyArea3 = false;
        $scope.bookBodyArea4 = false;
        $scope.bookBodyArea5 = false;
        $scope.bookBodyArea6 = false;

        $scope.addBook = function (sId) {

            var obj = {};

            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }
            obj.storeID = sId;
            
            obj.bookSubject = $('#bookSubject').val();
            
            if ($('#bookAge').val() == '') {
                $('#errorBookAge').append("  *fill the field");
            }
            else {
                obj.ageLevel = $('#bookAge').val();
            }
            obj.bodyArea = $('#babyGender').val();

            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.bookTitle = $('#title').val();
            }
            
            if ($('#mpn').val() == '') {
                $('#errorMpn').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#mpn').val())) {
                    alert('Not integer');
                } else {
                    obj.bookMPN = $('#mpn').val();
                }
            }
            
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#price').val())) {
                    alert('Not integer');
                } else {
                    obj.price = $('#price').val();
                }
            }

            obj.condition = $('#condition').val();

            if ($('#com').val() == '') {
                $('#errorCom').append("  *fill the field");
            }
            else {
                obj.countryOfPublication = $('#com').val();
            }
            
            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }
            else {
                obj.detail = $('#detail').val();
            }
            obj.bodyArea = '';
            if ($scope.bookBodyArea1 == true) { obj.bodyArea = obj.bodyArea + $('#bookBA1').val(); }
            if ($scope.bookBodyArea2 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#bookBA2').val(); }
            if ($scope.bookBodyArea3 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#bookBA3').val(); }
            if ($scope.bookBodyArea4 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#bookBA4').val(); }
            if ($scope.bookBodyArea5 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#bookBA5').val(); }
            if ($scope.bookBodyArea6 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#bookBA6').val(); }
            obj.language = $('#bookLang').val();
            if ($('#bookLang').val() == '') {
                $('#errorBookLang').append("  *fill the field");
            }
            else {
                obj.language = $('#bookLang').val();
            }
            
            if ($('#bookWriter').val() == '') {
                $('#errorBookWriter').append("  *fill the field");
            }
            else {
                obj.writerName = $('#bookWriter').val();
            }
            
            if ($('#bookPubYr').val() == '') {
                $('#errorBookPubYr').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#bookPubYr').val())) {
                    alert('Not integer');
                }
                else {
                    obj.publicationYear = $('#bookPubYr').val();
                }
            }

            alert(obj.bodyArea);
            if (obj.ageLevel != null && obj.bookMPN != null && obj.bookSubject != null && obj.bookTitle != null && obj.condition != null && obj.countryOfPublication != null && obj.detail != null && obj.price != null && obj.publicationYear != null && obj.language != null && obj.writerName != null) {
                var req5 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addBookInfo",
                    data: obj
                }
                $http(req5)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;

                    $('#bookLang').val() = '';
                    $('#bookWriter').val() = '';
                    $('#bookPubYr').val() = '';
                    $('#com').val() = '';
                    $('#price').val() = '';
                    $('#mpn').val() = '';
                    $('#title').val() = '';
                    $('#bookAge').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.bookID, file1, file2, file3, file4);
                    //alert("END");
                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.addCamera = function (sId) {

            var obj = {};
          
            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }
            obj.storeID = sId;
            
            if ($('#cameraBrand').val() == '') {
                $('#errorCameraBrand').append("  *fill the field");
            }
            else {
                obj.brand = $('#cameraBrand').val();
            }
            
            if ($('#cameraColor').val() == '') {
                $('#errorCameraColor').append("  *fill the field");
            }
            else {
                obj.color = $('#cameraColor').val();
            }
            
            if ($('#cameraModel').val() == '') {
                $('#errorCameraModel').append("  *fill the field");
            }
            else {
                obj.model = $('#cameraModel').val();
            }
            
            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.cameraTIlte = $('#title').val();
            }
            
            if ($('#mpn').val() == '') {
                $('#errorMpn').append("  *fill the field");
            }
            else {
                obj.cameraMPN = $('#mpn').val();
            }
            
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                obj.price = $('#price').val();
            }
            obj.condition = $('#condition').val();
            
            if ($('#com').val() == '') {
                $('#errorCom').append("  *fill the field");
            }
            else {
                obj.country = $('#com').val();
            }
            
            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }
            else {
                obj.detail = $('#detail').val();
            }
            if (obj.brand != null && obj.cameraMPN != null && obj.cameraTIlte != null && obj.color != null && obj.condition != null && obj.country != null && obj.detail != null && obj.model != null && obj.price != null) {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addcameraInfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;

                    $('#price').val() = '';
                    $('#com').val() = '';
                    $('#detail').val() = '';
                    $('#mpn').val() = '';
                    $('#title').val() = '';
                    $('#cameraModel').val() = '';
                    $('#cameraColor').val() = '';
                    $('#cameraBrand').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.cameraID, file1, file2, file3, file4);
                    //alert("END");
                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.addCloth = function (sId) {

            var obj = {};

            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }

            obj.storeID = sId;
            
            if ($('#clothBrand').val() == '') {
                $('#errorClothBrand').append("  *fill the field");
            }
            else {
                obj.brand = $('#clothBrand').val();
            }
            
            if ($('#clothColor').val() == '') {
                $('#errorClothColor').append("  *fill the field");
            }
            else {
                obj.color = $('#clothColor').val();
            }
            
            obj.gender = $('#clothGender').val();

            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.clothTitle = $('#title').val();
            }
            
            obj.size = $('#clothSize').val();
            
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                obj.price = $('#price').val();
            }

            obj.condition = $('#clothCondition').val();

            obj.style = $('#clothStyle').val();

            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }
            else {
                obj.detail = $('#detail').val();
            }
            if (obj.brand != null && obj.clothTitle != null && obj.color != null && obj.condition != null && obj.detail != null && obj.gender != null && obj.price != null && obj.style != null) {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addClothInfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;

                    $('#detail').val() = '';
                    $('#title').val() = '';
                    $('#price').val() = '';
                    $('#clothColor').val() = '';
                    $('#clothBrand').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.clothID, file1, file2, file3, file4);
                    //alert("END");
                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.addFood = function (sId) {

            var obj = {};
            
            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }
            obj.storeID = sId;
            
            if ($('#foodBrand').val() == '') {
                $('#errorFoodBrand').append("  *fill the field");
            }
            else {
                obj.brand = $('#foodBrand').val();
            }
            
            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.title = $('#title').val();
            }
            
            if ($('#com').val() == '') {
                $('#errorCom').append("  *fill the field");
            }
            else {
                obj.country = $('#com').val();
            }
            
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                obj.price = $('#price').val();
            }
            
            if ($('#foodEd').val() == '') {
                $('#errorFoodEd').append("  *fill the field");
            }
            else {
                obj.expiredDate = $('#foodEd').val();
            }
            
            if ($('#foodMd').val() == '') {
                $('#errorFoodMd').append("  *fill the field");
            }
            else {
                obj.manufacturedDate = $('#foodMd').val();
            }
            
            obj.foodSpecification = $('#foodSpec').val();
            
            if ($('#mpn').val() == '') {
                $('#errorMpn').append("  *fill the field");
            }
            else {
                obj.foodMPN = $('#mpn').val();
            }
            
            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }
            else {
                obj.detail = $('#detail').val();
            }
            if (obj.brand != null && obj.country != null && obj.detail != null && obj.expiredDate != null && obj.foodMPN != null && obj.foodSpecification != null && obj.manufacturedDate != null && obj.price != null && obj.title != null) {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addFoodInfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;

                    $('#detail').val() = '';
                    $('#mpn').val() = '';
                    $('#foodMd').val() = '';
                    $('#price').val() = '';
                    $('#com').val() = '';
                    $('#title').val() = '';
                    $('#foodEd').val() = '';
                    $('#foodBrand').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.foodID, file1, file2, file3, file4);
                    //alert("END");
                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.furnitureMaterial1 = false;
        $scope.furnitureMaterial2 = false;
        $scope.furnitureMaterial3 = false;
        $scope.furnitureMaterial4 = false;
        $scope.furnitureMaterial5 = false;
        $scope.furnitureMaterial6 = false;
        $scope.furnitureMaterial7 = false;
        $scope.furnitureMaterial8 = false;
        $scope.furnitureMaterial9 = false;
        $scope.furnitureMaterial10 = false;
        $scope.furnitureMaterial11 = false;

        $scope.addFurniture = function (sId) {

            var obj = {};

            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }
            obj.storeID = sId;
            
            if ($('#furnitureBrand').val() == '') {
                $('#errorFurnitureBrand').append("  *fill the field");
            }
            else {
                obj.brand = $('#furnitureBrand').val();
            }
            
            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.title = $('#title').val();
            }
            
            if ($('#com').val() == '') {
                $('#errorCom').append("  *fill the field");
            }
            else {
                obj.country = $('#com').val();
            }
            
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#price').val())) {
                    alert('Not integer');
                } else {
                    obj.price = $('#price').val();
                }
            }
            
            if ($('#furnitureColor').val() == '') {
                $('#errorFurnitureColor').append("  *fill the field");
            }
            else {
                obj.color = $('#furnitureColor').val();
            }

            obj.condition = $('#condition').val();

            obj.style = $('#furnitureStyle').val();
            
            if ($('#mpn').val() == '') {
                $('#errorMpn').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#mpn').val())) {
                    alert('Not integer');
                }
                else {
                    obj.furnitureMPN = $('#mpn').val();
                }
            }
            
            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }
            else {
                obj.detail = $('#detail').val();
            }
            obj.material = '';
            if ($scope.furnitureMaterial1 == true) { obj.material = obj.material + $('#fM1').val(); }
            if ($scope.furnitureMaterial2 == true) { obj.material = obj.material + ", " + $('#fM2').val(); }
            if ($scope.furnitureMaterial3 == true) { obj.material = obj.material + ", " + $('#fM3').val(); }
            if ($scope.furnitureMaterial4 == true) { obj.material = obj.material + ", " + $('#fM4').val(); }
            if ($scope.furnitureMaterial5 == true) { obj.material = obj.material + ", " + $('#fM5').val(); }
            if ($scope.furnitureMaterial6 == true) { obj.material = obj.material + ", " + $('#fM6').val(); }
            if ($scope.furnitureMaterial7 == true) { obj.material = obj.material + ", " + $('#fM7').val(); }
            if ($scope.furnitureMaterial8 == true) { obj.material = obj.material + ", " + $('#fM8').val(); }
            if ($scope.furnitureMaterial9 == true) { obj.material = obj.material + ", " + $('#fM9').val(); }
            if ($scope.furnitureMaterial10 == true) { obj.material = obj.material + ", " + $('#fM10').val(); }
            if ($scope.furnitureMaterial11 == true) { obj.material = obj.material + ", " + $('#fM11').val(); }
            if (obj.brand != null && obj.color != null && obj.condition != null && obj.country != null && obj.detail != null && obj.furnitureMPN != null && obj.material != null && obj.price != null && obj.style != null && obj.title != null)
            {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addFurnitureinfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;


                    $('#title').val() = '';
                    $('#com').val() = '';
                    $('#price').val() = '';
                    $('#furnitureColor').val() = '';
                    $('#mpn').val() = '';
                    $('#detail').val() = '';
                    $('#furnitureBrand').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.furnitureID, file1, file2, file3, file4);
                    //alert("END");
                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.addHomeDecor = function (sId) {

            var obj = {};
            
            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }
            obj.storeID = sId;
            
            if ($('#homeDecorBrand').val() == '') {
                $('#errorHomeDecorBrand').append("  *fill the field");
            }
            else {
                oobj.brand = $('#homeDecorBrand').val();
            }
            
            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.title = $('#title').val();
            }
            
             obj.category = $('#homeDecorCat').val();
             
             if ($('#price').val() == '') {
                 $('#errormCPrice').append("  *fill the field");
             }
             else {
                 if (!$.isNumeric($('#price').val())) {
                     alert('Not integer');
                 } else {
                     obj.price = $('#price').val()
                 }
             }
             
             obj.style = $('#homeDecorStyle').val();
             
             if ($('#homeDecorType').val() == '') {
                 $('#errorHomeDecorType').append("  *fill the field");
             }
             else {
                 obj.type = $('#homeDecorType').val();
             }
             
             if ($('#homeDecorNP').val() == '') {
                 $('#errorHomeDecorNP').append("  *fill the field");
             }
             else {
                 obj.nameOfProduct = $('#homeDecorNP').val();
             }
             
             if ($('#detail').val() == '') {
                 $('#errorDetail').append("  *fill the field");
             }
             else {
                 obj.detail = $('#detail').val();
             }
             if (obj.category != null && obj.detail != null && obj.nameOfProduct != null && obj.price != null && obj.style != null && obj.title != null)
             {
                 var req4 = {
                     method: 'POST',
                     url: "http://shopbox.apphb.com/addHomeDecorInfo",
                     data: obj
                 }
                 $http(req4)

                 .success(function (resp, data) {
                     $rootScope.newProd = resp;

                     $('#homeDecorType').val() = '';
                     $('#homeDecorNP').val() = '';
                     $('#detail').val() = '';
                     $('#price').val() = '';
                     $('#title').val() = '';
                     $('#homeDecorBrand').val() = '';
                     //alert($rootScope.newProd.status);
                     $('#myModalAddProduct').modal('hide');
                     //$scope.uploadFilesProduct($rootScope.newProd.homeDecorID, file1, file2, file3, file4);
                     //alert("END");
                 })
                .error(function (err) {
                    alert("ERROR in adding Product . " + err);
                })
             }

        }

        
        $scope.jewelBA1 = false;
        $scope.jewelBA2 = false;
        $scope.jewelBA3 = false;
        $scope.jewelBA4 = false;
        $scope.jewelBA5 = false;
        $scope.jewelBA6 = false;
        $scope.jewelBA7 = false;

        $scope.addJewellery = function (sId) {

            var obj = {};

            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }
            obj.storeID = sId;
            
            if ($('#jewelBrand').val() == '') {
                $('#errorJewelBrand').append("  *fill the field");
            }
            else {
                obj.brand = $('#jewelBrand').val();
            }
            
            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.title = $('#title').val();
            }
            
            if ($('#jewelColor').val() == '') {
                $('#errorJewelColor').append("  *fill the field");
            }
            else {
                obj.color = $('#jewelColor').val();
            }
            
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#price').val())) {
                    alert('Not integer');
                } else {
                    obj.price = $('#price').val();
                }
            }
            
            
            obj.condition = $('#condition').val();
            
            if ($('#com').val() == '') {
                $('#errorCom').append("  *fill the field");
            }
            else {
                obj.country = $('#com').val();
            }
            
            if ($('#mpn').val() == '') {
                $('#errorMpn').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#mpn').val())) {
                    alert('Not integer');
                }else{
                    obj.jweleryMPN = $('#mpn').val();
                }
            }
            
            obj.metal = $('#jewelMetal').val();
            
            obj.material = $('#jewelMetal').val();
            
            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }
            else {
                obj.detail = $('#detail').val();
            }
            obj.bodyArea = '';
            if ($scope.jewelBA1 == true) { obj.bodyArea = obj.bodyArea + $('#jBA1').val(); }
            if ($scope.jewelBA2 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#jBA2').val(); }
            if ($scope.jewelBA3 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#jBA3').val(); }
            if ($scope.jewelBA4 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#jBA4').val(); }
            if ($scope.jewelBA5 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#jBA5').val(); }
            if ($scope.jewelBA6 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#jBA6').val(); }
            if ($scope.jewelBA7 == true) { obj.bodyArea = obj.bodyArea + ", " + $('#jBA7').val(); }
            if (obj.brand != null && obj.color != null && obj.condition != null && obj.country != null && obj.detail != null && obj.jweleryMPN != null && obj.material != null && obj.metal != null && obj.price != null && obj.title != null) {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addJewelleryInfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;

                    $('#title').val() = '';
                    $('#jewelBrand').val() = '';
                    $('#jewelColor').val() = '';
                    $('#price').val() = '';
                    $('#com').val() = '';
                    $('#mpn').val() = '';
                    $('#detail').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.jewelleryID, file1, file2, file3, file4);
                    //alert("END");
                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.addKitchen = function (sId) {

            var obj = {};
            
            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }

            obj.storeID = sId;

            
            if ($('#kBrand').val() == '') {
                $('#errorKBrand').append("  *fill the field");
            }
            else {
                obj.brand = $('#kBrand').val();
            }

           
            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.title = $('#title').val();
            }
            
            if ($('#com').val() == '') {
                $('#errorCom').append("  *fill the field");
            }
            else {

                obj.country = $('#com').val();
            }
            
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#price').val())) {
                    alert('Not integer');
                } else {
                    obj.price = $('#price').val();
                }
            }
            
            if ($('#kType').val() == '') {
                $('#errorKType').append("  *fill the field");
            }
            else {
                obj.type = $('#kType').val();
            }
            
            if ($('#kMaterial').val() == '') {
                $('#errorKMaterial').append("  *fill the field");
            }
            else {
                obj.material = $('#kMaterial').val();
            }
            
            
            obj.category = $('#kCat').val();
            
            
            if ($('#mpn').val() == '') {
                $('#errorMpn').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#mpn').val())) {
                    alert('Not integer');
                } else {
                    obj.deal = $('#mpn').val();
                }
            }
            obj.feature = '';
            obj.typeBrand = '';
            
            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }
            else {
                obj.detail = $('#detail').val();
            }
            if (obj.brand != null && obj.category != null && obj.country != null && obj.deal != null && obj.detail != null && obj.feature != null && obj.material != null && obj.price != null && obj.title != null) {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addKitchenInfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;

                    $('#kBrand').val() = '';
                    $('#title').val() = '';
                    $('#com').val() = '';
                    $('#price').val() = '';
                    $('#kType').val() = '';
                    $('#kMaterial').val() = '';
                    $('#mpn').val() = '';
                    $('#detail').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.kitchenID, file1, file2, file3, file4);
                    //alert("END");
                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.mupF1 = false;
        $scope.mupF2 = false;
        $scope.mupF3 = false;
        $scope.mupF4 = false;
        $scope.mupF5 = false;
        $scope.mupF6 = false;
        $scope.mupF7 = false;
        $scope.mupF8 = false;

        $scope.addMakeup = function (sId) {

            var obj = {};
            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }

            obj.storeID = sId;
            
            if ($('#mupBrand').val() == '') {
                $('#errorMupBrand').append("  *fill the field");
            }
            else {
                obj.brand = $('#mupBrand').val();
            }
           
            obj.storeID = sId;

            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.title = $('#title').val();
            }
           
            if ($('#com').val() == '') {
                $('#errorCom').append("  *fill the field");
            }
            else {
                obj.country = $('#com').val();
            }
           
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#price').val())) {
                    alert('Not integer');
                } else {
                    obj.price = $('#price').val();
                }
            }
           
            if ($('#mupShade').val() == '') {
                $('#errorMupShade').append("  *fill the field");
            }
            else {
                obj.shade = $('#mupShade').val();
            }
           
            if ($('#mupForm').val() == '') {
                $('#errorMupForm').append("  *fill the field");
            }
            else {
                obj.formulation = $('#mupForm').val();
            }
            obj.feature = '';
            if ($scope.mupF1 == true) { obj.feature = obj.feature + $('#mF1') }
            if ($scope.mupF2 == true) { obj.feature = obj.feature + ", " + $('#mF2') }
            if ($scope.mupF3 == true) { obj.feature = obj.feature + ", " + $('#mF3') }
            if ($scope.mupF4 == true) { obj.feature = obj.feature + ", " + $('#mF4') }
            if ($scope.mupF5 == true) { obj.feature = obj.feature + ", " + $('#mF5') }
            if ($scope.mupF6 == true) { obj.feature = obj.feature + ", " + $('#mF6') }
            if ($scope.mupF7 == true) { obj.feature = obj.feature + ", " + $('#mF7') }
            if ($scope.mupF8 == true) { obj.feature = obj.feature + ", " + $('#mF8') }

           
            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }
            else {
                obj.detail = $('#detail').val();
            }
            if (obj.brand != null && obj.country != null && obj.detail != null && obj.feature != null && obj.formulation != null && obj.price != null && obj.shade != null && obj.title != null)
            {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addMakeupInfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;

                    $('#mupBrand').val() = '';
                    $('#title').val() = '';
                    $('#com').val() = '';
                    $('#price').val() = '';
                    $('#mupShade').val() = '';
                    $('#mupForm').val() = '';
                    $('#detail').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.makeupID, file1, file2, file3, file4);
                    //alert("END");
                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.addMobile = function (sId) {

            var obj = {};
            if ($('#sCatV').val() == '') {
                $('#errorSubCat').append("  *fill the field");
            }
            else {
                obj.subCategoryID = $('#sCatV').val();
            }

            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.title = $('#title').val();
            }

            if ($('#mobBattery').val() == '') {
                $('#errorMobBattery').append("  *fill the field");
            }
            else {
                obj.battery = $('#mobBattery').val();
            }

            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            }
            else {
                if (!$.isNumeric($('#price').val())) {
                    alert('Not integer');
                } else {
                    obj.price = $('#price').val();
                }
            }

            if ($('#mobBrand').val() == '') {
                $('#errorMobBrand').append("  *fill the field");
            }
            else {
                obj.brand = $('#mobBrand').val();
            }

            if ($('#mobBro').val() == '') {
                $('#errorMobBro').append("  *fill the field");
            }
            else {
                obj.browser = $('#mobBro').val();
            }

            if ($('#mobCpx').val() == '') {
                $('#errorMobCpx').append("  *fill the field");
            }
            else {
                obj.camera = $('#mobCpx').val();
            }

            if ($('#mobColor').val() == '') {
                $('#errorMobColor').append("  *fill the field");
            }
            else {
                obj.colors = $('#mobColor').val();
            }

            if ($('#mobCon').val() == '') {
                $('#errorMobCon').append("  *fill the field");
            }
            else {
                obj.connectivity = $('#mobCon').val();
            }

            if ($('#mobDim').val() == '') {
                $('#errorMobDim').append("  *fill the field");
            }
            else {
                obj.dimensions = $('#mobDim').val();
            }

            if ($('#mobDc').val() == '') {
                $('#errorMobDc').append("  *fill the field");
            }
            else
            {
                obj.displayColor = $('#mobDc').val();
            }

            if ($('#mobDs').val() == '') {
                $('#errorMObDs').append("  *fill the field");
            } else {
                obj.displaySize = $('#mobDs').val();
            }

            if ($('#mobEnt').val() == '') {
                $('#errorMobEnt').append("  *fill the field");
            } else {
                obj.entertainment = $('#mobEnt').val();
            }

            if ($('#mobMem').val() == '') {
                $('#errorMobMem').append("  *fill the field");
            } else {
                obj.memory = $('#mobMem').val();
            }

            if ($('#mobMsg').val() == '') {
                $('#errorMobMsg').append("  *fill the field");
            } else {
                obj.messaging = $('#mobMsg').val();
            }

            if ($('#mobOf').val() == '') {
                $('#errorMobOf').append("  *fill the field");
            } else {
                obj.operatingFrequency = $('#mobOf').val();
            }

            if ($('#mobOs').val() == '') {
                $('#errorMobOs').append("  *fill the field");
            } else {
                obj.oS = $('#mobOs').val();
            }

            if ($('#mpn').val() == '') {
                $('#errorMpn').append("  *fill the field");
            }

            if ($('#condition').val() == '') {
                $('#errorCondition').append("  *fill the field");
            } else {
                obj.otherfeatures = $('#mpn').val() + " , " + $('#condition').val();
            }

            if ($('#mobPro').val() == '') {
                $('#errorMobPro').append("  *fill the field");
            } else {
                obj.processor = $('#mobPro').val();
            }

            if ($('#mobWeight').val() == '') {
                $('#errorMObWeight').append("  *fill the field");
            } else {
                obj.weight = $('#mobWeight').val();
            }

            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            } else {
                obj.detail = $('#detail').val();
            }
  
            obj.storeID = sId;
            obj.ringTones = '';
            
            if (obj.battery != null && obj.brand != null && obj.browser != null && obj.camera != null && obj.colors != null && obj.connectivity != null && obj.detail != null && obj.dimensions != null && obj.displayColor != null && obj.displaySize != null && obj.entertainment != null && obj.memory != null && obj.messaging != null && obj.operatingFrequency != null && obj.oS != null && obj.price != null && obj.processor != null && obj.ringTones != null && obj.title != null && obj.weight != null) {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addMobileInfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;
                    $('#mobBrand').val() = '';
                    $('#title').val() = '';
                    $('#mobBattery').val() = '';
                    $('#price').val() = '';
                    $('#mobBro').val() = '';
                    $('#mobCpx').val() = '';
                    $('#mobColor').val() = '';
                    $('#mobCon').val() = '';
                    $('#mobDim').val() = '';
                    $('#mobDc').val() = '';
                    $('#mobDs').val() = '';
                    $('#mobEnt').val() = '';
                    $('#mobMem').val() = '';
                    $('#mobMsg').val() = '';
                    $('#mobOf').val() = '';
                    $('#mobOs').val() = '';
                    $('#mpn').val() = '';
                    $('#mobPro').val() = '';
                    $('#mobWeight').val() = '';
                    $('#detail').val() = '';
                    //alert($rootScope.newProd.status);
                    $('#myModalAddProduct').modal('hide');
                    //$scope.uploadFilesProduct($rootScope.newProd.mobileID, file1, file2, file3, file4);
                    //alert("END");
                })
               .error(function (err) {
                   alert("ERROR in adding Product . " + err);
               })
            }

        }

        
        $scope.addMotorcycle = function (sId) {

            var obj = {};
            //if ($('#sCatV').val() == '') {
            //    $('#errorSubCat').append("  *fill the field");
            //}
            if ($('#title').val() == '') {
                $('#errorTitle').append("  *fill the field");
            }
            else {
                obj.title = $('#title').val();
            }
            if ($('#price').val() == '') {
                $('#errormCPrice').append("  *fill the field");
            } else {
                if (!$.isNumeric($('#price').val())) {
                    alert('Not integer');
                }
                else {
                    obj.price = $('#price').val();
                }
            }
            if ($('#mpn').val() == '') {
                $('#errorMpn').append("  *fill the field");
            }else
            {

            }
            if ($('#com').val() == '') {
                $('#errorCom').append("  *fill the field");
            } else {
                obj.country = $('#com').val();
            }
            if ($('#mcYr').val() == '') {
                $('#errorMcYr').append("  *fill the field");
            } else {
                if (!$.isNumeric($('#mcYr').val())) {
                    alert('Not integer');
                }
                else {
                    obj.year = $('#mcYr').val();
                }
            }
            if ($('#mcKm').val() == '') {
                $('#errormcKm').append("  *fill the field");
            } else {
                if (!$.isNumeric($('#mcKm').val())) {
                    alert('Not integer');
                }
                else {
                    obj.kMDrivenYet = $('#mcKm').val();
                }
            }
            if ($('#mcModel').val() == '') {
                $('#errormcModel').append("  *fill the field");
            } else {
                
            }
            if ($('#detail').val() == '') {
                $('#errorDetail').append("  *fill the field");
            }else{
                obj.detail = $('#detail').val();
            }

            obj.subCategoryID = $('#sCatV').val();
            obj.storeID = sId;
                
            if (obj.country != null && obj.detail != null && obj.kMDrivenYet != null && obj.price != null && obj.title != null && obj.year != null) {
                var req4 = {
                    method: 'POST',
                    url: "http://shopbox.apphb.com/addMotorCycleInfo",
                    data: obj
                }
                $http(req4)

                .success(function (resp, data) {
                    $rootScope.newProd = resp;
                    $('#title').val() = '';
                    $('#price').val() = '';
                    $('#com').val() = '';
                    $('#mcYr').val() = '';
                    $('#mcKm').val() = '';
                    $('#detail').val() = '';
                    $('#myModalAddProduct').modal('hide');
                    //alert($rootScope.newProd.status);
                    //$scope.uploadFilesProduct($rootScope.newProd.motorCycleID, file1, file2, file3, file4);
                    //alert("END");
                })
                .error(function (err) {
                    alert("ERROR in adding Product . " + err);
                })
            }
            
        }

        $scope.addProductM = function (sId) {

            var sCID = $('#sCatV').val();
            if (sCID == 1 || sCID == 2 || sCID == 3 || sCID == 4 || sCID == 5) {
                $scope.addStroller(sId);
            }
            else if (sCID == 25) {
                $scope.addBook(sId);
            }
            else if (sCID == 9 || sCID == 10) {
                $scope.addCamera(sId);
            }
            else if (sCID == 19 || sCID == 20) {
                $scope.addCloth(sId);
            }
            else if (sCID == 22) {
                $scope.addFood(sId);
            }
            else if (sCID == 21) {
                $scope.addFurniture(sId);
            }
            else if (sCID == 24) {
                $scope.addHomeDecor(sId);
            }
            else if (sCID == 26) {
                $scope.addJewellery(sId);
            }
            else if (sCID == 23) {
                $scope.addKitchen(sId);
            }
            else if (sCID == 27) {
                $scope.addMakeup(sId);
            }
            else if (sCID == 6 || sCID == 7 || sCID == 8) {
                $scope.addMotorcycle(sId);
            }
            else if (sCID == 11 || sCID == 12 || sCID == 13 || sCID == 14 || sCID == 15 || sCID == 16 || sCID == 17 || sCID == 18) {
                $scope.addMobile(sId);
            }
            
        }

        $scope.deleteSpecificStore = function (storeId) {
            //alert("store id " + storeId);
            var req3 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/deleteStore?storeID=" + storeId
            }
            $http(req3)
            .success(function (resp, data) {
                //alert("store deleted" + storeId);
                $state.go("account.Home");
            })
           .error(function (err) {
               alert("Error in deleting store " + storeId);
           })

        }

        $scope.writeStoreReview = function (uid, sid, mid) {
            var obj = {};
            obj.userID = uid;
            obj.marketID = mid;
            obj.storeID = sid;
            obj.review = $('#revS').val();
            obj.rating = $('#rateS').val();

            var req23 = {
                method: 'POST',
                url: "http://shopbox.apphb.com/writeStoreReview",
                data: obj
            }
            $http(req23)

           .success(function (resp, data) {

               $rootScope.storeRevMsg = resp;
               $('#revS').val() = '';
               $('#rateS').val() = '';
               $('#myModalStoreRev').modal('hide');
               //alert($rootScope.storeRevMsg.status);
           })
           .error(function (err) {
               alert("There is some problem in writing review to store . " + err);
           })
        }

        $scope.writeProductReviewClick = function (pid) {
            $scope.clickedProductId = pid;
            $('#myModalProductRev').modal();
        }
       
        $scope.createNewStore = function (uid) {

            //alert("File Sending");

            //alert("Store name : " + uid + $('#sN').val() + $('#add').val() + $('#detail').val() + $('#mN').val() + $('#cN').val())
            var obj = {};
            if ($('#sN').val() == '') {
                $('#errorOfStoreName').append("  *fill the field");
            } else {
                obj.storeName = $('#sN').val();
            }
            if ($('#add').val() == '') {
                $('#errorOfAddressName').append("  *fill the field");
            } else {
                obj.storeAddress = $('#add').val();
            }
            if ($('#detail').val() == '') {
                $('#errorOfDetail').append("  *fill the field");
            } else {
                obj.description = $('#detail').val();
            }
            if ($('#mN').val() == '') {
                $('#errorOfmarketName').append("  *fill the field");
            } else {
                obj.marketName = $('#mN').val();
            }

            obj.merchantID = uid;
            obj.cityID = $('#cN').val();
            var req71 = {
                method: 'POST',
                url: "http://shopbox.apphb.com/createStoreInfo",
                data: obj
            }
            $http(req71)
            .success(function (resp, data) {
                //alert("store created");
                $('#sN').val() = '';
                $('#add').val() = '';
                $('#detail').val() = '';
                $('#mN').val() = '';
                $('#myModalCreateStore').modal('hide');
                $scope.newCreatedStoreId = resp;
                //$scope.uploadFilesCreateNewStore($scope.newCreatedStoreId.storeID, file1);

            })
        .error(function (err) {
            alert("Store Not created.");
        })
        }

        
    }]);
