function addStudent() {

    let name = document.getElementById("studentName").value;

    if(name !== "") {

        let li = document.createElement("li");
        Modify script.js
li.innerHTML =
name + ' <button onclick="this.parentElement.remove()">Delete</button>';


        document.getElementById("studentList").appendChild(li);
        document.getElementById("count").innerText =
document.getElementById("studentList").children.length;

        document.getElementById("studentName").value = "";
    }
}