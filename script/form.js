let myForm = document.querySelector(".form-content");
let formBtn = document.querySelector(".form__btn");
let formOverlay = document.querySelector(".form__overlay");
let formOverlayBtn = document.querySelector(".form__modal_btn");

function modalOff() {
  formOverlay.style.display = "none";
  document.body.classList.remove("locked");
}

document.addEventListener("keyup", e => {
  if (e.key === "Escape") {
    modalOff();
  }
});

formOverlayBtn.addEventListener("click", e => {
  modalOff();
});

formBtn.addEventListener("click", function(e) {
  e.preventDefault();

  if (validateForm(myForm)) {
    let formData = new FormData();
    formData.append("name", "Константин");
    formData.append("phone", "89246866955");
    formData.append("comment", "Привет LoftSchool");
    formData.append("to", "irony11192@mail.ru");

    //         formData.append('name', myForm.elements.name.value);
    //          formData.append('telephone', myForm.elements.telephone.value);
    //         formData.append('street', myForm.elements.street.value);
    //         formData.append('dom', myForm.elements.dom.value);
    //         formData.append('corp', myForm.elements.corp.value);
    //         formData.append('flat', myForm.elements.flat.value);
    //         formData.append('floor', myForm.elements.floor.value);
    //         formData.append('comment', myForm.elements.comment.value);
    //         formData.append('radio', myForm.elements.radio.checked);
    //          formData.append('call', myForm.elements.call.checked);

    if (myForm.elements.radio[0].checked == true) {
      formData.set("radio", "Потребуется сдача");
    } else if (myForm.elements.radio[1].checked == true) {
      formData.set("radio", "Оплата по карте");
    }

    if (myForm.elements.call.checked == true) {
      formData.set("call", "Не перезванивать");
    } else {
      formData.set("call", "Перезвонить");
    }

    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
    xhr.send(formData);
    xhr.addEventListener("load", () => {
      if (xhr.response.status == 1) {
        formOverlay.style.display = "block";
        document.body.classList.add("locked");
        myForm.reset();
      } else if (xhr.response.status == 0) {
        alert(xhr.response.message);
      } else {
        alert("Неудача");
      }
    });
  }
});

myForm.elements.telephone.onkeypress = function(e) {
  let char = e;
  char = false;
  if (!(e.keyCode < 48 || e.keyCode > 57)) {
    char = true;
  } else if (e.keyCode == 40 || e.keyCode == 41) {
    char = true;
  } else if (e.keyCode == 45 || e.keyCode == 43) {
    char = true;
  } else {
    char = false;
  }

  return char;
};

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.telephone)) {
    valid = false;
  }
  if (!validateField(form.elements.street)) {
    valid = false;
  }
  if (!validateField(form.elements.dom)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}
