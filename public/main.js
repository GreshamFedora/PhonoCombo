const mandarin = {
    "ɕ": {IPA: "ɕ", Symbols: "x/ㄒ", Examples: "西"},
    "f": {IPA: "f", Symbols: "f/ㄈ", Examples: "非"},
    "j": {IPA: "j", Symbols: "y-/i-/一", Examples: "牙"},
    "k": {IPA: "k", Symbols: "g/ㄍ", Examples: "干"},
    "kʰ": {IPA: "kʰ", Symbols: "k/ㄎ", Examples: "口"},
    "l": {IPA: "l", Symbols: "l/ㄌ", Examples: "了"},
    "m": {IPA: "m", Symbols: "m/ㄇ", Examples: "明"},
    "n": {IPA: "n", Symbols: "n/ㄋ/ㄣ/ㄢ", Examples: "你"},
    "ŋ": {IPA: "ŋ", Symbols: "-ng/ㄥ/ㄤ", Examples: "江"},
    "p": {IPA: "p", Symbols: "b/ㄅ", Examples: "包"},
    "pʰ": {IPA: "pʰ", Symbols: "p/ㄆ", Examples: "旁"},
    "ʐ": {IPA: "ʐ", Symbols: "r-/ㄖ", Examples: "日"},
    "s": {IPA: "s", Symbols: "s/ㄙ", Examples: "私"},
    "ʂ": {IPA: "ʂ",  Symbols: "sh/ㄕ", Examples: "失"},
    "t": {IPA: "t", Symbols: "d/ㄉ", Examples: "但"},
    "tʰ": {IPA: "tʰ", Symbols: "t/ㄊ", Examples: "透"},
    "tɕ": {IPA: "tɕ", Symbols: "j/ㄐ", Examples: "叫"},
    "tɕʰ": {IPA: "tɕʰ", Symbols: "q/ㄑ", Examples: "去"},
    "ts": {IPA: "ts", Symbols: "z/ㄗ", Examples: "子"},
    "tsʰ": {IPA: "tsʰ", Symbols: "c/ㄘ", Examples: "此"},
    "ʈʂ": {IPA: "ʈʂ", Symbols: "zh/ㄓ", Examples: "之"},
    "ʈʂʰ": {IPA: "ʈʂʰ", Symbols: "ch/ㄔ", Examples: "吃"},
    "w": {IPA: "w", Symbols: "w-/u-/ㄨ", Examples: "我"},
    "x": {IPA: "x", Symbols: "h/ㄏ", Examples: "火"},
    "ɥ": {IPA: "ɥ", Symbols: "yu-/-ü-/ㄩ", Examples: "月"},
}

let lang1values = Object.values(mandarin)
console.log(lang1values[0].Symbols)

for (let j = 0; j < array.length; j++) {
  let th = document.createElement('th'); //column
  let text = document.createTextNode(array[j]); //cell
  th.appendChild(text);
  tr.appendChild(th);
}
table.appendChild(tr);

for (let i = 0; i < lang1values.length; i++) {
  let tr = document.createElement('tr');

  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  //let td4 = document.createElement('td');

  let text1 = document.createTextNode(lang1values[i].IPA);
  let text2 = document.createTextNode(lang1values[i].Symbols);
  let text3 = document.createTextNode(lang1values[i].Examples);
  //let text4 = document.createTextNode('Text4');

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  //td4.appendChild(text4);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  //tr.appendChild(td4);

  table.appendChild(tr);
}
document.body.appendChild(table);
