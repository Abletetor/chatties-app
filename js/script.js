// signup starts here
function signup () {
   const email = document.getElementById('signupEmail').value;
   const username = document.getElementById('signupUsername').value;
   const password = document.getElementById('signupPassword').value;

   if (!email || !username || !password) {
      alert('Please fill in all fields');
      return;
   }

   const users = JSON.parse(localStorage.getItem('users')) || [];
   const userExists = users.some(user => user.username === username);

   if (userExists) {
      alert('Username already exists');
   } else {
      users.push({ email, username, password });
      localStorage.setItem('users', JSON.stringify(users));

      document.getElementById('signupEmail').value = '';
      document.getElementById('signupUsername').value = '';
      document.getElementById('signupPassword').value = '';
      showLogin();
   }
}
// signup ends here

// login starts here
function login () {
   const username = document.getElementById('loginUsername').value;
   const password = document.getElementById('loginPassword').value;

   if (!username || !password) {
      alert('Please fill in all fields');
      return;
   }

   const users = JSON.parse(localStorage.getItem('users')) || [];
   const user = users.find(user => user.username === username && user.password === password);

   if (user) {
      document.getElementById('loginUsername').value = '';
      document.getElementById('loginPassword').value = '';
      // Redirect to index.html
      window.location.href = 'main.html';
   } else {
      alert('Invalid username or password');
   }
}

function showSignup () {
   document.getElementById('signup').style.display = 'block';
   document.getElementById('login').style.display = 'none';
}

function showLogin () {
   document.getElementById('signup').style.display = 'none';
   document.getElementById('login').style.display = 'block';
}
// login ends here

//logout function
document.getElementById("logout").addEventListener("click", function () {
   window.location.href = "index.html";
});


// Sidebar start here
document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function (e) {
   e.preventDefault();
   this.parentElement.classList.toggle('active');
});

document.addEventListener('click', function (e) {
   if (!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
      document.querySelector('.chat-sidebar-profile').classList.remove('active');
   }
});
// Sidebar ends here

// Coversation starts here
document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function (item) {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.parentElement.classList.contains('active')) {
         this.parentElement.classList.remove('active');
      } else {
         document.querySelectorAll('.conversation-item-dropdown').forEach(function (i) {
            i.classList.remove('active');
         });
         this.parentElement.classList.add('active');
      }
   });
});

document.addEventListener('click', function (e) {
   if (!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
      document.querySelectorAll('.conversation-item-dropdown').forEach(function (i) {
         i.classList.remove('active');
      });
   }
});

document.querySelectorAll('.conversation-form-input').forEach(function (item) {
   item.addEventListener('input', function () {
      this.rows = this.value.split('\n').length;
   });
});

document.querySelectorAll('[data-conversation]').forEach(function (item) {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.conversation').forEach(function (i) {
         i.classList.remove('active');
      });
      document.querySelector(this.dataset.conversation).classList.add('active');
   });
});

document.querySelectorAll('.conversation-back').forEach(function (item) {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      this.closest('.conversation').classList.remove('active');
      document.querySelector('.conversation-default').classList.add('active');
   });
});
// Coversation ends here