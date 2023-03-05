const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id');

let blogData = JSON.parse(window.localStorage.getItem('blog')) || [];

for (const iterator of blogData) {
if (iterator.id == product) {
const title = iterator.title;
const description = iterator.description;
console.log(title, description);
(document.getElementById("titleEdit") || {}).innerText = title;
(document.getElementById("descriptionEdit") || {}).innerText = description;
}
}