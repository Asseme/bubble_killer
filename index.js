let counter = 0;
setInterval(()=>{
    const bubble = document.createElement("span");
    const body = document.body;
    let size = Math.random() * 200 + 20 + "px";
    let left = Math.random() * 100 + "%"

    bubble.className = "bubble";
    body.appendChild(bubble);
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.top = Math.random() * 100 + 50 + "%"
    bubble.style.left = Math.random() * 100 + "%"
    bubble.style.setProperty('--left', left);
    
    bubble.addEventListener('click', () => {
        bubble.remove();
        counter++;
        console.log(counter);
        document.querySelector(".counter").textContent = counter;
    })
}, 500)

