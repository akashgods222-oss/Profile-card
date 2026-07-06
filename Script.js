document.addEventListener("DOMContentLoaded",()=> {
    const button=document.getElementById("connect");
    
    button.addEventListener("click",()=>{
    if (button === "connect on linkedin") {
        button.innerText="Connected"
        button.style.backgroundcolor="#2ecc71"
    } else{
        button.innerText="Already connected"
    }
        
    });
});
