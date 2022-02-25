document.getElementById("btn").onclick = function(){
    var bookName = document.getElementById("book").value;
    var serialNumber = document.getElementById("serial").value;


                // Add a new document in collection 
            firebase.firestore().collection("books").doc().set({
                bookName: bookName,
                serialNumber: serialNumber 
            })
            .then(() => {
                console.log("Document successfully written!");
                window.location.href = "books.html"
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
}