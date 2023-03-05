function blog(event) {
    event.preventDefault();
    let title = document.getElementById("title").value || "";
    let description = document.getElementById("description").value || "";

    let name;

    let localStorageData = window.localStorage.getItem('blog')

    if (localStorageData === null) {
        name = [];
    } else {
        name = JSON.parse(localStorageData)
    }
    name.push(
        {
            id: Math.floor(Math.random() * 1000),
            title: title,
            description: description
        }
    )

    window.localStorage.setItem('blog', JSON.stringify(name));
    console.log("localStorageData", localStorageData);

    window.location.href = './Blog-New.html';

    document.getElementById("title").value = ""
    document.getElementById("description").value = ""
}
