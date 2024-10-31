document.addEventListener('DOMContentLoaded', () => {
    // Function to navigate between screens
    function navigateTo(screenId) {
      const screens = document.querySelectorAll('.screen');
      screens.forEach(screen => screen.classList.remove('active')); // Hide all screens
      const targetScreen = document.getElementById(screenId);
      if (targetScreen) {
        targetScreen.classList.add('active'); // Show the selected screen
      } else {
        console.error(`Screen with ID "${screenId}" not found.`);
      }
    }
  
    // Example Login Function
    function login() {
      alert('Login Successful!');
      navigateTo('user-dashboard'); // Navigate to the next screen if login is successful
    }
   // Example signup Function
   function signup() {
    alert('signup Successful!');
    navigateTo('second-screen'); // Navigate to the login screen when signup is successful
  }
  function submitSignup(){
    alert('Account creation Successful!');
  }
    // Example Appointment Booking Function
    function bookAppointment(doctorName) {
      alert(`Booking appointment with ${doctorName}`);
      navigateTo('appointment-screen');
    }
  
  
    function showDoctorDetails(name, specialty, contact, email) {
      document.getElementById('doctor-name').textContent = name;
      document.getElementById('doctor-specialty').textContent = specialty;
      document.getElementById('doctor-contact').textContent = contact;
      document.getElementById('doctor-email').textContent = email;
      navigateTo('doctor-details-screen');
    }
    
    // Login function placeholder
    function login() {
      alert('Login Successful!');
    }
    
    // Signup function placeholder
    function submitSignup() {
      alert('Signup successful!');
      navigateTo('second-screen');
    }
  
    // Expose functions globally for HTML inline event handlers
    window.navigateTo = navigateTo;
    window.login = login;
    window.signup = signup;
    window.submitSignup = submitSignup;
    window.showDoctorDetails = showDoctorDetails;
    window.bookAppointment = bookAppointment;
  });