var firebaseConfig = {
      apiKey: "AIzaSyBlG1pUFCIL8tAqFh3y_zfxeGh80GO28U0",
      authDomain: "kwitter-713ba.firebaseapp.com",
      databaseURL: "https://kwitter-713ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-713ba",
      storageBucket: "kwitter-713ba.appspot.com",
      messagingSenderId: "627984156124",
      appId: "1:627984156124:web:beeccf2a5fd1aeb121bb19",
      measurementId: "G-6CNKQCH7Q1"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
     window.location = "index.html"      
}