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
                    "transform": `translate(0, ${wScroll / -35}%)`,
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
            getTextSkill.classList.add("textSkill");
            const getHabit1 = document.querySelector(".placeWid1");
            const getHabit2 = document.querySelector(".placeWid2");
            const getHabit3 = document.querySelector(".placeWid3");
            const getHabit4 = document.querySelector(".placeWid4");
            const getHabit5 = document.querySelector(".placeWid5");
            const getHabit6 = document.querySelector(".placeWid6");
            // console.log(getHabit3)

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
                            "transform": `translate(0, ${wScroll / -38}%)`,
                            "transition": `0.80s ease`,
                            "margin-top": `200px`
                        });

                        getHabit1.classList.add("habit1");
                        getHabit2.classList.add("habit2");
                        getHabit3.classList.add("habit3");
                        getHabit4.classList.add("habit4");
                        getHabit5.classList.add("habit5");
                        getHabit6.classList.add("habit6");
                        
                    }, 850)

                    const skilling = document.querySelectorAll(".font-swap");

                    skillFont(skilling);
                }


                // Text font Effect

                    const skilling = document.querySelectorAll(".font-swap");


                    skilling.forEach(text =>{
                        const font = [...text.textContent]
                                    .map(rex => {
                                        return `<span>${rex}</span>`
                                    }).join("")
                
                    text.innerHTML = font;
                    // console.log(font)
                    })



                    // Text font Effect End

            });



            // Box square Box

            const getSquare = document.querySelectorAll(".square-box");

            getSquare.forEach((square, i) =>{
                setTimeout(() =>{
                    square.classList.add("swapBottom");
                }, 800)

                square.style.animation = `squareEffect 1s ease-in ${i / 5 + 0.2}s`;
            });
            
            // Box square Box End

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

// skilling

function skillFont(skilling){
    skilling.forEach((font, i) =>{
        // console.log(font);
        setTimeout(() =>{
            font.classList.add("magic-font");
        }, 200)

        font.style.animation = `magicText 1s ease-in ${i / 5}s`

    })
}

// skilling End


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

// Bola round


const clickingRound = () =>{
    // Select Round Img
    const round = document.querySelectorAll(".round");
    
    const getImg1 = document.querySelector(".gambar-1");
    const getImg2 = document.querySelector(".gambar-2");
    const getImg3 = document.querySelector(".gambar-3");
    const getImg4 = document.querySelector(".gambar-4");
    const getImg5 = document.querySelector(".gambar-5");
    const getImg6 = document.querySelector(".gambar-6");
    const getImg7 = document.querySelector(".gambar-7");
    const getImg8 = document.querySelector(".gambar-8");
    const getImg9 = document.querySelector(".gambar-9");
    const getImg10 = document.querySelector(".gambar-10");
    // Select Round Img End
    
    round.forEach((ron, i) =>{
        ron.addEventListener("click", function(e){
            if(e.target.classList[1] == "round-one"){
                console.log("test1");

                getImg1.classList.add("image1");

            }

            if(e.target.classList[1] == "round-two"){
                console.log("test");

                getImg2.classList.add("image2");

            }

            if(e.target.classList[1] == "round-three"){
                console.log("test");

                getImg3.classList.add("image3");

            }

            if(e.target.classList[1] == "round-four"){
                console.log("test");

                getImg4.classList.add("image4");
            }

            if(e.target.classList[1] == "round-five"){
                console.log("test");

                getImg5.classList.add("image5");
            }

            if(e.target.classList[1] == "round-six"){
                console.log("test");

                getImg6.classList.add("image6");
            }

            if(e.target.classList[1] == "round-seven"){
                console.log("test");

                getImg7.classList.add("image7");
            }

            if(e.target.classList[1] == "round-double-eight"){
                console.log("888");

                getImg8.classList.add("image8");
            }

            if(e.target.classList[1] == "round-left"){
                console.log("999");

                getImg9.classList.add("image9");

            }

            if(e.target.classList[1] == "round-kanan"){
                getImg10.classList.add("image10");

                console.log("10")
            }
            
        })
    })
}

clickingRound();

