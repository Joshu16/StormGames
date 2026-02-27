document.addEventListener('DOMContentLoaded', () => {
    fetch('../Catalog/juegos.json')
        .then(response => response.json())
        .then(data => {

            const recomendadosContainer = document.getElementById('recomendados-container');
            const stormOriginalsContainer = document.getElementById('storm-originals-container');

            data.forEach(category => {
                let container;

                if (category.id === 'recomendados') {
                    container = recomendadosContainer;
                } else if (category.id === 'storm-originals') {
                    container = stormOriginalsContainer;
                } else if (category.id === 'action') {
                    container = document.getElementById('action-container');
                } else if (category.id === 'adventure') {
                    container = document.getElementById('adventure-container');
                } else if (category.id === 'indie') {
                    container = document.getElementById('indie-container');
                }

                if (container) {
                    category.items.forEach(item => {
                        const itemElement = document.createElement('div');
                        itemElement.classList.add('item');

                        itemElement.innerHTML = `
                            <img class="item-img" src="${item['item-img']}" alt="${item['item-title']}">
                            <h2 class="item-title">${item['item-title']}</h2>
                            <div class="item-desc">
                                <div class="item-likes">
                                    <img class="icon" src="../assets/like.svg" alt="">
                                    ${item['item-likes']}
                                </div>
                                <div class="item-price">$${item['item-price']}</div>
                            </div>
                            <button>Add to Cart</button>
                        `;

                        container.appendChild(itemElement);
                    });
                }
            });

        })
        .catch(error => console.error('Error loading game data:', error));
});