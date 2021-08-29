import { BaseComponent } from './../components.js';
const IMG_SIZE = 500;
let IMG_POSITION = 0;
let curPos = 0;

const onAutoPaging = (speed: number) =>{
    let count  = 0;
    const paging = setInterval(()=>{
        console.log("테스트");
        count++;
        if(count === 5){
            clearInterval(paging);
        }
    },speed);
}

export class SheetHeader extends BaseComponent<HTMLElement>{
    constructor(){
        super(`
        <div class="sheet__btns">
            <div class="sheet__selector">
                <div class="sheet__auto">자동</div>
                <div class="sheet__direction">
                    <img src="/img/arrow.png" class="sheet__left"></img>
                    <img src="/img/arrow.png" class="sheet__right"></img>
                </div>
                <select class="sheet__select">
                    <option value="">- 선택 -</option>
                    <option value="1">1배</option>
                    <option value="2">2배</option>
                    <option value="3">3배</option>
                </select>
            </div>
            <img src="/img/upload.png" class="sheet__fileInputer"></img>
            <input type="file" multiple class="sheet__fileLoader" accept=".jpg, .jpeg, .png"/>
        </div>`)

        const direction = this.element.querySelector('.sheet__direction')! as HTMLElement;
        const leftDirection = this.element.querySelector(".sheet__left")! as HTMLElement;
        const rightDirection = this.element.querySelector(".sheet__right")! as HTMLElement;

        const fileInputer = this.element.querySelector(".sheet__fileInputer")! as HTMLElement;
        const fileLoader = this.element.querySelector(".sheet__fileLoader")! as HTMLElement;

        const autoBtn = this.element.querySelector('.sheet__auto')! as HTMLElement;
        const selectBox = this.element.querySelector(".sheet__select")! as HTMLSelectElement;

        leftDirection.addEventListener("click",()=>{
            const sheetContainer = document.querySelector(".sheet__container")! as HTMLElement;
            if(curPos > 0){
                IMG_POSITION += IMG_SIZE;
                sheetContainer.style.transform = `translateX(${IMG_POSITION}px)`;
                curPos = curPos - 1;
            }
        })

        rightDirection.addEventListener("click",()=>{
            const sheetContainer = document.querySelector(".sheet__container")! as HTMLElement;
            const imgLength = sheetContainer.childNodes.length;
            if(curPos < imgLength -1){
                IMG_POSITION -= IMG_SIZE;
                sheetContainer.style.transform = `translateX(${IMG_POSITION}px)`;
                curPos = curPos + 1;
            }
        })

        fileInputer.addEventListener("click",()=>{
            fileLoader.click();
        })
        
        fileLoader.addEventListener("change", (e: Event) =>{
            const sheetContainer = document.querySelector(".sheet__container")! as HTMLElement;
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

        autoBtn.addEventListener("click",()=>{
            if(autoBtn.innerText === "자동"){
                direction.style.visibility = "hidden";
                selectBox.style.visibility = "visible";
                autoBtn.innerText = "수동"
            }
            else{
                direction.style.visibility = "visible";
                selectBox.style.visibility = "hidden";
                autoBtn.innerText = "자동"
            }
        })

        selectBox.addEventListener("change",()=>{
            console.log(selectBox.selectedIndex);
            if(selectBox.selectedIndex === 1){
                onAutoPaging(500);
            }
        })
    }
}