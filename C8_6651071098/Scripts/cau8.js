/**
 * Câu 8: Áp dụng DOM và jQuery để tạo một chương trình máy tính
 * MSSV: 6651071098
 */
$(document).ready(function () {
  let currentOp = "-";

  function calculate() {
    const val1 = parseFloat($("#num1").val());
    const val2 = parseFloat($("#num2").val());

    if (isNaN(val1) || isNaN(val2)) {
      $("#result").val("Lỗi");
      $("#calculationLog").html("<span style='color:#ef4444;'>Vui lòng nhập đầy đủ hai số hợp lệ!</span>");
      return;
    }

    let res = 0;
    let opSymbol = currentOp;

    switch (currentOp) {
      case "+":
        res = val1 + val2;
        break;
      case "-":
        res = val1 - val2;
        break;
      case "*":
        res = val1 * val2;
        opSymbol = "×";
        break;
      case "/":
        if (val2 === 0) {
          $("#result").val("Không chia 0");
          $("#calculationLog").html("<span style='color:#ef4444;'>Lỗi: Không thể chia cho 0!</span>");
          return;
        }
        res = Math.round((val1 / val2) * 10000) / 10000;
        opSymbol = "÷";
        break;
    }

    $("#result").val(res);
    $("#calculationLog").html(`Biểu thức: <strong>${val1} ${opSymbol} ${val2} = ${res}</strong>`);
  }

  // Bắt sự kiện khi click chọn toán tử
  $(".btn-op").on("click", function () {
    $(".btn-op").removeClass("active");
    $(this).addClass("active");
    currentOp = $(this).data("op");
    calculate();
  });

  // Bắt sự kiện khi người dùng thay đổi giá trị input
  $("#num1, #num2").on("input change", function () {
    calculate();
  });

  // Khởi tạo tính toán ban đầu
  calculate();
});
