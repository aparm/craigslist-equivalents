const input = document.getElementById("filterInput");
const table = document.getElementById("linksTable");
const tr = table.getElementsByTagName("tr");

input.oninput = function() {
    if (input.value === "") showAll();
    else show(input.value.toUpperCase());
};

function showAll() {
    for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
}

function show(filter) {
    let td;
    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.textContent.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}