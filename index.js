const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
//     grab the "root" element
    const rootElement = document.getElementById("root")
    // add an h1 element
    const h1 = document.createElement("h1");
    // give it text of "FREELANCERS"
    const textNode = document.createTextNode("FREELANCERS");
    // appended text to the h1 element 
    h1.appendChild(textNode);
    // appended to the HTML document
    rootElement.appendChild(h1)

// create ul element
const ulElement = document.createElement("UL");
// loop over the users 
users.forEach((user) => {
   // create li element for each user
   const liElement = document.createElement("LI")
   //create text with user name
   const userName = document.createTextNode(user.name)
   //apned username to li
   liElement.appendChild(userName)
// append the li to the ul
ulElement.appendChild(liElement)
});

// append the ul to the rootelement
rootElement.appendChild(ulElement)

}

//call the main function
main();