const elements = [
{symbol: "H" , position:1   ,radius: "37.70" ,sigma:"0.40" ,color:"#FFFFE0"}, 
{symbol: "He", position:18  ,radius: "No Data" ,sigma:"" ,color:"#D3D3D3"}, 
{symbol: "Li", position:19  ,radius: "139.80" ,sigma:"12.85" ,color:"#ADD8E6"}, 
{symbol: "Be", position:20  ,radius: "125.95" ,sigma:"7.35" ,color:"#ADD8E6"}, 
{symbol: "B" , position:31  ,radius: "89.30" ,sigma:"3.55" ,color:"#FFFFE0"}, 
{symbol: "C" , position:32  ,radius: "76.45" ,sigma:"1.15" ,color:"#FFFFE0"}, 
{symbol: "N" , position:33  ,radius: "69.30" ,sigma:"3.50" ,color:"#FFFFE0"}, 
{symbol: "O" , position:34  ,radius: "69.50" ,sigma:"6.25" ,color:"#FFFFE0"}, 
{symbol: "F" , position:35  ,radius: "124.90" ,sigma:"7.85" ,color:"#FFFFE0"}, 
{symbol: "Ne", position:36  ,radius: "No Data" ,sigma:"" ,color:"#D3D3D3"}, 
{symbol: "Na", position:37  ,radius: "167.70" ,sigma:"8.50" ,color:"#ADD8E6"}, 
{symbol: "Mg", position:38  ,radius: "157.05" ,sigma:"1.60" ,color:"#ADD8E6"}, 
{symbol: "Al", position:49  ,radius: "139.20" ,sigma:"7.35" ,color:"#ADD8E6"}, 
{symbol: "Si", position:50  ,radius: "122.90" ,sigma:"5.40" ,color:"#FFFFE0"}, 
{symbol: "P" , position:51  ,radius: "112.60" ,sigma:"3.45" ,color:"#FFFFE0"}, 
{symbol: "S" , position:52  ,radius: "135.40" ,sigma:"14.35" ,color:"#FFFFE0"}, 
{symbol: "Cl", position:53  ,radius: "156.70" ,sigma:"23.55" ,color:"#FFFFE0"}, 
{symbol: "Ar", position:54  ,radius: "No Data" ,sigma:"" ,color:"#D3D3D3"}, 
{symbol: "K" , position:55  ,radius: "194.85" ,sigma:"22.20" ,color:"#ADD8E6"}, 
{symbol: "Ca", position:56  ,radius: "179.65" ,sigma:"12.85" ,color:"#ADD8E6"}, 
{symbol: "Sc", position:57  ,radius: "159.35" ,sigma:"3.10" ,color:"#ADD8E6"}, 
{symbol: "Ti", position:58  ,radius: "142.65" ,sigma:"5.00" ,color:"#ADD8E6"}, 
{symbol: "V" , position:59  ,radius: "135.30" ,sigma:"9.70" ,color:"#ADD8E6"}, 
{symbol: "Cr", position:60  ,radius: "137.80" ,sigma:"5.95" ,color:"#ADD8E6"}, 
{symbol: "Mn", position:61  ,radius: "128.50" ,sigma:"10.00" ,color:"#ADD8E6"}, 
{symbol: "Fe", position:62  ,radius: "128.35" ,sigma:"6.55" ,color:"#ADD8E6"}, 
{symbol: "Co", position:63  ,radius: "134.15" ,sigma:"6.20" ,color:"#ADD8E6"}, 
{symbol: "Ni", position:64  ,radius: "126.00" ,sigma:"7.85" ,color:"#ADD8E6"}, 
{symbol: "Cu", position:65  ,radius: "129.20" ,sigma:"5.95" ,color:"#ADD8E6"}, 
{symbol: "Zn", position:66  ,radius: "143.20" ,sigma:"6.85" ,color:"#ADD8E6"}, 
{symbol: "Ga", position:67  ,radius: "138.45" ,sigma:"1.25" ,color:"#ADD8E6"}, 
{symbol: "Ge", position:68  ,radius: "143.55" ,sigma:"8.35" ,color:"#ADD8E6"}, 
{symbol: "As", position:69  ,radius: "140.85" ,sigma:"9.80" ,color:"#FFFFE0"}, 
{symbol: "Se", position:70  ,radius: "142.70" ,sigma:"14.20" ,color:"#FFFFE0"}, 
{symbol: "Br", position:71  ,radius: "168.10" ,sigma:"21.80" ,color:"#FFFFE0"}, 
{symbol: "Kr", position:72  ,radius: "No Data" ,sigma:"" ,color:"#D3D3D3"}, 
{symbol: "Rb", position:73  ,radius: "205.75" ,sigma:"18.75" ,color:"#ADD8E6"}, 
{symbol: "Sr", position:74  ,radius: "188.95" ,sigma:"18.25" ,color:"#ADD8E6"}, 
{symbol: "Y" , position:75  ,radius: "173.20" ,sigma:"7.00" ,color:"#ADD8E6"}, 
{symbol: "Zr", position:76  ,radius: "158.95" ,sigma:"3.60" ,color:"#ADD8E6"}, 
{symbol: "Nb", position:77  ,radius: "158.95" ,sigma:"3.35" ,color:"#ADD8E6"}, 
{symbol: "Mo", position:78  ,radius: "138.55" ,sigma:"8.05" ,color:"#ADD8E6"}, 
{symbol: "Tc", position:79  ,radius: "134.45" ,sigma:"6.50" ,color:"#D8BFD8"}, 
{symbol: "Ru", position:80  ,radius: "141.65" ,sigma:"7.95" ,color:"#ADD8E6"}, 
{symbol: "Rh", position:81  ,radius: "137.20" ,sigma:"6.65" ,color:"#ADD8E6"}, 
{symbol: "Pd", position:82  ,radius: "140.70" ,sigma:"6.10" ,color:"#ADD8E6"}, 
{symbol: "Ag", position:83  ,radius: "144.90" ,sigma:"4.75" ,color:"#ADD8E6"}, 
{symbol: "Cd", position:84  ,radius: "155.85" ,sigma:"0.40" ,color:"#ADD8E6"}, 
{symbol: "In", position:85  ,radius: "164.20" ,sigma:"1.60" ,color:"#ADD8E6"}, 
{symbol: "Sn", position:86  ,radius: "166.30" ,sigma:"4.10" ,color:"#ADD8E6"}, 
{symbol: "Sb", position:87  ,radius: "158.10" ,sigma:"9.25" ,color:"#ADD8E6"}, 
{symbol: "Te", position:88  ,radius: "165.45" ,sigma:"11.35" ,color:"#ADD8E6"}, 
{symbol: "I" , position:89  ,radius: "202.65" ,sigma:"8.00" ,color:"#FFFFE0"}, 
{symbol: "Xe", position:90  ,radius: "240.25" ,sigma:"0.70" ,color:"#D3D3D3"}, 
{symbol: "Cs", position:91  ,radius: "264.90" ,sigma:"15.05" ,color:"#ADD8E6"}, 
{symbol: "Ba", position:92  ,radius: "200.65" ,sigma:"15.30" ,color:"#ADD8E6"}, 
{symbol: "Hf", position:94 ,radius: "154.90" ,sigma:"5.20" ,color:"#ADD8E6"}, 
{symbol: "Ta", position:95 ,radius: "156.05" ,sigma:"5.25" ,color:"#ADD8E6"}, 
{symbol: "W ", position:96 ,radius: "151.90" ,sigma:"4.45" ,color:"#ADD8E6"}, 
{symbol: "Re", position:97 ,radius: "148.85" ,sigma:"3.90" ,color:"#ADD8E6"}, 
{symbol: "Os", position:98 ,radius: "136.45" ,sigma:"1.65" ,color:"#ADD8E6"}, 
{symbol: "Ir", position:99 ,radius: "135.50" ,sigma:"6.80" ,color:"#ADD8E6"}, 
{symbol: "Pt", position:100 ,radius: "138.70" ,sigma:"4.80" ,color:"#ADD8E6"}, 
{symbol: "Au", position:101 ,radius: "146.35" ,sigma:"2.95" ,color:"#ADD8E6"}, 
{symbol: "Hg", position:102 ,radius: "158.55" ,sigma:"7.55" ,color:"#ADD8E6"}, 
{symbol: "Tl", position:103 ,radius: "166.00" ,sigma:"2.75" ,color:"#ADD8E6"}, 
{symbol: "Pb", position:104 ,radius: "171.10" ,sigma:"2.15" ,color:"#ADD8E6"}, 
{symbol: "Bi", position:105 ,radius: "173.05" ,sigma:"6.35" ,color:"#ADD8E6"}, 
{symbol: "Po", position:106 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "At", position:107 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Rn", position:108 ,radius: "No Data" ,sigma:"" ,color:"#D3D3D3"}, 
{symbol: "Fr", position:109 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Ra", position:110 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Rf", position:112 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Db", position:113 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Sg", position:114 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Bh", position:115 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Hs", position:116 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Mt", position:117 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Ds", position:118 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Rg", position:119 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Cn", position:120 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Nh", position:121 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Fl", position:122 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Mc", position:123 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Lv", position:124 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Ts", position:125 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "Og", position:126 ,radius: "No Data" ,sigma:"" ,color:"#ADD8E6"}, 
{symbol: "La", position:147 ,radius: "177.85" ,sigma:"9.60" ,color:"#ccffcc"}, 
{symbol: "Ce", position:148 ,radius: "174.55" ,sigma:"10.25",color:"#ccffcc"}, 
{symbol: "Pr", position:149 ,radius: "183.35" ,sigma:"1.50" ,color:"#ccffcc"}, 
{symbol: "Nd", position:150 ,radius: "183.55" ,sigma:"2.45" ,color:"#ccffcc"}, 
{symbol: "Pm", position:151 ,radius: "181.85" ,sigma:"1.15" ,color:"#ccffcc"}, 
{symbol: "Sm", position:152 ,radius: "180.40" ,sigma:"1.85" ,color:"#ccffcc"}, 
{symbol: "Eu", position:153 ,radius: "184.15" ,sigma:"11.85",color:"#ccffcc"}, 
{symbol: "Gd", position:154 ,radius: "178.65" ,sigma:"1.80" ,color:"#ccffcc"}, 
{symbol: "Tb", position:155 ,radius: "176.55" ,sigma:"1.85" ,color:"#ccffcc"}, 
{symbol: "Dy", position:156 ,radius: "174.20" ,sigma:"4.95" ,color:"#ccffcc"}, 
{symbol: "Ho", position:157 ,radius: "172.90" ,sigma:"5.60" ,color:"#ccffcc"}, 
{symbol: "Er", position:158 ,radius: "171.50" ,sigma:"5.75" ,color:"#ccffcc"}, 
{symbol: "Tm", position:159 ,radius: "170.55" ,sigma:"5.70" ,color:"#ccffcc"}, 
{symbol: "Yb", position:160 ,radius: "185.25" ,sigma:"2.35" ,color:"#ccffcc"}, 
{symbol: "Lu", position:161 ,radius: "169.00" ,sigma:"5.95" ,color:"#ccffcc"}, 
{symbol: "Ac", position:165 ,radius: "188.10" ,sigma:"8.85" ,color:"#ccffcc"}, 
{symbol: "Th", position:166 ,radius: "178.20" ,sigma:"0.90" ,color:"#ccffcc"}, 
{symbol: "Pa", position:167 ,radius: "162.65" ,sigma:"4.45" ,color:"#ccffcc"}, 
{symbol: "U" , position:168 ,radius: "154.55" ,sigma:"7.35" ,color:"#ccffcc"}, 
{symbol: "Np", position:169 ,radius: "161.65" ,sigma:"1.95" ,color:"#ccffcc"}, 
{symbol: "Pu", position:170 ,radius: "167.55" ,sigma:"1.60" ,color:"#ccffcc"}, 
{symbol: "Am", position:171 ,radius: "No Data" ,sigma:"" ,color:"#ccffcc"}, 
{symbol: "Cm", position:172 ,radius: "No Data" ,sigma:"" ,color:"#ccffcc"}, 
{symbol: "Bk", position:173 ,radius: "No Data" ,sigma:"" ,color:"#ccffcc"}, 
{symbol: "Cf", position:174 ,radius: "No Data" ,sigma:"" ,color:"#ccffcc"}, 
{symbol: "Es", position:175 ,radius: "No Data" ,sigma:"" ,color:"#ccffcc"}, 
{symbol: "Fm", position:176 ,radius: "No Data" ,sigma:"" ,color:"#ccffcc"}, 
{symbol: "Md", position:177 ,radius: "No Data" ,sigma:"" ,color:"#ccffcc"}, 
{symbol: "No", position:178 ,radius: "No Data" ,sigma:"" ,color:"#ccffcc"}, 
{symbol: "Lr", position:179 ,radius: "No Data" ,sigma:"" ,color:"#ccffcc"}, 
{symbol: "Ex", position:7  ,radius: "Radius Å" ,sigma:"Extension Å" ,color:"#ccFFE6"}, 
];


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
   [163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180]];


const selected = {
  ele1: null,
  ele2: null,
};

function displayElement(element, index) {
  if (element) {
    document.getElementById(index === 1 ? "ele1" : "ele2").textContent = element.symbol;
  } else {
    document.getElementById(index === 1 ? "ele1" : "ele2").textContent = "---";
  }
}


function createTable() {
  const table = document.getElementById("periodic-table");
  for (const positionRow of positions) {
    for (const position of positionRow) {
      const element = elements.find((e) => e.position === position);
      if (element) {
        if (element.symbol === "Ex") {
          const cell = document.createElement("div");
          cell.classList.add("cus-element");

          cell.innerHTML =  `<span class="cus-element-symbol">Symbol<span>
                             <br>
                             <span class="cus-element-radius">${element.radius}(${element.sigma})<span>`;

          cell.style.backgroundColor = element.color;    //color here!!!!!!!!!!!!!!!!.toFixed(2)
          element.domElement = cell;
          table.appendChild(cell);

        } else {
          const cell = document.createElement("div");
          cell.classList.add("element");

          cell.innerHTML =  `<span class="element-symbol">${element.symbol}<span>
                             <br>
                             <span class="element-radius">${element.radius}(${element.sigma})<span>`;

          cell.style.backgroundColor = element.color;    //color here!!!!!!!!!!!!!!!!.toFixed(2)
          element.domElement = cell;
          table.appendChild(cell);
        }
      } else {
        const emptyCell = document.createElement("div");
        emptyCell.style.width = "75px";
        emptyCell.style.height = "50px";
        table.appendChild(emptyCell);
      }
    }
  }
}

createTable();