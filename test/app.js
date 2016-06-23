var app = angular.module('app', ['angular-img-cropper']);

app.controller("ImageCropperCtrl", function ($scope) {

  this.image = {
    // src: null, /* { fileType: "image/png"; imageData: "data:image/png;base64,..." } */
    src: {
      // fileType: 'image/png',
      imageData: './angular-bakkrunt.png'
    },
    dst: null /* "data:image/png;base64,..." */
  };

  this.cropper = {
    width: 150,
    height: 150,
    keepaspect: true,
    bounds: {
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined
    }
  };

  $scope.$watch('vm.image.src', function(x) {
    console.log('src', x);
  });

  // $scope.$watch('vm.image.dst', function(x) {
  //   console.log('dst', x);
  // });


  // this.bounds = {};
  // this.cropper = {};
  // this.cropper.sourceImage = null;
  // this.cropper.croppedImage = null;
  // this.bounds = {};
  // this.bounds.left = 0;
  // this.bounds.right = 0;
  // this.bounds.top = 0;
  // this.bounds.bottom = 0;
  // this.width = 100;
  // this.height = 200;
  // this.keepaspect = true;

  // $scope.bounds = {};
  // $scope.cropper = {};
  // $scope.cropper.sourceImage = null;
  // $scope.cropper.croppedImage = null;
  // $scope.bounds = {};
  // $scope.bounds.left = 0;
  // $scope.bounds.right = 0;
  // $scope.bounds.top = 0;
  // $scope.bounds.bottom = 0;
  // $scope.width = 100;
  // $scope.height = 200;
  // $scope.keepaspect = false;
});