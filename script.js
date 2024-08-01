function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data.split('<section id="content">')[1].split('</section>')[0];
            document.title = data.split('<title>')[1].split('</title>')[0];
        })
        .catch(error => console.error('Error loading page:', error));
}
