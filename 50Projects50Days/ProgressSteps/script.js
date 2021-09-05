const progess = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }


});

next.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = documents.querySelectorAll('.active');

    // update blue progess line when moving to next circle
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1) { // first circle
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else { // last circle
        prev.disabled = false;
        next.disabled = false;
    }
}