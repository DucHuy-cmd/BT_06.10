/**
 * Câu 2: Áp dụng DOM và jQuery để lấy ra giá trị Họ và tên từ hai input form
 * MSSV: 6651071098
 */
function getFormvalue(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  // Sử dụng jQuery lấy giá trị các ô input
  const fname = $('input[name="fname"]').val().trim();
  const lname = $('input[name="lname"]').val().trim();

  console.log("First Name (jQuery):", fname);
  console.log("Last Name (jQuery):", lname);

  $("#resultText").html(`
    <strong>Họ (First name):</strong> ${fname} <br>
    <strong>Tên (Last name):</strong> ${lname} <br>
    <strong>Họ và tên đầy đủ:</strong> <span style="color:#2563eb; font-weight:bold;">${fname} ${lname}</span>
  `);

  alert("First name: " + fname + "\nLast name: " + lname + "\nHọ và tên: " + fname + " " + lname);

  return false;
}
