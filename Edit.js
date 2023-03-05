function edit(id) {
    window.location.href = './Edit.html?id=' + id
}

let title = document.getElementById("titleEdit");
let description = document.getElementById("descriptionEdit");

let blogedit;

let localStorageEdit = window.localStorage.getItem('blog');

if (localStorageEdit === null) {
    blogedit = [];
} else {
    blogedit = JSON.parse(localStorageEdit)
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id')

let editdata = JSON.parse(window.localStorage.getItem('blog'));
console.log("editdata", editdata);

for (const iterator of editdata) {
    if (product == iterator.id) {
        (document.getElementById("titleEdit") || {}).value = iterator.title;
        (document.getElementById("descriptionEdit") || {}).value = iterator.description;

        const blogdata = window.localStorage.setItem(
            "editvalue",
            JSON.stringify(iterator)
        );

    }

}
const Blogedit = JSON.parse(window.localStorage.getItem('editvalue'));
console.log("Blogedit", Blogedit);
function editbutton() {
    var blogtitle = ((document.getElementById("titleEdit") || {}).value) || "";
    console.log("blogtitle", blogtitle);

    var blogdescription = ((document.getElementById("descriptionEdit") || {}).value) || "";
    console.log("blogdescription", blogdescription);
    console.log("Blogedit.id", Blogedit.id);

    const blogarray = JSON.parse(localStorage.getItem("blog")) || [];
    console.log("blogarray", blogarray);

    const data = blogarray.map((blogdata) => {
        console.log("blogdata", blogdata);
        if (blogdata.id == Blogedit.id) {
            return { ...blogdata, title: blogtitle, description: blogdescription }
        } return blogdata
    });

    localStorage.setItem("blog", JSON.stringify(data))

    window.open("./Blog-New.html");
}
