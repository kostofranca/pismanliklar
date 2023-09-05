class User{ // Initialize the User Class
    constructor(userId, name, surname, age, licence){
        this.UserId = userId;
        this.Name = name;
        this.Surname = surname;
        this.Age = age;
        this.Licence = licence;
    }
}

class Car{ // Initialize the Car Class
    constructor(id, model, brand, age){
        this.Id = id;
        this.Model = model;
        this.Brand = brand;
        this.Age = age;
    }
}


function createRow2(obj1,obj2=""){
    /*
        Inputs:
            * obj1(object): An object of a class
            * obj2(object if given): If it is not provideded, the object will be equal to empty string
                                    if given it will iterate over its properties and append them with 
                                    the obj1's "td"s.
        Returns:
            * tr object that encapsulates td's consisting of obj1 and obj2's properties. 
    */
    let count1 = Object.keys(obj1).length;
    let count2 = obj2.length==0?0:Object.keys(obj2).length;

    const tr = document.createElement("tr");

    for(let i = 0; i<count1; i++){
        const prop1 = document.createElement("td");
        prop1.textContent = obj1[Object.keys(obj1)[i]];
        tr.appendChild(prop1);
    }

    for(let i = 0; i<count2; i++){
        const prop2 = document.createElement("td");
        prop2.textContent = obj2[Object.keys(obj2)[i]];
        tr.appendChild(prop2);
    }

    return tr;
}

function addOption(obj,kind){
    /*
        Inputs:
            * obj (object): An object of a class
            * kind: "user" or "car"; to be added to the elementId
        Returns:
            None

            Appends all the created options (consisting of properties of obj) 
            to the given select body.
    */

    let text = "";
    const select = document.getElementById(kind+"-option");

    for(let prop in obj){
        text += obj[prop] + ", ";
    }

    const opt = document.createElement("option");

    opt.textContent = text.slice(0,-2);
    select.appendChild(opt);
}

function userSave(){

    countU++;

    // save the class properties from DOM
    var userId = countU;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;
    var licence = document.getElementById("licence");
    licence = licence.options[licence.selectedIndex].text;

    // create new user with onclick
    var user = new User(userId, name, surname, age, licence);
    userList.push(user);

    // HTML Ops
    const table1 = document.getElementById("table-body-1");
    table1.appendChild(createRow2(user));

    addOption(user, "user");
}

function carSave(){
    countC++;

    var carId = countC; // save the class properties from DOM
    var model = document.getElementById("model").value;
    var brand = document.getElementById("brand").value;
    var color = document.getElementById("color").value;

    var car = new Car(carId, model, brand, color); // create new user with onclick
    carList.push(car);

    const table2 = document.getElementById("table-body-2");
    table2.appendChild(createRow2(car));

    addOption(car, "car");
}

function displayRent(){

    var select1 = document.getElementById("user-option").value;
    var select2 = document.getElementById("car-option").value;

    var user = userList[Number(select1.slice(0,1)) - 1];
    var car = carList[Number(select2.slice(0,1)) - 1];

    const table3 = document.getElementById("table-3");
    table3.appendChild(createRow2(user,car));
    console.log(user, car);
}

var countU = 0; // counter for User
var countC = 0; // counter for Car

var userList = [];
var carList = [];