let faqs = document.getElementsByClassName('faqItem');
let i = 0;
for (i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function() {
        let lastElement = this.lastElementChild;
        let arrowDown = this.querySelector('.faqArrowDown');
        let arrowUP = this.querySelector('.faqArrowUp');
        if (lastElement.style.display === "block") {
            lastElement.style.display = "none";
            arrowDown.style.display = "block";
            arrowUP.style.display = "none";
        } else {
            lastElement.style.display = "block";
            arrowDown.style.display = "none";
            arrowUP.style.display = "block";
        }
    });
}
