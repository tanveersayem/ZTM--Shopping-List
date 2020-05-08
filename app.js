const input = document.querySelector("#input");
const enter = document.querySelector("#enter");
const listItems = document.querySelector(".list-items");
const ul = document.getElementsByTagName("ul");
//Event listener
enter.addEventListener("click", formSubmitted);
enter.addEventListener("keyup", function (e) {
  if (keyCode === 13) {
    enter.click();
  }
});

function formSubmitted(e) {
  event.preventDefault();

  creatList();
}

function creatList() {
  if (input.value.length > 0) {
    const li = document.createElement("li");
    li.addEventListener("click", function (e) {
      li.classList.toggle("done");
    });
    const del = document.createElement("button");
    del.innerHTML = "Delete";
    li.innerText = input.value;
    listItems.appendChild(li);
    listItems.appendChild(del);
    input.value = "";
    del.addEventListener("click", delItem);

    function delItem(e) {
      li.remove();
      del.remove();
    }
  }
}
