var app = angular.module('app', ['angular-img-cropper', 'bakkrunt']);

app.controller("ImageCropCtrl", function (ngBakkrunt) {

  var self = this;

  this.image = {
    // src: null, /* { fileType: "image/png"; imageData: "data:image/png;base64,..." } */
    src: {
      // fileType: 'image/png',
      imageData: ngBakkrunt
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

  this.images = [];

  this.crop = function () {
    self.images.unshift(self.image.dst);
  };

});

