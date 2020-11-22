// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAo_Czx-Apqlnq8e4CfZTWTl5lKqfqlwrc",
    authDomain: "chat-application-9ebb9.firebaseapp.com",
    databaseURL: "https://chat-application-9ebb9.firebaseio.com",
    projectId: "chat-application-9ebb9",
    storageBucket: "chat-application-9ebb9.appspot.com",
    messagingSenderId: "739185216624",
    appId: "1:739185216624:web:f4ad16b5a4f259f8cd78b5",
    measurementId: "G-VG3HSWTSQM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database=firebase.database();


  function sendMessage()
  {
      var email=document.getElementById("email").value;
      var name=document.getElementById("name").value;
      var message=document.getElementById("message").value;


      var newMessageKey=database.ref().child('comments').push().key;
      database.ref('comments/'+newMessageKey+'/Name').set(name);
      database.ref('comments/'+newMessageKey+'/Email').set(email);
    
      database.ref('comments/'+newMessageKey+'/message').set(message);



  }

  ///alert

  document.getElementById('contactForm'.add).addEventListener('submit',submitForm);
  function submitForm(e)
  {
      e.preventDefault();
  }
  document.querySelector('alert').getElementsByClassName.display='block';
  
  function hideAlert()
  {
      document.querySelector('.alert').getElementsByClassName.display='none';

  }

  setTimeout (hideAlert,3000);