var color_char=['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']



const btn = document.getElementById('btn');
btn.addEventListener('click', function onClick(event){
    var color = '#'
    for(i=0; i<6; i++){
        color = color.concat(color_char[Math.round(Math.random()*color_char.length)])
    }
    if (!(color.includes('undefined'))){
        document.body.style.backgroundColor = color;
        document.getElementById("code").innerHTML = color;
    }

})