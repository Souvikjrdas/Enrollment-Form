
var user = document.getElementsByClassName("input-text");
var gender = document.getElementsByClassName("gender");
var skills = document.getElementsByClassName("skills");
var rbar = document.getElementById("right-sidebar");
var bdata = document.getElementById("t-body");
var btn = document.getElementById("form");
var sub = document.getElementById("submit1");

//global variables
var it = 0;
var id = 0;
var bgcount = 0;

//RegExp
var regname = /^([A-Z])([a-zA-Z]+)([\s]+([A-Z])([a-z]+))?$/;
var regweb = /^((http:\/\/)|(http:\/\/www\.)|((https:\/\/))|(https:\/\/www\.)|www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var regmail = /^([a-zA-Z0-9-\.]+)@([a-zA-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
function ResetAll() {
    for (var i = 0; i < user.length; i++) {
        user[i].value = "";
    }
    gender[0].checked = false;
    gender[1].checked = false;

    for (var i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            skills[i].checked = false;
        }
    }
}


//function to execute fade in animation.
function show() {
    var b = document.getElementsByClassName("t-row");
    var op = Number(window.getComputedStyle(b[it]).getPropertyValue("opacity"));
    if (op < 1) {
        op += 0.1;
        b[it].style.opacity = op;
    }
    else {
        it += 1;
        clearInterval(id);
        id = 0;
    }
}

function func() {
    if (user[0].value.trim() == "" || user[1].value.trim() == "" || user[2].value.trim() == "" || user[3].value.trim() == "") {
        alert("Input field(s) cannot be blank:");
    }
    else if (gender[0].checked == false && gender[1].checked == false) {
        alert("Please select the gender of the candidate:");
    }
    else if (skills[0].checked == false && skills[1].checked == false && skills[2].checked == false) {
        alert("Please select a skill");
    }
    else if (!regname.test(user[0].value.trim())) {
        alert("Invalid username: First letter needs to be capital and no characters except alphabets or spaces.");
    }
    else if (!regmail.test(user[1].value.trim())) {
        alert("Invalid email");
    }
    else if (!regweb.test(user[2].value.trim())) {
        alert("Invalid website link.      Format : (http(s):// or http(s)://www. or www.)name.extension.extension(optional)");
    }
    else if (!regweb.test(user[3].value.trim())) {
        alert("Invalid image link.     Format : (http(s):// or http(s)://www. or www.)name.extension.extension(optional)");
    }
    else {
        var trow = document.createElement("tr");                                        //row
        var tdata = document.createElement("td");                                      //data
        var tdata1 = document.createElement("td");                                    //image data

        //user name
        var data1 = document.createElement("p");
        data1.textContent = user[0].value;
        data1.classList.add('parag');
        data1.classList.add('name');
        tdata.appendChild(data1);

        //gender
        var data2 = document.createElement("p");
        data2.textContent = "";
        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked == true) {
                data2.textContent += gender[i].value;
            }
        }
        data2.classList.add('parag');
        tdata.appendChild(data2);

        //email
        var data3 = document.createElement("p");
        data3.textContent = user[1].value;
        data3.classList.add('parag');
        tdata.appendChild(data3);

        //website
        var data4 = document.createElement('a');
        data4.textContent = user[2].value;
        data4.href = user[2].value;
        data4.target = "blank";
        data4.style.fontSize = "small";
        tdata.appendChild(data4);

        //skills
        var data5 = document.createElement('p');
        data5.textContent = "";
        for (var i = 0; i < skills.length; i++) {
            if (skills[i].checked == true) {
                data5.textContent += skills[i].value + " ";
            }
        }
        data5.classList.add('parag1');
        tdata.appendChild(data5);

        //image

        var image = document.createElement("img");
        image.src = user[3].value;
        image.alt = "Pic";
        image.id = "img1";
        tdata1.appendChild(image);

        tdata1.classList.add('tdi');
        tdata.classList.add('t-data');

        tdata.classList.add('d-bgeffect');
        tdata1.classList.add('i-bgeffect');

        tdata.style.backgroundColor = "#9ddb28";
        tdata1.style.backgroundColor = "#9ddb28";

        trow.appendChild(tdata);
        trow.appendChild(tdata1);
        trow.classList.add("t-row");
        // trow.style.opacity = 0;
        bdata.appendChild(trow);
        rbar.style.overflowY = "scroll";

        ResetAll();

        if (bgcount > 0) {
            var b = document.getElementsByClassName("d-bgeffect");
            var l = document.getElementsByClassName("i-bgeffect");
            b[bgcount - 1].style.backgroundColor = "white";
            l[bgcount - 1].style.backgroundColor = "white";
        }

        //setinterval to trigger Fade in Animation
        id = setInterval(show, 150);
        bgcount += 1;
    }
}


//Adding event listener 'submit' on submitting the form
btn.addEventListener('submit', function (e) {
    e.preventDefault();
    func();
})