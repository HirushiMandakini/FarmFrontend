function generateFeildCode(){
    const prefix = "F-";
    const randomCode =Math.floor(1000+Math.random()*9000);
    return prefix+randomCode;
}
function setFeildCode(){
    const feildCodeInput = document.getElementById("fieldCode");
    feildCodeInput.value = generateFeildCode();
}
window.onload=function(){
    setFeildCode();
}

function previewImage(input,previewElementId){
    const file = input.files[0];
    if(file){
        const reader =new FileReader();
        reader.onload = function(e){
            const preview = document.getElementById(previewElementId);
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
}
document.getElementById("fieldImage1").addEventListener("change", function(){
    previewImage(this, "previewImage1")
});

document.getElementById("fieldImage2").addEventListener("change", function(){
    previewImage(this, "previewImage2")
})