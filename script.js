let count = 0;
const maxShares = 5;
const counterEl = document.getElementById("counter");
const whatsappBtn = document.getElementById("whatsappBtn");
const submitBtn = document.getElementById("submitBtn");

whatsappBtn.addEventListener("click", () => {
  count++;
  counterEl.textContent = `Click count: ${count}/${maxShares}`;
  const msg = encodeURIComponent("Hey Buddy, Join Tech For Girls Community");
  window.open(`https://wa.me/?text=${msg}`, "_blank");
  if (count >= maxShares) {
    whatsappBtn.disabled = true;
    alert("Sharing complete. Please continue.");
    checkReady();
  }
});

function checkReady() {
  if (count >= maxShares) submitBtn.disabled = false;
}
