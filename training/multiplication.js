document.getElementById("entry")


.addEventListener('input', (data) => {
    let d = data.target.value;
    document.getElementById("result")
        .innerHTML = Math.round((2 * 3.14 * d) * 100)/100;
    document.getElementById("test")
        .innerHTML = Math.floor(2 * Math.PI * d);
});

var e = 7;

