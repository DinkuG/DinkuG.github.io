<<<<<<< HEAD


let car = {
    name: [],  
    regno : [],
    typeservice: [],
    nofault: [],
};

function createcar(){   
      car.name.push(document.getElementById("carin").value);
      car.regno.push(document.getElementById("regno").value);
      car.typeservice.push(document.getElementById("faultno").value);
      car.nofault.push(document.getElementById("sertype").value);
      //listcar();
      document.getElementById("txtbill").value =  parseInt(document.getElementById("faultno").value) * 100;
}
function listcar(){
    for(let i =0; i<car.name.length;i++){
        
        let op1 = document.createElement('option');
        op1.innerHTML = car.name[i];
        document.getElementById("listcar").appendChild(op1);

        let op2 = document.createElement('option');
        op2.innerHTML = car.name[i];
        document.getElementById("delcar").appendChild(op2);
        }
}
function deletecar(){     
    let delitem = document.getElementById("delcar").options.selectedIndex.value;
    for(let j = 0; j <car.name.length; j++){
        if(car.name[j] == delitem){            
            car.name[j].splice(j,1);
        }
    }
}



=======


let car = {
    name: [],  
    regno : [],
    typeservice: [],
    nofault: [],
};

function createcar(){   
      car.name.push(document.getElementById("carin").value);
      car.regno.push(document.getElementById("regno").value);
      car.typeservice.push(document.getElementById("faultno").value);
      car.nofault.push(document.getElementById("sertype").value);
      //listcar();
      document.getElementById("txtbill").value =  parseInt(document.getElementById("faultno").value) * 100;
}
function listcar(){
    for(let i =0; i<car.name.length;i++){
        
        let op1 = document.createElement('option');
        op1.innerHTML = car.name[i];
        document.getElementById("listcar").appendChild(op1);

        let op2 = document.createElement('option');
        op2.innerHTML = car.name[i];
        document.getElementById("delcar").appendChild(op2);
        }
}
function deletecar(){     
    let delitem = document.getElementById("delcar").options.selectedIndex.value;
    for(let j = 0; j <car.name.length; j++){
        if(car.name[j] == delitem){            
            car.name[j].splice(j,1);
        }
    }
}



>>>>>>> 225fc474051bc592e83ef1ba16c2ce4497664b7e
