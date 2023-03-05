function register() {
  var  email = document.getElementById("email").value || "";
  var  password = document.getElementById("password").value || "";

    let name;

    let localStorageData = window.localStorage.getItem('register')

    if (localStorageData === null) {
        name = [];
    } else {
        name = JSON.parse(localStorageData)
    }
    const emailExists = name.find((user) => user.email === email)
    console.log(emailExists);
    if (emailExists) {
        alert(
            "Email already exists"
        );
    }else(
        name.push(
            {
                email: email,
                password: password
            }
        )
    )
   
    window.localStorage.setItem('register', JSON.stringify(name));
    console.log("localStorageData", localStorageData);


    window.open('./Blog-New.html');

    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("first_name").value = ""
    document.getElementById("last_name").value = ""

}






