function filterPairs() {
    const et1 = document.getElementById('et1').value.trim();
    const et2 = document.getElementById('et2').value.trim();
    const cn1 = document.getElementById('cn1').value.trim();
    const cn2 = document.getElementById('cn2').value.trim();
    const os1 = document.getElementById('os1').value.trim();
    const os2 = document.getElementById('os2').value.trim();

    let tbody = document.querySelector('#results tbody');
    tbody.innerHTML = '';  // Clear previous results

    // Update regex to match strings: Adjust the regex to capture any non-parenthesis characters
    for (const key in keyValuePairs) {
        let keyTuples = key.match(/\(\(([^,]+),([^)]+)\),\(([^,]+),([^)]+)\),\(([^,]+),([^)]+)\)\)/);
        if (!keyTuples) continue;

        // Adjust indices if needed since capture groups start at index 1
        let normalMatch = (et1 === keyTuples[1].trim() && et2 === keyTuples[2].trim()) && 
                          (!cn1 || (cn1 === keyTuples[3].trim() && cn2 === keyTuples[4].trim())) && 
                          (!os1 || (os1 === keyTuples[5].trim() && os2 === keyTuples[6].trim()));
        let flippedMatch = (et2 === keyTuples[1].trim() && et1 === keyTuples[2].trim()) && 
                           (!cn1 || (cn2 === keyTuples[3].trim() && cn1 === keyTuples[4].trim())) && 
                           (!os1 || (os2 === keyTuples[5].trim() && os1 === keyTuples[6].trim()));

        if (normalMatch || flippedMatch) {
            let value = keyValuePairs[key];
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>(${keyTuples[1]}, ${keyTuples[2]})</td>
                <td>(${keyTuples[3]}, ${keyTuples[4]})</td>
                <td>(${keyTuples[5]}, ${keyTuples[6]})</td>
                <td>${value.M.toFixed(2)}</td>
                <td>${value.S.toFixed(2)}</td>
                <td>${value.N}</td>
            `;
            tbody.appendChild(row);
        }
    }
}




function sortTable(column) {
    let table = document.getElementById("results");
    let tbody = table.getElementsByTagName("tbody")[0];
    let headers = table.getElementsByTagName("th");
    let columnIndex = {
        'Mean': 3,
        'Sigma': 4,
        'Number': 5
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

    // Update sort indicators
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
