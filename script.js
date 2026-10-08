console.log("Hello from JavaScript");
const temperature = 25;

if (temperature < 15){
    console.log("Cold");
}
if (temperature>=15 && temperature<=25){
    console.log("Comfortable");
}
if (temperature > 25){
    console.log("Hot");
}

function calculateArea(width, height){
    return width * height;
}

const area = calculateArea(10, 5);

console.log(area);

function isAdult(age){
    if(age >= 18){
        return true;
    }
    return false;
}

console.log(isAdult(20)); 
console.log(isAdult(15));

const developers = [
    {name:"Alice", role:"DevOps"},
    {name:"Bob", role:"Frontend"},
    {name:"Charlie", role:"Architect"}
];

const button = document.querySelector("#about");
button.addEventListener("click", ()=>{button.classList.toggle(".hidden");});

// const form = document.querySelector("#contact-form"); 
// form.addEventListener("submit", (event) => { 
// event.preventDefault(); 
// console.log("Form submitted"); 
// });

const form = document.querySelector("#contact-form");
const submissionMessage = document.querySelector("#result-message");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameForm = document.querySelector("#name").value.trim();
    const emailForm = document.querySelector("#email").value.trim();
    const messageForm = document.querySelector("#message").value.trim();
    if((!nameForm) || (!emailForm) || (!messageForm)){
        submissionMessage.textContent = "Please fill in all required fields";
        return;
    }
    submissionMessage.textContent = "Submission Completed";
});

const projects = [
    {
        name: "Project One",
        description: "First project"
    },
    {
        name: "Project Two",
        description: "Second project"
    }
];

const projects_49 = document.querySelector("#projects");

for (const project of projects){
    const element = document.createElement("div");
    element.textContent = "Project Name: " + project.name + "; Project Description: " + project.description;
    projects_49.appendChild(element);
}

console.log(nonExistentVariable);