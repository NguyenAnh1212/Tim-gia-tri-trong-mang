let value = prompt("Enter a number: ");    // Biến value để lấy giá trị từ người dùng.
let numbers = [-3, 5, 1, 3, 2, 10];                // Khởi tạo mảng ban đầu
for (let i = 0; i < numbers.length; i++) {         //vòng lặp duyệt toàn bộ mảng, nếu giá trị nhập vào
    if (value == numbers[i]) {                      // bằng với một phần tử trong mảng thì hiện thông báo
        alert("Số " + numbers[i] + " được tìm thấy tại vị trí " + i + " trong mảng.");
    }
    }