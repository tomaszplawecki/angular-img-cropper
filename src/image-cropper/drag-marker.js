
(function (angular, $, mod) {
  'use strict';

  mod.factory('DragMarker', function (Handle, __extends, PointPool) {
    var DragMarker = (function (_super) {
      __extends(DragMarker, _super);
      function DragMarker(x, y, radius, color) {
        _super.call(this, x, y, radius);
        this.iconPoints = new Array();
        this.scaledIconPoints = new Array();
        this.getDragIconPoints(this.iconPoints, 1);
        this.getDragIconPoints(this.scaledIconPoints, 1.2);
        this.color = color || 'rgba(90, 90, 90, 0.75)';
      }

      DragMarker.prototype.draw = function (ctx) {
        if (this.over || this.drag) {
          this.drawIcon(ctx, this.scaledIconPoints);
        }
        else {
          this.drawIcon(ctx, this.iconPoints);
        }
      };
      DragMarker.prototype.getDragIconPoints = function (arr, scale) {
        var maxLength = 17 * scale;
        var arrowWidth = 14 * scale;
        var arrowLength = 8 * scale;
        var connectorThroat = 4 * scale;
        arr.push(PointPool.instance.borrow(-connectorThroat / 2, maxLength - arrowLength));
        arr.push(PointPool.instance.borrow(-arrowWidth / 2, maxLength - arrowLength));
        arr.push(PointPool.instance.borrow(0, maxLength));
        arr.push(PointPool.instance.borrow(arrowWidth / 2, maxLength - arrowLength));
        arr.push(PointPool.instance.borrow(connectorThroat / 2, maxLength - arrowLength));
        arr.push(PointPool.instance.borrow(connectorThroat / 2, connectorThroat / 2));
        arr.push(PointPool.instance.borrow(maxLength - arrowLength, connectorThroat / 2));
        arr.push(PointPool.instance.borrow(maxLength - arrowLength, arrowWidth / 2));
        arr.push(PointPool.instance.borrow(maxLength, 0));
        arr.push(PointPool.instance.borrow(maxLength - arrowLength, -arrowWidth / 2));
        arr.push(PointPool.instance.borrow(maxLength - arrowLength, -connectorThroat / 2));
        arr.push(PointPool.instance.borrow(connectorThroat / 2, -connectorThroat / 2));
        arr.push(PointPool.instance.borrow(connectorThroat / 2, -maxLength + arrowLength));
        arr.push(PointPool.instance.borrow(arrowWidth / 2, -maxLength + arrowLength));
        arr.push(PointPool.instance.borrow(0, -maxLength));
        arr.push(PointPool.instance.borrow(-arrowWidth / 2, -maxLength + arrowLength));
        arr.push(PointPool.instance.borrow(-connectorThroat / 2, -maxLength + arrowLength));
        arr.push(PointPool.instance.borrow(-connectorThroat / 2, -connectorThroat / 2));
        arr.push(PointPool.instance.borrow(-maxLength + arrowLength, -connectorThroat / 2));
        arr.push(PointPool.instance.borrow(-maxLength + arrowLength, -arrowWidth / 2));
        arr.push(PointPool.instance.borrow(-maxLength, 0));
        arr.push(PointPool.instance.borrow(-maxLength + arrowLength, arrowWidth / 2));
        arr.push(PointPool.instance.borrow(-maxLength + arrowLength, connectorThroat / 2));
        arr.push(PointPool.instance.borrow(-connectorThroat / 2, connectorThroat / 2));
      };
      DragMarker.prototype.drawIcon = function (ctx, points) {
        ctx.beginPath();
        ctx.moveTo(points[0].x + this.position.x, points[0].y + this.position.y);
        for (var k = 0; k < points.length; k++) {
          var p = points[k];
          ctx.lineTo(p.x + this.position.x, p.y + this.position.y);
        }
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      };
      DragMarker.prototype.recalculatePosition = function (bounds) {
        var c = bounds.getCentre();
        this.setPosition(c.x, c.y);
        PointPool.instance.returnPoint(c);
      };
      return DragMarker;
    })(Handle);

    return DragMarker;
  });

})(angular, angular.element, angular.module('angular-img-cropper'));