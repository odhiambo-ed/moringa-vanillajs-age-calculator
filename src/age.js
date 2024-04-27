function isValidDateMonth() {
    if (day <= 0 || day > 31 || month <= 0 || month > 12) {
        return false;
    }

    return true;
}

// Calculate the day of the week
function calculateDayOfWeek(day, month, year) {
    if (month < 3) {
        month += 12;
        year--;
    }

    const dayOfWeekIndex = (day + Math.floor((13 * (month + 1)) / 5) + year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)) % 7;

    const akanDayIndex = (dayOfWeekIndex + 6) % 7;

    return akanDayIndex;
}

const maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
