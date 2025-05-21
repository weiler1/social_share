async function share(){
    console.log("hi");
    var twt = document.getElementById('inp').value;
    twt = twt.concat('%0ACheck out the Megusta games on https://megustaapp.netlify.app');
    window.open("https://twitter.com/intent/tweet?text=".concat(twt),"_blank");
}
window.share = share;

async function to_app(){
    window.open("https://megustaapp.netlify.app", "_blank");
}
window.to_app = to_app;
