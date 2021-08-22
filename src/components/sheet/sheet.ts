import { SheetViewer } from './sheetViewer.js';
import { BaseComponent } from './../components.js';
import { SheetHeader } from './sheetHeader.js';


export class Sheet extends BaseComponent<HTMLElement>{
    constructor(){
        super(`
        <div class="sheet">
        </div>`)

        const sheet = this.element! as HTMLElement;
        const header = new SheetHeader();
        const viewer = new SheetViewer();

        viewer.attachTo(sheet);
        header.attachTo(sheet);
        
    }
}