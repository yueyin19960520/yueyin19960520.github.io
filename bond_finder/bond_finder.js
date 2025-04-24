let currentJsonFile = 'bond_parameters.json';

document.addEventListener('DOMContentLoaded', () => {
  fetchData(currentJsonFile);

  // wire up Enter key
  ['et1','cn1','os1','et2','cn2','os2']
    .forEach(id => {
      const el = document.getElementById(id);
      el.addEventListener('keyup', e => { if (e.key==='Enter') filterPairs(); });
      el.addEventListener('change', e => saveToHistory(id, e.target.value.trim()));
      loadHistory(id);
    });
});

function switchJson() {
  currentJsonFile = currentJsonFile === 'bond_parameters.json'
    ? 'without_Alloys_bond_parameters.json'
    : 'bond_parameters.json';
  document.getElementById('switchButton').textContent =
    currentJsonFile === 'bond_parameters.json' ? 'Exclude Alloys' : 'Include Alloys';
  fetchData(currentJsonFile);
}

function fetchData(jsonFile) {
  fetch(jsonFile)
    .then(r => r.json())
    .then(data => { keyValuePairs = data; filterPairs(); })
    .catch(console.error);
}

function filterPairs() {
  const et1 = et('et1'), et2 = et('et2'),
        cn1 = et('cn1'), cn2 = et('cn2'),
        os1 = et('os1'), os2 = et('os2');
  const tbody = qs('#results tbody');
  tbody.innerHTML = '';

  for (const key in keyValuePairs) {
    const m = key.match(/\(\(([^,]+),([^)]+)\),\(([^,]+),([^)]+)\),\(([^,]+),([^)]+)\)\)/);
    if (!m) continue;
    const normal = et1===m[1].trim() && et2===m[2].trim()
      && (!cn1 || (cn1===m[3].trim()&&cn2===m[4].trim()))
      && (!os1 || (os1===m[5].trim()&&os2===m[6].trim()));
    const flip = et2===m[1].trim() && et1===m[2].trim()
      && (!cn1 || (cn2===m[3].trim()&&cn1===m[4].trim()))
      && (!os1 || (os2===m[5].trim()&&os1===m[6].trim()));
    if (normal||flip) {
      const v = keyValuePairs[key];
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>(${m[1]}, ${m[2]})</td>
        <td>(${m[3]}, ${m[4]})</td>
        <td>(${m[5]}, ${m[6]})</td>
        <td>${v.M.toFixed(2)}</td>
        <td>${v.S.toFixed(2)}</td>
        <td>${v.N}</td>`;
      tbody.appendChild(row);
    }
  }
}

function sortTable(col) {
  // … existing sortTable unchanged …
}

// helper to get element value
function et(id){return document.getElementById(id).value.trim();}
function qs(sel){return document.querySelector(sel);}

// Clear button handler
function clearInputs() {
  ['et1','cn1','os1','et2','cn2','os2']
    .forEach(id => document.getElementById(id).value = '');
}

// ----- History memory via localStorage + <datalist> -----
function saveToHistory(id, value) {
  if (!value) return;
  const key = 'history_'+id;
  let hist = JSON.parse(localStorage.getItem(key)||'[]');
  if (!hist.includes(value)) {
    hist.unshift(value);
    if (hist.length>10) hist.pop();
    localStorage.setItem(key, JSON.stringify(hist));
    updateDatalist(id, hist);
  }
}

function loadHistory(id) {
  const key='history_'+id;
  const hist = JSON.parse(localStorage.getItem(key)||'[]');
  if (hist.length) updateDatalist(id, hist);
}

function updateDatalist(id, hist) {
  const dl = document.getElementById(id+'-history');
  dl.innerHTML = '';
  hist.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v;
    dl.appendChild(opt);
  });
}


function sortTable(column) {
  const table = document.getElementById("results");
  const tbody = table.tBodies[0];
  const headers = table.tHead.rows[0].cells;
  // map column name → 0-based cell index
  const idxMap = { 'Mean': 3, 'Sigma': 4, 'Number': 5 };
  const colIdx = idxMap[column];
  if (colIdx === undefined) return;

  // determine new sort direction
  const currentDir = tbody.getAttribute("data-sort-direction") === "asc" ? "desc" : "asc";
  tbody.setAttribute("data-sort-direction", currentDir);

  // grab & sort rows
  const rows = Array.from(tbody.rows);
  rows.sort((a, b) => {
    const aText = a.cells[colIdx].textContent;
    const bText = b.cells[colIdx].textContent;
    const aVal = parseFloat(aText) || aText;
    const bVal = parseFloat(bText) || bText;
    if (aVal < bVal) return currentDir === "asc" ? -1 : 1;
    if (aVal > bVal) return currentDir === "asc" ?  1 : -1;
    return 0;
  });

  // re-attach in sorted order
  tbody.innerHTML = "";
  rows.forEach(r => tbody.appendChild(r));

  // update the little arrows
  Array.from(headers).forEach((th, i) => {
    const span = th.querySelector(".sort-indicator");
    if (!span) return;
    if (i === colIdx) {
      span.textContent = currentDir === "asc" ? "↑" : "↓";
    } else {
      span.textContent = "↕";
    }
  });
}
