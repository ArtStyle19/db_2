    $(document).ready(function () {
      // Check session status on page load
      checkSessionStatus();

      // Function to check session status
      function checkSessionStatus() {
        $.ajax({
          url: '/db_2/backend/check_session.php', // PHP file that checks session status
          type: 'GET',
          dataType: 'json', // Expect JSON response
          success: function (response) {
            // Update content based on session status
            if (response.loggedIn) {
              $('#session-container').html('<a href="#" id="logout"> '+  response.userDetails.username.toUpperCase() + '</a>');
              $('#login-register-container').hide();
              $('#loginDropdown').hide();
            } else {
              $('#session-container').html('');
              $('#login-register-container').show();
              $('#loginDropdown').show();
            }
          }
        });
      }

      // Form submission handlers
      $('#register-form').submit(function (event) {
        event.preventDefault();
        $.ajax({
          url: '/db_2/backend/register.php',
          type: 'POST',
          data: $(this).serialize(),
          success: function (data) {
            console.log(data); // Log the response for debugging
            // After registration, re-check the session status
            document.location.href='./index.html';
            checkSessionStatus();


          }
        });
      });

      $('#login-form').submit(function (event) {
        event.preventDefault();
        $.ajax({
          url: '/db_2/backend/login.php',
          type: 'POST',
          data: $(this).serialize(),
          success: function (data) {
            console.log(data); // Log the response for debugging
            // After login, re-check the session status
            document.location.href='./index.html';
            checkSessionStatus();
          }
        });
      });

      // Logout click handler
      $(document).on('click', '#logout', function (event) {
        event.preventDefault();
        $.ajax({
          url: '/db_2/backend/logout.php',
          type: 'GET',
          success: function (data) {
            console.log(data); // Log the response for debugging
            // After logout, re-check the session status
            document.location.href='./index.html';
            checkSessionStatus();
          }
        });
      });


      $(document).ready(function() {
        // Abre el desplegable solo con clic en el botón
        $('#loginDropdown').click(function() {
          $('.dropdown-menu').toggle();
        });

        // Cierra el desplegable al hacer clic fuera de él o después de iniciar sesión
        $(document).click(function(e) {
          if (!$(e.target).closest('.dropdown').length && !$(e.target).closest('.dropdown-menu').length) {
            $('.dropdown-menu').hide();
          }
        });

        // Ejemplo de cierre del desplegable después de iniciar sesión (simulado)
        $('#login-form').submit(function(e) {
          // Aquí debes realizar tu lógica real de inicio de sesión
          // Actualmente, el código simula el cierre del desplegable después de enviar el formulario
          e.preventDefault();
          $('.dropdown-menu').hide();
        });

        $('#register-form').submit(function(e) {
          // Aquí debes realizar tu lógica real de inicio de sesión
          // Actualmente, el código simula el cierre del desplegable después de enviar el formulario
          e.preventDefault();
          $('.dropdown-menu').hide();
        });
        // Scroll to the bottom of the page on page load
        $(document).ready(function() {
          $('html, body').animate({ scrollTop: $(document).height()/2.5 }, 'slow');
        });






      });
    });

