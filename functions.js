export function findByID(id, items) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }      
    }
}

export function generateChar(formData) {
    return { 
        completed: {},
        hp: 45,
        gold: 0,
        name: formData.get('name'),
        class: formData.get('class'),
        race: formData.get('race'),
    };
}

export function setChar(charObject) {
    const charString = JSON.stringify(charObject);
    localStorage.setItem('CHAR', charString);
}
