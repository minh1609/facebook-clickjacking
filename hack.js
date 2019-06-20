function sendData() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;

    //!Danger
    alert(`your password ${password} for ${email} has been stolen`);
}
