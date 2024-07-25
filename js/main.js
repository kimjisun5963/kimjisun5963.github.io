
const navyBox = document.querySelector(".navy-box");

if (navyBox) {
    navyBox.addEventListener("click", function() {
        const intro = document.querySelector(".intro");

        if (intro.classList.contains("show-animation")) {
            intro.classList.remove("show-animation");
            intro.classList.add("hidden-animation");

            // 애니메이션이 끝난 후 display: none 설정
            intro.addEventListener('animationend', function() {
                intro.style.display = 'none';
            }, { once: true });
        }
        
        const siteBody = document.querySelector(".site-body");
        siteBody.style.display = 'block';
        
        // 섹션에 나타나는 애니메이션 추가
        const sections = document.querySelectorAll(".site-body section");
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            section.classList.add("fade-in");
            observer.observe(section);
        });
        
        // 스킬 바 애니메이션 추가
        const skillBars = document.querySelectorAll(".skill-bar");
        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        skillBars.forEach(skillBar => {
            skillObserver.observe(skillBar);
        });
        
    });
    
    const sliders = document.querySelectorAll('.kind_wrap');

      sliders.forEach(slider => {
        const prevBtn = slider.querySelector('.arrow .prev');
        const nextBtn = slider.querySelector('.arrow .next');
        const sliderUl = slider.querySelector('.kind_slider .slider');
        const slides = sliderUl.querySelectorAll('li');
        let index = 0;
    
        function showSlide(i) {
          if (i >= slides.length) index = 0;
          if (i < 0) index = slides.length - 1;
          sliderUl.style.transform = `translateX(-${index * 100}%)`;
        }
    
        prevBtn.addEventListener('click', function(e) {
          e.preventDefault();
          index--;
          showSlide(index);
        });
    
        nextBtn.addEventListener('click', function(e) {
          e.preventDefault();
          index++;
          showSlide(index);
        });
    
        showSlide(index); // Initialize
      });
    
}

function preparing(){
    alert("준비중입니다:)");
}

window.addEventListener('scroll', function() {
    const header = document.getElementsByClassName('top-header');
    const scrollPosition = window.scrollY;
    
    const maxScroll = 300;
    const transparency = Math.min(scrollPosition / maxScroll, 0.5);
    
    header.style.backgroundColor = `rgba(225, 225, 225, ${1 - transparency})`;
});
