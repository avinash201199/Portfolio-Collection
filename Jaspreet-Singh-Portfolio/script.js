console.log("Script running...");
document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("siderbarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".cross").style.display = "inline";
    setTimeout(() => {
      document.querySelector(".ham").style.display = "none";
    }, 300);
  }
});
