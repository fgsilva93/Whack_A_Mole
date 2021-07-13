    const square = document.querySelectorAll('.square'); 
    let mole = document.querySelectorAll('.mole'); 
    let timeLeft = document.querySelector('#time-left'); 
    let score = document.querySelector('#score'); 
    
    let results = 0;
    let hitPosition; 
    let currentTime = timeLeft.textContent;
    
    //randomly selecting a square in the grid for the mole to appear:
    function randomSquare () {
        square.forEach(className => {
            className.classList.remove('mole');
        });
        let randomPosition = square[Math.floor(Math.random() * 9)];
        randomPosition.classList.add('mole'); 
    
        hitPosition = randomPosition.id
    };
    
    //counts the score when hitting a mole: 
    square.forEach(id => {
        id.addEventListener('mouseup', () => {
            if(id.id === hitPosition) {
                results = results + 1; 
                score.textContent = results; 
            }
        });
    }); 
    
    //Time for the mole to move:
    function moveMole () {
        let timerId = null;
        timerId =setInterval(randomSquare, 700);
    }
    
    moveMole();

    //A Count Down starting from 60:
    function countDown () {
        currentTime--
        timeLeft.textContent = currentTime;

        if(currentTime === 0) {
            clearInterval(timerId)
            alert('Game Over!, Your Final Score: ' + results); 
        }
    }

    //calling out the count donw function:
    let timerId = setInterval(countDown, 1000);
