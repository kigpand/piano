import { BaseComponent, Component } from './../components.js';

export interface Page{
    addChild(child: Component):void;
}

export class PageComponent extends BaseComponent<HTMLElement> implements Page{
    constructor(){
        super('<div class="page"></div>')    
    }

    addChild(child: Component){
        const page = document.querySelector('.page')! as HTMLElement;
        child.attachTo(page);
    }
}