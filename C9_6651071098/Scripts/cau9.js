/**
 * Câu 9: Form đăng ký thông tin người dùng có kiểm tra (validate) dữ liệu nhập vào
 * MSSV: 6651071098
 */
$(document).ready(function () {
  // Nút Clear: xóa tất cả dữ liệu đã nhập
  $("#btnClear").on("click", function () {
    $("#regForm")[0].reset();
    $('input[name="sex"]').prop("checked", false);
    $("#validationResult").empty();
  });

  // Nút Finish / Finished: Kiểm tra tính hợp lệ dữ liệu
  $("#btnFinished").on("click", function () {
    const errors = [];

    // 1. Kiểm tra các trường có dấu * không được rỗng
    const name = $("#fullname").val().trim();
    if (!name) errors.push("Tên (Name) không được để trống.");

    const sex = $('input[name="sex"]:checked').val();
    if (!sex) errors.push("Giới tính (Sex) chưa được chọn.");

    const email = $("#email").val().trim();
    if (!email) errors.push("Email address không được để trống.");

    const birthday = $("#birthday").val().trim();
    if (!birthday) errors.push("Ngày sinh (Birthday) không được để trống.");

    const address = $("#address").val().trim();
    if (!address) errors.push("Địa chỉ (Street address) không được để trống.");

    const city = $("#city").val().trim();
    if (!city) errors.push("Thành phố (City) không được để trống.");

    const region = $("#region").val();
    if (!region) errors.push("Khu vực (Region) chưa được chọn.");

    const zipcode = $("#zipcode").val().trim();
    if (!zipcode) errors.push("ZIP code không được để trống.");

    // 2. Kiểm tra Email:
    // Phải có 1 ký tự @. Phía trước @ có nhiều nhất 1 dấu chấm. Phía sau @ có ít nhất 1 dấu chấm.
    if (email) {
      const atParts = email.split("@");
      if (atParts.length !== 2) {
        errors.push("Email phải chứa đúng 1 ký tự '@'.");
      } else {
        const account = atParts[0];
        const domain = atParts[1];

        if (!account) {
          errors.push("Tên tài khoản email trước '@' không được rỗng.");
        } else {
          const dotCountAccount = (account.match(/\./g) || []).length;
          if (dotCountAccount > 1) {
            errors.push("Phần account phía trước '@' chỉ được chứa nhiều nhất 1 dấu chấm (.).");
          }
        }

        if (!domain) {
          errors.push("Phần tên miền domain phía sau '@' không được rỗng.");
        } else {
          const dotCountDomain = (domain.match(/\./g) || []).length;
          if (dotCountDomain < 1) {
            errors.push("Phần domain phía sau '@' phải có ít nhất 1 dấu chấm (.).");
          }
          if (domain.startsWith(".") || domain.endsWith(".")) {
            errors.push("Tên miền không được bắt đầu hoặc kết thúc bằng dấu chấm (.).");
          }
        }
      }
    }

    // 3. Kiểm tra Ngày tháng năm sinh:
    // Định dạng mm/dd/yyyy hoặc mm-dd-yyyy. Tháng 1-12, năm nhỏ hơn năm hiện tại.
    if (birthday) {
      const dateRegex = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/;
      const match = birthday.match(dateRegex);

      if (!match) {
        errors.push("Ngày sinh phải theo định dạng MM/DD/YYYY hoặc MM-DD-YYYY.");
      } else {
        const month = parseInt(match[1], 10);
        const day = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);
        const currentYear = new Date().getFullYear();

        if (month < 1 || month > 12) {
          errors.push("Tháng sinh phải nằm trong khoảng từ 1 đến 12.");
        }
        if (day < 1 || day > 31) {
          errors.push("Ngày sinh phải nằm trong khoảng từ 1 đến 31.");
        }
        if (year >= currentYear) {
          errors.push(`Năm sinh (${year}) phải nhỏ hơn năm hiện tại (${currentYear}).`);
        }
      }
    }

    // 4. Kiểm tra Zip code: đúng 5 chữ số
    if (zipcode) {
      if (!/^\d{5}$/.test(zipcode)) {
        errors.push("ZIP code phải có đúng 5 chữ số.");
      }
    }

    // Hiển thị kết quả kiểm tra
    const $res = $("#validationResult");
    if (errors.length > 0) {
      const errList = errors.map(err => `<li>${err}</li>`).join("");
      $res.html(`
        <div class="msg-error">
          <strong>Thông tin chưa hợp lệ:</strong>
          <ul style="margin: 6px 0 0 18px; padding: 0;">${errList}</ul>
        </div>
      `);
    } else {
      $res.html(`
        <div class="msg-success">
          ✓ Tất cả dữ liệu hợp lệ! Đăng ký thành công thông tin người dùng.
        </div>
      `);
      alert("Đăng ký thành công! Dữ liệu đã thỏa mãn tất cả điều kiện kiểm tra.");
    }
  });
});
