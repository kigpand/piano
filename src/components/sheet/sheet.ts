import { BaseComponent } from './../components.js';

const ImgArray = ['img/butterfly.png','img/airplane.jpg', 'img/littlestar.jpg'];

const defaultImgArray = (container: HTMLElement,imgArray:Array<string>): void =>{
    
    for(let i = 0;i<imgArray.length;i++){
        const img = document.createElement('img');
        img.classList.add('sheet__image');
        img.src = imgArray[i];
        container.appendChild(img);
    }
}

export class Sheet extends BaseComponent<HTMLElement>{
    constructor(){
        super(`
        <div class="sheet">
            <div class="sheet__fileInputer">파일 넣을곳</div>
            <input type="file" multiple class="sheet__fileLoader" accept=".jpg, .jpeg, .png"/>
            <div class="sheet__viewer">
                <div class="sheet__container"></div>
            </div>
        </div>`)

        const fileInputer = this.element.querySelector(".sheet__fileInputer")! as HTMLElement;
        const fileLoader = this.element.querySelector(".sheet__fileLoader")! as HTMLElement;
        const sheetContainer = this.element.querySelector(".sheet__container")! as HTMLElement;
        defaultImgArray(sheetContainer, ImgArray);
        fileInputer.addEventListener("click",()=>{
            fileLoader.click();
        })

        fileLoader.addEventListener("change", (e: Event) =>{
            while(sheetContainer.hasChildNodes()){
                sheetContainer.removeChild(sheetContainer.firstChild! as HTMLElement);
            }
            const files = (<HTMLInputElement>e.target).files! as FileList;
            for(let i = 0; i<files.length; i++){
                const img = document.createElement('img');
                img.classList.add('sheet__image');
                img.src = URL.createObjectURL(files[i]);
                sheetContainer.appendChild(img);
            }
        })
        
    }
}