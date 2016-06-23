
(function (angular, $, mod) {
  'use strict';

  mod.factory('imageCropperDataShare', function () {

    var share = {};
    var pressed;
    var over;
    share.setPressed = function (canvas) {
      pressed = canvas;
    };

    share.setReleased = function (canvas) {
      if (canvas === pressed) {
        pressed = undefined;
      }
    };

    share.setOver = function (canvas) {
      over = canvas;
    };

    share.setStyle = function (canvas, style) {
      if (pressed !== undefined) {
        if (pressed === canvas) {
          angular.element(document.documentElement).css('cursor', style);
        }
      }
      else {
        if (canvas === over) {
          angular.element(document.documentElement).css('cursor', style);
        }
      }
    };
    return share;

  });

})(angular, angular.element, angular.module('angular-img-cropper'));