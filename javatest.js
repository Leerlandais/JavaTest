
const bodyJava = document.getElementById("putStuffHere");

const placeH1 = document.createElement("h1");
    placeH1.id = "h1Java";
    placeH1.textContent = "Hello World, I'm not HTML";
    bodyJava.appendChild(placeH1);

const placeNav = document.createElement("nav");
    placeNav.id = "navJava";
    bodyJava.appendChild(placeNav);

const placeUL = document.createElement("ul");
    placeUL.id = "ulJava";
    document.getElementById("navJava").appendChild(placeUL);

for (i = 0; i < 4; i++){
    const placeLi = document.createElement("li");
    placeLi.classList.add("liJava");
    placeLi.id = "li" + (i + 1);
    document.getElementById("ulJava").appendChild(placeLi);
}

for (i = 0; i < 4; i++){
    const placeA = document.createElement("a");
    placeA.classList.add("aJava");
    placeA.id = "a" + (i + 1);
    placeA.href = "#";
    document.getElementById("li" + (i + 1)).appendChild(placeA);
}

for (i = 0; i < 4; i++){
    const placeLink = document.getElementById("a" + (i + 1))
    placeLink.textContent = "Link : " + (i + 1);
}

const placeImg = document.createElement("img");
    placeImg.id = "logoJava";
    placeImg.src = "LogoCF2M.png";
    document.getElementById("putStuffHere").appendChild(placeImg);








