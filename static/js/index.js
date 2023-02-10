const wrapperImg = document.querySelector(".wrapper-img");const defaultBtn = document.querySelector("#default-btn");
const cuatomtBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const img = document.querySelector("#img-carga");
const fileName = document.querySelector(".file-name");
let regExp=/[0-9a-zA-A\^\&\'\@\{\}\[\]\,\$\(\)\.\%\+\~\_]+$/;
const reader = new FileReader();


console.log(defaultBtn)
function defaultBtnActivate(){
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function(){
    const file = this.files[0]; 
    if (file){
        reader.onload = function(){
            const result = reader.result; 
            img.src = result; 
            wrapperImg.classList.add("active"); 
        }
        cancelBtn.addEventListener("click", function(){
            img.src=""
            wrapperImg.classList.remove("active"); 
        }); 
        reader.readAsDataURL(file); 
    }
    if(this.value){
        var valueStore = this.value.match(regExp); 
        fileName.textContent=valueStore;

    }
});