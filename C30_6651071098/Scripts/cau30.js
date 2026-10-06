/**
 * Câu 30: Áp dụng DOM để thêm 1 hàng vào table đã tồn tại khi người dùng nhấn "Insert Row"
 * MSSV: 6651071098
 */
function insert_Row() {
  const table = document.getElementById("sampleTable");
  if (!table) return;

  // Lấy số hàng hiện có
  const rowCount = table.rows.length;

  // Tạo hàng mới ở cuối bảng (-1 hoặc rowCount)
  const newRow = table.insertRow(-1);

  // Thêm 2 ô (cells) vào hàng mới
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Gán nội dung theo quy tắc của bảng: RowX cell1, RowX cell2
  const nextRowNum = rowCount + 1;
  cell1.innerHTML = `Row${nextRowNum} cell1`;
  cell2.innerHTML = `Row${nextRowNum} cell2`;

  // Cập nhật thông tin hiển thị số hàng
  const info = document.getElementById("rowCountInfo");
  if (info) {
    info.textContent = `Tổng số hàng hiện tại: ${table.rows.length}`;
  }
}