// Bola round End

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

// Footer Display

// const footer = () =>{
//     const getFooter = document.querySelector("footer");
//     const clickText = document.querySelector(".show-all .text-more h2");

// }

// Footer Display End

// Exprience Me

function addingNewPlace(boelan){
    const getHrLine = document.querySelector(".place-my-self .all-liner .liner-one hr.line-effect");
    const getNewPlaceParent = document.querySelector(".adding-place");
    // console.log(getNewPlaceParent);

    const lineMid = document.querySelector(".place-my-self .all-liner .liner-one hr");

    const lineEfect = document.querySelector(".new-place-line hr");
    const h1Swap = document.querySelector(".place-my-self h1");
    const h2Swap = document.querySelector(".start h2");
    const dayOne = document.querySelector(".liner-one .day-one");
    const textOne = document.querySelector(".liner-one .text-one");
    const dayTwo = document.querySelector(".day-two");
    const swapLeftTwo = document.querySelector(".all-liner .text-two");
    const dayThree = document.querySelector(".liner-one .day-three");
    const swapLeftThree = document.querySelector(".liner-one .text-three");
    const swapLeftFour = document.querySelector(".liner-one .text-four");
    const swapDayFour = document.querySelector(".liner-one .day-four");
    const swapDayFive = document.querySelector(".liner-one .day-five");
    const swapRightFive = document.querySelector(".liner-one .text-five");
    const swapTextSix = document.querySelector(".liner-one .text-six");
    const swapDaySix = document.querySelector(".liner-one .day-six");
    const swapDaySeven = document.querySelector(".liner-one .day-seven");
    const swapTextSeven = document.querySelector(".liner-one .text-seven");
    const swapTextEight = document.querySelector(".liner-one .text-eight");
    const swapDayEight = document.querySelector(".liner-one .day-eight");

    // Oval Parent
    const roundOne = document.querySelector(".round-one");
    const roundTwo = document.querySelector(".round-two");
    const roundThree = document.querySelector(".round-three");
    const roundFour = document.querySelector(".round-four");
    const roundFive = document.querySelector(".round-five");
    const roundSix = document.querySelector(".round-six");
    const roundSeven = document.querySelector(".round-seven");
    const swapDouble = document.querySelector(".all-liner .round-eight .round-double-eight");
    const roundNine = document.querySelector(".round-eight .right-left-line .round-left");
    const roundTen = document.querySelector(".round-eight .right-left-line .round-kanan");
    // Oval Parent End

    // Line Effect

    const lineLeft = document.querySelector(".all-liner .round-eight .garis-left");
    const lineRight = document.querySelector(".all-liner .round-eight .garis-kanan");


    const textLeft = document.querySelector(".all-liner .round-eight .round-text-left");
    const textRight = document.querySelector(".all-liner .round-eight .round-text-kanan");
    // Line Effect END


    if(boelan === true){
        $(window).scroll(function(){
            const wScroll = $(this).scrollTop();
            // console.log(wScroll);
            if(wScroll >= $(getNewPlaceParent).offset().top - -500){
                // console.log("keajaiban");
                // getHrLine.classList.add("colorF")
                getHrLine.style.animation = `colorF 5s forwards 0s`;

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
            };

            if(wScroll >= $(dayOne).offset().top - -990){
                // console.log("text1")
                dayOne.classList.add("textFirst")
            }

            if(wScroll >= $(textOne).offset().top - -980){
                // console.log("TextOne");
                textOne.classList.add("leftTextOne");
            }

            if(wScroll >= $(dayTwo).offset().top - 650){
                // console.log("DayTwo");
                dayTwo.classList.add("swapDayTwo");
            }

            if(wScroll >= $(swapLeftTwo).offset().top - -780){
                // console.log("swapDay");
                swapLeftTwo.classList.add("swapLeftTwo");
            };

            if(wScroll >= $(dayThree).offset().top - 630){
                // console.log("Day Three");
                dayThree.classList.add("swapDayThree");
            }

            if(wScroll >= $(swapLeftThree).offset().top - -560){
                // console.log("textThree");
                swapLeftThree.classList.add("swapLeftThree");
            }

            if(wScroll >= $(swapLeftFour).offset().top - -330){
                // console.log("textFour");
                swapLeftFour.classList.add("swapLeftFour");
            }

            if(wScroll >= $(swapDayFour).offset().top - 650){
                // console.log("dayFour");
                swapDayFour.classList.add("swapDayFour")
            }

            if(wScroll >= $(swapDayFive).offset().top - 600){
                // console.log("Day Five");
                swapDayFive.classList.add("swapDayFive");
            }

            if(wScroll >= $(swapRightFive).offset().top - -150){
                // console.log("Text Five");
                swapRightFive.classList.add("swapRightFive");
            }

            if(wScroll >= $(swapTextSix).offset().top - 90){
                // console.log("textSix");
                swapTextSix.classList.add("swapTextSix");
            }

            if(wScroll >= $(swapDaySix).offset().top - 620){
                // console.log("DaySIx");
                swapDaySix.classList.add("swapDaySix");
            }

            if(wScroll >= $(swapDaySeven).offset().top - 650){
                // console.log("DaySeven");
                swapDaySeven.classList.add("swapDaySeven");
            }

            if(wScroll >= $(swapTextSeven).offset().top - 340){
                // console.log("TextSeven");
                swapTextSeven.classList.add("swapTextSeven")
            }

            if(wScroll >= $(swapTextEight).offset().top - 560){
                // console.log("TextEight");
                swapTextEight.classList.add("swapTextEight");
            }

            if(wScroll >= $(swapDayEight).offset().top - 610){
                // console.log("DayEight");
                swapDayEight.classList.add("swapDayEight");
            }

            // Rounded Oval
            if(wScroll >= $(roundOne).offset().top - 1010){
                roundOne.classList.add("bulat1");
                // console.log("BUlat1");
            };

            if(wScroll >= $(roundTwo).offset().top - 1020){
                // console.log("BUlat2");
                roundTwo.classList.add("bulat2");
            }

            if(wScroll >= $(roundThree).offset().top - 900){
                // console.log("Round Three");
                roundThree.classList.add("bulat3");
            }

            if(wScroll >= $(roundFour).offset().top - 925){
                // console.log("Round Four");
                roundFour.classList.add("bulat4");
            }

            if(wScroll >= $(roundFive).offset().top - 900){
                // console.log("Five");
                roundFive.classList.add("bulat5");
            }

            if(wScroll >= $(roundSix).offset().top - 920){
                // console.log("BUlat6");
                roundSix.classList.add("bulat6");
            }

            if(wScroll >= $(roundSeven).offset().top - 930){
                // console.log("Bulat7");
                roundSeven.classList.add("bulat7");
            }

            if(wScroll >= $(swapDouble).offset().top - 950){
                // console.log("DOuble");
                swapDouble.classList.add("swapDouble")
            }

            if(wScroll >= $(roundNine).offset().top - 660){
                // console.log("Nine");
                roundNine.classList.add("bulat9")
            }

            if(wScroll >= $(roundTen).offset().top - 660){
                // console.log("TEn");
                roundTen.classList.add("bulat10")
            }

            if(roundTen.classList.contains("bulat10")){
                // console.log("Ada nie");
                setTimeout(() =>{
                    lineLeft.classList.add("line-1-left");
                    lineRight.classList.add("line-1-right");
                }, 800);
            };

            if(wScroll >= $(textLeft).offset().top - 660){
                // console.log("TextLeft");
                textLeft.classList.add("swapTextNine");
            }

            if(wScroll >= $(textRight).offset().top - 660){
                textRight.classList.add("swapTextTen")
            }

            if(wScroll >= $(lineMid).offset().top - 1000){
                // console.log("MIDDD");
                lineMid.classList.add("lineMid");
            }

            // Rounded Oval End
        })
    }
}

addingNewPlace();

function redTimeRound(){
    const getAllround = document.querySelectorAll(".round")

    let count = 0;

    const timmer = setInterval(() =>{
        count++;

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
    const getBody = document.querySelector("body");

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
        // console.log("hayuk")
        getBody.classList.toggle("scrollHidden");


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
