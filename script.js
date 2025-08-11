const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    // Hapus class 'active' dari semua
    links.forEach((l) => l.classList.remove("active"));

    // Tambahkan class 'active' ke link yang diklik
    this.classList.add("active");
  });
});
