/**
 * Câu 31: Áp dụng DOM để xử lý khi người dùng chọn 1 giá trị trong dropdown list
 * rồi nhấn nút "Select and Remove" sẽ xóa giá trị đó khỏi dropdown list.
 * MSSV: 6651071098
 */
function removecolor() {
  const select = document.getElementById("colorSelect");
  const msg = document.getElementById("statusMsg");
  if (!select) return;

  if (select.selectedIndex !== -1 && select.length > 0) {
    const removedText = select.options[select.selectedIndex].text;
    select.remove(select.selectedIndex);

    if (msg) {
      msg.textContent = `Đã xóa thành công mục: "${removedText}". (Còn lại: ${select.length} mục)`;
      msg.style.color = "#059669";
    }
  } else {
    if (msg) {
      msg.textContent = "Không có mục nào được chọn hoặc danh sách đã trống!";
      msg.style.color = "#dc2626";
    }
    alert("Vui lòng chọn 1 mục hoặc danh sách đã hết mục để xóa!");
  }
}

function resetList() {
  const select = document.getElementById("colorSelect");
  const msg = document.getElementById("statusMsg");
  if (!select) return;

  const defaultColors = ["Red", "Green", "White", "Black"];
  select.innerHTML = "";
  defaultColors.forEach(color => {
    const opt = document.createElement("option");
    opt.text = color;
    select.add(opt);
  });

  if (msg) {
    msg.textContent = "Đã khôi phục danh sách màu sắc ban đầu.";
    msg.style.color = "#2563eb";
  }
}
