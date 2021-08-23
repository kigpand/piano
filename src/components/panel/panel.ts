import { BaseComponent } from './../components.js';
import { PanelKey } from './PanelKey.js';

const addToKeys = (music:Array<BaseComponent<HTMLElement>>, key: HTMLElement) =>{
    music.map((v: BaseComponent<HTMLElement>) =>{
        v.attachTo(key);
    })
}

export class Panel extends BaseComponent<HTMLElement>{
    constructor(){
        super(`
        <div class="panel">
            <div class="panel__options"></div>
            <div class="panel__key"></div>
        </div>`);

        const key = this.element.querySelector(".panel__key")! as HTMLElement;
        const Music: Array<BaseComponent<HTMLElement>> = 
        [new PanelKey("도","도"),
        new PanelKey("시","시"),
        new PanelKey("라","라"),
        new PanelKey("솔","솔"),
        new PanelKey("파","파"),
        new PanelKey("미","미"),
        new PanelKey("레","레"),
        new PanelKey("도","도")];

        addToKeys(Music, key);

    }
}