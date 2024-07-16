const themeBtn = document.getElementById('theme-toggle')
const darkIcon = document.getElementById('theme-toggle-dark-icon')
const lightIcon = document.getElementById('theme-toggle-light-icon')

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    //show light icon
    lightIcon.classList.remove('hidden')
} else {
    //show dark icon
    darkIcon.classList.remove('hidden')
}

themeBtn.addEventListener('click', toggleMode)

function toggleMode() {
    darkIcon.classList.toggle('hidden')
    lightIcon.classList.toggle('hidden')

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            //if light, make dark
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        } else {
            //if dark, make light
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        }
    } else {
        //if not in local storage
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
    }
}
