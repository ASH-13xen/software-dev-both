const formSubmit = () => {
    const data = {
        email: document.querySelector("#email").value,
        uname: document.querySelector("#uname").value,
        phone: document.querySelector("#phone").value
    }
    fetch("http://localhost:3000/add-sub", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(x=>x.json()).then(y=>alert(y.msg.toString()));
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');

            });
        };
    });


};