const SmoothScrollTo = (destination) => {
    const next = document.getElementById(destination);
    window.scrollTo({
        top: next.offsetTop,
        behavior: 'smooth'
    })
}

export default SmoothScrollTo