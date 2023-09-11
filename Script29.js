document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const data = {
        firstName: getValue("firstName"),
        lastName: getValue("lastName"),
        birthday: getValue("birthday"),
        gender: getRadioValue("gender"),
        city: getValue("city"),
        address: getValue("address"),
        languages: getCheckedLanguages("languages")
    };
    addRowToTable(data);
    resetForm("registrationForm");
});

function getValue(id) {
    return document.getElementById(id).value;
}

function getRadioValue(name) {
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    return selected ? selected.value : "";
}

function getCheckedLanguages(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
                .map(checkbox => checkbox.value);
}

function addRowToTable(data) {
    const table = document.getElementById("userData").getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    Object.values(data).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
    });
    document.getElementById("userData").style.display = "table";
}

function resetForm(id) {
    document.getElementById(id).reset();
}
