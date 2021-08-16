import { BaseComponent } from './../components.js';

export class Panel extends BaseComponent<HTMLElement>{
    constructor(){
        super('<div class="panel">패널</div>')
    }
}