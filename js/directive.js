/**
 * Created by yasemin on 12/9/2015.
 */
angular.module("AppDirective", [])
    .directive("search", function () {
        return {
            retrict: "E",
            template: "<div>Search:<input type='text' ng-model='search'></div>"
        }
    })
    .directive("modal", function () {
        return {
            restrict: "E",
            animation: true,
            templateUrl: "partialmodal.html",
        }
    })