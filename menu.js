function toggleMenu() {
    var menu = document.querySelector('.menu-custom');
    menu.classList.toggle('show');
}
document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu-custom');
    var menuIcon = document.querySelector('.menu-icon');

    // Check if the clicked element is outside of the menu and menu icon
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        // Hide the menu
        menu.classList.remove('show');
    }
});
    // document.addEventListener('DOMContentLoaded', function() {
    //     document.getElementById('contactForm').addEventListener('submit', function(event) {
    //         event.preventDefault(); // Prevent form submission

    //         // Get form data
    //         var formData = new FormData(this);

    //         // Construct email body
    //         var emailBody = 'Name: ' + formData.get('name') + '\n';
    //         emailBody += 'Email: ' + formData.get('email') + '\n';
    //         emailBody += 'Message: ' + formData.get('message');

    //         // Create mailto link with email body
    //         var mailtoLink = 'mailto:sandeepchhetri7@gmail.com?subject=Contact Form Submission&body=' + encodeURIComponent(emailBody);

    //         // Open email client in new tab
    //         window.open(mailtoLink, '_blank');
    //     });
    // });