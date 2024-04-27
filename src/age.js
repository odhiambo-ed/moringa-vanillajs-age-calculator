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

function getAkanName(akanDayIndex, gender) {
    if (gender === 'male') {
        return maleAkanNames[akanDayIndex];
    } else {
        return femaleAkanNames[akanDayIndex];
    }
}

// Display Akan name
function showAkanName(name) {
    document.getElementById('display-akan-name').innerText = `Your Akan name is ${name}`;
}

// Form submission
document.getElementById('akanForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;

    if (isValidDateMonth(day, month)) {
        const dayOfWeek = calculateDayOfWeek(day, month, year);
        const akanName = getAkanName(dayOfWeek, gender);
        showAkanName(akanName);
    } else {
        alert('Invalid date and month.');
    }
});