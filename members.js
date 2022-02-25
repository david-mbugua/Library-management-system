document.getElementById("btn").onclick = function(){
    var firstName = document.getElementById("name").value;
    var secondName = document.getElementById("scdNme").value;
    var ID = document.getElementById("id").value;
    var email = document.getElementById("email").value;

    // Add a new document in collection "cities"
firebase.firestore().collection("members").doc().set({
    name: firstName,
    secondName: secondName,
    ID: ID,
    emailAddress: email
})
.then(() => {
    console.log("Document successfully written!");
    window.location.href = "members.html"
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}