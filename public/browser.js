console.log("Browser script loaded.");

function itemTemplate(item) {
    return ` <li
       class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text">${ item.reja }</span>
        <div>
          <button data-id="${ item._id }" class="edit-me btn btn-secondary btn-sm mr-1">Tahrirlash</button>
          <button data-id="${ item._id }" class="delete-me btn btn-danger btn-sm"> O'chirish</button>
        </div>
      </li>`;

}


let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", function(event) {
    event.preventDefault();
axios
    .post('/create-item', {reja: createField.value })
    .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML('beforeend',
             itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch( (err) => {
        console.log("Iltimos qayta urinib ko'ring!");
    });
});



document.addEventListener("click", function(event) {
    console.log(event);
    if(event.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz?")) {
            axios
            .post('/delete-item', {id: event.target.getAttribute("data-id") })
            .then((_response) => {
                console.log(_response.data);
                event.target.parentElement.parentElement.remove();
            })
            .catch( (err) => {
                console.log("Iltimos qayta urinib ko'ring!");
            });
      } 
   }

    if(event.target.classList.contains("edit-me")) {
        alert("siz edit tugmasini bosdingiz");
    }
});