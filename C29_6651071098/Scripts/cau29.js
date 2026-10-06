/**
 * Câu 29: Áp dụng DOM để lấy ra giá trị Họ và tên từ hai input form
 * MSSV: 6651071098
 */
function getFormvalue(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  // Cách 1: Sử dụng document.getElementById và elements
  const form = document.getElementById("form1");
  const fname = form.elements["fname"].value.trim();
  const lname = form.elements["lname"].value.trim();

  // In ra console tab F12
  console.log("First Name:", fname);
  console.log("Last Name:", lname);
  console.log("Full Name:", fname + " " + lname);

  // Hiển thị trực quan lên giao diện
  const resultText = document.getElementById("resultText");
  if (resultText) {
    resultText.innerHTML = `<strong>Họ (First name):</strong> ${fname} <br>
                            <strong>Tên (Last name):</strong> ${lname} <br>
                            <strong>Họ và tên đầy đủ:</strong> <span style="color:#2563eb; font-weight:bold;">${fname} ${lname}</span>`;
  }

  // Thông báo hộp thoại alert
  alert("First name: " + fname + "\nLast name: " + lname + "\nHọ và tên: " + fname + " " + lname);

  return false;
}
