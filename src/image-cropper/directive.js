(function (angular, $, mod) {
  'use strict';

  mod.directive("imageCropper", function ($document, $window, ImageCropper) {
    return {
      scope: {
        image: "=",
        croppedImage: "=",
        cropWidth: "=",
        cropHeight: "=",
        keepAspect: "=",
        touchRadius: "=",
        cropAreaBounds: "=",
        minWidth: "=",
        minHeight: "=",
        enforceCropAspect: "=",
        enforceFileType: "@",
        color: "@"
      },
      restrict: "A",
      link: function (scope, element, attrs) {
        var crop, destroyed = false;
        scope.color = scope.color || 'rgba(90,90,90,0.75)';

        scope.$on('$destroy', function () {
          destroyed = true;
        });
 
        function setup(newValue, oldValue) {
          if (crop && newValue === oldValue) {
            return;
          }

          var canvas = element[0];
          var width = scope.cropWidth;
          var height = scope.cropHeight;
          var keepAspect = scope.keepAspect;
          var touchRadius = scope.touchRadius;
          var oldImage = crop && crop.srcImage;

          crop = new ImageCropper(canvas, canvas.width / 2 - width / 2, canvas.height / 2 - height / 2, width, height, keepAspect, touchRadius, scope, attrs);

          $(canvas).data('crop.angular-img-cropper', crop);

          if (oldImage) {
            crop.setImage(oldImage, scope.image.fileType);
          } else {
            load(scope.image);
          }
        }

        function load(newValue) {
          if (!newValue) {
            return;
          }

          var imageObj = new Image();

          if (attrs.cors !== undefined && attrs.cors !== "no") {
            imageObj.crossOrigin = "Anonymous";
          }

          imageObj.addEventListener("load", function () {
            crop.setImage(imageObj, newValue.fileType);
            scope.$apply();
          }, false);
          imageObj.src = newValue.imageData;
        }

        scope.$watch('cropWidth', setup);
        scope.$watch('cropHeight', setup);
        scope.$watch('keepAspect', setup);
        scope.$watch('touchRadius', setup);

        scope.$watch('image', load);
      }
    };
  });

})(angular, angular.element, angular.module('angular-img-cropper'));