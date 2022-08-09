

let display_math = document.getElementById('display_math');
let display_eng = document.getElementById('display_eng');
let display_phy = document.getElementById('display_phy');
let display_chm = document.getElementById('display_chm');
let display_bio = document.getElementById('display_bio');
let display_agr = document.getElementById('display_agr');
let display_act = document.getElementById('display_act');
let display_com = document.getElementById('display_com');

let form1 = document.getElementById('form1');

form1.addEventListener("submit", function (event){
    event.preventDefault();

    
    if (math.value>=70 && math.value<=100) {
        display_math.innerHTML = "A";
    } else if (math.value>=60 && math.value<=69) {
        display_math.innerHTML = "B";
    } else if (math.value>=50 && math.value<=59) {
        display_math.innerHTML = "C";
    } else if (math.value>=40 && math.value<=49) {
        display_math.innerHTML = "D";
    } else {
        display_math.innerHTML = "F";
    }
    
    if (eng.value>=70 && eng.value<=100) {
        display_eng.innerHTML = "A";
    } else if (eng.value>=60 && eng.value<=69) {
        display_eng.innerHTML = "B";
    } else if (eng.value>=50 && eng.value<=59) {
        display_eng.innerHTML = "C";
    } else if (eng.value>=40 && eng.value<=49) {
        display_eng.innerHTML = "D";
    } else {
        display_eng.innerHTML = "F";
    }
    
    if (phy.value>=70 && phy.value<=100) {
        display_phy.innerHTML = "A";
    } else if (phy.value>=60 && phy.value<=69) {
        display_phy.innerHTML = "B";
    } else if (phy.value>=50 && phy.value<=59) {
        display_phy.innerHTML = "C";
    } else if (phy.value>=40 && phy.value<=49) {
        display_phy.innerHTML = "D";
    } else {
        display_phy.innerHTML = "F";
    }

    
    if (chm.value>=70 && chm.value<=100) {
        display_chm.innerHTML = "A";
    } else if (chm.value>=60 && chm.value<=69) {
        display_chm.innerHTML = "B";
    } else if (chm.value>=50 && chm.value<=59) {
        display_chm.innerHTML = "C";
    } else if (chm.value>=40 && chm.value<=49) {
        display_chm.innerHTML = "D";
    } else {
        display_chm.innerHTML = "F";
    }
    
    if (bio.value>=70 && bio.value<=100) {
        display_bio.innerHTML = "A";
    } else if (bio.value>=60 && bio.value<=69) {
        display_bio.innerHTML = "B";
    } else if (bio.value>=50 && bio.value<=59) {
        display_bio.innerHTML = "C";
    } else if (bio.value>=40 && bio.value<=49) {
        display_bio.innerHTML = "D";
    } else {
        display_bio.innerHTML = "F";
    }
    
    if (agr.value>=70 && agr.value<=100) {
        display_agr.innerHTML = "A";
    } else if (agr.value>=60 && agr.value<=69) {
        display_agr.innerHTML = "B";
    } else if (agr.value>=50 && agr.value<=59) {
        display_agr.innerHTML = "C";
    } else if (agr.value>=40 && agr.value<=49) {
        display_agr.innerHTML = "D";
    } else {
        display_agr.innerHTML = "F";
    } 

    if (act.value>=70 && act.value<=100) {
        display_act.innerHTML = "A";
    } else if (act.value>=60 && act.value<=69) {
        display_act.innerHTML = "B";
    } else if (act.value>=50 && act.value<=59) {
        display_act.innerHTML = "C";
    } else if (act.value>=40 && act.value<=49) {
        display_act.innerHTML = "D";
    } else {
        display_act.innerHTML = "F";
    }  

    if (com.value>=70 && com.value<=100) {
        display_com.innerHTML = "A";
    } else if (com.value>=60 && com.value<=69) {
        display_com.innerHTML = "B";
    } else if (com.value>=50 && com.value<=59) {
        display_com.innerHTML = "C";
    } else if (com.value>=40 && com.value<=49) {
        display_com.innerHTML = "D";
    } else {
        display_com.innerHTML = "F";
    }
});


