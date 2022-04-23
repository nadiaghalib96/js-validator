function validateEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePhone(phone) {
    return String(phone)
    .toLowerCase()
    .match(
        /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    );
};

function validateUsername(username) {
    return String(username)
    .toLowerCase()
    .match(
        /^[a-z0-9_-]{3,16}$/igm
    );
};

function validatePassword(password) {
    return String(password)
    .toLowerCase()
    .match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    );
};