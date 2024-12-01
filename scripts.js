document.addEventListener('DOMContentLoaded', () => {

    let collapse = document.querySelectorAll(".collapsible");
    console.log(collapse);
    let i;

    for (i = 0; i < collapse.length; i++) {
        collapse[i].addEventListener("click", function() {
            this.classList.toggle("active");

            let content = this.nextElementSibling;
            
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        })};
})