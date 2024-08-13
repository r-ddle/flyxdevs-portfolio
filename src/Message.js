// Easter Egg - Gojo Gay
export function revealMessage() {
    const message = document.createElement('div');
    message.innerText = "Gojo is gay";
    message.style.position = 'fixed';
    message.style.bottom = '20px';
    message.style.right = '20px';
    message.style.padding = '10px';
    message.style.backgroundColor = '#333';
    message.style.color = '#fff';
    message.style.fontSize = '16px';
    message.style.borderRadius = '5px';
    message.style.opacity = 0;
    message.style.transition = 'opacity 2s';
  
    document.body.appendChild(message);
    setTimeout(() => {
      message.style.opacity = 1;
    }, 100);
  
    setTimeout(() => {
      message.style.opacity = 0;
      setTimeout(() => {
        message.remove();
      }, 1000);
    }, 2000);
}