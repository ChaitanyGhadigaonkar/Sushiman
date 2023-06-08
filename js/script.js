const left_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("left-right");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.remove("left-right");
    }
  });
});

const leftElements = document.querySelectorAll(".hidden-left-right");
leftElements.forEach((el) => left_observer.observe(el));



const right_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("right-left");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.remove("right-left");
    }
  });
});

const rightElements  = document.querySelectorAll(".hidden-right-left");
rightElements.forEach((el) => right_observer.observe(el));



// for bottom up animation

const bottomUpObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add("show")
        entry.target.classList.add("bottom-up")
    }else{
        entry.target.classList.remove("show")
        entry.target.classList.remove("bottom-up")
    }
  })
})


const bottomElements = document.querySelectorAll(".hidden-bottom-up");

bottomElements.forEach((el)=>{bottomUpObserver.observe(el)})

