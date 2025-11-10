# Office Time Tracker

A lightweight and efficient **Chrome Extension** that helps you track your working hours directly from your browser - no manual calculation, no confusion.


## Overview

**Office Time Tracker** is a simple yet powerful Chrome Extension built to make your workday tracking effortless.  
Just input your **in-time**, and the extension will automatically calculate the total hours and minutes you’ve worked, all with timezone awareness, so it works perfectly **no matter where you are in the world**.

No more counting on fingers or using calculators that do not understand the 60-minute hour rule.


## Inspiration

While filling out my timesheet one day, I caught myself counting hours and minutes manually. When it came to calculating exact minutes, I reached for a calculator, only to realize it couldn’t interpret that an hour has only 60 minutes and not 100!

That’s when the **computer science student** in me took over. Instead of relying on a calculator, I decided to **build my own logic** that understands time naturally, and that is how **Office Time Tracker** was born.

## Features

- **Accurate Time Calculation:** Instantly calculates hours and minutes since your in-time.  
- **Timezone Awareness:** Automatically detects your system’s timezone and adjusts calculations accordingly. Works seamlessly for users in **any region or country**.  
- **Local Storage:** Saves your last in-time using Chrome’s `storage.local` API.  
- **Reset Option:** Clear saved time and start fresh anytime.  
- **Lightweight:** Built with plain JavaScript, HTML, and CSS. No external libraries.  
- **User-Friendly UI:** Simple, clean, and easy to use.

## Tech Stack

| Component | Technology Used |
|------------|----------------|
| Frontend | HTML5, CSS3, JavaScript |
| Storage | Chrome Local Storage API |
| Platform | Chrome Extension (Manifest v3) |


## How It Works

1. You input your **in-time** (default set to AM, with a PM toggle).  
2. The app fetches your **current system time** and detects your **timezone** automatically.  
3. It then calculates the **time difference** (in hours and minutes) using built-in JavaScript Date APIs.  
4. The result is displayed neatly along with your **current timezone and UTC offset**.


## Installation Guide

Follow these steps to load the extension into Chrome:

1. **Download** or **clone** this repository:  git clone https://github.com/your-username/office-time-tracker.git
2. Open **Google Chrome** and go to: Menu → Extensions → Manage Extensions
3. Toggle **Developer Mode** to **ON** (top-right corner).  
4. Click **Load Unpacked** and select the folder you just downloaded.  
5. Once loaded, open a new tab. Your extension will appear in the toolbar.  
6. Click on it anytime to start tracking your office hours effortlessly.

## File Structure
```
office-time-tracker/
├── manifest.json # Chrome extension configuration
├── popup.html # Main user interface
├── popup.js # Core logic for time tracking
├── style.css # Popup styling
└── README.md # Project documentation
```

## Example

Suppose you start working at **9:30 AM**.  
Open the extension, enter “9:30”, and click **Calculate**.  
At **5:45 PM**, it will display: *You have worked for 8h 15m*

No manual math. No confusion. Just pure simplicity.


## Author

**Garima Hansa**  
[GitHub](https://github.com/HanArima/OfficeTimeTracker) • [LinkedIn](https://www.linkedin.com/in/garima-hansa-8606ba225/)


