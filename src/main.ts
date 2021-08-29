import { Sheet } from './components/sheet/sheet.js';
import { PageComponent } from './components/page/page.js';
import { Panel } from './components/panel/panel.js';

const onPlayMusic = (music: string, className: string):void =>{
    const audio = new Audio(`/music/${music}.mp3`)! as HTMLMediaElement;
    const playList = document.querySelector(`.${className}`)! as HTMLElement;

    audio.play();
    audio.addEventListener("ended", () =>{
        playList.classList.remove("play");
    })
}

const onPlayBtn = (className: string) =>{
    const playList = document.querySelector(`.${className}`)! as HTMLElement;
    playList.classList.add("play");
}

class App{
    private readonly page;
    constructor(appRoot : HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const panel = new Panel();
        this.page.addChild(panel);

        const sheet = new Sheet();
        this.page.addChild(sheet);

        window.addEventListener("keypress", (e) =>{  
            switch(e.code){
                case "KeyA":
                    onPlayBtn("_low_Do");
                    onPlayMusic("도_", "_low_Do");
                    break;
                case "KeyS":
                    onPlayBtn("_re");
                    onPlayMusic("레", "_re");
                    break;
                case "KeyD":
                    onPlayBtn("_mi");
                    onPlayMusic("미", "_mi");
                    break;
                case "KeyF":
                    onPlayBtn("_pa");
                    onPlayMusic("파", "_pa");
                    break;
                case "KeyG":
                    onPlayBtn("_sol");
                    onPlayMusic("솔", "_sol");
                    break;
                case "KeyH":
                    onPlayBtn("_ra");
                    onPlayMusic("라", "_ra");
                    break;
                case "KeyJ":
                    onPlayBtn("_si");
                    onPlayMusic("시", "_si");
                    break;
                case "KeyK":
                    onPlayBtn("_do");
                    onPlayMusic("도" , "_do");
                    break;
                default:
                    return;
            }            
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement);

