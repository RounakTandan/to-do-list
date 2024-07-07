function addTask() {
    let inputBox = document.getElementById("input-box");
    let listContainer = document.getElementById("list-container");

    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";

        li.addEventListener("click", function() {
            this.classList.toggle("checked");
        });

        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        span.addEventListener("click", function() {
            let div = this.parentElement;
            div.style.display = "none";
        });
    }
}
