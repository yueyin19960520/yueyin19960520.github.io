// distribution.js

// ——— Element definitions ———
const elements = [
  { symbol: "H",  position: 1,   color: "#F9B3AD" },
  { symbol: "He", position: 18,  color: "#D9DEE7" },
  { symbol: "Li", position: 19,  color: "#9FDAF7" },
  { symbol: "Be", position: 20,  color: "#9FDAF7" },
  { symbol: "B",  position: 31,  color: "#F9B3AD" },
  { symbol: "C",  position: 32,  color: "#F9B3AD" },
  { symbol: "N",  position: 33,  color: "#F9B3AD" },
  { symbol: "O",  position: 34,  color: "#F9B3AD" },
  { symbol: "F",  position: 35,  color: "#F9B3AD" },
  { symbol: "Ne", position: 36,  color: "#D9DEE7" },
  { symbol: "Na", position: 37,  color: "#9FDAF7" },
  { symbol: "Mg", position: 38,  color: "#9FDAF7" },
  { symbol: "Al", position: 49,  color: "#9FDAF7" },
  { symbol: "Si", position: 50,  color: "#F9B3AD" },
  { symbol: "P",  position: 51,  color: "#F9B3AD" },
  { symbol: "S",  position: 52,  color: "#F9B3AD" },
  { symbol: "Cl", position: 53,  color: "#F9B3AD" },
  { symbol: "Ar", position: 54,  color: "#D9DEE7" },
  { symbol: "K",  position: 55,  color: "#9FDAF7" },
  { symbol: "Ca", position: 56,  color: "#9FDAF7" },
  { symbol: "Sc", position: 57,  color: "#9FDAF7" },
  { symbol: "Ti", position: 58,  color: "#9FDAF7" },
  { symbol: "V",  position: 59,  color: "#9FDAF7" },
  { symbol: "Cr", position: 60,  color: "#9FDAF7" },
  { symbol: "Mn", position: 61,  color: "#9FDAF7" },
  { symbol: "Fe", position: 62,  color: "#9FDAF7" },
  { symbol: "Co", position: 63,  color: "#9FDAF7" },
  { symbol: "Ni", position: 64,  color: "#9FDAF7" },
  { symbol: "Cu", position: 65,  color: "#9FDAF7" },
  { symbol: "Zn", position: 66,  color: "#9FDAF7" },
  { symbol: "Ga", position: 67,  color: "#9FDAF7" },
  { symbol: "Ge", position: 68,  color: "#9FDAF7" },
  { symbol: "As", position: 69,  color: "#F9B3AD" },
  { symbol: "Se", position: 70,  color: "#F9B3AD" },
  { symbol: "Br", position: 71,  color: "#F9B3AD" },
  { symbol: "Kr", position: 72,  color: "#D9DEE7" },
  { symbol: "Rb", position: 73,  color: "#9FDAF7" },
  { symbol: "Sr", position: 74,  color: "#9FDAF7" },
  { symbol: "Y",  position: 75,  color: "#9FDAF7" },
  { symbol: "Zr", position: 76,  color: "#9FDAF7" },
  { symbol: "Nb", position: 77,  color: "#9FDAF7" },
  { symbol: "Mo", position: 78,  color: "#9FDAF7" },
  { symbol: "Tc", position: 79,  color: "#9FDAF7" },
  { symbol: "Ru", position: 80,  color: "#9FDAF7" },
  { symbol: "Rh", position: 81,  color: "#9FDAF7" },
  { symbol: "Pd", position: 82,  color: "#9FDAF7" },
  { symbol: "Ag", position: 83,  color: "#9FDAF7" },
  { symbol: "Cd", position: 84,  color: "#9FDAF7" },
  { symbol: "In", position: 85,  color: "#9FDAF7" },
  { symbol: "Sn", position: 86,  color: "#9FDAF7" },
  { symbol: "Sb", position: 87,  color: "#9FDAF7" },
  { symbol: "Te", position: 88,  color: "#F9B3AD" },
  { symbol: "I",  position: 89,  color: "#F9B3AD" },
  { symbol: "Xe", position: 90,  color: "#D9DEE7" },
  { symbol: "Cs", position: 91,  color: "#9FDAF7" },
  { symbol: "Ba", position: 92,  color: "#9FDAF7" },
  { symbol: "Hf", position: 94,  color: "#9FDAF7" },
  { symbol: "Ta", position: 95,  color: "#9FDAF7" },
  { symbol: "W",  position: 96,  color: "#9FDAF7" },
  { symbol: "Re", position: 97,  color: "#9FDAF7" },
  { symbol: "Os", position: 98,  color: "#9FDAF7" },
  { symbol: "Ir", position: 99,  color: "#9FDAF7" },
  { symbol: "Pt", position: 100, color: "#9FDAF7" },
  { symbol: "Au", position: 101, color: "#9FDAF7" },
  { symbol: "Hg", position: 102, color: "#9FDAF7" },
  { symbol: "Tl", position: 103, color: "#9FDAF7" },
  { symbol: "Pb", position: 104, color: "#9FDAF7" },
  { symbol: "Bi", position: 105, color: "#9FDAF7" },
  { symbol: "Po", position: 106, color: "#9FDAF7" },
  { symbol: "At", position: 107, color: "#9FDAF7" },
  { symbol: "Rn", position: 108, color: "#D9DEE7" },
  { symbol: "Fr", position: 109, color: "#9FDAF7" },
  { symbol: "Ra", position: 110, color: "#9FDAF7" },
  { symbol: "Rf", position: 112, color: "#9FDAF7" },
  { symbol: "Db", position: 113, color: "#9FDAF7" },
  { symbol: "Sg", position: 114, color: "#9FDAF7" },
  { symbol: "Bh", position: 115, color: "#9FDAF7" },
  { symbol: "Hs", position: 116, color: "#9FDAF7" },
  { symbol: "Mt", position: 117, color: "#9FDAF7" },
  { symbol: "Ds", position: 118, color: "#9FDAF7" },
  { symbol: "Rg", position: 119, color: "#9FDAF7" },
  { symbol: "Cn", position: 120, color: "#9FDAF7" },
  { symbol: "Nh", position: 121, color: "#9FDAF7" },
  { symbol: "Fl", position: 122, color: "#9FDAF7" },
  { symbol: "Mc", position: 123, color: "#9FDAF7" },
  { symbol: "Lv", position: 124, color: "#9FDAF7" },
  { symbol: "Ts", position: 125, color: "#9FDAF7" },
  { symbol: "Og", position: 126, color: "#9FDAF7" },
  { symbol: "La", position: 147, color: "#9FDAF7" },
  { symbol: "Ce", position: 148, color: "#9FDAF7" },
  { symbol: "Pr", position: 149, color: "#9FDAF7" },
  { symbol: "Nd", position: 150, color: "#9FDAF7" },
  { symbol: "Pm", position: 151, color: "#9FDAF7" },
  { symbol: "Sm", position: 152, color: "#9FDAF7" },
  { symbol: "Eu", position: 153, color: "#9FDAF7" },
  { symbol: "Gd", position: 154, color: "#9FDAF7" },
  { symbol: "Tb", position: 155, color: "#9FDAF7" },
  { symbol: "Dy", position: 156, color: "#9FDAF7" },
  { symbol: "Ho", position: 157, color: "#9FDAF7" },
  { symbol: "Er", position: 158, color: "#9FDAF7" },
  { symbol: "Tm", position: 159, color: "#9FDAF7" },
  { symbol: "Yb", position: 160, color: "#9FDAF7" },
  { symbol: "Lu", position: 161, color: "#9FDAF7" },
  { symbol: "Ac", position: 165, color: "#9FDAF7" },
  { symbol: "Th", position: 166, color: "#9FDAF7" },
  { symbol: "Pa", position: 167, color: "#9FDAF7" },
  { symbol: "U",  position: 168, color: "#9FDAF7" },
  { symbol: "Np", position: 169, color: "#9FDAF7" },
  { symbol: "Pu", position: 170, color: "#9FDAF7" },
  { symbol: "Am", position: 171, color: "#9FDAF7" },
  { symbol: "Cm", position: 172, color: "#9FDAF7" },
  { symbol: "Bk", position: 173, color: "#9FDAF7" },
  { symbol: "Cf", position: 174, color: "#9FDAF7" },
  { symbol: "Es", position: 175, color: "#9FDAF7" },
  { symbol: "Fm", position: 176, color: "#9FDAF7" },
  { symbol: "Md", position: 177, color: "#9FDAF7" },
  { symbol: "No", position: 178, color: "#9FDAF7" },
  { symbol: "Lr", position: 179, color: "#9FDAF7" },
];

