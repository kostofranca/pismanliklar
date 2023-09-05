class Customer{
    constructor(name, surname, id, password, balance=0){
        this.Name = name;
        this.Surname = surname;
        this.Id = id;
        this.Password = password;
        this.Balance = Number(balance);
    }
}

// custom functions
function hide(htmlElements){
    for(let element of htmlElements){
        element.style.display = "none";
    }
}

function displayer(displayElements){
    for(let element of displayElements){
        element.style.display = "initial";
    }
}

function isEqual(o1, o2){ // checks if two users are the same
    var props = Object.keys(o1).splice(0,4);

    for(let i of props){
        if(o1[i] !== o2[i]){
            return false
        }
    }
    return true
}

function isRegistered(objList, obj1){ // checks if a user already exists in DB
    function isEqual(o1, o2){ // checks if two users are the same
        var props = Object.keys(o1).splice(0,4);

        for(let i of props){
            if(o1[i] !== o2[i]){
                return false
            }
        }
        return true
    }

    for(let obj2 of objList){
        if(isEqual(obj1,obj2)){
            return true;
        }
    }
    return false
}

function logUser(objList, obj1){// assign currently logged users
    function isEqual(o1, o2){ // checks if two users are the same
        var props = Object.keys(o1).splice(0,4);

        for(let i of props){
            if(o1[i] !== o2[i]){
                return false
            }
        }
        return true
    }

    for(let obj2 of objList){
        if(isEqual(obj1,obj2)){
            customer = new Customer(obj2.Name, obj2.Surname, obj2.Id, obj2.Password, obj2.Balance);
            return customer;
        }
    }
    return false;
}

function logUserById(objList, id, amount_to_send){// assign currently logged users

    for(let obj2 of objList){
        if(obj2.Id == id){
            customer = new Customer(obj2.Name, obj2.Surname, obj2.Id, obj2.Password, obj2.Balance += amount_to_send);
            return customer;
        }
    }
    return NaN;
}

function deleteUser(objList, obj){

    if(isRegistered(objList,obj)){
        for(let i = 0;i<objList.length; i++){
            if(obj.Id === objList[i].Id){
                objList.splice(i, 1);
                return objList;
            }
        }
    }
    else{
        return -1;
    }
}

function isFisible(account, money_to_send){
    var amount = account.Balance - money_to_send;

    return amount>=0?true:false;

}

// custom functions end
function sign(){

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var id = document.getElementById("Id").value;
    var password = document.getElementById("password").value;

    customerList.forEach((c)=>{
        ids.push(c.Id);
    })

    if ((name.length == 0 && surname.length == 0 && id.length == 0 && password.length == 0) || ids.includes(id)){
        alert("Lütfen geçerli değerlerle kayıt olunuz!")
    }

    else{

        const customer = new Customer(name, surname, id, password, 0);

        if (isRegistered(customerList, customer)){
            alert("Zaten kayıtlısınız. Lütfen giriş yapınız.");
            signup.style.display = 'none';
            signin.style.display = '';
        }
        else{

            customerList.push(customer);
            alert("Giriş yapabilirsiniz!");
            signup.style.display = 'none';
            signin.style.display = '';
        }
    }


}

function login(){

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var id = document.getElementById("Id").value;
    var password = document.getElementById("password").value;

    var customer = new Customer(name, surname, id, password);

    if(isRegistered(customerList,customer)){
        alert("Giriş Başarılı. Uygulamaya yönlendiriliyorsunuz...");
        hide([user_card_body, login_container, button_container, user_acc_container]);
        displayer([user_card_container, button_activity, button_balance,button_draft,button_eft,button_setting])
        loggedUser = logUser(customerList, customer);
        // createUserCard(customer);
        user_header_username.innerText = loggedUser.Name;
    }
    else{
        alert("Lütfen Kullanıcı oluşturun!");
        signup.style.display = '';
        signin.style.display = 'none';
    }
}

function logout(){
    hide([user_card_container]);
    displayer([login_container, signup]);

    user_header_username.innerText = "";

    for(let i of customerList){
        if(loggedUser.Id == i.Id){
            i.Name = loggedUser.Name;
            i.Surname = loggedUser.Surname;
            i.Password = loggedUser.Password;
            i.Balance = loggedUser.Balance;
        }
    }
}

