function login() {

    email = document.getElementById("email").value || "";
    password = document.getElementById("password").value || "";

    alert("please reagister")

    let name;

    const registerData = JSON.parse(window.localStorage.getItem("register"));
    console.log("registerData", registerData);
    for (let index = 0; index < registerData.length; index++) {
        const registerEmail = registerData[index].email;
        const registerPassword = registerData[index].password;

        let localStorageData = window.localStorage.getItem('login')

        if (localStorageData === null) {
            name = [];
        } else {
            name = JSON.parse(localStorageData)
        }

        name.push(
            {
                email: email,
                password: password
            }
        )
        if (registerEmail === email && registerPassword === password) {
            window.localStorage.setItem('login', JSON.stringify(name));
            window.location.href = './Blog.html'

        } else {
            alert("email and password is incrrect")
        }
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
    }



    window.localStorage.setIte('login', JSON.stringify(name));
    console.log("localStorageData", localStorageData);

}