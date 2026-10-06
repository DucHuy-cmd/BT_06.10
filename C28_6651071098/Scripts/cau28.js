/**
 * Câu 28: Thay đổi style của đoạn văn bản gồm fontSize, fontFamily, color
 * MSSV: 6651071098
 */
function js_style() {
  const textElement = document.getElementById("text");
  if (!textElement) return;

  // Kiểm tra trạng thái hiện tại để có thể toggle qua lại đẹp mắt
  if (textElement.style.color === "rgb(220, 38, 38)" || textElement.style.color === "#dc2626") {
    // Trở về mặc định hoặc kiểu 2
    textElement.style.fontSize = "18px";
    textElement.style.fontFamily = "'Courier New', Courier, monospace";
    textElement.style.color = "#059669"; // Màu xanh lá
  } else {
    // Áp dụng style theo yêu cầu đề bài: fontSize, fontFamily, color
    textElement.style.fontSize = "24px";
    textElement.style.fontFamily = "Arial, Helvetica, sans-serif";
    textElement.style.color = "#dc2626"; // Màu đỏ
  }
}
