//variables//
const content = document.getElementsByClassName('content');
const box = document.getElementsByClassName('box');
console.log(box)
for ( i=0; i < content.length; i++)  {
    content[i].addEventListener('click', function () {
       this.classList.toggle('active');
    })
};

