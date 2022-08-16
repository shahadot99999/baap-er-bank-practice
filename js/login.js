//console.log("hello World")

//step 1: submit button handler
document.getElementById('btn-submit').addEventListener('click', function () {

    //step2: email  getElementid from input

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    //step 3: password from input

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(password);

    // step 4: email and password are matching 

    if (email === 'ohi123@gmail.com' && password === '12345') {
        //console.log("you are welcome")
        window.location.href = 'bank.html';
    }
    else {
        alert('you get out this website!');
        //console.log("you get out this website!")
    }



})