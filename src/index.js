async function share(){
    console.log("hi");
    const twt = document.getElementById('inp').value;
    window.open("https://twitter.com/intent/tweet?text=".concat(twt),"_blank");
}
window.share = share;
