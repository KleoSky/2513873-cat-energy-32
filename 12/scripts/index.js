var e=document.querySelector(".main-navigation"),s=document.querySelector(".button-burger"),n=document.querySelector(".body");n.classList.remove("nojs");e.classList.remove("main-navigation--opened");e.classList.add("main-navigation--closed");s.addEventListener("click",()=>{e.classList.contains("main-navigation--opened")?(s.classList.remove("button-burger--opened"),s.classList.add("button-burger--closed"),e.classList.remove("main-navigation--opened"),e.classList.add("main-navigation--closed")):(s.classList.add("button-burger--opened"),s.classList.remove("button-burger--closed"),e.classList.add("main-navigation--opened"),e.classList.remove("main-navigation--closed"))});
