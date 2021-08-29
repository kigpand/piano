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
import { PanelKey } from './PanelKey.js';
var addToKeys = function (music, key) {
    music.map(function (v) {
        v.attachTo(key);
    });
};
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        var _this = _super.call(this, "\n        <div class=\"panel\">\n            <div class=\"panel__options\"></div>\n            <div class=\"panel__key\"></div>\n        </div>") || this;
        var key = _this.element.querySelector(".panel__key");
        var Music = [new PanelKey("도", "도", "do"),
            new PanelKey("시", "시", "si"),
            new PanelKey("라", "라", "ra"),
            new PanelKey("솔", "솔", "sol"),
            new PanelKey("파", "파", "pa"),
            new PanelKey("미", "미", "mi"),
            new PanelKey("레", "레", "re"),
            new PanelKey("도", "도_", "low_Do")];
        addToKeys(Music, key);
        return _this;
    }
    return Panel;
}(BaseComponent));
export { Panel };
