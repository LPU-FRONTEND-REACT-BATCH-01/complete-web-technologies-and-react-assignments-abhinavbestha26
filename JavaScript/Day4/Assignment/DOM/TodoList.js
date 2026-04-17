let button = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")

button.addEventListener('click', () => {
    let li = document.createElement("li")

    let inputtext = input.value
    li.textContent = inputtext

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"

    let CompleteBtn = document.createElement("button")
    CompleteBtn.textContent = "Done"

    CompleteBtn.addEventListener("click", () => {
    // li.classList.toggle("done")
    li.style.textDecoration = "line-through"
    })

    deleteBtn.addEventListener("click", () => {
        li.remove()
    })
    li.append(CompleteBtn)

    li.append(deleteBtn)

    ul.append(li)

})