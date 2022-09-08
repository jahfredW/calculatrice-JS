var main_text = "";
var touche_un = document.getElementById("un");
var touche_deux = document.getElementById("deux");
var touche_plus = document.getElementById("addition");
var screen = document.getElementById("ecran");
var touche_enter = document.getElementById("enter");

/*touche_plus.style.backgroundColor = 'white';*/

/*
function output(value) {
    screen.innerText = value;
}
*/

function touch_one() {
    touche_un.addEventListener("click", (data)=> {
    main_text += data.target.value;
    screen.innerText = main_text;
});
}

function touch_two() {
    touche_deux.addEventListener("click", (data)=> {
    main_text += data.target.value;
    screen.innerText = main_text;
});
}


function touch_plus() {
    touche_plus.addEventListener("click", (data) => {
        if (main_text[(main_text.length) - 1] !== "+" && main_text.length !== 0) {
            main_text += data.target.value;
        };
        data.target.style.backgroundColor = "orange";

        screen.innerText = main_text;

        setTimeout(function () {
            data.target.style.backgroundColor = "";
        }, 300);
    }, false);
    screen.innerText = main_text;
}

touche_enter.addEventListener("click", ()=> {
    let total = 0;
    let new_pos = 0;
    let index_plus = main_text.indexOf("+");
    while (index_plus !== -1 && new_pos !== -1) {
        let number_1 = parseInt(main_text.slice(0,index_plus));
        let number_2 = parseInt(main_text.slice(index_plus + 1, main_text.length));
        total = number_1 + number_2;
        var new_text = main_text.slice(index_plus + 1);
        new_pos = new_text.indexOf("+");
        main_text = main_text.slice(index_plus + 1 + new_pos);
        main_text = total.toString() +  main_text;
        index_plus = main_text.indexOf("+");
    }
    screen.innerText = total;
    console.log("total_final",total);
});



touch_one();
touch_two();
touch_plus();

