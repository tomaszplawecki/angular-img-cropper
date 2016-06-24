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

  
});