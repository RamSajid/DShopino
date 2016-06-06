

angular.module("eLearningApp", ["ngFileUpload", "ui.router", "ui.bootstrap"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("account", {
                url: "/home",
                abstract: true,
                templateUrl: function () {
                    return "Views/Shared/AccountLayout.html";
                }
            })
            .state("account.Home", {
                url: '',
                templateUrl: function () {
                    return "Views/Main/HomePage.html";
                }
            })
            .state("account.contact", {
                url: "/contactUs",
                templateUrl: function () {
                    return "Views/Main/ContactPage.html";
                }
            })
            .state("account.userLogin", {
                url: "/userLogin",
                templateUrl: "Views/Main/login.html"
            })
            .state("account.userSignUp", {
                url: "/userSignUp",
                templateUrl: "Views/Main/signup.html"
            })
            .state("account.searchResults", {
                url: "/searchResults",
                templateUrl: "Views/Main/searchResults.html"
            })
            .state("account.SpecificCity", {
                url: "/SpecificCity",
                templateUrl: "Views/Main/SpecificCity.html"
            })
            .state("account.SpecificMarket", {
                url: "/SpecificMarket",
                templateUrl: "Views/Main/SpecificMarket.html"
            })
            .state("account.SpecificStore", {
                url: "/SpecificStore",
                templateUrl: "Views/Main/SpecificStore.html"
            })
            .state("account.SpecificProduct", {
                url: "/SpecificProduct",
                templateUrl: "Views/Main/SpecificProduct.html"
            })
            .state("account.SpecificCategory", {
                url: "/SpecificCategory",
                templateUrl: "Views/Main/SpecificCategory.html"
            })
            .state("account.SpecificSubCategory", {
                url: "/SpecificSubCategory",
                templateUrl: "Views/Main/SpecificSubCategory.html"
            })
            .state("account.StoreTag", {
                url: "/StoreTag",
                templateUrl: "Views/Main/StoreTag.html"
            })
            .state("account.Profile", {
                url: "/userProfile",
                templateUrl: "Views/Main/Profile.html"
            })
            .state("account.shoppingCart", {
                url: "/shoppingCart",
                templateUrl: "Views/Main/shoppingCart.html"
            })
            .state("account.orderList", {
                url: "/orderList",
                templateUrl: "Views/Main/orderList.html"
            })
            .state("account.viewAnyUserProfile", {
                url: "/viewUserProfile",
                templateUrl: "Views/Main/viewAnyUserProfile.html"
            })
            .state("account.EX", {
                url: "/EX",
                templateUrl: "Views/Main/ex.html"
            })
        .state("main", {
            url: "/main",
            abstract: true,
            templateUrl: function () {
                return "Views/Shared/MainLayout.html";
            }
        })
            .state("main.index", {
                url: "/index",
                templateUrl: "Views/Main/index.html"
            })
            .state("main.myClasses", {
                url: "/myClasses",
                templateUrl: "Views/Main/myClasses.html"
            })
    })
    