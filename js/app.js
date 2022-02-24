const task = document.getElementById("task")
const addButton = document.getElementById("add-button")
const list = document.getElementById("list")
const alert = document.getElementById("alert")


const alertWarning = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>hayirrrr...</strong> bos durmamalisin...calis.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
const alertSuccess = `<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>hımmmm...!</strong> guzel etkinlik.hosum gitti....
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
const alertInfo = `<div class="alert alert-info alert-dismissible fade show" role="alert">
<strong>Iıı...!</strong> bunu bugun zaten yaptin...
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


addButton.addEventListener("click", addItem)



function addItem() {
    // controlled taskvalue
    const isEmpty = str => !str.trim().length;
    if (isEmpty(task.value)) {
        alert.innerHTML = alertWarning;
        closeAlert();
    }
    else {
        const liID = 'li-' + task.value;
        const findLi = document.getElementById(liID);

        if (findLi) {
            alert.innerHTML = alertInfo;
            closeAlert();
        }
        else {
            //////created li.
            alert.innerHTML = alertSuccess;
            const li = document.createElement("li");
            li.innerHTML = task.value;
            li.id = liID;
            /////created delete button.
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("float-end");
            deleteButton.innerHTML = "<i class='fa-thin fa-plus'></i>";
            deleteButton.addEventListener("click", deleteItem);

            ///// created complete button
            const completeButton = document.createElement("button");
            completeButton.classList.add("float-end");
            completeButton.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
            completeButton.addEventListener("click", change);

            ////// added li,delete button and complete button into list.
            li.appendChild(deleteButton);
            li.appendChild(completeButton);
            list.appendChild(li);
            task.value = "";
            closeAlert();

        }

    }
}
const closeAlert = (interval = 2000) => {
    setTimeout(() => {
        alert.style.display = 'none';
    }, interval);
    alert.style.display = 'block';
}

function deleteItem(btn) {
    const deleteLi = btn.target.parentNode;
    list.removeChild(deleteLi);
}
function change(e) {
    const changeLi = e.target.parentNode;
    changeLi.classList.add("completed");
}












