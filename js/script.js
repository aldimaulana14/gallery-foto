 // JavaScript untuk menampilkan modal dengan gambar penuh
 document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail img");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close");

    // Event listener untuk setiap thumbnail
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", () => {
        const fullImageURL = thumbnail.getAttribute("data-full");
        modalImage.src = fullImageURL; // Tampilkan gambar penuh di modal
        modal.classList.add("visible");
      });
    });

    // Event listener untuk tombol close
    closeModal.addEventListener("click", () => {
      modal.classList.remove("visible");
    });

    // Sembunyikan modal jika pengguna mengklik area luar gambar
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("visible");
      }
    });
  });