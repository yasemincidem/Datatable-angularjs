/**
 * Created by yasemin on 12/9/2015.
 */
angular.module("AppController", [])
    .controller("TableCtrl", function ($scope, $log, TableFactory) {

        $scope.data = TableFactory;
        $scope.selectedRow = {};
        $scope.showModal = false;

        $scope.Edit = function (index) {
            console.log($scope.showModal)
            $scope.selectedRow = index;
            $scope.showModal = !$scope.showModal;


            $scope.name = $scope.data[$scope.selectedRow].name;
            $scope.lastname = $scope.data[$scope.selectedRow].surname;
            $scope.age = $scope.data[$scope.selectedRow].email;
            $scope.email = $scope.data[$scope.selectedRow].age;
            $scope.status = $scope.data[$scope.selectedRow].status;
            $scope.country = $scope.data[$scope.selectedRow].country;


            $scope.Close = function () {
                $scope.showModal = false;
            }

            $scope.Save = function () {
                this.data[$scope.selectedRow].name = this.name;
                this.data[$scope.selectedRow].surname = this.lastname;
                this.data[$scope.selectedRow].email = this.email;
                this.data[$scope.selectedRow].age = this.age;
                this.data[$scope.selectedRow].status = this.status;
                this.data[$scope.selectedRow].country = this.country;
                newData = [this.name, this.lastname, this.email, this.age, this.status, this.country]
                this.data = newData;
            }

        };
        $scope.removeRow = function (name) {
            var index = -1;
            var comArr = $scope.data;
            for (var i in comArr) {
                if ($scope.data[i].name === name) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("something gone wrong");
            }
            $scope.data.splice(index, 1);
        };
    })