function setting(){
    hide([button_activity,button_balance, button_draft,button_eft, button_setting, user_table_deposit,user_table_withdraw, user_table_choose,user_table_amount_choose, user_table_send])
    displayer([button_back,user_card_body,user_table_delete, user_table_update, button_container])

    user_table_username.innerText = loggedUser.Name;
    user_table_surname.innerText = loggedUser.Surname;
    user_table_id.innerText = loggedUser.Id;
    user_table_password.innerText = loggedUser.Password;
    user_table_balance.innerText = "Go to Draft";

    if(updateBool == false){
        updateBool = true;
        // add input col for update
        const tdName = document.createElement("td");
        const inputName = document.createElement("input");
        inputName.className="form-control";
        inputName.placeholder ="Update Name";
        inputName.id = "input-name";
        inputName.value = loggedUser.Name;
        inputName.required = true;
        tdName.appendChild(inputName);
        tdName.className="w-25";
        user_table_row_name.appendChild(tdName);


        const tdSurname = document.createElement("td");
        const inputSurname = document.createElement("input");
        inputSurname.className="form-control";
        inputSurname.placeholder ="Update Surname";
        inputSurname.id = "input-surname";
        inputSurname.value = loggedUser.Surname;
        inputSurname.required = true;
        tdSurname.appendChild(inputSurname);
        user_table_row_surname.appendChild(tdSurname);

        
        const tdId = document.createElement("td");
        const inputId = document.createElement("input");
        inputId.className="form-control";
        inputId.placeholder ="Update Id";
        inputId.id = "input-id";
        inputId.value = loggedUser.Id;
        inputId.required = true;
        tdId.appendChild(inputId);
        user_table_row_id.appendChild(tdId);


        const tdpass = document.createElement("td");
        const inputpass = document.createElement("input");
        inputpass.className="form-control";
        inputpass.placeholder ="Update password";
        inputpass.id = "input-password";
        inputpass.value = loggedUser.Password;
        inputpass.required = true;
        tdpass.appendChild(inputpass);
        user_table_row_pass.appendChild(tdpass);

    }

    if(isEqual(loggedUser,customerList[0])){
        hide([user_table_delete,user_table_update])
        displayer([admin_card_body]);

        admin_table.innerHTML = "";
        const table_head = document.createElement("tr");
        const th1 = document.createElement("th");
        th1.className = "w-auto";
        th1.innerText = "User";
        const th2 = document.createElement("th");
        th2.className = "w-auto";
        th2.innerText = "Info";

        table_head.appendChild(th1);
        table_head.appendChild(th2);
        admin_table.appendChild(table_head);


        for(let i of customerList){
            if(isEqual(customerList[0], i) == false){
                const row = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                td1.innerText = i.Name + " " + i.Surname;
                td2.innerText = `ID:${i.Id} - Password:${i.Password} - Balance:${i.Balance}`;
                row.appendChild(td1);
                row.appendChild(td2);
                admin_table.appendChild(row);
            }
        }
    }

}

function draft(){
    hide([button_setting,button_activity,button_balance,button_eft,button_draft, user_table_delete,user_table_update, user_table_choose,user_table_amount_choose, user_table_send])
    displayer([button_back, user_card_body, user_table_deposit, user_table_withdraw, button_container])

    user_table_username.innerText = loggedUser.Name;
    user_table_surname.innerText = loggedUser.Surname;
    user_table_id.innerText = loggedUser.Id;
    user_table_password.innerText = "Go to Settings"
    user_table_balance.innerText = loggedUser.Balance;

    if(updateBoolDraft == false){
        updateBoolDraft = true;
        const tdBalance = document.createElement("td");
        const inputBalance = document.createElement("input");
        inputBalance.className="form-control";
        inputBalance.placeholder ="Amount";
        inputBalance.setAttribute("id", "input-balance");
        inputBalance.required = true;
        tdBalance.appendChild(inputBalance);
        tdBalance.className="w-25";
        user_table_row_balance.appendChild(tdBalance);
    }

}

