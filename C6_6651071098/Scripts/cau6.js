/**
 * Câu 6: Áp dụng DOM và jQuery để đếm và hiển thị các mục trong dropdownlist trong cửa sổ cảnh báo
 * MSSV: 6651071098
 */
function getOptions() {
  const $options = $("#mySelect option");
  const count = $options.length;
  const items = [];

  $options.each(function (index) {
    items.push(`${index + 1}. ${$(this).text()}`);
  });

  const alertMessage = `Tổng số mục trong danh sách: ${count}\n\nDanh sách các màu:\n${items.join("\n")}`;

  // Hiển thị trực quan trên giao diện
  $("#resultText").html(`
    <strong>Tổng số mục:</strong> ${count} mục <br>
    <strong>Danh sách các mục:</strong> <br>
    ${items.join("<br>")}
  `);

  // Hiển thị trong cửa sổ cảnh báo (alert) theo đúng yêu cầu đề bài
  alert(alertMessage);
}
