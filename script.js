document.addEventListener("DOMContentLoaded", function () {
    // 讓左側選單點擊時可變更選中狀態
    document.querySelectorAll(".menu li").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelectorAll(".menu li").forEach(li => li.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });
  
