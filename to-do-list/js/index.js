const dateObj = new Date();
const day = dateObj.getUTCDate();
const month = dateObj.getMonth() + 1;
const year = dateObj.getFullYear();
document.querySelector(".date").innerHTML = day + "/" + month + "/" + year;

document.querySelector(".add-button").addEventListener("click", () => {
  const listLength = document.querySelectorAll("p").length;

  if (listLength < 11) {
    const newListItem = document.createElement("p");

    const newTextBox = document.createElement("input");
    newTextBox.classList.add("text-box");
    newTextBox.setAttribute("placeholder", "Write your tasks here");

    const newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("class", "checked");
    newCheckBox.setAttribute("type", "checkbox");

    newListItem.appendChild(newTextBox);
    newListItem.appendChild(newCheckBox);

    const listDiv = document.querySelector("#list");
    listDiv.appendChild(newListItem);
  }
});

document.querySelector(".delete-button").addEventListener("click", () => {
  var checkBoxesLength = document.querySelectorAll(".checked").length - 1; // find a way to change this evrytime an item gest deleted

  for (var i = 0; i <= checkBoxesLength; i++) {
    var checkedBoxes = document.querySelectorAll(".checked")[i].checked;
    var checkBoxes = document.querySelectorAll(".checked")[i];
    if (checkedBoxes) {
      checkBoxes.parentElement.remove();
      i = i - 1;
      checkBoxesLength = checkBoxesLength - 1;
    }
  }
});
