const btnMostrarModal = document.querySelector("#btn-p");
const btnCerrarModal = document.querySelector('#btn-e');
const modal= document.querySelector('#modal');

btnMostrarModal.addEventListener("click", ()=>{
    modal.showModal(); 
});

btnCerrarModal.addEventListener("click", ()=>{
    modal.closest();
});