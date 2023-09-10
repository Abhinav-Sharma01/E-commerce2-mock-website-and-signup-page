const container = document.querySelector(".container");
        const signUpBtn = document.querySelector(".green-bg button");

        signUpBtn.addEventListener("click", () => {
            container.classList.toggle("change");
        });

        const form = document.getElementById('loginForm');
        form.addEventListener('submit', function(event) {
          const uname = document.getElementById('uname');
          const email = document.getElementById('email');
          const pwd = document.getElementById('pwd');
    
          if (uname.value.trim() === '') {
            alert('Username is required.');
            event.preventDefault();
          }
    
          if (email.value.trim() === '') {
            alert('Email is required.');
            event.preventDefault();
          }
    
          if (pwd.value.trim() === '') {
            alert('Password is required.');
            event.preventDefault();
          }
          else{
            alert("Thank you")
          }
        });