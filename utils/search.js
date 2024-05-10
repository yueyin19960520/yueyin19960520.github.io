let exampleDict;

// Disable the submit button initially
const submitButton = document.querySelector('#pair-keys button[type="submit"]');
submitButton.disabled = true;
submitButton.textContent = "Dataloading...";

fetch('bond_parameters.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        exampleDict = data;
        // Enable the submit button once the dictionary is loaded
        submitButton.disabled = false;
        submitButton.textContent = "Find Value";
    })
    .catch(error => {
        console.error('Error fetching dictionary:', error);
        submitButton.textContent = "Failed to Load Data";
    });

document.getElementById('pair-keys').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!exampleDict) {
        alert('Dictionary not loaded yet. Please try again later.');
        return;
    }

    const EP1 = document.getElementById('EP1').value;
    const CN1 = document.getElementById('CN1').value;
    const OS1 = document.getElementById('OS1').value;
    const EP2 = document.getElementById('EP2').value;
    const CN2 = document.getElementById('CN2').value;
    const OS2 = document.getElementById('OS2').value;

    const results = [];

    for (const key in exampleDict) {
        const regexPattern = `\\(\\(${EP1},${EP2}\\),` +
            (CN1 && CN2 ? `\\(${CN1},${CN2}\\),` : `\\([^,]+,[^,]+\\),`) +
            (OS1 && OS2 ? `\\(${OS1},${OS2}\\)\\)` : `\\([^,]+,[^,]+\\)\\)`);

        const regex = new RegExp(regexPattern);

        if (regex.test(key)) {
            const [bondNumber, bondLength, bondExtension] = exampleDict[key].split(',');
            results.push({
                key: key,
                bondNumber: parseInt(bondNumber),
                bondLength: parseFloat(bondLength),
                bondExtension: parseFloat(bondExtension)
            });
        }
    }

    // Sort results based on a specified column, passed here as a string
    function sortResults(results, column) {
        return results.sort((a, b) => b[column] - a[column]);
    }

    // Example of sorting by 'bondNumber'. You can modify this to sort by any column
    const sortedResults = sortResults(results, 'bondNumber'); // Change 'bondNumber' to 'bondLength' or 'bondExtension' as needed

    if (sortedResults.length > 0) {
        let resultText = '<table>';
        resultText += '<tr><th>Key</th><th>Bond Number</th><th>Bond Length</th><th>Bond Extension</th></tr>';

        for (const result of sortedResults) {
            resultText += `<tr>`;
            resultText += `<td>${result.key}</td>`;
            resultText += `<td>${result.bondNumber}</td>`;
            resultText += `<td>${result.bondLength.toFixed(2)}</td>`;  // Using toFixed(2) for formatting
            resultText += `<td>${result.bondExtension.toFixed(2)}</td>`;
            resultText += `</tr>`;
        }
        resultText += '</table>';

        document.getElementById('result').innerHTML = resultText;
    } else {
        document.getElementById('result').innerHTML = 'No results found.';
    }
});
