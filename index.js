let display = document.getElementById('display');

let calci = Array.from(document.getElementsByClassName('calci'));
calci.map( calci => {
    calci.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText=" ";
                break;
            case '=':
                display.innerText=eval(display.innerText);
                break;
            default:
                display.innerText+=e.target.innerText;
        }
    })
})