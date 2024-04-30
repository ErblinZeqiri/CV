const imgs = document.querySelectorAll(".iconHover");

imgs.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.setAttribute("src", "images/" + img.getAttribute("alt") + "_hover.png");
    });

    img.addEventListener("mouseout", () => {
        img.setAttribute("src", "images/" + img.getAttribute("alt") + ".png");
    });
});
