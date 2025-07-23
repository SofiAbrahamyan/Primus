function bacel() {
    document.getElementById("r_main").classList.toggle("h_main");

}



function register() {
    let email = document.getElementById("email").value;


    if (email.includes("@") && email.includes(".") && email.length > 8) {
        document.getElementById("lEmail").innerText = "";
        document.getElementById("email").classList.remove("RegDiv1");
        document.getElementById("email").classList.add("RegDiv");

    }
    else {
        document.getElementById("lEmail").innerText = "Please enter valid email";
        document.getElementById("email").classList.remove("RegDiv");
        document.getElementById("email").classList.add("RegDiv1");


    }

    let first = document.getElementById("First").value;

    if (first.length >= 2) {
        document.getElementById("lFirst").innerText = "";
        document.getElementById("First").classList.remove("RegDiv1");
        document.getElementById("First").classList.add("RegDiv");

    }
    else {
        document.getElementById("lFirst").innerText = "Please enter valid First name";
        document.getElementById("First").classList.remove("RegDiv");
        document.getElementById("First").classList.add("RegDiv1");
    }

    let last = document.getElementById("Last").value;

    if (last.length >= 2) {
        document.getElementById("lLast").innerText = "";
        document.getElementById("Last").classList.remove("RegDiv1");
        document.getElementById("Last").classList.add("RegDiv");

    }
    else {
        document.getElementById("lLast").innerText = "Please enter valid First name";
        document.getElementById("Last").classList.remove("RegDiv");
        document.getElementById("Last").classList.add("RegDiv1");


    }
    let company = document.getElementById("Company").value;

    if (company.length >= 2) {
        document.getElementById("lCompany").innerText = "";
        document.getElementById("Company").classList.remove("RegDiv1");
        document.getElementById("Company").classList.add("RegDiv");

    }
    else {
        document.getElementById("lCompany").innerText = "Please enter your company name ";
        document.getElementById("Company").classList.remove("RegDiv");
        document.getElementById("Company").classList.add("RegDiv1");


    }
    let city = document.getElementById("City").value;

    if (city.length >= 2) {
        document.getElementById("lCity").innerText = "";
        document.getElementById("City").classList.remove("RegDiv1");
        document.getElementById("City").classList.add("RegDiv");

    }
    else {
        document.getElementById("lCity").innerText = "Your city must be at least 2 characters long";
        document.getElementById("City").classList.remove("RegDiv");
        document.getElementById("City").classList.add("RegDiv1");


    }
    let addres = document.getElementById("Addres").value;

    if (addres.length >= 2) {
        document.getElementById("lAddres").innerText = "";
        document.getElementById("Addres").classList.remove("RegDiv1");
        document.getElementById("Addres").classList.add("RegDiv");

    }
    else {
        document.getElementById("lAddres").innerText = "Your addres must be at least 2 characters long";
        document.getElementById("Addres").classList.remove("RegDiv");
        document.getElementById("Addres").classList.add("RegDiv1");


    }
    let stateRegion = document.getElementById("State/Region").value;

    if (stateRegion.length >= 2) {
        document.getElementById("lState/Region").innerText = "";
        document.getElementById("State/Region").classList.remove("RegDiv1");
        document.getElementById("State/Region").classList.add("RegDiv");

    }
    else {
        document.getElementById("lState/Region").innerText = "Your region must be at least 2 characters long";
        document.getElementById("State/Region").classList.remove("RegDiv");
        document.getElementById("State/Region").classList.add("RegDiv1");


    }
    let zip = document.getElementById("Zip code").value;

    if (zip.length >= 2) {
        document.getElementById("lZip code").innerText = "";
        document.getElementById("Zip code").classList.remove("RegDiv1");
        document.getElementById("Zip code").classList.add("RegDiv");

    }
    else {
        document.getElementById("lZip code").innerText = "Your Zip code be at least 2 characters lon";
        document.getElementById("Zip code").classList.remove("RegDiv");
        document.getElementById("Zip code").classList.add("RegDiv1");


    }
    let Phone = document.getElementById("Phone number").value;

    if (Phone.length >= 2) {
        document.getElementById("lPhone number").innerText = "";
        document.getElementById("Phone number").classList.remove("RegDiv1");
        document.getElementById("Phone number").classList.add("RegDiv");

    }
    else {
        document.getElementById("lPhone number").innerText = "Your phone number must be at least 2 characters long";
        document.getElementById("Phone number").classList.remove("RegDiv");
        document.getElementById("Phone number").classList.add("RegDiv1");


    }
    let SSN = document.getElementById("SSN/TAX/VAT ID").value;

    if (SSN.length >= 2) {
        document.getElementById("lSSN/TAX/VAT ID").innerText = "";
        document.getElementById("SSN/TAX/VAT ID").classList.remove("RegDiv1");
        document.getElementById("SSN/TAX/VAT ID").classList.add("RegDiv");

    }
    else {
        document.getElementById("lSSN/TAX/VAT ID").innerText = "Your VAt ID must be at least 2 characters lon";
        document.getElementById("SSN/TAX/VAT ID").classList.remove("RegDiv");
        document.getElementById("SSN/TAX/VAT ID").classList.add("RegDiv1");


    }
    let code = document.getElementById("Invitation code").value;

    if (code.length >= 2) {
        document.getElementById("lInvitation code").innerText = "";
        document.getElementById("Invitation code").classList.remove("RegDiv1");
        document.getElementById("Invitation code").classList.add("RegDiv");

    }
    else {
        document.getElementById("lInvitation code").innerText = "Your code must be at least 2 characters long";
        document.getElementById("Invitation code").classList.remove("RegDiv");
        document.getElementById("Invitation code").classList.add("RegDiv1");


    }



}


