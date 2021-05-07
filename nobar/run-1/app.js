
function slideBurger(){
    const getBurger = document.querySelector(".burger");
    const getNav = document.querySelector(".navbar");

    // In Mouse Over
    getBurger.addEventListener("mouseover", function(){
        this.classList.add("pertama");
        this.classList.add("kedua");
        this.classList.add("ketiga");
    });

    // In Mouse Out
    getBurger.addEventListener("mouseout", function(){
        // console.log("dasdsad")
        this.classList.remove("pertama");
        this.classList.remove("kedua");
        this.classList.remove("ketiga");
    })


    // In Click
    getBurger.addEventListener("click", function(){
        getNav.classList.toggle("slideShow");
        
        // Burger width 100%


        if(getNav.classList.contains("slideShow")){
            getBurger.addEventListener("mouseout", function(){
                this.classList.add("pertama");
                this.classList.add("kedua");
                this.classList.add("ketiga");
                console.log("running");
            })
            
        }else{
            console.log("delete");
            this.classList.remove("pertama");
            this.classList.remove("kedua");
            this.classList.remove("ketiga");
        }

        // Burger width 100%


        //Burger Span Nav
        getBurger.classList.toggle("first");
        getBurger.classList.toggle("second");
        getBurger.classList.toggle("thirth");
        //Burger Span Nav

        
    });



};

slideBurger();  

// Resonsive media query js

function responsive(){
    // Handphone
    if(window.matchMedia("(max-width: 564px)").matches){
        const getAllOrder = document.querySelectorAll(".order-list li a");

        const getBurger = document.querySelector(".burger");
        getBurger.addEventListener("click", function(){
            
            setTimeout(() =>{
                getAllOrder.forEach(order =>{
                    order.classList.toggle("fadeOrder");
                })
            }, 900)
            
        });
    
    // Tablet
    }else if(window.matchMedia("(max-width: 764px)").matches){
        const getOrder = document.querySelector(".order-list");
        const getAllOrder = document.querySelectorAll(".order-list li a");
        
        // console.log(getAllOrder);

        const getBurger = document.querySelector(".burger");
        getBurger.addEventListener("click", function(){
            setTimeout( async function(){
                await getOrder.classList.toggle("standing");
            }, 800);
            
            effectFrame(getOrder, getAllOrder);
            
        });
    };
};

responsive();

function effectFrame(resultOrder, getAllOrder){
    getAllOrder.forEach((order, index) =>{
        if(resultOrder.classList.contains("standing")){
            // console.log("yessssss");        
            order.classList.remove("fadeOrder");
            order.style.animation = `fadeText 2s ease-out ${index / (170 + 0.2)}s`;  
            
        }else{
            order.classList.add("fadeOrder");
        };
    });
};

// Resonsive media query js End

//         order.style.animation = `fadeText 0.80s ease-in ${index / 7 + 0.2}`;
