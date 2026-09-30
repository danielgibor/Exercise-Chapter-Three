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
