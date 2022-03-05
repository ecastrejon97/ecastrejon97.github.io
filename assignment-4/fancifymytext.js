const biggerBtn = document.querySelector('#bigger');
const fancy = document.querySelector('#fancy');
const boring = document.querySelector('#boring');
const txtArea = document.querySelector('textarea');
const moo = document.querySelector('#moo');

biggerBtn.onclick = (e) => {
    e.target.style.fontSize = "24px";
};

fancy.onchange = (e) => {
    txtArea.style.fontWeight = 'bold';
    txtArea.style.color = 'blue';
    txtArea.style.textDecoration = 'underline';
}

boring.onchange = (e) => {
    txtArea.removeAttribute('style');
}

moo.onclick = (e) => {
    let text = txtArea.value;
    let sentences = text.split('.');
    txtArea.value = sentences.join("-Moo.");
}