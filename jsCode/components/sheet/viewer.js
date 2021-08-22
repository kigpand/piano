var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseComponent } from './../components.js';
var ImgArray = ['img/butterfly.png', 'img/airplane.jpg', 'img/littlestar.jpg'];
var defaultImgArray = function (container, imgArray) {
    for (var i = 0; i < imgArray.length; i++) {
        var img = document.createElement('img');
        img.classList.add('sheet__image');
        img.src = imgArray[i];
        container.appendChild(img);
    }
};
var Viewer = /** @class */ (function (_super) {
    __extends(Viewer, _super);
    function Viewer() {
        var _this = _super.call(this, "<div class=\"sheet__viewer\">\n        <div class=\"sheet__container\"></div>\n    </div>") || this;
        var sheetContainer = _this.element.querySelector(".sheet__container");
        defaultImgArray(sheetContainer, ImgArray);
        return _this;
    }
    return Viewer;
}(BaseComponent));
export { Viewer };
