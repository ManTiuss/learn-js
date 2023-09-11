document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    displayUserData();
});

function displayUserData() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var languages = [];
    var checkboxes = document.getElementsByName("languages");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            languages.push(checkboxes[i].value);
        }
    }

    var table = document.getElementById("userData");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = birthday;
    cell4.innerHTML = gender;
    cell5.innerHTML = city;
    cell6.innerHTML = address;
    cell7.innerHTML = languages.join(", ");

    document.getElementById("registrationForm").reset();
    table.style.display = "table";
}