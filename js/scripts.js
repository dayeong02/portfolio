document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('typing-text');
    const text = "Dayeong Kim’s Portfolio";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // 사용자 설정 저장
        localStorage.setItem('preferredMode', body.classList.contains('dark-mode') ? 'dark' : 'light');

        // SVG 이미지 좌우 반전 토글
        const img = darkModeToggle.querySelector('img');
        img.classList.toggle('flipped');
    });

    // 페이지 로드 시 사용자 설정된 모드 적용
    const preferredMode = localStorage.getItem('preferredMode');
    if (preferredMode === 'dark') {
        body.classList.add('dark-mode');
        // 다크 모드일 때 SVG 이미지 반전 상태 적용
        const img = darkModeToggle.querySelector('img');
        img.classList.add('flipped');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            var href = card.getAttribute('data-href');
            window.location.href = href;
        });
    });
});
