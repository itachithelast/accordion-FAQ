


window.addEventListener("click",(e)=> {
    const id = e.target.parentNode.parentNode.id
    if (id){
        const prevAnswer = document.querySelector("#show")
        if (prevAnswer){
            prevAnswer.classList.add("hidden")
            prevAnswer.id = "hidden"
        }
        const answer = document.querySelector(`#${id}`).querySelector(`#hidden`)
        answer.classList.remove("hidden")
        answer.id = "show"
    }
})