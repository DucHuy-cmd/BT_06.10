/**
 * Câu 32: Hiển thị một hình ảnh ngẫu nhiên từ danh sách cho trước khi nhấn "Show Image"
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
  const container = document.getElementById("imageContainer");
  const info = document.getElementById("imageInfo");
  if (!container) return;

  // Chọn ngẫu nhiên 1 phần tử
  const randomIndex = Math.floor(Math.random() * imageList.length);
  const selected = imageList[randomIndex];

  container.innerHTML = "";

  const imgElement = document.createElement("img");
  // Sử dụng ảnh local nếu mở dưới giao thức file: hoặc offline, ngược lại dùng URL Flickr đề bài
  imgElement.src = (window.location.protocol === "file:") ? selected.localFallback : selected.src;
  imgElement.width = selected.width;
  imgElement.height = selected.height;
  imgElement.alt = selected.name;

  // Xử lý lỗi nếu link Flickr không tải được
  imgElement.onerror = function () {
    this.onerror = null;
    this.src = selected.localFallback;
  };

  container.appendChild(imgElement);

  if (info) {
    info.innerHTML = `Đang hiển thị: <strong>${selected.name}</strong> | Kích thước: ${selected.width}px &times; ${selected.height}px`;
  }
}
