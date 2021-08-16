import { BaseComponent } from './../components.js';

export class Sheet extends BaseComponent<HTMLElement>{
    constructor(){
        super('<div class="sheet">시트</div>')
    }
}