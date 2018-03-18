const keyboard = {
    topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
};

function createLayout() {
    const parent = document.querySelector('.keyboard');
    const frag = document.createDocumentFragment();
    for (let key in keyboard) {
        for (let i = 0; i < keyboard[key].length; i++) {
            const el = document.createElement('div');
            el.textContent = `${keyboard[key][i]}`;
            frag.appendChild(el);
        }
        let br = document.createElement('br');
        frag.appendChild(br);
    }
    parent.appendChild(frag);
}
createLayout();