const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    // Hapus class 'active' dari semua
    links.forEach((l) => l.classList.remove("active"));

    // Tambahkan class 'active' ke link yang diklik
    this.classList.add("active");
  });
});

// tombol lihat password

const eye = document.querySelector("#eye");
const eyes = document.getElementById("eyes");

eye.addEventListener("click", function () {
  const password = document.getElementById("password");

  if (password.type === "password") {
    password.type = "text";
    eyes.classList.add("bi-eye-slash-fill");
    eyes.classList.remove("bi-eye-fill");
  } else {
    password.type = "password";
    eyes.classList.remove("bi-eye-slash-fill");
    eyes.classList.add("bi-eye-fill");
  }
});
