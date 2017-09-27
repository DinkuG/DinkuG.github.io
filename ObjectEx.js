var person = {
    name: "Elliot",
    age: "23",
    occupation: "Trainer"
};

function displayObject(){
    document.write(person.name);
    document.write("<br>");
    document.write(person.age);
    document.write("<br>");
    document.write(person.occupation);
}

function displayObject2(){
    person.name = "Jeff";
    person.age = "30";
    person.occupation = "Lecturer";
    displayObject();  
}

function addage(){
    var a = parseInt(person.age);
    a++;
    document.write(a);
}