let table = document.createElement('table');
let tr = document.createElement('tr');
let array = ['IPA', 'Symbols', 'Examples'];
const mandarin = {
    consonants: [
        {IPA: "ɕ", Symbols: "x/ㄒ", Examples: "西"},
        {IPA: "f", Symbols: "f/ㄈ", Examples: "非"},
        {IPA: "j", Symbols: "y-/i-/一", Examples: "牙"},
        {IPA: "k", Symbols: "g/ㄍ", Examples: "干"},
        {IPA: "kʰ", Symbols: "k/ㄎ", Examples: "口"},
        {IPA: "l", Symbols: "l/ㄌ", Examples: "了"},
        {IPA: "m", Symbols: "m/ㄇ", Examples: "明"},
        {IPA: "n", Symbols: "n/ㄋ/ㄣ/ㄢ", Examples: "你"},
        {IPA: "ŋ", Symbols: "-ng/ㄥ/ㄤ", Examples: "江"},
        {IPA: "p", Symbols: "b/ㄅ", Examples: "包"},
        {IPA: "pʰ", Symbols: "p/ㄆ", Examples: "旁"},
        {IPA: "ʐ", Symbols: "r-/ㄖ", Examples: "日"},
        {IPA: "s", Symbols: "s/ㄙ", Examples: "私"},
        {IPA: "ʂ",  Symbols: "sh/ㄕ", Examples: "失"},
        {IPA: "t", Symbols: "d/ㄉ", Examples: "但"},
        {IPA: "tʰ", Symbols: "t/ㄊ", Examples: "透"},
        {IPA: "tɕ", Symbols: "j/ㄐ", Examples: "叫"},
        {IPA: "tɕʰ", Symbols: "q/ㄑ", Examples: "去"},
        {IPA: "ts", Symbols: "z/ㄗ", Examples: "子"},
        {IPA: "tsʰ", Symbols: "c/ㄘ", Examples: "此"},
        {IPA: "ʈʂ", Symbols: "zh/ㄓ", Examples: "之"},
        {IPA: "ʈʂʰ", Symbols: "ch/ㄔ", Examples: "吃"},
        {IPA: "w", Symbols: "w-/u-/ㄨ", Examples: "我"},
        {IPA: "x", Symbols: "h/ㄏ", Examples: "火"},
        {IPA: "ɥ", Symbols: "yu-/-ü-/ㄩ", Examples: "月"},
    ],
    vowels: [
        {IPA: "a", Symbols: "a/ㄚ/ㄢ/ㄤ<br>er/ㄦ", Examples: "阿, 安, 盎<br>二/兒(儿)"},
        {IPA: "ɛ", Symbols: "yan/-ian/一ㄢ", Examples: "言"},
        {IPA: "æ", Symbols: "yuan/-üan/ㄩㄢ", Examples: "元"},
        {IPA: "e", Symbols: "ye/-ie/yue/-üe/ㄝ", Examples: "也/月"},
        {IPA: "ə", Symbols: "en/eng/ㄣ/ㄥ", Examples: "本/冷"},
        {IPA: "ɚ", Symbols: "er/ㄦ", Examples: "二/兒(儿)"},
        {IPA: "ɤ", Symbols: "e/ㄜ", Examples: "厄"},
        {IPA: "i", Symbols: "yi/-i/一", Examples: "李"},
        {IPA: "o", Symbols: "wo/-uo/-ou/ㄛ", Examples: "果/狗"},
        {IPA: "ɻ̩", Symbols: "zhi/chi/shi/ri/ㄭ", Examples: "之/吃/師(师)/日"},
        {IPA: "ɹ̩", Symbols: "zi/ci/si/ㄭ", Examples: "子/次/私"},
        {IPA: "u", Symbols: "wu/-u/ㄨ", Examples: "土"},
        {IPA: "ʊ", Symbols: "-ong/ㄨㄥ/ㄩㄥ", Examples: "冬/用"},
        {IPA: "y", Symbols: "yu/-ü/ㄩ", Examples: "雨"},
        {IPA: "aɪ", Symbols: "ai/ㄞ", Examples: "艾"},
        {IPA: "aʊ", Symbols: "ao/ㄠ", Examples: "凹"},
        {IPA: "eɪ", Symbols: "ei/ㄟ", Examples: "杯"},
        {IPA: "oʊ", Symbols: "ou/ㄡ", Examples: "歐/欧"},
    ],
}
console.log(mandarin.consonants[0].IPA)

let lang1Consonants = mandarin.consonants


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
