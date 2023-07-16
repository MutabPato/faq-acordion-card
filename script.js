const questions=document.querySelectorAll(".question");

questions.forEach((question) => {
    const answer=question.nextElementSibling;
    const arrow=question.querySelector(".arrow");
    arrow.classList.remove("rotate")
    
    question.addEventListener("click",()=>{
       questions.forEach((otherQuestion) => {
        const otherAnswer=otherQuestion.nextElementSibling;
        const otherArrow=otherQuestion.querySelector(".arrow");
        
       if(otherQuestion !== question){
        otherAnswer.classList.add("hidden");
        otherArrow.classList.remove("rotate")
       }
       })

        answer.classList.toggle("hidden");
        arrow.classList.toggle("rotate");
    })
})


