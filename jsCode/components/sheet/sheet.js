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
import { SheetViewer } from './sheetViewer.js';
import { BaseComponent } from './../components.js';
import { SheetHeader } from './sheetHeader.js';
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet() {
        var _this = _super.call(this, "\n        <div class=\"sheet\">\n        </div>") || this;
        var sheet = _this.element;
        var header = new SheetHeader();
        var viewer = new SheetViewer();
        viewer.attachTo(sheet);
        header.attachTo(sheet);
        return _this;
    }
    return Sheet;
}(BaseComponent));
export { Sheet };
