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
var IMG_SIZE = 500;
var IMG_POSITION = 0;
var curPos = 0;
var onAutoPaging = function (speed) {
    var count = 0;
    var paging = setInterval(function () {
        console.log("테스트");
        count++;
        if (count === 5) {
            clearInterval(paging);
        }
    }, speed);
};
var SheetHeader = /** @class */ (function (_super) {
    __extends(SheetHeader, _super);
    function SheetHeader() {
        var _this = _super.call(this, "\n        <div class=\"sheet__btns\">\n            <div class=\"sheet__selector\">\n                <div class=\"sheet__auto\">\uC790\uB3D9</div>\n                <div class=\"sheet__direction\">\n                    <img src=\"/img/arrow.png\" class=\"sheet__left\"></img>\n                    <img src=\"/img/arrow.png\" class=\"sheet__right\"></img>\n                </div>\n                <select class=\"sheet__select\">\n                    <option value=\"\">- \uC120\uD0DD -</option>\n                    <option value=\"1\">1\uBC30</option>\n                    <option value=\"2\">2\uBC30</option>\n                    <option value=\"3\">3\uBC30</option>\n                </select>\n            </div>\n            <img src=\"/img/upload.png\" class=\"sheet__fileInputer\"></img>\n            <input type=\"file\" multiple class=\"sheet__fileLoader\" accept=\".jpg, .jpeg, .png\"/>\n        </div>") || this;
        var direction = _this.element.querySelector('.sheet__direction');
        var leftDirection = _this.element.querySelector(".sheet__left");
        var rightDirection = _this.element.querySelector(".sheet__right");
        var fileInputer = _this.element.querySelector(".sheet__fileInputer");
        var fileLoader = _this.element.querySelector(".sheet__fileLoader");
        var autoBtn = _this.element.querySelector('.sheet__auto');
        var selectBox = _this.element.querySelector(".sheet__select");
        leftDirection.addEventListener("click", function () {
            var sheetContainer = document.querySelector(".sheet__container");
            if (curPos > 0) {
                IMG_POSITION += IMG_SIZE;
                sheetContainer.style.transform = "translateX(" + IMG_POSITION + "px)";
                curPos = curPos - 1;
            }
        });
        rightDirection.addEventListener("click", function () {
            var sheetContainer = document.querySelector(".sheet__container");
            var imgLength = sheetContainer.childNodes.length;
            if (curPos < imgLength - 1) {
                IMG_POSITION -= IMG_SIZE;
                sheetContainer.style.transform = "translateX(" + IMG_POSITION + "px)";
                curPos = curPos + 1;
            }
        });
        fileInputer.addEventListener("click", function () {
            fileLoader.click();
        });
        fileLoader.addEventListener("change", function (e) {
            var sheetContainer = document.querySelector(".sheet__container");
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
        autoBtn.addEventListener("click", function () {
            if (autoBtn.innerText === "자동") {
                direction.style.visibility = "hidden";
                selectBox.style.visibility = "visible";
                autoBtn.innerText = "수동";
            }
            else {
                direction.style.visibility = "visible";
                selectBox.style.visibility = "hidden";
                autoBtn.innerText = "자동";
            }
        });
        selectBox.addEventListener("change", function () {
            console.log(selectBox.selectedIndex);
            if (selectBox.selectedIndex === 1) {
                onAutoPaging(500);
            }
        });
        return _this;
    }
    return SheetHeader;
}(BaseComponent));
export { SheetHeader };
