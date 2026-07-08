document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;

    function showSlide(index) {
        // 인덱스 범위 초과 처리
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        // 모든 슬라이드 및 도트 초기화
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // 현재 인덱스 활성화
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    // 버튼 이벤트
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // 도트 클릭 이벤트
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const targetIndex = parseInt(e.target.getAttribute('data-index'));
            showSlide(targetIndex);
        });
    });
});