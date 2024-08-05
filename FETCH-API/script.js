const superheroIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let currentIndex = 0;
        const apiKey = '3cdd6c19b73af96cb24e17fe9a70b1a4';

        function fetchSuperhero(id) {
            let url = `https://superheroapi.com/api.php/${apiKey}/${id}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    document.getElementById('card').innerHTML = `
                        <img class="card row-md-4" src="${data.image.url}" alt="${data.name}" height="200px" width="200px">
                        <h5 class="card-title d-flex justify-content-between text-light">${data.name}</h5>
                    `;
                })
                .catch(error => console.error('Error fetching superhero:', error));
        }

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % superheroIds.length;
            fetchSuperhero(superheroIds[currentIndex]);
        });

        document.getElementById('previousBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + superheroIds.length) % superheroIds.length;
            fetchSuperhero(superheroIds[currentIndex]);
        });

        // Initial fetch
        fetchSuperhero(superheroIds[currentIndex]);