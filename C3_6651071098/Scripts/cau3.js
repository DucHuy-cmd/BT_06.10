/**
 * Câu 3: Áp dụng DOM và jQuery để thêm 1 hàng vào table đã tồn tại khi nhấn "Insert Row"
 * MSSV: 6651071098
 */
function insert_Row() {
  const $table = $("#sampleTable");
  const rowCount = $table.find("tr").length + 1;

  // Tạo hàng mới bằng jQuery
  const newRowHtml = `
    <tr>
      <td>Row${rowCount} cell1</td>
      <td>Row${rowCount} cell2</td>
    </tr>
  `;

  // Chèn vào cuối bảng bằng jQuery append()
  $table.append(newRowHtml);

  // Cập nhật thông tin số hàng
  $("#rowCountInfo").text(`Tổng số hàng hiện tại: ${$table.find("tr").length}`);
}
