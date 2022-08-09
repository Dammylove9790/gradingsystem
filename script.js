

let math = document.getElementById('math');
let eng = document.getElementById('eng');
let phy = document.getElementById('phy');
let chm = document.getElementById('chm');
let bio = document.getElementById('bio');

let display_math = document.getElementById('display_math');
let display_eng = document.getElementById('display_eng');
let display_phy = document.getElementById('display_phy');
let display_chm = document.getElementById('display_chm');
let display_bio = document.getElementById('display_bio');

let score_math = document.getElementById('score_math');
let score_eng = document.getElementById('score_eng');
let score_phy = document.getElementById('score_phy');
let score_chm = document.getElementById('score_chm');
let score_bio = document.getElementById('score_bio');

let form1 = document.getElementById('form1');

form1.addEventListener("submit", function (event){
    event.preventDefault();

    if (math.value>=70 && math.value<=100) {
        display_math.innerHTML = "A";
        score_math.innerHTML = math.value;
    } else if (math.value>=60 && math.value<=69) {
        display_math.innerHTML = "B";
        score_math.innerHTML = math.value;
    } else if (math.value>=50 && math.value<=59) {
        display_math.innerHTML = "C";
        score_math.innerHTML = math.value;
    } else if (math.value>=40 && math.value<=49) {
        display_math.innerHTML = "D";
        score_math.innerHTML = math.value;
    } else if (math.value>=0 && math.value<=39) {
        display_math.innerHTML = "F";
        score_math.innerHTML = math.value;
    } else {
        display_math.innerHTML = "NIL";
        score_math.innerHTML = "Invalid Input";
    }
    
    if (eng.value>=70 && eng.value<=100) {
        display_eng.innerHTML = "A";
        score_eng.innerHTML = eng.value;
    } else if (eng.value>=60 && eng.value<=69) {
        display_eng.innerHTML = "B";
        score_eng.innerHTML = eng.value;
    } else if (eng.value>=50 && eng.value<=59) {
        display_eng.innerHTML = "C";
        score_eng.innerHTML = eng.value;
    } else if (eng.value>=40 && eng.value<=49) {
        display_eng.innerHTML = "D";
        score_eng.innerHTML = eng.value;
    } else if (eng.value>=0 && eng.value<=39) {
        display_eng.innerHTML = "F";
        score_eng.innerHTML = eng.value;
    } else {
        display_eng.innerHTML = "NIL";
        score_eng.innerHTML = "Invalid Input";
    }
    
    if (phy.value>=70 && phy.value<=100) {
        display_phy.innerHTML = "A";
        score_phy.innerHTML = phy.value;
    } else if (phy.value>=60 && phy.value<=69) {
        display_phy.innerHTML = "B";
        score_phy.innerHTML = phy.value;
    } else if (phy.value>=50 && phy.value<=59) {
        display_phy.innerHTML = "C";
        score_phy.innerHTML = phy.value;
    } else if (phy.value>=40 && phy.value<=49) {
        display_phy.innerHTML = "D";
        score_phy.innerHTML = phy.value;
    } else if (phy.value>=0 && phy.value<=39) {
        display_phy.innerHTML = "F";
        score_phy.innerHTML = phy.value;
    } else {
        display_phy.innerHTML = "NIL";
        score_phy.innerHTML = "Invalid Input";
    }

    
    if (chm.value>=70 && chm.value<=100) {
        display_chm.innerHTML = "A";
        score_chm.innerHTML = chm.value;
    } else if (chm.value>=60 && chm.value<=69) {
        display_chm.innerHTML = "B";
        score_chm.innerHTML = chm.value;
    } else if (chm.value>=50 && chm.value<=59) {
        display_chm.innerHTML = "C";
        score_chm.innerHTML = chm.value;
    } else if (chm.value>=40 && chm.value<=49) {
        display_chm.innerHTML = "D";
        score_chm.innerHTML = chm.value;
    } else if (chm.value>=0 && chm.value<=39) {
        display_chm.innerHTML = "F";
        score_chm.innerHTML = chm.value;
    } else {
        display_chm.innerHTML = "NIL";
        score_chm.innerHTML = "Invalid Input";
    }
    
    if (bio.value>=70 && bio.value<=100) {
        display_bio.innerHTML = "A";
        score_bio.innerHTML = bio.value;
    } else if (bio.value>=60 && bio.value<=69) {
        display_bio.innerHTML = "B";
        score_bio.innerHTML = bio.value;
    } else if (bio.value>=50 && bio.value<=59) {
        display_bio.innerHTML = "C";
        score_bio.innerHTML = bio.value;
    } else if (bio.value>=40 && bio.value<=49) {
        display_bio.innerHTML = "D";
        score_bio.innerHTML = bio.value;
    } else if (bio.value>=0 && bio.value<=39) {
        display_bio.innerHTML = "F";
        score_bio.innerHTML = bio.value;
    } else {
        display_bio.innerHTML = "NIL";
        score_bio.innerHTML = "Invalid Input";
    }
});


