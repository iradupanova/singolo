document.addEventListener("DOMContentLoaded", () => {
    
   const form = document.getElementById('form'),
        gallery = document.querySelectorAll('div.portfolio__picture .portfolio__img'),
        sort1 = document.getElementById('sort1'),
        sort2 = document.getElementById('sort2'),
        sort3 = document.getElementById('sort3'),
        sort4 = document.getElementById('sort4'),
        border = document.getElementById('border'),
        tab = document.getElementById('tab'),
        submit = document.getElementById('submit'),
        modal = document.getElementById('modal'),
        exit = document.getElementById('exit'),
        text = document.getElementById('text'),
        subject = document.getElementById('subject'),
        nav = document.getElementById('nav');



    nav.addEventListener('click', (event) => {
        nav.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
    })


 tab.addEventListener('click', (event) => {
    tab.querySelectorAll('li').forEach(el => el.classList.remove('activity'));
        event.target.classList.add('activity');
    })

    sort1.onclick = () => {
        random();
    }

    sort2.onclick = () => {
        random();
    }

    sort3.onclick = () => {
        random();
    }

    sort4.onclick = () => {
        random();
    }

    function random() {
        gallery.forEach(el => {
            el.style.order = Math.floor(1+ Math.random()*12);
        })
    }

        submit.addEventListener('click', () => {
            modal.style.display = 'block';
        })

        exit.addEventListener('click', () => {
            modal.style.display = 'none';
        })

        border.addEventListener('click', (event) => {
            border.querySelectorAll('.portfolio__picture  img').forEach(el => el.classList.remove('border'));
                event.target.classList.add('border');
            })

    const data = {};

   form.addEventListener("submit", (elem) => {
    elem.preventDefault();

    for (const iter of form.elements) {
        if ((iter.tagName === "INPUT") ||
        (iter.tagName === "TEXTAREA")) {
        data[iter.name] = iter.value
        }
        
        if (data.subject === "singolo" || data.subject !== "") {
            subject.textContent = "Тема: " + data.subject; 
        } else {
            data.subject.textContent = "Без темы";
        }

        if (data.text === "Portfolio project" || data.text !== "") {
            text.textContent = "Описание: " + data.text; 
        } else {
            data.text.textContent = "Без описания";
        }
    }



   })

})