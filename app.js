const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close").addEventListener('click', () => {
  
      modal_container.classList.remove("show");
    
})

const open = document.getElementById("open").addEventListener("click", () => {
    modal_container.classList.add('show')
       
});
