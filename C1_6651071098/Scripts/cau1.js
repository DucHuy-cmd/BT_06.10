/**
 * Câu 1: Áp dụng DOM và jQuery xử lý sự kiện khi nhấn nút Submit/Style
 * sẽ thay đổi style của đoạn văn bản gồm: fontSize, fontFamily, color.
 * MSSV: 6651071098
 */
function js_style() {
  const $text = $("#text");
  
  // Toggle hoặc áp dụng style mới qua jQuery
  if ($text.css("color") === "rgb(220, 38, 38)" || $text.css("color") === "#dc2626") {
    $text.css({
      "font-size": "18px",
      "font-family": "'Courier New', Courier, monospace",
      "color": "#059669"
    });
  } else {
    $text.css({
      "font-size": "24px",
      "font-family": "Arial, Helvetica, sans-serif",
      "color": "#dc2626"
    });
  }
}
