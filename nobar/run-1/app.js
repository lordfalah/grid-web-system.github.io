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


const clickMore = () =>{
    const getMore = document.querySelector(".text-more h2");

    let i = 0;
    const waktu = setInterval(() =>{
        i++
        if(i % 2 == 0){
            $(getMore).css({
                "color": `white`,
                "transition": "0.50s"
            })
        
        }else{
            $(getMore).css({
                "color": `salmon`,
                "transition": "0.50s"
            })
        }

    }, 2000);

    
}

clickMore();
// click
const inClick = () =>{
    const getMoreText = document.querySelector(".text-more h2");
    const getNewPlace = document.querySelector(".adding-place");


    getMoreText.addEventListener("click", async function(){
        const newPlace = await getNewPlace.classList.toggle("new-place");
        addingNewPlace(newPlace);

    });

}

inClick();
// click end


// Exprience Me

function addingNewPlace(boelan){
    const getHrLine = document.querySelector(".place-my-self .all-liner .liner-one hr.line-effect");
    const getNewPlaceParent = document.querySelector(".adding-place");
    // console.log(getNewPlaceParent);

    const lineEfect = document.querySelector(".new-place-line hr");
    const h1Swap = document.querySelector(".place-my-self h1");
    const h2Swap = document.querySelector(".start h2");

    if(boelan === true){
        $(window).scroll(function(){
            const wScroll = $(this).scrollTop();
            // console.log(wScroll);
            if(wScroll >= $(getNewPlaceParent).offset().top - -500){
                // console.log("keajaiban");
                // getHrLine.classList.add("colorF")
                getHrLine.style.animation = `colorF 5s forwards 0s`

            };

            if(wScroll >= $(".new-place-line").offset().top - 740){
                lineEfect.classList.add("effect-line");
            };

            if(wScroll >= $(".place-my-self").offset().top - 715){
                // console.log("h1 top")
                h1Swap.classList.add("swapTop");
            };

            if(wScroll >= $(".start").offset().top - 755){
                // console.log("Start h2");
                h2Swap.classList.add("swapTopH2");
            }

        })
    }
}

addingNewPlace();

function redTimeRound(){
    const getAllround = document.querySelectorAll(".round")

    let count = 0;

    const timmer = setInterval(() =>{
        console.log(count++);

        getAllround.forEach(round =>{
            if(count % 2 == 0){
                $(round).css({
                    "transition": `0.80s ease-in-out`,
                    "background-color": "red"
    
                })
            }else{
                $(round).css({
                    "transition": `0.80s ease-in-out`,
                    "background-color": "white"
                })
            }
        })
    }, 2000)


};

redTimeRound();

// Exprience Me End


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
