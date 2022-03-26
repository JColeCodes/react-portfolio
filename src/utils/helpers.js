export function validateEmail(email) {
    var emailAddress = String(email);
    var regex = /^[^.\s]([\w.!#$%&'*+/=?^`{|}_~-]+)[^.\s]@[a-z0-9]+\.([a-z]+)(\.[a-z]{2,13})*$/i;
    return (regex.test(emailAddress) && !emailAddress.includes('..'));
}