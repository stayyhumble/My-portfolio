const inputs = document.querySelectorAll("textarea");

inputs.forEach((element) => {
  element.addEventListener("input", () => {
    if (inputs[0].value && inputs[1].value) {
      document.querySelector("#add").addEventListener("click", addNote);
    } else {
      document.querySelector("#add").removeEventListener("click", addNote);
    }
  });
});

function addNote() {
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("note");

  const noteTitle = document.createElement("h2");
  const userInputTitle = document.querySelector("#addNewTitle").value;
  noteTitle.innerText = userInputTitle;

  const noteParagraph = document.createElement("p");
  const userInputParagraph = document.querySelector("#addNewNote").value;

  if (userInputParagraph.length >= 250) {
    noteParagraph.innerText = userInputParagraph.slice(0, 250) + " ...";
  } else {
    noteParagraph.innerText = userInputParagraph;
  }

  const viewButton = document.createElement("button");
  viewButton.innerText = "View more";
  viewButton.classList.add("btn");
  viewButton.addEventListener("click", () => {
    viewMore(userInputTitle, userInputParagraph);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("btn");
  deleteButton.addEventListener("click", deleteNote);

  noteContainer.appendChild(noteTitle);
  noteContainer.appendChild(noteParagraph);
  noteContainer.appendChild(viewButton);
  noteContainer.appendChild(deleteButton);

  document.body.appendChild(noteContainer);
}

const deleteNote = (evt) => {
  if (confirm("Are you sure you want to delete this note?")) {
    evt.currentTarget.parentElement.remove();
  }
};

const viewMore = (titleOfNote, paragraphOfNote) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeCross = document.createElement("span");
  closeCross.classList.add("close");
  closeCross.innerHTML = "&times;";
  closeCross.addEventListener("click", () => {
    closeCross.parentElement.parentElement.remove();
  });

  const noteTitleInModal = document.createElement("h2");
  noteTitleInModal.innerText = titleOfNote;

  const noteParagraphInModal = document.createElement("p");
  noteParagraphInModal.innerText = paragraphOfNote;

  modal.appendChild(modalContent);

  modalContent.appendChild(closeCross);
  modalContent.appendChild(noteTitleInModal);
  modalContent.appendChild(noteParagraphInModal);

  document.body.appendChild(modal);
};
