
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toggle-btn");
    const text = document.getElementById("toggle-txt-part1");

    button.addEventListener("click", function () {

        if (text.style.marginTop === "205px") {
            text.style.marginTop = "27px";
        } else {
            text.style.marginTop = "205px";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});
