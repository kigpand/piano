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
        [new PanelKey("도","도", "do"),
        new PanelKey("시","시", "si"),
        new PanelKey("라","라", "ra"),
        new PanelKey("솔","솔", "sol"),
        new PanelKey("파","파", "pa"),
        new PanelKey("미","미", "mi"),
        new PanelKey("레","레", "re"),
        new PanelKey("도","도_", "low_Do")];

        addToKeys(Music, key);

    }
}