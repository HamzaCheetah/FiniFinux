document.addEventListener("DOMContentLoaded", function () {
  const clipboardIcons = document.querySelectorAll(".bi-clipboard");

  clipboardIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      // Copy text from the previous <td> element
      const textToCopy =
        this.parentElement.previousElementSibling.innerText.trim();

      // Create a temporary textarea element to copy the text
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      // Show copied text in alert
      alert("Text copied to clipboard: " + textToCopy);
    });
  });
});
