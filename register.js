document.getElementById("btn").onclick = function(){
    var firstName = document.getElementById("name").value;
    var secondName = document.getElementById("scdName").value;
    var iD = document.getElementById("idNo").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
              // Add a new document in collection "users"
          firebase.firestore().collection("users").doc().set({
            name: firstName,
            UserID: user.uid,
            emailAddress: email

          })
          .then(() => {
            console.log("Document successfully written!");
            window.location.href = "index.html"
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
}