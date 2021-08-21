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
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet() {
        return _super.call(this, "\n        <div class=\"sheet\">\n            <div class=\"sheet__container\"></div>\n            <input type=\"file\" class=\"sheet__fileLoader\" />\n        </div>") || this;
    }
    return Sheet;
}(BaseComponent));
export { Sheet };
