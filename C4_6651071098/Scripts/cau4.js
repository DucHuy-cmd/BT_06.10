/**
 * Câu 4: Áp dụng DOM và jQuery để xử lý khi người dùng chọn 1 giá trị trong dropdown list
 * rồi nhấn nút "Select and Remove" sẽ xóa giá trị đó khỏi dropdown list.
 * MSSV: 6651071098
 */
function removecolor() {
  const $selectedOption = $("#colorSelect option:selected");
  const $select = $("#colorSelect");
  const $msg = $("#statusMsg");

  if ($selectedOption.length > 0 && $select.find("option").length > 0) {
    const removedText = $selectedOption.text();
    // Xóa mục bằng jQuery
    $selectedOption.remove();

    $msg.text(`Đã xóa thành công mục: "${removedText}". (Còn lại: ${$select.find("option").length} mục)`)
        .css("color", "#059669");
  } else {
    $msg.text("Không có mục nào được chọn hoặc danh sách đã trống!")
        .css("color", "#dc2626");
    alert("Vui lòng chọn 1 mục hoặc danh sách đã hết mục để xóa!");
  }
}

function resetList() {
  const $select = $("#colorSelect");
  const defaultColors = ["Red", "Green", "White", "Black"];

  $select.empty();
  defaultColors.forEach(color => {
    $select.append(`<option>${color}</option>`);
  });

  $("#statusMsg").text("Đã khôi phục danh sách màu sắc ban đầu.")
                 .css("color", "#2563eb");
}
