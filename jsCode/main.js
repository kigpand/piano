import { Sheet } from './components/sheet/sheet.js';
import { PageComponent } from './components/page/page.js';
import { Panel } from './components/panel/panel.js';
var App = /** @class */ (function () {
    function App(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        var panel = new Panel();
        this.page.addChild(panel);
        var sheet = new Sheet();
        this.page.addChild(sheet);
    }
    return App;
}());
new App(document.querySelector('.document'));
