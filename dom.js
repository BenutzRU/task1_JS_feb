
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.pageButton[data-start="1"][data-end="20"]').addEventListener('click', function () {
        scrollToRange(1, 20);
    });
    document.querySelector('.pageButton[data-start="21"][data-end="40"]').addEventListener('click', function () {
        scrollToRange(21, 40);
    });
    document.querySelector('.pageButton[data-start="41"][data-end="60"]').addEventListener('click', function () {
        scrollToRange(41, 60);
    });
    document.querySelector('.pageButton[data-start="61"][data-end="80"]').addEventListener('click', function () {
        scrollToRange(61, 80);
    });
    document.querySelector('.pageButton[data-start="81"][data-end="100"]').addEventListener('click', function () {
        scrollToRange(81, 100);
    });
    document.querySelector('.pageButton[data-start="101"][data-end="120"]').addEventListener('click', function () {
        scrollToRange(101, 120);
    });
    document.querySelector('.pageButton[data-start="121"][data-end="140"]').addEventListener('click', function () {
        scrollToRange(121, 140);
    });
    document.querySelector('.pageButton[data-start="141"][data-end="160"]').addEventListener('click', function () {
        scrollToRange(141, 160);
    });
    document.querySelector('.pageButton[data-start="161"][data-end="180"]').addEventListener('click', function () {
        scrollToRange(161, 180);
    });
    document.querySelector('.pageButton[data-start="181"][data-end="200"]').addEventListener('click', function () {
        scrollToRange(181, 200);
    });

    function scrollToRange(start, end) {
        let targetElement = document.querySelector('table tbody tr:nth-child(' + start + ')');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
   

    
    window.scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.id = 'scrollToTopButton';
    scrollToTopButton.innerHTML = 'Вверх';
    scrollToTopButton.onclick = scrollToTop;
    document.body.appendChild(scrollToTopButton);

   
    document.addEventListener('scroll', toggleScrollToTopButton);

  
    toggleScrollToTopButton();
});


function toggleScrollToTopButton() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}



