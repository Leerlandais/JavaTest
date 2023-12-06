
// Had this idea on the way home yesterday, make a webpage with no HTML. I honestly thought it would be harder

const bodyJava = document.getElementById("putStuffHere");           // First off, find the <body> where we're going to put stuff

const placeH1 = document.createElement("h1");                       // create and element, in this case <h1>
    placeH1.id = "h1Java";                                          // give it an id
    placeH1.textContent = "Hello World, I'm not HTML";              // and some text
    bodyJava.appendChild(placeH1);                                  // add it to the body

const placeNav = document.createElement("nav");                     // these next bits are the same, just change the element as needed
    placeNav.id = "navJava";
    bodyJava.appendChild(placeNav);

const placeUL = document.createElement("ul");
    placeUL.id = "ulJava";
    document.getElementById("navJava").appendChild(placeUL);

for (i = 0; i < 4; i++){                                            // Now for 4 list items. Done with a loop, obviously, so that it can be increased at will
    const placeLi = document.createElement("li");
    placeLi.classList.add("liJava");                                // adds a class to all elements
    placeLi.id = "li" + (i + 1);                                    // Use the same for loop to add unique ids to each
    document.getElementById("ulJava").appendChild(placeLi);
}

for (i = 0; i < 4; i++){                                            // same thing here for the <a>
    const placeA = document.createElement("a");
    placeA.classList.add("aJava");
    placeA.id = "a" + (i + 1);
    placeA.href = "#";
    document.getElementById("li" + (i + 1)).appendChild(placeA);
    const placeLink = document.getElementById("a" + (i + 1))        // 2 minutes ago, this was in a separate loop. 
    placeLink.textContent = "Link : " + (i + 1);                    // No need for that so I moved it into this loop
}

const placeImg = document.createElement("img");
    placeImg.id = "logoJava";
    placeImg.src = "LogoCF2M.png";
    document.getElementById("putStuffHere").appendChild(placeImg);



    // All in all, only took about 45 minutes to an hour to figure out how to do it and take care of the CSS








