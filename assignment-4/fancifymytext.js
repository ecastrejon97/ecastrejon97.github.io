const biggerBtn = document.querySelector('#bigger');
const fancy = document.querySelector('#fancy');
const boring = document.querySelector('#boring');
const txtArea = document.querySelector('textarea');
const moo = document.querySelector('#moo');

biggerBtn.onclick = () => {
    txtArea.style.fontSize = "24px";
};

fancy.onchange = () => {
    txtArea.style.fontWeight = 'bold';
    txtArea.style.color = 'blue';
    txtArea.style.textDecoration = 'underline';
}

boring.onchange = () => {
    txtArea.removeAttribute('style');
}

moo.onclick = () => {
    let text = txtArea.value;
    text = text.toUpperCase();
    let sentences = text.split('.');
    txtArea.value = sentences.join("-Moo.");
}