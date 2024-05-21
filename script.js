document.getElementById('slap-btn').addEventListener('click', function() {
    const friendImg = document.getElementById('friend-img');
    const handImg = document.getElementById('hand-img');
    const punchSound = document.getElementById('punch-sound');

    // Elin başlangıç pozisyonunu ayarlama
    handImg.style.right = '-150px';
    handImg.style.display = 'block';

    // Elin hareketini başlatma
    setTimeout(() => {
        handImg.style.right = '50px';
        handImg.style.transform = 'translateY(-50%) rotate(-20deg)';
    }, 100);

    // Tokat atma animasyonu
    setTimeout(() => {
        friendImg.style.transform = 'translateX(-100px) rotate(-20deg)';
        handImg.style.transform = 'translateY(-50%) rotate(20deg)';
        punchSound.play();
    }, 600);

    // Animasyonu sıfırlama
    setTimeout(() => {
        friendImg.style.transform = 'translateX(0) rotate(0)';
        handImg.style.transform = 'translateY(-50%) rotate(0)';
        handImg.style.display = 'none';
    }, 1000);
});
