let persons = [{ name: "Sharon", age: 21 }, { name: "Sam", age: 17 }];
let editIndex = -1;

function handleSubmit() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let temp = { name: name, age: age };

    if (editIndex === -1) {
        persons.push(temp);
    } else {
        persons[editIndex] = temp;
        editIndex = -1;
    }
    display();
    clear();
}

function display() {
    let table = document.getElementById('table');
    table.innerHTML = persons.map(function(person, i) {
        return `
            <tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editPerson(${i})">Edit</button>
                    <button class="btn btn-danger btn-sm ml-2" onclick="del(${i})">Delete</button>
                </td>
            </tr>
        `;
    }).join('');
}

function clear() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}

function del(id) {
    // Using regular function syntax to filter out the element
    let temp = persons.filter(function(person, i) {
        return i != id;
    });

    persons = temp;
    display();
}

function editPerson(id) {
    document.getElementById('name').value = persons[id].name;
    document.getElementById('age').value = persons[id].age;
    editIndex = id;
}
