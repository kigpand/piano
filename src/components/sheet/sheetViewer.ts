import { BaseComponent } from '../components.js';
const ImgArray = ['img/butterfly.png','img/airplane.jpg', 'img/littlestar.jpg'];

const defaultImgArray = (container: HTMLElement,imgArray:Array<string>): void =>{
    
    for(let i = 0;i<imgArray.length;i++){
        const img = document.createElement('img');
        img.classList.add('sheet__image');
        img.src = imgArray[i];
        container.appendChild(img);
    }
}

export class SheetViewer extends BaseComponent<HTMLElement>{
    constructor() {
        super(`<div class="sheet__viewer">
                    <div class="sheet__container"></div>
                </div>`);

        const sheetContainer = this.element.querySelector(".sheet__container")! as HTMLElement;

        defaultImgArray(sheetContainer, ImgArray);
    }
    
}