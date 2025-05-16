function greeting() {
    let i = document.querySelector('input[name="left"]');
    let j = document.querySelector('input[name="right"]');
    let x = Number(i.value);
    let y = Number(j.value);
    let goukei = x + y;
    let p = document.querySelector('span#answer');
    p.textContent = goukei;
}
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);