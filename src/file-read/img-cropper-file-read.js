
(function (angular, $, mod) {
  'use strict';

  mod.directive("imgCropperFileread", function ($timeout) {
    return {
      scope: {
        image: "="
      },
      link: function (scope, element) {
        element.bind("change", function (changeEvent) {
          var reader = new FileReader();
          var eventThis = this;
          reader.onload = function (loadEvent) {
            $timeout(function () {
              var thisHook = eventThis;
              scope.image = {
                'imageData': loadEvent.target.result,
                'fileType': thisHook.fileType
              };
            }, 0);
          };
          if (changeEvent.target.files[0]) {
            eventThis.fileType = changeEvent.target.files[0].type;
            reader.readAsDataURL(changeEvent.target.files[0]);
          }
        });
      }
    };
  });

  
})(angular, angular.element, angular.module('angular-img-cropper'));