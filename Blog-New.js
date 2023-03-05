window.addEventListener("load", () => {
    miniblog();
});

function miniblog() {
    let blogData = JSON.parse(localStorage.getItem('blog')) || [];

    let html = '';

    for (const iterator of blogData) {
        const title = iterator.title;
        const description = iterator.description;
    }

    blogData.forEach((element, index) => {
        console.log("element", element);
        console.log("id", index);

        html += `
            <div class="mini_blogg_creat">
                <div class="mini_new_blog_des">
                    <div class="text_blogg">
                        <p class="blogg_text_01">${element.title}</p>
                        <p class="blogg_text_02">${element.description}</p>
                    </div>
                    <div class="buttone_blogg">
                        <button class="mini_button" onclick="showmore(${element.id})">SHOW MORE</button>
                        <button class="mini_button" onclick="edit(${element.id})">EDIT</button>
                        <button class="mini_button" onclick="deleteBlog(${element.id})">DELETE</button>
                    </div>
                </div>
            </div>
        `;
    });

    let listblog = document.querySelector(".creatblog");

    if (blogData.length !== 0) {
        listblog.innerHTML = html;
    } else {
        // listblog.innerHTML = "<p>No blogs found.</p>";
        return;
    }
}

function deleteBlog(id) {
    if (confirm("Are you sure you want to delete this blog?")) {
        let blogData = JSON.parse(localStorage.getItem("blog")) || [];

        let index = blogData.findIndex((element) => element.id === id);

        if (index !== -1) {
            blogData.splice(index, 1);
            localStorage.setItem("blog", JSON.stringify(blogData));
            miniblog();
        }
    }
}

function showmore(id) {
    window.location.href = `./show.html?id=${id}`;
}