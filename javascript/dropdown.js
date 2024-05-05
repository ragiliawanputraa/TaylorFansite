document.addEventListener("DOMContentLoaded", function() {
    // Temukan semua elemen dengan kelas 'foto'
    var fotoElements = document.querySelectorAll('.foto');
    
    // Loop melalui setiap elemen foto
    fotoElements.forEach(function(fotoElement) {
        // Tambahkan event listener untuk menampilkan dropdown saat hover
        fotoElement.addEventListener('mouseover', function() {
            // Temukan elemen dropdown dalam elemen foto
            var dropdownInfo = fotoElement.querySelector('.dropdown-info');
            // Tampilkan dropdown
            dropdownInfo.style.display = 'block';
        });

        // Tambahkan event listener untuk menyembunyikan dropdown saat hover keluar
        fotoElement.addEventListener('mouseout', function() {
            // Temukan elemen dropdown dalam elemen foto
            var dropdownInfo = fotoElement.querySelector('.dropdown-info');
            // Sembunyikan dropdown
            dropdownInfo.style.display = 'none';
        });
    });
});
