document.addEventListener('DOMContentLoaded', function () {
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const answer = this.nextElementSibling;   

            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
            } else {
                // Hide all other answers before showing the current one
                toggleBtns.forEach(function (otherBtn) {
                    const otherAnswer = otherBtn.nextElementSibling;
                    if (otherAnswer !== answer && otherAnswer.classList.contains('show')) {
                        otherAnswer.classList.remove('show');
                    }
                });

                answer.classList.add('show');
            }
        });
    });
});
