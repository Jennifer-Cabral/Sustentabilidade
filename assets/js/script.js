const openButtons = document.querySelectorAll('.cabecalho-menu-item');
openButtons.forEach (button => {
    button.addEventListener('click', ()=>{
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
     
        modal.showModal();

    });
});
const closeButtons = document.querySelectorAll('.modal-footer-button');
closeButtons.forEach (button => {
    button.addEventListener('click', ()=>{
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.close();
     

    });
});

const btnMobile = document.getElementById('hamburgerButton');
function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);
