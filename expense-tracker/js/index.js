const inputs = document.querySelectorAll(".requiredInput");

inputs.forEach((element) => {
  element.addEventListener("input", () => {
    if (inputs[0].value && inputs[1].value && inputs[2].value) {
      document.querySelector("#add").addEventListener("click", addData);
    } else {
      document.querySelector("#add").removeEventListener("click", addData);
    }
  });
});

function addData() {
  const row = document.createElement("tr");
  document.querySelector("table").appendChild(row);

  const amount = document.querySelector("#amount").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#date").value;

  const idCol = document.createElement("td");
  idCol.setAttribute("class", "num");
  idCol.innerText = document.querySelectorAll("tr").length - 1;
  const amountCol = document.createElement("td");
  amountCol.innerText = amount;
  const descriptionCol = document.createElement("td");
  descriptionCol.innerText = description;
  const dateCol = document.createElement("td");
  dateCol.innerText = date;

  const data = [idCol, amountCol, descriptionCol, dateCol];
  const docFrag = document.createDocumentFragment();
  for (var i = 0; i < data.length; i++) {
    docFrag.appendChild(data[i]);
  }
  row.appendChild(docFrag);
}

document.querySelector("#delete").addEventListener("click", () => {
  const ids = document.querySelectorAll(".num");
  const idInputValue = document.querySelector("#id-number").value;
  for (var i = 0; i < ids.length; i++) {
    if (idInputValue === ids[i].innerText) {
      document.querySelectorAll(".num")[i].parentElement.remove();
      for (var x = 0; x < ids.length; x++) {
        if (x > i) {
          ids[x].innerText = x;
        }
      }
      break;
    }
  }
});
