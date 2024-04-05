function downloadExcel() {
  // Path to the Excel file
  var excelURL = "./Finux.A - white paper support.xlsx";

  // Create a temporary link element
  var link = document.createElement("a");
  link.href = excelURL;
  link.download = "Finux.xlsx"; // Optional: Set the default filename for the downloaded file

  // Trigger a click event on the link to start the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
