// Initial inventory
let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

console.log("Initial Inventory:", inventory);

// Function to add an item
function addItem(id, name, quantity, price) {
    inventory.push({ id, name, quantity, price });
    console.log("Adding item:", inventory);
}

// Function to update an item
function updateItem(id, newQuantity) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        item.quantity = newQuantity;
    }
    console.log("Updating item:", inventory);
}

// Function to delete an item
function deleteItem(id) {
    inventory = inventory.filter(item => item.id !== id);
    console.log("Deleting item:", inventory);
}

// Adding an item
addItem(3, 'Orange', 15, 0.7);

// Updating an item
updateItem(2, 30);

// Deleting an item
deleteItem(2);
