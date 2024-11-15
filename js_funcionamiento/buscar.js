document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    
    searchIcon.addEventListener('click', (event) => {
        event.preventDefault();

        let searchField = document.getElementById('search-field');
        
        if (!searchField) {
            searchField = document.createElement('input');
            searchField.type = 'text';
            searchField.id = 'search-field';
            searchField.classList.add('form-control', 'me-2');
            searchField.placeholder = 'Buscar...';
            searchField.style.width = '200px';

            const navbar = document.querySelector('.navbar .container');
            navbar.appendChild(searchField);

            searchField.focus();
            searchField.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    highlightSearch(searchField.value);
                }
            });
        } else {
            searchField.classList.toggle('d-none');
            searchField.focus();
        }
        
        searchField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchText = searchField.value.toLowerCase().trim();

                if (searchText) {
                    const content = document.body.textContent.toLowerCase();
                    
                    if (content.includes(searchText)) {
                        alert(`Resultado encontrado para "${searchText}".`);
                    } else {
                        alert(`No se encontraron resultados para "${searchText}".`);
                    }
                }
            }
        });
    });
});

/* document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    let searchField;

    searchIcon.addEventListener('click', (event) => {
        event.preventDefault();

        if (!searchField) {
            searchField = document.createElement('input');
            searchField.type = 'text';
            searchField.id = 'search-field';
            searchField.classList.add('form-control', 'me-2');
            searchField.placeholder = 'Buscar...';
            searchField.style.width = '150px';

            const navbar = document.querySelector('.navbar .container');
            navbar.appendChild(searchField);

            searchField.focus();

            searchField.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    highlightSearch(searchField.value);
                }
            });
        } else {
            searchField.classList.toggle('d-none');
            searchField.focus();
        }
    });

    function highlightSearch(query) {

        removeHighlights();

        if (query.trim() === '') {
            alert('Por favor ingresa un término de búsqueda.');
            return;
        }

        const bodyText = document.body.innerHTML;
        const regex = new RegExp(`(${query})`, 'gi');
        const highlightedText = bodyText.replace(regex, '<span class="highlight">$1</span>');
        
        document.body.innerHTML = highlightedText;

        const results = document.querySelectorAll('.highlight');
        if (results.length === 0) {
            alert('No se encontraron resultados.');
        }
    }

    function removeHighlights() {
        const highlightedElements = document.querySelectorAll('.highlight');
        highlightedElements.forEach((element) => {
            element.outerHTML = element.innerText;
        });
    }
}); */

