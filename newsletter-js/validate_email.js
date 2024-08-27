function validateEmail(email) {
    // Check if the email is empty
    if (email === "") {
        return false;
    }

    // Ensure the email contains only one '@' symbol
    if (email.split('@').length !== 2) {
        return false;
    }

    // Regular expression to validate the email format
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if email ends with a valid domain extension
    const validDomain = email.match(/\.[a-zA-Z]{2,3}$/);
    if (!validDomain) {
        return false;
    }

    // Ensure the local part (before @) doesn't start with a special character
    const localPart = email.split('@')[0];
    if (/^[^a-zA-Z0-9]/.test(localPart)) {
        return false;
    }

    // Check if the email matches the regex pattern
    if (!regex.test(email)) {
        return false;
    }

    return true;
}