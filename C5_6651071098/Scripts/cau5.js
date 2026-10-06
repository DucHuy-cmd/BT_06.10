/**
 * Câu 5: Áp dụng DOM và jQuery để hiển thị một hình ảnh ngẫu nhiên từ danh sách khi nhấn "Show Image"
 * MSSV: 6651071098
 */
const imageList = [
  {
    src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    localFallback: "Images/image1.jpg",
    width: "240",
    height: "160",
    name: "Ảnh 1 (240 x 160)"
  },
  {
    src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    localFallback: "Images/image2.jpg",
    width: "320",
    height: "195",
    name: "Ảnh 2 (320 x 195)"
  },
  {
    src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
    localFallback: "Images/image3.jpg",
    width: "500",
    height: "343",
    name: "Ảnh 3 (500 x 343)"
  }
];

function display_random_image() {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  const selected = imageList[randomIndex];

  const imgSrc = (window.location.protocol === "file:") ? selected.localFallback : selected.src;

  // Sử dụng jQuery để tạo và chèn thẻ img
  const $img = $("<img>", {
    src: imgSrc,
    width: selected.width,
    height: selected.height,
    alt: selected.name,
    error: function () {
      $(this).attr("src", selected.localFallback);
    }
  });

  $("#imageContainer").empty().append($img);

  $("#imageInfo").html(`Đang hiển thị: <strong>${selected.name}</strong> | Kích thước: ${selected.width}px &times; ${selected.height}px`);
}
