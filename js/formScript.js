
// var jsonUser = {
//     "name": "Иванasdasdas",
//     "email": "228@mai.ru"
// }


// var user = JSON.parse(jsonUser);
// alert(user.name)


let sendButton = document.getElementById('button-send');
let againButton = document.getElementById('button-again');
sendButton.onclick = function() { }
var userComment = null;
sendButton.onclick = function() {
    event.preventDefault();
    let userName = document.getElementById("form-name");
    let userEmail = document.getElementById("form-email");
    let userFeedback = document.getElementById("form-feedback");
    userComment= {
        name: userName.value,
        email: userEmail.value,
        feedback: userFeedback.value,
        time : Date.now()
    }
    //var jsonUser = JSON.stringify(user);
    saveComment()
    showComment()
    // console.log("onclick foo!")
    // // alert("Complite!")
}

function saveComment(){
    localStorage.setItem('userComment',  JSON.stringify(userComment));
    // console.log("saveComments foo!")
}

function showComment(){
    var localValue = JSON.parse(localStorage.getItem('userComment'));
    document.getElementById('res-comment').innerHTML = "you : " + localValue.name + " successfully left a comment"
    document.getElementById('comments-sent').innerHTML = localValue.name + " : "+ localValue.feedback
    // console.log(localValue.email);
}


