import { BaseComponent } from '../components.js';

export class PanelKey extends BaseComponent<HTMLElement>{
    constructor(symbol: string, music: string){
        super(`<div class="panel__symbol">${symbol}</div>`)
    }
}