async function share(){
    console.log("hi");
    const twt = document.getElementById('inp').value;
    window.open("https://twitter.com/intent/tweet?text=".concat(twt),"_blank");
}
window.share = share;

async function to_app(){
    window.open("https://megustaapp.netlify.app", "_blank");
}
window.to_app = to_app;
