console.log("EcoDesa Loaded");

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

const navbar = document.getElementById("navbar");
const menu = document.getElementById("navbarMenu");

function updateNavbar(){

    if(window.scrollY > 50 || menu.classList.contains("show")){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);

menu.addEventListener("shown.bs.collapse", updateNavbar);

menu.addEventListener("hidden.bs.collapse", updateNavbar);

