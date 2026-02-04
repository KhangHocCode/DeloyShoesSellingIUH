document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header');
    if (headerContainer && typeof createHeader === 'function') {
        headerContainer.innerHTML = createHeader();
    }

    const footerContainer = document.getElementById('footer');
    if (footerContainer && typeof createFooter === 'function') {
        footerContainer.innerHTML = createFooter();
    }
});