function pass1() {
    let pass1 = document.getElementById("Pass1").value;

    if (pass1.length > 5) {
        document.getElementById("lPass1").innerText = "";
        document.getElementById("Pass1").classList.remove("RegDiv1");
        document.getElementById("Pass1").classList.add("RegDiv");
    }
    else {
        document.getElementById("lPass1").innerText = "Your password must be at least 5 characters long ";
        document.getElementById("Pass1").classList.remove("RegDiv");
        document.getElementById("Pass1").classList.add("RegDiv1");


    }
}
function pass2() {
    let pass1 = document.getElementById("Pass1").value;
    let pass2 = document.getElementById("Pass2").value;


    if (pass1 == pass2) {
        document.getElementById("lPass2").innerText = "";
        document.getElementById("Pass2").classList.remove("RegDiv1");
        document.getElementById("Pass2").classList.add("RegDiv");
    }
    else {
        document.getElementById("lPass2").innerText = "Please provide a password ";
        document.getElementById("Pass2").classList.remove("RegDiv");
        document.getElementById("Pass2").classList.add("RegDiv1");


    }


}
function scrollAnim() {
    el1 = document.getElementById("img2");
    el2 = document.getElementById("img3");
    el3 = document.querySelector(".welcomePrimusText");
    el4 = document.querySelector(".welcomePrimusButton");
    el5 = document.querySelector(".email ");
    el6 = document.querySelector(".contacUsArea ");
    el7 = document.querySelector(".name ");
    el8 = document.querySelector(".contacUsbutton ");
    el9 = document.querySelector(".progress ");
    el10 = document.querySelector(".progressItem ");


    y = window.scrollY;

    if (el1.offsetTop - y < el1.offsetHeight * 6) {

        el1.style.animationPlayState = "running";
    }

    if (el2.offsetTop - y < el2.offsetHeight * 6) {

        el2.style.animationPlayState = "running";
    }
    if (el3.offsetTop - y < el3.offsetHeight * 2) {

        el3.style.animationPlayState = "running";
        el4.style.animationPlayState = "running";
    }

    if (el5.offsetTop - y < el6.offsetHeight * 4) {

        el5.style.animationPlayState = "running";
        el6.style.animationPlayState = "running";
        el7.style.animationPlayState = "running";
        el8.style.animationPlayState = "running";


    }

    if (el9.offsetTop - y <  el9.offsetHeight/2 ) {
        hashvel(100, 6442, "counter1");
        hashvel(-100, 4200, "counter2");
        hashvel(600, 2200, "counter3");
        hashvel(800, 4500, "counter4");
        hashvel(1000, 6000, "counter5");
        document.querySelector(".crcl1").classList.add("run");
        document.querySelector(".crcl2").classList.add("run");
        document.querySelector(".crcl3").classList.add("run");
        document.querySelector(".crcl4").classList.add("run");
        document.querySelector(".crcl5").classList.add("run");
 

    }



}









function hashvel(a, b, divId) {
    let t = 2000;
    let t0 = t / (b - a);
    document.getElementById(divId).innerText = a;
    function norTiv() {
        a = a + 10;
        document.getElementById(divId).innerText = a;

        if (a >= b) {
            clearInterval(intervalID);

        }
    }
    let intervalID = setInterval(norTiv, t0)
}