function activity(){

    hide([button_activity,button_balance,button_draft,button_eft,button_setting])
    displayer([user_acc_container, button_back]);
    
    acc_table.innerHTML = "";
    const table_head = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.className = "w-auto";
    th1.innerText = "Account ID";
    const th2 = document.createElement("th");
    th2.className = "w-auto";
    th2.innerText = "Acctivity";

    table_head.appendChild(th1);
    table_head.appendChild(th2);
    acc_table.appendChild(table_head);

    for(let i of Object.keys(activities)){
        if(loggedUser.Id == i.split("_")[1]){
            const row = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.innerText = loggedUser.Id;
            td2.innerText = Number(activities[i].split("_")[0])>0?`${activities[i].split("_")[0]} from ${activities[i].split("_")[1]}`:`${activities[i].split("_")[0]} to ${activities[i].split("_")[1]}`;
            row.appendChild(td1);
            row.appendChild(td2);
            acc_table.appendChild(row);
        }
    }
}

function balance(){
    hide([button_setting,button_activity,button_balance,button_eft,button_draft, user_table_delete,user_table_update, user_table_deposit, user_table_withdraw])
    displayer([button_back, user_card_body]);

    user_table_username.innerText = loggedUser.Name;
    user_table_surname.innerText = loggedUser.Surname;
    user_table_id.innerText = loggedUser.Id;
    user_table_password.innerText = "Go to Settings"
    user_table_balance.innerText = loggedUser.Balance;

}

function transfer(){
    hide([button_setting,button_activity,button_balance,button_eft,button_draft, user_table_delete,user_table_update, user_table_deposit, user_table_withdraw])
    displayer([button_back, user_card_body, user_table_choose,user_table_amount_choose, user_table_send, button_container]);

    user_table_username.innerText = loggedUser.Name;
    user_table_surname.innerText = loggedUser.Surname;
    user_table_id.innerText = loggedUser.Id;
    user_table_password.innerText = "Go to Settings";
    user_table_balance.innerText = loggedUser.Balance;

    user_select_users.innerHTML = "";

    var opt1 = document.createElement("option");
    opt1.innerText = "Select an account to send money"
    user_select_users.appendChild(opt1);

    customerList.forEach((customer)=>{
        if(customer.Name != "admin" && customer.Name != loggedUser.Name){
            const opt = document.createElement("option");
            opt.id = "user-option";
            opt.innerText = `${customer.Name} ${customer.Surname} - ${customer.Id}`;

            user_select_users.appendChild(opt);
        }
    })
};

function back(){
    displayList = [button_activity, button_balance,button_draft,button_eft,button_setting]
    displayer(displayList);
    
    hide([button_back, user_card_body, button_container,user_acc_container,admin_card_body]);
}

let admin_p = new Customer("admin","admin", "12345", "12345", 1000);
let erhan = new Customer("Erhan", "Canımhocam", "123456", "123456", 100000);
let kasim = new Customer("Ahmet Kasım", "Erbay", "1", "1", 1000);

var customerList = [admin_p, erhan, kasim];

var updateBool = false;
var updateBoolDraft = false;
var loggedUser = {};
var otherUser;
var ids = [];

var activities = {"id":"+-amount_ToUserId"};
var acc_counter = 0;
const signup = document.getElementById("signup");
const signin = document.getElementById("signin");

// sign elements
const login_container = document.getElementById("login-container");

// user elements
const user_card_container = document.getElementById("user-card-container");

const user_card = document.getElementById("user-card");
const user_activities_button = document.getElementById("button-activity");

const user_card_header = document.getElementById("user-card-header");
const user_header_username = document.getElementById("user-header-username");

const user_acc_container = document.getElementById("acc-card-body");
const user_card_body = document.getElementById("user-card-body");
const admin_card_body = document.getElementById("admin-card-body");

const user_form = document.getElementById("user-form");

const button_container = document.getElementById("button-container");
const user_table = document.getElementById("button-table");
const user_table_row_name = document.getElementById("table-row-name");
const user_table_row_surname = document.getElementById("table-row-surname");
const user_table_row_id = document.getElementById("table-row-id");
const user_table_row_pass = document.getElementById("table-row-password");
const user_table_row_balance = document.getElementById("table-row-balance");

