angular.module("eLearningApp")
    .controller("specificProductCtrl", function ($rootScope, $scope, $state, $http) {

        if ($rootScope.toSpecificProductFromStore == 1)
        {
            $rootScope.oneProduct = $rootScope.specificProduct;
            $rootScope.prodN = $rootScope.pName;

            if ($rootScope.oneProduct.productName == "Baby Stroller") {
                $rootScope.prod = $rootScope.oneProduct.babyStroller.productID;
                $rootScope.prodS = $rootScope.oneProduct.babyStroller.stroreID;
            }
            if ($rootScope.oneProduct.productName == "Books") {
                $rootScope.prod = $rootScope.oneProduct.book.productID;
                $rootScope.prodS = $rootScope.oneProduct.book.storeID;
            }
            if ($rootScope.oneProduct.productName == "Camera") {
                $rootScope.prod = $rootScope.oneProduct.camera.productID;
                $rootScope.prodS = $rootScope.oneProduct.camera.storeID;
            }
            if ($rootScope.oneProduct.productName == "Clothes") {
                $rootScope.prod = $rootScope.oneProduct.cloth.productID;
                $rootScope.prodS = $rootScope.oneProduct.cloth.storeID;
            }
            if ($rootScope.oneProduct.productName == "Food") {
                $rootScope.prod = $rootScope.oneProduct.food.productID;
                $rootScope.prodS = $rootScope.oneProduct.food.storeID;
            }
            if ($rootScope.oneProduct.productName == "Furniture") {
                $rootScope.prod = $rootScope.oneProduct.furniture.productID;
                $rootScope.prodS = $rootScope.oneProduct.furniture.storeID;
            }
            if ($rootScope.oneProduct.productName == "HomeDecor") {
                $rootScope.prod = $rootScope.oneProduct.HomeDecor.productID;
                $rootScope.prodS = $rootScope.oneProduct.HomeDecor.storeID;
            }
            if ($rootScope.oneProduct.productName == "Jwelery") {
                $rootScope.prod = $rootScope.oneProduct.jwellery.productID;
                $rootScope.prodS = $rootScope.oneProduct.jwellery.storeID;
            }
            if ($rootScope.oneProduct.productName == "Kitchen") {
                $rootScope.prod = $rootScope.oneProduct.kitchen.productID;
                $rootScope.prodS = $rootScope.oneProduct.kitchen.storeID;
            }
            if ($rootScope.oneProduct.productName == "Makeup") {
                $rootScope.prod = $rootScope.oneProduct.makeup.productID;
                $rootScope.prodS = $rootScope.oneProduct.makeup.storeID;
            }
            if ($rootScope.oneProduct.productName == "Mobile") {
                $rootScope.prod = $rootScope.oneProduct.mobile.productID;
                $rootScope.prodS = $rootScope.oneProduct.mobile.storeID;
            }
            if ($rootScope.oneProduct.productName == "MotorCycle") {
                $rootScope.prod = $rootScope.oneProduct.motorCycle.productID;
                $rootScope.prodS = $rootScope.oneProduct.motorCycle.storeID;
            }
            //alert($rootScope.oneProduct.productName + " , " + $rootScope.prod);


            //$rootScope.imgSrc6 = "http://shopbox.apphb.com/GetProductImage?imageId=" + $rootScope.prod;
            $rootScope.imgSrc7 = "http://shopbox.apphb.com/GetProductImage1?imageId=" + $rootScope.prod;
            $rootScope.imgSrc8 = "http://shopbox.apphb.com/GetProductImage2?imageId=" + $rootScope.prod;
            $rootScope.imgSrc9 = "http://shopbox.apphb.com/GetProductImage3?imageId=" + $rootScope.prod;
            $rootScope.imgSrc10 = "http://shopbox.apphb.com/GetProductImage4?imageId=" + $rootScope.prod;
            

            $rootScope.toSpecificProductFromStore == 0;
        }

        
        $scope.addToCart = function () {

            var obj = {};

            obj.name = $('#name').val();
            obj.address = $('#adres').val();
            obj.contact = $('#contact').val();
            obj.userID = $.cookie('userID');
            obj.productID = $scope.prod;

            var req4 = {
                method: 'POST',
                url: "http://shopbox.apphb.com/shopItForm",
                data: obj
            }
            $http(req4)

            .success(function (resp, data) {
                alert("Product added to your cart");
                obj.name = $('#name').val() = '';
                obj.address = $('#adres').val() = '';
                obj.contact = $('#contact').val() = '';
                $('#myModalshopIt').modal('hide');
                
            })
           .error(function (err) {
               alert("ERROR in adding Product to Cart . " + err);
           })

        }

        $scope.writeProductReview = function (uid , pid , sid) {
            var obj = {};
            obj.userID = uid;
            obj.prodID = pid;
            obj.storeID = sid;
            obj.review = $('#rev').val();
            obj.rating = $('#rate').val();
            //alert(pid + " pid , sid " + sid);
            var req23 = {
                method: 'POST',
                url: "http://shopbox.apphb.com/writeProdReview",
                data: obj
            }
            $http(req23)

           .success(function (resp, data) {
               $rootScope.prodRevMsg = resp;
               $('#rev').val() = '';
               $('#rate').val() = '';
               $('#myModalProductRev').modal('hide');
               
               //alert($rootScope.prodRevMsg.status);
           })
           .error(function (err) {
               alert("There is some problem in writing review to Product . " + err);
           })
        }

        $scope.deleteSpecificProduct = function (pId) {
            //alert("product id " + pId);
            var req3 = {
                method: 'GET',
                url: "http://shopbox.apphb.com/deleteProduct?productID=" + pId
            }
            $http(req3)
            .success(function (resp, data) {
                //alert("product deleted" + pId);
                $state.go("account.Home");
            })
           .error(function (err) {
               alert("Error in deleting product " + pId);
           })

        }

    });
