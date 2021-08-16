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
var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent() {
        return _super.call(this, '<div class="page"></div>') || this;
    }
    PageComponent.prototype.addChild = function (child) {
        var page = document.querySelector('.page');
        child.attachTo(page);
    };
    return PageComponent;
}(BaseComponent));
export { PageComponent };
