let form1 = document.querySelector('#form1');
let form2 = document.querySelector('#form2');
let form3 = document.querySelector('#form3');

let next1 = document.querySelector(".next1");
let next2 = document.querySelector(".next2");
let back2 = document.querySelector(".back2");
let back3 = document.querySelector(".back3");


// next button

next1.addEventListener("click", () => {
    form1.style.left = "-355px"
    form2.style.left = '0'
    form3.style.left = '355px'
});

next2.addEventListener("click", () => {

    form1.style.left = "-355px"
    form2.style.left = "-355px"
    form3.style.left = '0'
});

//back button

back2.addEventListener("click", () => {
    form1.style.left = "0"
    form2.style.left = '355px'
    form3.style.left = '355px'
})


back3.addEventListener("click", () => {
    form1.style.left = "-355px"
    form2.style.left = '0'
    form3.style.left = '355px'
})