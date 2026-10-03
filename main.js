// 1. Khởi tạo các mảng dữ liệu
const portIds = ["S01", "S02", "S03", "S04", "S05", "S06"];
const portStatuses = [
  "AVAILABLE",
  "CHARGING",
  "ERROR",
  "AVAILABLE",
  "CHARGING",
  "AVAILABLE",
];
const portPowersKw = [250, 150, 60, 250, 60, 150];

// 2. Cập nhật dữ liệu
// Xe cắm sạc vào trụ S01: Chuyển trạng thái sang 'CHARGING'
const indexS01 = portIds.indexOf("S01");
if (indexS01 !== -1) {
  portStatuses[indexS01] = "CHARGING";
}

// Trụ S03 sửa xong: Chuyển trạng thái sang 'AVAILABLE'
const indexS03 = portIds.indexOf("S03");
if (indexS03 !== -1) {
  portStatuses[indexS03] = "AVAILABLE";
}

// 3. Thống kê số lượng trụ sẵn sàng và tìm trụ sạc AVAILABLE có công suất lớn nhất
let availableCount = 0;
let maxPower = 0;
let bestAvailablePort = null;

for (let i = 0; i < portIds.length; i++) {
  if (portStatuses[i] === "AVAILABLE") {
    availableCount++;

    // Tìm trụ có công suất lớn nhất trong số các trụ AVAILABLE
    if (portPowersKw[i] > maxPower) {
      maxPower = portPowersKw[i];
      bestAvailablePort = portIds[i];
    }
  }
}

// 4. Xuất báo cáo ra Console
console.log("--- THỐNG KÊ TRẠM SẠC ---");
console.log(`Số lượng trụ sẵn sàng (AVAILABLE): ${availableCount} trụ`);
if (bestAvailablePort) {
  console.log(
    `Trụ sạc sẵn sàng có công suất lớn nhất: ${bestAvailablePort} (${maxPower}kW)`,
  );
} else {
  console.log("Hiện tại không có trụ sạc nào sẵn sàng.");
}

console.log("\n--- BÁO CÁO CHI TIẾT TRẠNG THÁI CÁC TRỤ SẠC ---");
for (let i = 0; i < portIds.length; i++) {
  console.log(
    `Trụ ${portIds[i]} - Công suất: ${portPowersKw[i]}kW - Trạng thái: ${portStatuses[i]}`,
  );
}
