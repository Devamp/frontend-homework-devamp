document.addEventListener("DOMContentLoaded", () => {
  // get the form element
  const form = document.getElementById("studentForm");

  // get modal element and init modal bootstrap object
  const modalElement = document.getElementById("formModal");
  const modal = new bootstrap.Modal(modalElement);

  // get all form data values and return as an object
  const getFormData = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let status = document.getElementById("registrationStatus").value;
    let PL_status = document.getElementById("PL").checked;
    let OS_status = document.getElementById("OS").checked;
    let FS_status = document.getElementById("FS").checked;
    let otherInfo = document.getElementById("additionalNotes").value;

    return { name, email, status, PL_status, OS_status, FS_status, otherInfo };
  };

  // function to take formdata and add to modal body to display the final modal
  const displayModal = (formData) => {
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
          <p><strong>Full Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Registration Status:</strong> ${formData.status}</p>
          <p><strong>Taken Programming Languages?</strong> ${
            formData.PL_status ? "Yes" : "No"
          }</p>
          <p><strong>Taken Operating Systems?</strong> ${
            formData.OS_status ? "Yes" : "No"
          }</p>
          <p><strong>Taken Full Stack Web Development?</strong> ${
            formData.FS_status ? "Yes" : "No"
          }</p>
          <p><strong>Additional Notes:</strong> ${formData.otherInfo}</p>
        `;

    modal.show();
  };

  // function to handle the submit event
  const handleSubmit = (event) => {
    /**
     * prevent page reload
     * Source: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
     */
    event.preventDefault();

    // get form data
    const formData = getFormData();

    // display the modal with the data
    displayModal(formData);
  };

  // add submit event listener on the form
  form.addEventListener("submit", handleSubmit);

  // function to reset the form when reset button is clicked
  const handleReset = () => {
    form.reset();
  };

  // add event listener for reset button
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", handleReset);

  // get close modal button
  const closeModal = document.getElementById("closeModalButton");
  closeModal.addEventListener("click", () => {
    modal.hide();
  });
});
