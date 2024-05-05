document.addEventListener("DOMContentLoaded", function() {
    const commentInput = document.querySelector('input[name="komentar"]');
    const submitButton = document.querySelector('button[type="submit"]');

    commentInput.addEventListener('input', function() {
        const comment = commentInput.value.trim();
        const wordCount = comment.split(/\s+/).length;

        if (wordCount < 2) {
            submitButton.disabled = true;
            commentInput.setCustomValidity("Komentar harus mengandung minimal 50 kata.");
        } else {
            submitButton.disabled = false;
            commentInput.setCustomValidity("");
        }
    });


});