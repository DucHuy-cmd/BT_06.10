/**
 * Câu 7: Áp dụng DOM và jQuery để khi nhập vào liên kết thì hiện dialog Windows hỏi,
 * nếu OK thì chuyển đến trang liên kết, nếu Cancel thì không thực hiện gì cả.
 * MSSV: 6651071098
 */
$(document).ready(function () {
  $("#linkForm").on("submit", function (e) {
    e.preventDefault();

    let url = $("#linkInput").val().trim();
    if (!url) {
      alert("Vui lòng nhập đường link hợp lệ!");
      return;
    }

    // Đảm bảo url có giao thức http:// hoặc https://
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    // Hiện dialog Windows hỏi xác nhận
    const isConfirmed = window.confirm(`Bạn có muốn chuyển đến liên kết: ${url} không?`);

    if (isConfirmed) {
      $("#statusMessage").html(`
        <div style="padding: 12px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; color: #047857;">
          ✓ Bạn đã chọn <strong>OK</strong>. Đang chuyển hướng đến: <em>${url}</em>
        </div>
      `);
      // Chuyển hướng đến liên kết
      window.location.href = url;
    } else {
      $("#statusMessage").html(`
        <div style="padding: 12px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; color: #b91c1c;">
          ✗ Bạn đã chọn <strong>Cancel</strong>. Đã hủy chuyển hướng!
        </div>
      `);
    }
  });
});
