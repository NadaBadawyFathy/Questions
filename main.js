
let allPlus = document.querySelectorAll('.questions .box .question .plus');

let answers = document.querySelectorAll('.questions .box .answer p');

allPlus.forEach(function (ele) {
    
    ele.onclick = function () {

        if (ele.innerHTML === '+'){

            ele.innerHTML = '-';

            ele.style.fontSize = '38px';

            answers[+(ele.id)].style.display = 'block';

        }else {

            ele.innerHTML = '+';

            ele.style.fontSize = '30px';
            
            answers[+(ele.id)].style.display = 'none';
        }
    }
})
