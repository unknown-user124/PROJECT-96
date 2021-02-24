//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDSC4rBYOwD18LHvgnrW47ixdsLcP6F540",
      authDomain: "kwitterproject-real-devansh.firebaseapp.com",
      databaseURL: "https://kwitterproject-real-devansh-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-real-devansh",
      storageBucket: "kwitterproject-real-devansh.appspot.com",
      messagingSenderId: "1015276144269",
      appId: "1:1015276144269:web:e4ac6ca25b535f4bc784c4",
      measurementId: "G-NLF7YVJ55F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username");
room_name=localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send1() {
      msg=document.getElementById("inputFORmsg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like=0
      });
      document.getElementById("inputFORmsg").value="";
}