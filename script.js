document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll('.tab-links a');
    const tabs = document.querySelectorAll('.tab');

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            tabLinks.forEach(link => link.parentElement.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            this.parentElement.classList.add('active');
            const targetTab = document.querySelector(this.getAttribute('href'));
            targetTab.classList.add('active');
        });
    });
});