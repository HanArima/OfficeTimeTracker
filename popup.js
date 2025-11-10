// Get DOM elements
const inTimeInput = document.getElementById('inTime');
const amBtn = document.getElementById('amBtn');
const pmBtn = document.getElementById('pmBtn');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');
const timeDisplay = document.getElementById('timeDisplay');
const timezoneInfo = document.getElementById('timezoneInfo');

let isPM = false;

// Toggle AM/PM
amBtn.addEventListener('click', function () {
    isPM = false;
    amBtn.classList.add('active');
    pmBtn.classList.remove('active');
});

pmBtn.addEventListener('click', function () {
    isPM = true;
    pmBtn.classList.add('active');
    amBtn.classList.remove('active');
});

// Format time input as user types
inTimeInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/[^0-9]/g, '');

    if (value.length >= 2) {
        value = value.slice(0, 2) + ':' + value.slice(2, 4);
    }

    e.target.value = value;
});

// Display current timezone
function displayTimezone() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();
    const offset = -now.getTimezoneOffset() / 60;
    const offsetStr = offset >= 0 ? `+${offset}` : offset;
    timezoneInfo.textContent = `Timezone: ${timezone} (UTC${offsetStr})`;
}

// Load saved time from storage
chrome.storage.local.get(['inTime', 'isPM'], function (data) {
    if (data.inTime) {
        inTimeInput.value = data.inTime;
    }
    if (data.isPM !== undefined) {
        isPM = data.isPM;
        if (isPM) {
            pmBtn.classList.add('active');
            amBtn.classList.remove('active');
        }
    }
});

// Calculate time spent
calculateBtn.addEventListener('click', function () {
    const inTime = inTimeInput.value;

    if (!inTime || !inTime.includes(':')) {
        alert('Please enter time in HH:MM format!');
        return;
    }

    // Save the in time and period
    chrome.storage.local.set({ inTime: inTime, isPM: isPM });

    // Get current time
    const now = new Date();

    // Parse the input time
    const [hoursInput, minutes] = inTime.split(':').map(Number);

    // Validate input
    if (hoursInput < 1 || hoursInput > 12 || minutes < 0 || minutes > 59) {
        alert('Please enter valid time (HH: 01-12, MM: 00-59)');
        return;
    }

    // Convert to 24-hour format
    let hours24 = hoursInput;
    if (isPM && hoursInput !== 12) {
        hours24 = hoursInput + 12;
    } else if (!isPM && hoursInput === 12) {
        hours24 = 0;
    }

    const inDateTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours24,
        minutes,
        0
    );

    // Calculate difference in milliseconds
    let timeDiff = now - inDateTime;

    // Handle case where in time is in the future (shouldn't happen normally)
    if (timeDiff < 0) {
        alert('In time cannot be in the future!');
        return;
    }

    // Convert to hours and minutes
    const totalMinutes = Math.floor(timeDiff / (1000 * 60));
    const hoursSpent = Math.floor(totalMinutes / 60);
    const minutesSpent = totalMinutes % 60;

    // Display result
    timeDisplay.textContent = `${hoursSpent}h ${minutesSpent}m`;
    result.classList.add('show');
});

// Reset functionality
resetBtn.addEventListener('click', function () {
    inTimeInput.value = '';
    result.classList.remove('show');
    isPM = false;
    amBtn.classList.add('active');
    pmBtn.classList.remove('active');
    chrome.storage.local.remove(['inTime', 'isPM']);
});

// Initialize timezone display
displayTimezone();