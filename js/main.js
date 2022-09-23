// function to change result values on click
function generate(event) {
    let cls = event.currentTarget;
    console.log(cls.className);


    document.getElementById("cursorvalue").innerText = ` ${cls.className};`;
}
