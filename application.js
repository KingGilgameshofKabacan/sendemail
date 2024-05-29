document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('applicationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form inputs
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Compose the mailto link
    var subject = encodeURIComponent('Application from ' + fullName);
    var body = encodeURIComponent('Full Name: ' + fullName + '\nEmail: ' + email + '\n\nMessage:\n' + message);
    var mailtoLink = 'mailto:your-email@example.com?subject=' + subject + '&body=' + body;

    // Redirect to the mailto link to open the default email client
    window.location.href = mailtoLink;
  });
});
