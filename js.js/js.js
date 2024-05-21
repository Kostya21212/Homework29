document.addEventListener('DOMContentLoaded',function(){
 document.querySelector('.btn1').addEventListener('click',function(){
    let url = document.getElementById('urlInput').value.trim()
    console.log(url)
    if (url === '') {
        alert('Будь ласка, введіть URL.');
        return;
    }
    if(!url.match(/^https?:\/\//i)){
        url = 'http://' + url 
    }
    window.location.href = url
}) 

document.querySelector('.btn2').addEventListener('click',function(){
    let url = document.getElementById('urlInput').value.trim();
    console.log(url)
    if (url === '') {
        alert('Будь ласка, введіть URL.');
        return;
    }
    if(!url.match(/^https:\/\//i) && !url.match(/^http:\/\//i)){
        url = 'https://' + url
    }
   
    window.location.href = url;
})
document.querySelector('.iconClose').addEventListener('click',function(){
    let closeBlock = document.querySelector('.block');
    closeBlock.style.display = 'none'
})
})
