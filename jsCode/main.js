import { Sheet } from './components/sheet/sheet.js';
import { PageComponent } from './components/page/page.js';
import { Panel } from './components/panel/panel.js';
var onPlayMusic = function (music, className) {
    var audio = new Audio("/music/" + music + ".mp3");
    var playList = document.querySelector("." + className);
    audio.play();
    audio.addEventListener("ended", function () {
        playList.classList.remove("play");
    });
};
var onPlayBtn = function (className) {
    var playList = document.querySelector("." + className);
    playList.classList.add("play");
};
var App = /** @class */ (function () {
    function App(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        var panel = new Panel();
        this.page.addChild(panel);
        var sheet = new Sheet();
        this.page.addChild(sheet);
        window.addEventListener("keypress", function (e) {
            switch (e.code) {
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
                    onPlayMusic("도", "_do");
                    break;
                default:
                    return;
            }
        });
    }
    return App;
}());
new App(document.querySelector('.document'));
