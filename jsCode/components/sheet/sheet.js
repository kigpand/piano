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
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet() {
        var _this = _super.call(this, "\n        <div class=\"sheet\">\n            <div class=\"sheet__fileInputer\">\uD30C\uC77C \uB123\uC744\uACF3</div>\n            <input type=\"file\" multiple class=\"sheet__fileLoader\" accept=\".jpg, .jpeg, .png\"/>\n            <div class=\"sheet__viewer\">\n                <div class=\"sheet__container\"></div>\n            </div>\n        </div>") || this;
        var fileInputer = _this.element.querySelector(".sheet__fileInputer");
        var fileLoader = _this.element.querySelector(".sheet__fileLoader");
        var sheetContainer = _this.element.querySelector(".sheet__container");
        defaultImgArray(sheetContainer, ImgArray);
        fileInputer.addEventListener("click", function () {
            fileLoader.click();
        });
        fileLoader.addEventListener("change", function (e) {
            while (sheetContainer.hasChildNodes()) {
                sheetContainer.removeChild(sheetContainer.firstChild);
            }
            var files = e.target.files;
            for (var i = 0; i < files.length; i++) {
                var img = document.createElement('img');
                img.classList.add('sheet__image');
                img.src = URL.createObjectURL(files[i]);
                sheetContainer.appendChild(img);
            }
        });
        return _this;
    }
    return Sheet;
}(BaseComponent));
export { Sheet };
