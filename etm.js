
var para = document.querySelectorAll('p')

for(var i=0; i < para.length; i++){
    if(i % 2 !== 0 ){
        para[i].classList.add('bgGreen')
    } else {
        para[i].classList.add('bgYellow')
    }   
}