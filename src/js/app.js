window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll('.sounds');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = ['red','blue','pink','black','orange','purple'];
    pads.forEach((pads,index) =>{
        pads.addEventListener('click',function(){
           sounds[index].currentTime = 0; 
            sounds[index].play();
            
            creatBubble(index);
        });
    });

    const creatBubble = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    }
});