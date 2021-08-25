import { BaseComponent } from '../components.js';


export class PanelKey extends BaseComponent<HTMLElement>{
    constructor(symbol: string, music: string){
        super(`<div class="panel__symbol"></div>${symbol}</div>`);

        const panelSymbol = this.element! as HTMLElement;
        panelSymbol.addEventListener("click", () =>{
            console.log(music);
            const audio = new Audio(`/music/${music}.mp3`);
            audio.play();
        })
    }
}