const allImages = document.getElementById('allImages').childNodes

console.log('allImages',allImages)

allImages.forEach(element => {
    element.addEventListener('click',(eo)=>{
        element.classList.toggle('active')
    })
});