const user_table_username = document.getElementById("table-name");
const user_table_surname = document.getElementById("table-surname");
const user_table_id = document.getElementById("table-id");
const user_table_password = document.getElementById("table-password");
const user_table_balance = document.getElementById("table-balance");

const user_select_users = document.getElementById("users");
const user_table_choose = document.getElementById("table-user-choose");
const user_table_amount_choose = document.getElementById("table-amount-choose");

// buttons user
const user_card_footer = document.getElementById("user-card-footer");
const button_setting = document.getElementById("button-setting");
const button_activity = document.getElementById("button-activity");
const button_balance = document.getElementById("button-balance");
const button_eft = document.getElementById("button-eft");
const button_draft = document.getElementById("button-draft");
const button_back = document.getElementById("button-back");

// button inside
const user_table_update = document.getElementById("table-button-update")
const user_table_delete = document.getElementById("table-button-delete");
const user_table_deposit = document.getElementById("table-button-deposit");
const user_table_withdraw = document.getElementById("table-button-withdraw");
const user_table_send = document.getElementById("table-button-send");

// acc table
const acc_table = document.getElementById("acc-table");

// admin table
const admin_table = document.getElementById("admin-table");

hide([button_back, user_card_container, button_container, user_acc_container, admin_card_body]);

// draft - withdraw events
user_table_deposit.addEventListener("click", (e)=>{
    e.preventDefault();
    const input_balance_1 = document.getElementById("input-balance").value;
    loggedUser.Balance += Number(input_balance_1);
    user_table_balance.innerText = loggedUser.Balance;

    activities[`${acc_counter++}_${loggedUser.Id}`]=`+${input_balance_1}_${loggedUser.Id}`;
});

user_table_withdraw.addEventListener("click", (e)=>{
    e.preventDefault();
    const input_balance_2 = document.getElementById("input-balance").value;
    
    loggedUser.Balance -= Number(input_balance_2);
    user_table_balance.innerText = loggedUser.Balance;

    activities[`${acc_counter++}_${loggedUser.Id}`]=`-${input_balance_2}_${loggedUser.Id}`;
})

user_table_update.addEventListener("click",(e)=>{
    e.preventDefault();

    const input_name = document.getElementById("input-name").value;
    const input_surname = document.getElementById("input-surname").value;
    const input_id = document.getElementById("input-id").value;
    const input_password = document.getElementById("input-password").value;

    console.log(loggedUser);
    loggedUser.Name = input_name;
    loggedUser.Surname = input_surname;
    loggedUser.Id = input_id
    loggedUser.Password = input_password;

    customerList.forEach((c)=>{
        ids.push(c.Id);
    })

    user_header_username.innerText = loggedUser.Name;
})

user_table_delete.addEventListener("click", (e)=>{
    e.preventDefault();
    deleteUser(customerList, loggedUser);
    alert("deleted account");
    hide([user_card_container]);
    displayer([login_container, signup]);
})

user_table_send.addEventListener("click", (e)=>{
    e.preventDefault();

    const amount_to_send = Number(document.getElementById("amount-to-send").value);
    const text= user_select_users.options[user_select_users.selectedIndex].text;
    var otherUserId = text.split(" ");
    otherUserId = otherUserId[otherUserId.length - 1];

    if(isFisible(loggedUser, amount_to_send))
    {
        loggedUser.Balance -= amount_to_send; 
        otherUser=logUserById(customerList, otherUserId, amount_to_send);
        activities[`${acc_counter++}_${loggedUser.Id}`]=`-${amount_to_send}_${otherUserId}`;
        activities[`${acc_counter++}_${otherUserId}`]=`+${amount_to_send}_${loggedUser.Id}`;

        console.log(activities, text);
    }
    else
    {
        alert(`O kadar paran yok!\n${loggedUser.Balance}'dan daha az bir şeyler dene`);
    }

    user_table_username.innerText = loggedUser.Name;
    user_table_surname.innerText = loggedUser.Surname;
    user_table_id.innerText = loggedUser.Id;
    user_table_password.innerText = loggedUser.Password;
    user_table_balance.innerText = loggedUser.Balance;

})