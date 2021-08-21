import { BaseComponent } from './../components.js';

export class Sheet extends BaseComponent<HTMLElement>{
    constructor(){
        super(`
        <div class="sheet">
            <div class="sheet__container"></div>
            <input type="file" class="sheet__fileLoader" />
        </div>`)
    }
}