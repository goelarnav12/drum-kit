let numberofdrums = document.querySelectorAll('.drum').length;
for(var i=0;i < numberofdrums;i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click',function () {
        if(this.innerHTML=='w')
        {
            let audio=new Audio('sounds/tom-1.mp3')
            audio.play()
        }
        if(this.innerHTML=='a')
        {
            let audio=new Audio('sounds/tom-2.mp3')
            audio.play()
        }
        if(this.innerHTML=='s')
        {
            let audio=new Audio('sounds/tom-3.mp3')
            audio.play()
        }
        if(this.innerHTML=='d')
        {
            let audio=new Audio('sounds/tom-4.mp3')
            audio.play()
        }
        if(this.innerHTML=='j')
        {
            let audio=new Audio('sounds/snare.mp3')
            audio.play()
        }
        if(this.innerHTML=='k')
        {
            let audio=new Audio('sounds/crash.mp3')
            audio.play()
        }
        if(this.innerHTML=='l')
        {
            let audio=new Audio('sounds/kick-bass.mp3')
            audio.play()
        }
        buttonAnimation(this.innerHTML)
    })
}


document.addEventListener('keydown',function (event){
    if(event.key=='w')
        {
            let audio=new Audio('sounds/tom-1.mp3')
            audio.play()
        }
        if(event.key=='a')
        {
            let audio=new Audio('sounds/tom-2.mp3')
            audio.play()
        }
        if(event.key=='s')
        {
            let audio=new Audio('sounds/tom-3.mp3')
            audio.play()
        }
        if(event.key=='d')
        {
            let audio=new Audio('sounds/tom-4.mp3')
            audio.play()
        }
        if(event.key=='j')
        {
            let audio=new Audio('sounds/snare.mp3')
            audio.play()
        }
        if(event.key=='k')
        {
            let audio=new Audio('sounds/crash.mp3')
            audio.play()
        }
        if(event.key=='l')
        {
            let audio=new Audio('sounds/kick-bass.mp3')
            audio.play()
        }
        buttonAnimation(event.key);

})

function buttonAnimation(currentkey)
{
    document.querySelector('.'+currentkey).classList.add('pressed');
    setTimeout(() => {
    document.querySelector('.'+currentkey).classList.remove('pressed');
        
    }, 200);
}