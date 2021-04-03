
function slideShow(){
    const getBurger = document.querySelector(".burger");
    const getSlide = document.querySelector(".menu");
    const getText = document.querySelectorAll(".menu-tab li a");
    // console.log(getText);



    getBurger.addEventListener("click", function(){
        getSlide.classList.toggle("slideFade");

        getBurger.classList.toggle("first");
        getBurger.classList.toggle("second");
        getBurger.classList.toggle("thirth");

        getText.forEach((textAll, index) =>{
            console.log(textAll);
            if(getSlide.classList.contains("slideFade")){
                console.log("hadir");
                
                textAll.style.animation = `fadeText 0.80s forwards ${index / 7 + 0.5}s`
            
            }else{
                console.log("tidak");
                
                textAll.style.animation = `deleteText 0.50s ease-out ${index / (7 + 0.2)}s`
            }


        })

    });
};

slideShow();




