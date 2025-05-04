// import { writable } from 'svelte/store';
// import { browser } from '$app/environment';

// // Initialize theme from localStorage or default to 'light'
// const storedTheme = browser && localStorage.getItem('theme') || 'light';

// // Create a writable store with the initial value
// export const theme = writable(storedTheme);

// // Toggle theme function
// export function toggleTheme() {
//     theme.update(currentTheme => {
//         const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
//         // Save to localStorage when in browser
//         if (browser) {
//             localStorage.setItem('theme', newTheme);
            
//             // Apply theme to document
//             document.documentElement.setAttribute('data-theme', newTheme);
//         }
        
//         return newTheme;
//     });
// }

// // Initialize theme on page load
// export function initTheme() {
//     if (browser) {
//         // Set theme immediately from localStorage
//         document.documentElement.setAttribute('data-theme', storedTheme);
        
//         // Optional: Check system preference if no stored preference
//         if (!localStorage.getItem('theme')) {
//             const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//             const systemTheme = prefersDark ? 'dark' : 'light';
//             theme.set(systemTheme);
//             localStorage.setItem('theme', systemTheme);
//             document.documentElement.setAttribute('data-theme', systemTheme);
//         }
//     }
// }
