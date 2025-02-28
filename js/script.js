document.addEventListener('DOMContentLoaded', () => {
    const neonText = document.querySelector('.neon-text');
    const letters = neonText.querySelectorAll('span');
    
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`;
    });

    // 添加鼠标移动效果
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        
        neonText.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
}); 