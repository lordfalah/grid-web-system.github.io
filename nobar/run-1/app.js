// text
const myText = () =>{

    $(window).scroll(function(){
        const wScroll = $(this).scrollTop();
        const getTextBorder = document.querySelector(".text-border");
        const getTexth3 = document.querySelector(".main-text h3");

        if(wScroll >= $(".text-border").offset().top - 640 && wScroll <= $(".text-border").offset().top - 5){
            // console.log("nyampe");
            
            getTextBorder.classList.add("effect");
            getTexth3.classList.add("crash");

            if(getTexth3.classList.contains("crash")){
                // console.log("adani");
                
                setTimeout(() =>{
                    getTexth3.classList.add("rot");
                }, 500);

            }

            // $(".text-border").css({
            //     // "transform": `translate(0, ${wScroll /  -20.5}%)`
            // });

        }else{
            getTextBorder.classList.remove("effect");
            // getTexth3.classList.remove("crash");
            // console.log("removi")
        }
    });

}
myText();


// text End

// siTampan

const siTampan = () =>{
    const getTampan = document.querySelector(".ganteng");
    const getIntro = document.querySelector(".introduce");
    const getRexAllLeft = document.querySelectorAll(".rex-left");
    const getRexAllRight = document.querySelectorAll(".rex-right");
    const getRexTop = document.querySelector(".rex-top");
    const getUpText = document.querySelector(".follow");


    $(window).scroll(function(){
        const wScroll = $(this).scrollTop();

        if(wScroll >= $(".ganteng").offset().top - 400){
            // console.log("ganteng");
            getTampan.classList.add("tampan");

            if(getTampan.classList.contains("tampan")){
                setTimeout(() =>{
                    getTampan.classList.add("shaddow");
                    
                }, 900);

                setTimeout(() =>{
                    getIntro.classList.add("intro");
                }, 1000);

                    getRexAllLeft.forEach((item, idx) =>{
                        setTimeout(() =>{
                            item.classList.add("opac")
                        }, 800)


                        item.style.animation = `logoLeft 0.90s ease-in-out ${idx / 5 + 0.4}s`
                    })

                    getRexAllRight.forEach((item, idx) =>{
                        setTimeout(() =>{
                            item.classList.add("opac")
                        }, 800)


                        item.style.animation = `logoRight 0.90s ease-in-out ${idx / 5 + 0.4}s`;            
                    })

                    getRexTop.classList.add("opac");
                    getUpText.classList.add("upText");
            
                $(".tampan.shaddow").css({
                    "transform": `translate(0, ${wScroll / -25}%)`,
                    "margin-top": `100px`,
                    "transtition": `0.50 ease-in`
                })
            }
        }
    })

}

siTampan();
// siTampan End

// Effect Border Photos

const effectPhoto = () =>{
    const getTextBorder = document.querySelector(".text-border");
    // first Border photo
    const getFirstPhoto = document.querySelector(".my-project");
    
    // first Border photo End

    // Second Border Photo
    const getSecondPhoto =  document.querySelector(".project-photo");

    $(window).scroll(function(){
        const wScroll = $(this).scrollTop();
        if(wScroll >= $(".project-photo").offset().top - 480){
            // console.log("ada");
            getFirstPhoto.classList.add("first-border");

            if(getFirstPhoto.classList.contains("first-border")){
                setTimeout(() =>{
                    getFirstPhoto.classList.add("shaddow");
                }, 1300);

                // getFirstPhoto.classList.add("shaddow");
            }

            setTimeout(() =>{
                getSecondPhoto.classList.add("second-border");
            }, 900);

            if(getSecondPhoto.classList.contains("second-border")){
                $(".second-border").css({
                    "transform": `translate(0, ${wScroll / -22}%)`,
                    "margin-top": `25px`
                })
            }

            if(getFirstPhoto.classList.contains("first-border")){
                // console.log("SOME");
                $(".first-border").css({
                    "transform": `translate(0, ${wScroll / -30}%)`,
                    "margin-bottom": `20px`
                })
            }

            // if(getTextBorder.classList.contains("text-border")){
            //     console.log("sesuatu");
            //     $(".text-border").css({
            //         "transform": `translate(0, ${wScroll / -5.5}%)`,
            //         "margin-bottom": `200px`
            //     })
            // }
            
        
        }
    })
    

    // Second Border Photo End
    
}

effectPhoto();


// Effect Border Photos End


// About Mee Text

const aboutMe = () =>{
    const getTextAboutme = document.querySelector(".tentang-saya");

    $(window).scroll(function(){
        const wScroll = $(this).scrollTop();
        // console.log(wScroll);
        if(wScroll >= $(".tentang-saya").offset().top - -150){
            // console.log("aboutme");
            getTextAboutme.classList.add("textEdit");
        }
    });

};

aboutMe();
// About Mee Text End


// text Setelah About Me

const textSaya = () =>{
    const getTextSaya = document.querySelector(".life-gw p");

    $(window).scroll(function(){
        const wScroll = $(this).scrollTop();

        if(wScroll >= $(".life-gw p").offset().top - 600){
            // console.log("text");
            getTextSaya.classList.add("font")
        }
    })
}

textSaya();

// text Setelah About Me End


// Skill

const mySkill = () => {
    const getAllLin = document.querySelectorAll(".lin");
    const getKeahlian = document.querySelector(".keahlian");
    const getTextSkill = document.querySelector(".skill");

    $(window).scroll(function(){
        const wScroll = $(this).scrollTop();

        if(wScroll >= $(".passion").offset().top -750 && wScroll <= $(".passion").offset().top + 100){
            // console.log("skill");

            getKeahlian.classList.add("edit");
            getTextSkill.classList.add("textSkill")

            if(getKeahlian.classList.contains("edit")){
                setTimeout(() =>{
                    getKeahlian.classList.add("shaddow");
                }, 1000)
            }

            getAllLin.forEach((lin, idx) =>{
                setTimeout(() =>{
                    lin.classList.add("oval");
                }, 1200);
            
                lin.style.animation = `fadeOval 1s ease-in ${idx / 7 + 0.5}s`;

                const getDivLin = document.querySelectorAll(".lin div");
                
                if(lin.classList.contains("oval")){
                    // console.log("ada oval");
                    setTimeout(() =>{
                        $(".absord").css({
                            "transform": `translate(0, ${wScroll / -25}%)`,
                            "transition": `0.80s ease`
                        })
                    }, 500)


                }
            });

        }else{
            // console.log('akan dihapus');
            // getKeahlian.classList.remove("edit");


            // getAllLin.forEach((lin, idx) =>{
            //     setTimeout(() =>{
            //         lin.classList.remove("oval");
            //     }, 900);

            //     lin.style.animation = `reverseFadeOval 0.80s ease ${idx / 7 + 0.5}s`;
            // })
        }

        // console.log(wScroll);

    })

    
    


};

mySkill();
// Skill End


// click
const inClick = () =>{
    const getMore = document.querySelector(".more h1");
    const getContine = document.querySelector(".contine");

    getMore.addEventListener("click", function(){
        getContine.classList.toggle("place");
    })

}

inClick();
// click end




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
