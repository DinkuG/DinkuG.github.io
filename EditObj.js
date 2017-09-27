//<!-- Create a series of textboxes and buttons that let you create a Person object with -->
//<!-- data from the textboxes, output your Person object, as well as edit your Person object. -->
var person = {
    name: "",
    age: 0,
    occupation: ""
};

function createobj(){
    person.name = document.getElementById("tname").value;
    person.age = document.getElementById("tage").value;
    person.occupation = document.getElementById("tocc").value;
    displayobj();

}

function displayobj(){
    document.write(person.name);
    document.write("<br>");
    document.write(person.age);
    document.write("<br>");
    document.write(person.occupation);
    document.write("<br>");
}

function editobject(){
    createobj();
    person.name = "Jeff";
    person.age = 20;
    person.occupation = "Trainee";
    displayobj();
}



