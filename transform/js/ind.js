window.addEventListener('load',code);

function code() {
    document.querySelector('#rigth').addEventListener('click',()=>{
        eliminaClases();
        document.querySelector('.cuadrado').classList.add('rigth');
    })


    document.querySelector('#left').addEventListener('click',()=>{
        eliminaClases();
        document.querySelector('.cuadrado').classList.add('left');
    })

    document.querySelector('#up').addEventListener('click',()=>{
        eliminaClases();
        document.querySelector('.cuadrado').classList.add('up');
    })

    document.querySelector('#down').addEventListener('click',()=>{
        eliminaClases();
        document.querySelector('.cuadrado').classList.add('down');
    })

    document.querySelector('#plus').addEventListener('click',()=>{
        eliminaClases();
        document.querySelector('.cuadrado').classList.add('plus');
    })

    document.querySelector('#small').addEventListener('click',()=>{
        eliminaClases();
        document.querySelector('.cuadrado').classList.add('small');
    })

    document.querySelector('#rotate-right').addEventListener('click',()=>{
        eliminaClases();
        document.querySelector('.cuadrado').classList.add('rotate-right');
    })

    document.querySelector('#rotate-left').addEventListener('click',()=>{
        eliminaClases();
        document.querySelector('.cuadrado').classList.add('rotate-left');
    })






    function eliminaClases() {
        document.querySelector('.cuadrado').classList.remove('rigth');
        document.querySelector('.cuadrado').classList.remove('left');
        document.querySelector('.cuadrado').classList.remove('up');
        document.querySelector('.cuadrado').classList.remove('down');
        document.querySelector('.cuadrado').classList.remove('plus');
        document.querySelector('.cuadrado').classList.remove('small');
        document.querySelector('.cuadrado').classList.remove('rotate-left');
        document.querySelector('.cuadrado').classList.remove('rotate-right');
    }
}