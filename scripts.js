const menuData = {
    "Appetizers": [
        { name: "Bruschetta", price: 8.99 },
        { name: "Mozzarella Sticks", price: 7.99 },
    ],
    "Main Courses": [
        { name: "Grilled Salmon", price: 18.99 },
        { name: "Chicken Parmesan", price: 16.99 },
    ],
    "Desserts": [
        { name: "Tiramisu", price: 6.99 },
        { name: "Cheesecake", price: 5.99 },
    ]
};

function createCategories() {
    const categoriesDiv = document.getElementById('categories');
    Object.keys(menuData).forEach((category, index) => {
        const button = document.createElement('button');
        button.textContent = category;
        button.classList.add('category-btn');
        if (index === 0) button.classList.add('active');
        button.onclick = () => showCategory(category);
        categoriesDiv.appendChild(button);
    });
}

function showCategory(category) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const menuItemsDiv = document.getElementById('menu-items');
    menuItemsDiv.innerHTML = '';
    menuData[category].forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.innerHTML = `<h3>${item.name}</h3><p>$${item.price.toFixed(2)}</p>`;
        menuItemsDiv.appendChild(itemDiv);
    });
}

createCategories();
showCategory(Object.keys(menuData)[0]);
