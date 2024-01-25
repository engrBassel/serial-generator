const generateBtn = document.querySelector(".generate-btn"),
  copyBtn = document.querySelector(".copy-btn"),
  serial = document.querySelector(".serial"),
  chars = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*",
  serialCount = 19;

generateBtn.addEventListener("click", function () {
  copyBtn.textContent = "Copy";
  let randomSerial = "";
  for (let i = 0, j = 4; i < serialCount; i++) {
    if (i == j) {
      j += 5;
      randomSerial += " - ";
      continue;
    }
    randomSerial += chars[Math.floor(Math.random() * chars.length)];
  }
  serial.textContent = randomSerial;
});

copyBtn.addEventListener("click", function () {
  if (serial.textContent != "") {
    navigator.clipboard.writeText(serial.textContent);
    copyBtn.textContent = "Copied!";
  }
});
