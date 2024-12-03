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
        
        const stars = document.querySelectorAll('.star');
        
        stars.forEach(function(star, index) {
            star.addEventListener('click', function(){
                for (let i=0; i <= index; i++){
                    stars[i].classList.add('checked');
                }
                for (let i=index+1; i<stars.length; i++){
                    stars[i].classList.remove('checked');
                }
            })
        })
})
