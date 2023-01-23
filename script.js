
const courses = [
    {
        name:"react course",
        price: "2.7"
    },
    {
        name:"angular course",
        price: "2.5"
    },
    {
        name:"c++ course",
        price: "2.2"
    },
    {
        name:"mern course",
        price: "3"
    },
    {
        name : "Django", 
        price : 8.5
    }
];

function generatList(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML = "";  
courses.forEach(course => {


    const li = document.createElement("li")
    li.classList.add("list-group-item")

    const name = document.createTextNode(course.name)
    li.appendChild(name)

    const span = document.createElement("span")
    span.classList.add("float-right")
    

    const price = document.createTextNode("$ " + course.price)
    span.appendChild(price)

     li.appendChild(span)
     ul.appendChild(li)
});
}

// generatList()
window.addEventListener("load", generatList);

const btn = document.querySelector(".sort-btn")
btn.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price)
    generatList();
})
    const btn2 = document.querySelector(".sort-btn-blue")
    btn2.addEventListener("click", () => {
        courses.sort((c,d) => d.price - c.price)
        generatList();
    });

