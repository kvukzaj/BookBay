function search() {
    var searchInput = document.getElementById('searchInput').value;

    fetch(`https://your-firebase-project-id.firebaseio.com/items.json?orderBy="name"&startAt="${searchInput}"&endAt="${searchInput}\uf8ff"`)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        });
}

function displayResults(results) {
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (!results) {
        // Handle no results
        return;
    }

    Object.keys(results).forEach(key => {
        var li = document.createElement('li');
        li.textContent = results[key].name;  // Assuming 'name' is a field in your database
        searchResults.appendChild(li);
    });
}
