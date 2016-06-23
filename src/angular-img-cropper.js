(function (angular, $) {
  'use strict';

  var mod = angular.module('angular-img-cropper', []);
  
  mod.factory('__extends', function () {
    
    var __extends = __extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }

      __.prototype = b.prototype;
      d.prototype = new __();
    };

    return __extends;    
  });
  
})(angular, angular.element);

