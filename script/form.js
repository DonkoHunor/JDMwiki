function Anonym() {
    const input = document.getElementById("name");
    const nameCheck = document.getElementById("nameCheck");

    nameCheck.addEventListener('change', function () {
        input.disabled = this.checked;
        input.value = "";
    });
}

function Radio() {
    const tableForm = document.getElementById("tableForm");
    const tableYes = document.getElementById("tableYes");
    const tableNo = document.getElementById("tableNo");

    tableYes.addEventListener("change", toggle);
    tableNo.addEventListener("change", toggle);

    function toggle() {
        if (tableYes.checked) {
            tableForm.classList.remove("d-none");
        } else {
            tableForm.classList.add("d-none");
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    Anonym();
    Radio();
});