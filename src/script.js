document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const data = { name, email };
    let dataList = JSON.parse(localStorage.getItem('dataList')) || [];
    dataList.push(data);
    localStorage.setItem('dataList', JSON.stringify(dataList));

    displayData();
    this.reset();
});

function displayData() {
    const dataList = JSON.parse(localStorage.getItem('dataList')) || [];
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    tableBody.innerHTML = '';

    dataList.forEach((data, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td><button class="btn btn-danger" onclick="deleteData(${index})">Excluir</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteData(index) {
    let dataList = JSON.parse(localStorage.getItem('dataList')) || [];
    dataList.splice(index, 1);
    localStorage.setItem('dataList', JSON.stringify(dataList));
    displayData();
}

// Display data on page load
displayData();