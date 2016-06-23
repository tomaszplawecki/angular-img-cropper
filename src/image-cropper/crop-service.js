
(function (angular, $, mod) {
  'use strict';

  mod.factory('CropService', function () {

    function CropService() {
    }

    CropService.init = function (canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
    };
    CropService.DEG2RAD = 0.0174532925;
    return CropService;

  });

})(angular, angular.element, angular.module('angular-img-cropper'));