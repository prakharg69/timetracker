const today = new Date()

const dayNumber = today.getDate()               // 1-31
const dayName = today.toLocaleString('default', { weekday: 'short' }) // e.g., "Friday"
const monthName = today.toLocaleString('default', { month: 'short' }) // e.g., "June"
const year = today.getFullYear()               // e.g., 2025

console.log(`Today is ${dayName}, ${dayNumber} ${monthName} ${year}`)


// // 'default', { weekday: 'long' } what is this
// The 'default', { weekday: 'long' } part comes from the .toLocaleString() method, and it’s used to format date components in a human-readable way, based on language/locale and options.


// 'default' (1st argument)
// It represents the locale, which means language and regional formatting.

// 'default' lets the browser decide based on the user's language settings.

// You can also use:

// 'en-US' → U.S. English

// 'hi-IN' → Hindi (India)

// 'fr-FR' → French (France)

// { weekday: 'long' } (2nd argument)
// This is an options object that controls what part of the date to show and how.

// weekday: 'long' gives you the full weekday name:

// 'long' → "Monday"

// 'short' → "Mon"

// 'narrow' → "M"


const specificTime = new Date()
specificTime.setHours(15)      // 3 PM (24-hour format)
specificTime.setMinutes(30)    // 30 minutes
specificTime.setSeconds(0)     // optional
specificTime.setMilliseconds(0) // optional

console.log(specificTime.toLocaleTimeString()) // e.g. "3:30:00 PM"

// Great! Let's break down what ?. means — it's called the Optional Chaining Operator in JavaScript.
// ?. is used to safely access deeply nested object properties or array items without causing errors if something is undefined or null.

