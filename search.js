let exampleDict;

// Disable the submit button initially
const submitButton = document.querySelector('#pair-keys button[type="submit"]');
submitButton.disabled = true;
submitButton.textContent = "Dataloading...";

fetch('bond_parameters.json')
    .then(response => response.json())
    .then(data => {
        exampleDict = data;
        // Enable the submit button once the dictionary is loaded
        submitButton.disabled = false;
        submitButton.textContent = "Find Value";
    })
    .catch(error => {
        console.error('Error fetching dictionary:', error);
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
            results.push({
                key: key,
                value: exampleDict[key],
            });
        }
    }

    if (results.length > 0) {
        let resultText = '';

        for (const result of results) {
            const [bondNumber, bondLength, bondExtension] = result.value.split(',');

            resultText += `${result.key}:  `;
            resultText += `Bond Number: ${bondNumber}, `;
            resultText += `Bond Length: ${bondLength}, `;
            resultText += `Bond Extension: ${bondExtension}<br>`;
        }

        document.getElementById('result').innerHTML = resultText;
    } else {
        document.getElementById('result').innerHTML = 'No results found.';
    }
});







/*
let exampleDict;

// Disable the submit button initially
const submitButton = document.querySelector('#pair-keys button[type="submit"]');
submitButton.disabled = true;

fetch('bond_parameters.json')
    .then(response => response.json())
    .then(data => {
        exampleDict = data;
        // Enable the submit button once the dictionary is loaded
        submitButton.disabled = false;
    })
    .catch(error => {
        console.error('Error fetching dictionary:', error);
    });

document.getElementById('pair-keys').addEventListener('submit', function(event) {
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

    const key = `((${EP1},${EP2}),(${CN1},${CN2}),(${OS1},${OS2}))`;
    const result = exampleDict[key] || 'Value not found';

    document.getElementById('result').innerHTML = `Result: ${result}`;
});
*/


/*
import pickle

file_get= open("D:/share/TOSS/global_normalized_normed_dict_loop_2.pkl","rb")
bond_para= pickle.load(file_get)
file_get.close()

file_get= open("D:/share/TOSS/global_sigma_dict_loop_2.pkl","rb")
sigma = pickle.load(file_get)
file_get.close()

file_get= open("D:/share/TOSS/global_mean_dict_loop_2.pkl","rb")
mean= pickle.load(file_get)
file_get.close()



jsons_dict = {}
for k,v in bond_para.items():
    for kk,vv in v.items():
        bond_number = vv[1]
        real_key = (k,kk[0],kk[1])
        if real_key in sigma:
            temp_s = sigma[real_key]
        if real_key in mean:
            temp_m = mean[real_key]
        json_key = "((%s,%s),(%s,%s),(%s,%s))"%(k[0],k[1],kk[0][0],kk[0][1],kk[1][0],kk[1][0])
        json_key = json_key.replace("'","")
        jsons_dict.update({json_key:"Bond Number:%.0f, Bond Length:%.3f, Bond Extension:%.3f"%(bond_number,temp_m,temp_s)})
        
        
        
import json
file_get= open("D:/share/GPT4/test_periodic_table_3/bond_parameters.json","w")
json.dump(jsons_dict, file_get, ensure_ascii=True)
file_get.close()
*/