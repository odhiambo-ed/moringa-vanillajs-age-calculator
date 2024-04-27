function isValidDateMonth() {
    if (day <= 0 || day > 31 || month <= 0 || month > 12) {
        return false;
    }

    return true;
}

// Calculate the day of the week
