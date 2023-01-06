
function register() {
    alert('Your registration is successful');

    // firstname = document.getElementById("first_name").value || "";
    // lastname = document.getElementById("last_name").value || "";
    email = document.getElementById("email").value || "";
    password = document.getElementById("password").value || "";

    let name;

    let localStorageData = window.localStorage.getItem('register')

    if (localStorageData === null) {
        name = [];
    } else {
        name = JSON.parse(localStorageData)
    }
    name.push(
        {
            // firstname: firstname,
            // lastname: lastname,
            email: email,
            password: password
        }
    )
    window.localStorage.setItem('register', JSON.stringify(name));
    console.log("localStorageData", localStorageData);


    document.getElementById("email").value = ""
    document.getElementById("password").value = ""

}






