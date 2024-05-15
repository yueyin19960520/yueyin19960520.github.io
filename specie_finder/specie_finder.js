let currentJsonFile = 'Without_Alloys_specie_parameters.json';

document.addEventListener('DOMContentLoaded', function() {
    // Fetch data when the page loads
    fetchData(currentJsonFile);

    // Add event listener for the Enter key
    document.getElementById('elementInput').addEventListener('keyup', function(event) {
        // Check if the Enter key was pressed (key code 13)
        if (event.keyCode === 13) {
            // Call the filterPairs function to perform the search
            filterPairs();
        }
    });
});

function switchJson() {
    console.log('Switch button clicked'); // Add this line
    if (currentJsonFile === 'Without_Alloys_specie_parameters.json') {
        currentJsonFile = 'specie_parameters.json';
        document.getElementById('switchButton').textContent = 'Exclude Alloys';
    } else {
        currentJsonFile = 'Without_Alloys_specie_parameters.json';
        document.getElementById('switchButton').textContent = 'Include Alloys';
    }
    fetchData(currentJsonFile);
}


function fetchData(jsonFile) {
    console.log('Fetching data from:', jsonFile); // Add this line
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            keyValuePairs = data;  // This will load your data into the keyValuePairs variable
            filterPairs(); // Reapply filter with the new data
        })
        .catch(error => console.error('Error loading the data:', error));
}



function filterPairs() {
    const et = document.getElementById('elementInput').value.trim();

    let tbody = document.querySelector('#results tbody');
    tbody.innerHTML = '';  // Clear previous results

    // Check if the keyValuePairs object has the key matching the input value et
    if (et in keyValuePairs) {
        // If the key exists, iterate over the data corresponding to that key
        keyValuePairs[et].forEach(pair => {
            // Create a new row for each data pair
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${pair.CN}</td>
                <td>${pair.OS}</td>
                <td>${pair.R.toFixed(2)}</td>
                <td>${pair.S.toFixed(2)}</td>
                <td>${pair.N}</td>
            `;
            tbody.appendChild(row);
        });
    } else {
        // If the key doesn't exist, display a message indicating no data found
        let row = document.createElement('tr');
        row.innerHTML = `<td colspan="5">No data found for ${et}</td>`;
        tbody.appendChild(row);
    }
}




function sortTable(column) {
    let table = document.getElementById("results");
    let tbody = table.getElementsByTagName("tbody")[0];
    let headers = table.getElementsByTagName("th");
    let columnIndex = {
        'CN': 0,
        'OS': 1,
        'Mean': 2,
        'Sigma': 3,
        'Number': 4
    }[column];

    let sortedRows = Array.from(tbody.getElementsByTagName("tr")).sort(function(a, b) {
        let valA = parseFloat(a.cells[columnIndex].textContent) || a.cells[columnIndex].textContent;
        let valB = parseFloat(b.cells[columnIndex].textContent) || b.cells[columnIndex].textContent;
        return valA < valB ? -1 : (valA > valB ? 1 : 0);
    });

    let currentDirection = tbody.getAttribute("data-sort-direction") === "asc" ? "desc" : "asc";
    tbody.setAttribute("data-sort-direction", currentDirection);

    if (currentDirection === "desc") {
        sortedRows.reverse();
    }

    // Update sort indicators for all headers
    Array.from(headers).forEach(header => {
        let span = header.querySelector(".sort-indicator");
        if (span) span.textContent = columnIndex == Array.from(headers).indexOf(header) ? (currentDirection === "asc" ? '↑' : '↓') : '↕';
    });

    // Empty the tbody before re-adding sorted rows
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    for (let i = 0; i < sortedRows.length; i++) {
        tbody.appendChild(sortedRows[i]);
    }
}
