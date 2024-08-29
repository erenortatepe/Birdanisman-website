var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http) {
    $scope.form = {};

    $scope.submitForm = function () {
        $http({
            method: 'POST',
            url: '',
            data: {
                AdSoyad: $scope.form.name,
                Email: $scope.form.email,
                Phone: $scope.form.phone,
                SirketAdi: $scope.form.company,
                Mesaj: $scope.form.message
            }
        }).then(function (response) {
            alert('Mesaj başarıyla gönderildi.');
        }, function (error) {
            alert('Mesaj gönderilemedi. Hata: ' + error.data);
        });
    };
});