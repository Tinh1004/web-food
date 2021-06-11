var li = document.querySelectorAll('li');
var array = [`intagram.png`,`facebook.png`,`facebook.png`];
for(var i = 0;i<li.length;i++){
    li[i].style.backgroundImage = `url("assets/icons/${array[i]}")`
}

