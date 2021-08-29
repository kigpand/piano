import { BaseComponent } from '../components.js';


export class PanelKey extends BaseComponent<HTMLElement>{
    constructor(symbol: string, music: string, className: string){
        super(`<div class="panel__symbol _${className}">${symbol}</div>`);
        
        const audio = new Audio(`/music/${music}.mp3`);
        const panelSymbol = this.element! as HTMLElement;
        panelSymbol.addEventListener("click", () =>{
            audio.play();
        })
    }
}