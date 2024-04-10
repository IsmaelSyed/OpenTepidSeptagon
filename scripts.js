/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */




let schools = [
    {
        name: "Georgia Tech",
        imageUrl: "https://cdn.britannica.com/82/160782-050-C09181F8/Lettie-Pate-Whitehead-Evans-Administration-Building-Georgia.jpg",
        description: "Georgia Institute of Technology, commonly referred to as Georgia Tech, is a public research university.",
        location: "Atlanta, Georgia",
        website: "https://www.gatech.edu/",
        cost: "34",
        acceptanceRate: "20",
        notablePrograms: ["Computer Science", "Cybersecurity", "Industrial Engineering"]
    },
    {
        name: "New York University",
        imageUrl: "https://www.usnews.com/dims4/USNEWS/72c90e6/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F9d%2Fd819230374ef6531890bb7eee1dac0%2FNYU_WSP_Header.jpg",
        description: "New York University (NYU) is a private research university.",
        location: "New York City, New York",
        website: "https://www.nyu.edu/",
        cost: "53",
        acceptanceRate: "20",
        notablePrograms: ["Business", "Film and Television", "Performing Arts"]
    },
    {
        name: "University of California",
        imageUrl: "https://cdn.britannica.com/27/66627-050-27B5867D/Royce-Hall-University-of-California-Los-Angeles.jpg",
        description: "The University of California is a public land-grant research university system.",
        location: "Various locations in California",
        website: "https://www.universityofcalifornia.edu/",
        cost: "44",
        acceptanceRate: "17",
        notablePrograms: ["Biology", "Psychology", "Computer Science"]
    },
    {
        name: "MIT",
        imageUrl: "https://www.mit.edu/files/images/201807/15656704711_00457bd2c9_b_1.jpg",
        description: "The Massachusetts Institute of Technology (MIT) is a private land-grant research university.",
        location: "Cambridge, Massachusetts",
        website: "https://www.mit.edu/",
        cost: "54",
        acceptanceRate: "6",
        notablePrograms: ["Computer Science", "Engineering", "Mathematics"]
    },
    {
        name: "Stanford University",
        imageUrl: "https://cdn.britannica.com/25/121725-050-8BF363EC/Hoover-Tower-Stanford-University-California.jpg",
        description: "Stanford University is a private research university.",
        location: "Stanford, California",
        website: "https://www.stanford.edu/",
        cost: "56",
        acceptanceRate: "4",
        notablePrograms: ["Business", "Computer Science", "Medicine"]
    }
];

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    schools.forEach(school => {
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, school.name, school.imageUrl, school.description, school.location, school.website, school.acceptanceRate, school.cost, school.notablePrograms);
        cardContainer.appendChild(nextCard);
    });
}

function editCardContent(card, name, imageUrl, description, location, website, acceptanceRate, cost, notablePrograms) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = name;

    const cardDescription = card.querySelector(".description");
    cardDescription.textContent = description;

    const cardLocation = card.querySelector(".location");
    cardLocation.textContent = "Location: " + location;

    const cardWebsite = card.querySelector(".website");
    cardWebsite.innerHTML = `<a href="${website}" target="_blank">Visit Website</a>`;

    const cardImage = card.querySelector("img");
    cardImage.src = imageUrl;
    cardImage.alt = name + " Logo";

    const cardCost = card.querySelector(".cost");
    cardCost.textContent = "Cost: $" + cost + "k";

    const cardAcceptanceRate = card.querySelector(".acceptance-rate");
    cardAcceptanceRate.textContent = "Acceptance Rate: " + acceptanceRate + "%";

    const cardNotablePrograms = card.querySelector(".notable-programs");
    cardNotablePrograms.innerHTML = "<strong>Notable Programs:</strong>";
    notablePrograms.forEach(program => {
        const listItem = document.createElement("li");
        listItem.textContent = program;
        cardNotablePrograms.appendChild(listItem);
    });

    console.log("new card:", name, "- html: ", card);
}

document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("Georgia Tech, I still need to apply...");
}

function removeLastCard() {
    schools.pop();
    showCards();
}

function sortSchoolsByName() {
    schools.sort((a, b) => a.name.localeCompare(b.name));
    showCards();
}


function sortSchoolsByAcceptanceRate() {
    console.log("Sorting schools by acceptance rate...");
    schools.sort((a, b) => a.acceptanceRate - b.acceptanceRate);
    console.log("Sorted schools:", schools);
    showCards();

function sortSchoolsByCost() {
    console.log("Sorting schools by cost...")
    schools.sort((a, b) => (a.cost) - (b.cost));
    console.log("Sorted schools:", cost)
    showCards();
}
}



