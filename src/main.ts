import { Sheet } from './components/sheet/sheet.js';
import { PageComponent } from './components/page/page.js';
import { Panel } from './components/panel/panel.js';

class App{
    private readonly page;
    constructor(appRoot : HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const panel = new Panel();
        this.page.addChild(panel);

        const sheet = new Sheet();
        this.page.addChild(sheet);
    }
}

new App(document.querySelector('.document')! as HTMLElement);

