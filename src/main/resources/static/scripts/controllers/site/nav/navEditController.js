app.controller('navEditCtrl', function ($scope, apiHandler, $rootScope) {

    $scope.data = {};
    $scope.id = $rootScope.dataId;

    $scope.editData = () => {
        //check in user-interface Layer (client side).
        if ($scope.data.title === undefined || $scope.data.title == null || $scope.data.title === "") {
            Swal.fire('Please enter title!!');
            return;
        }
        if ($scope.data.link === undefined || $scope.data.link == null || $scope.data.link === "") {
            Swal.fire('Please enter link!!');
            return;
        }

        if ($scope.data.enable === undefined || $scope.data.enable == null) {
            Swal.fire('Please set enable!!');
            return;
        }

        apiHandler.callPut("nav/", $scope.data, (response) => {
            $scope.changeMenu("nav-list");
        }, (error) => {
        }, true);
    };

//better is give data from database because Maybe someone else is changing the data.
    $scope.getData = () => {
        apiHandler.callGet("nav/" + $scope.id, (response) => {
            $scope.data = response.dataList[0];
        }, (error) => {

        }, true)
    };

    $scope.getData();

});