// ——— Grid layout ———
const positions = [
  [1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
  [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99,100,101,102,103,104,105,106,107,108],
  [109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126],
  [127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144],
  [145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162],
  [163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180]
];

// ——— Which two are selected ———
const selected = { ele1: null, ele2: null };

// ——— Scroll the plot into view ———
function scrollToPlot() {
  const img = document.getElementById('png-viewer-img');
  if (!img.src) return;
  const rect = img.getBoundingClientRect();
  const offset = (window.innerHeight - rect.height) / 2;
  window.scrollTo({ top: rect.top + window.scrollY - offset, behavior: 'smooth' });
}

// ——— Show the PNG when two are chosen, or “no data” message if both fail ———
function displayPlot() {
  const img  = document.getElementById("png-viewer-img");
  const info = document.getElementById("selected-elements");

  // Clear previous image & info
  img.src = "";
  info.textContent = "";

  if (selected.ele1 && selected.ele2) {
    const a = selected.ele1.symbol, b = selected.ele2.symbol;
    const file1 = `./distance_distribution/${a}_${b}.png`;
    const file2 = `./distance_distribution/${b}_${a}.png`;

    // First, try file1
    img.onload = () => {
      scrollToPlot();
      info.textContent = `You have selected ${a} and ${b}.`;
    };
    img.onerror = () => {
      // file1 missing → try file2
      img.onerror = () => {
        // file2 also missing → show “no data”
        info.textContent = "We do not have this data! Please try other combination.";
        img.src = "";
      };
      img.src = file2;
    };
    img.src = file1;

  } else {
    // 0 or 1 selected → fallback to basic info
    updateSelectionInfo();
  }
}

// ——— Clear all .selected & .hover-effect ———
function clearAllSelections() {
  elements.forEach(e => {
    if (e.domElement) e.domElement.classList.remove("selected", "hover-effect");
  });
}

// ——— Re-apply .selected to ele1/ele2 ———
function applySelections() {
  [selected.ele1, selected.ele2].forEach(el => {
    if (el && el.domElement) el.domElement.classList.add("selected");
  });
}

// ——— Keep hover-effect on whatever’s selected ———
function updateHoverEffects() {
  elements.forEach(e => {
    if (e.domElement) e.domElement.classList.remove("hover-effect");
  });
  [selected.ele1, selected.ele2].forEach(el => {
    if (el && el.domElement) el.domElement.classList.add("hover-effect");
  });
}

// ——— Show the selection sentence for 0 or 1 element ———
function updateSelectionInfo() {
  const info = document.getElementById("selected-elements");
  if (selected.ele1 && !selected.ele2) {
    info.textContent = `You have selected ${selected.ele1.symbol}.`;
  } else {
    info.textContent = "";  // blank for none
  }
}

// ——— Decide which two are ele1/ele2 ———
function toggleElement(element) {
  if (selected.ele1 && selected.ele2) {
    selected.ele1 = element;
    delete selected.ele2;
  } else if (!selected.ele1) {
    selected.ele1 = element;
  } else if (!selected.ele2) {
    selected.ele2 = element;
  }
}

// ——— Build the table & hook clicks ———
function createTable() {
  const table = document.getElementById("periodic-table");
  for (const row of positions) {
    for (const pos of row) {
      const element = elements.find(e => e.position === pos);
      if (!element) {
        const empty = document.createElement("div");
        empty.style.width  = empty.style.height = "40px";
        table.appendChild(empty);
        continue;
      }
      const cell = document.createElement("div");
      cell.classList.add("element");
      cell.style.backgroundColor = element.color;
      cell.innerHTML = `<span class="element-symbol">${element.symbol}</span>`;
      element.domElement = cell;

      cell.addEventListener("click", () => {
        toggleElement(element);
        clearAllSelections();
        applySelections();
        updateHoverEffects();
        displayPlot();
      });

      // optional triangle decorator
      if (["Pm","Ac","Th","Pa","U","Np","Pu","Xe","Kr"].includes(element.symbol)) {
        const tri = document.createElement("div");
        tri.classList.add("triangle");
        cell.appendChild(tri);
      }

      table.appendChild(cell);
    }
  }
}

// ——— Initialize ———
createTable();