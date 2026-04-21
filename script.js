const cta = document.querySelectorAll('.cta');
const modal = document.querySelector('.modale');

for(let i = 0; i < cta.length; i++){

   const btn = cta[i];

    btn.addEventListener('click', openModal);
 
}

function openModal(){
    modal.classList.add('visible');

    modal.addEventListener('click', closeModal);
}

function closeModal(){
    modal.classList.remove('visible');
}