    function validateForm() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;

      // Validare E-mail
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Introduceți un e-mail valid.";
        return false;
      } else {
        document.getElementById("emailError").innerHTML = "";
      }

      // Validare Parola
      var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerHTML = "Parola trebuie să aibă cel puțin 8 caractere și să conțină cel puțin o literă și un număr.";
        return false;
      } else {
        document.getElementById("passwordError").innerHTML = "";
      }

      // Confirmare Parola
      if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Parola nu corespunde.";
        return false;
      } else {
        document.getElementById("confirmPasswordError").innerHTML = "";
      }

      // Returneaza true daca toate validarile sunt trecute
      return true;
    }
