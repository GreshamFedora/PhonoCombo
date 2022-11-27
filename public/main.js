const languages = {
  mandarin: {
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
        {IPA: "a", Symbols: "a/ㄚ/ㄢ/ㄤ | er/ㄦ", Examples: "阿, 安, 盎 | 二/兒(儿)"},
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
  },
  cantonese: {
    consonants: [
        {IPA: "f", Symbols: "f/ㄈ", Examples: "虎"},
        {IPA: "h", Symbols: "h/ㄏ", Examples: "客"},
        {IPA: "j", Symbols: "j/一", Examples: "月"},
        {IPA: "k", Symbols: "g-/ㄍ", Examples: "家"},
        {IPA: "k̚", Symbols: "-k/-ㄎ", Examples: "識"},
        {IPA: "kʰ", Symbols: "k-/ㄎ-", Examples: "卡"},
        {IPA: "kʷ", Symbols: "gw/ㄍㄨ", Examples: "瓜"},
        {IPA: "kʷʰ", Symbols: "kw/ㄎㄨ", Examples: "誇"},
        {IPA: "l", Symbols: "l/ㄌ", Examples: "落"},
        {IPA: "m̩", Symbols: "m/ㄇ", Examples: "莫/唔"},
        {IPA: "n", Symbols: "n/ㄋ", Examples: "男"},
        {IPA: "ŋ", Symbols: "ng/ㄫ ", Examples: "牙"},
        {IPA: "p", Symbols: "b/ㄅ", Examples: "班"},
        {IPA: "p̚", Symbols: "-p/-ㄆ", Examples: "濕"},
        {IPA: "pʰ", Symbols: "p-/ㄆ-", Examples: "拍"},
        {IPA: "s", Symbols: "s/ㄙ/ㄒ", Examples: "西"},
        {IPA: "t", Symbols: "d/ㄉ", Examples: "打"},
        {IPA: "t̚", Symbols: "-t/-ㄊ", Examples: "失"},
        {IPA: "tʰ", Symbols: "t-/ㄊ-", Examples: "拖"},
        {IPA: "ts", Symbols: "z/ㄗ/ㄐ", Examples: "將"},
        {IPA: "tsʰ", Symbols: "c/ㄘ/ㄑ", Examples: "鏘"},
        {IPA: "w", Symbols: "w/ㄨ", Examples: "活"},
        {IPA: "ŋ̩", Symbols: "ng/ㄫ ", Examples: "五"},
    ],
    vowels: [
          {IPA: "aː", Symbols: "aa/ㄚ", Examples: "亞"},
          {IPA: "aːi", Symbols: "aai/ㄞ", Examples: "界"},
          {IPA: "aːu", Symbols: "aau/ㄠ", Examples: "交"},
          {IPA: "ɐ", Symbols: "a/--", Examples: "甩"},
          {IPA: "ɐi", Symbols: "ai/ㄟ", Examples: "矮"},
          {IPA: "ɐu", Symbols: "au/ㄡ", Examples: "歐"},
          {IPA: "ei", Symbols: "ei/ㄝ一", Examples: "悲"},
          {IPA: "ɛː", Symbols: "e/ㄝ", Examples: "些"},
          {IPA: "ɛːu", Symbols: "eu/ㄝㄨ", Examples: "掉/(口)"},
          {IPA: "e", Symbols: "i/(-ik/-ing)/一", Examples: "色"},
          {IPA: "iː", Symbols: "i/(-ik/-ing)/i/一", Examples: "意"},
          {IPA: "iːu", Symbols: "iu/一ㄨ", Examples: "橋"},
          {IPA: "ou", Symbols: "ou/ㄛㄨ", Examples: "奧"},
          {IPA: "ɔː", Symbols: "o/ㄛ", Examples: "我"},
          {IPA: "ɔːy", Symbols: "oi/ㄛ一", Examples: "哀"},
          {IPA: "œː", Symbols: "oe*", Examples: "靴"},
          {IPA: "ɵ", Symbols: "eo/--", Examples: "出"},
          {IPA: "ɵy", Symbols: "eoi*", Examples: "去"},
          {IPA: "o", Symbols: "u/(-ik/-ing)/u/ㄨ", Examples: "福"},
          {IPA: "uː", Symbols: "u/(-ik/-ing)/u/ㄨ", Examples: "鳥"},
          {IPA: "uːy", Symbols: "ui/ㄨ一", Examples: "回"},
          {IPA: "yː", Symbols: "yu/ㄩ", Examples: "於"},
    ],
  },
  hokkien:{
      consonants: [
          {IPA: 'p', Symbols: 'p/ㄅ', Examples: '布 (pòo)'},
          {IPA: 'pʰ', Symbols: 'ph/ㄆ', Examples: '普 (phóo)'},
          {IPA: 'b', Symbols: 'b/ㆠ', Examples: '明 (bîng)'},
          {IPA: 'm', Symbols: 'm/ㄇ/ㆰ/ㆬ', Examples: '媽 (má)/暗 (àm)/參 (som)/心 (sim)'},
          {IPA: 't', Symbols: 't/ㄉ', Examples: '端 (tuan)'},
          {IPA: 'tʰ', Symbols: 'th/ㄊ', Examples: '透 (thò)'},
          {IPA: 'l', Symbols: 'l/ㄌ', Examples: '來 (lâi)'},
          {IPA: 'n', Symbols: 'n/ㄋ/ㄣ/ㄢ', Examples: '泥 (nî), 因 (in), 安 (an)'},
          {IPA: 'k', Symbols: 'k/ㄍ', Examples: '見 (kiàn)'},
          {IPA: 'kʰ', Symbols: 'kh/ㄎ', Examples: '溪 (khe)'},
          {IPA: 'g', Symbols: 'g/ㆣ', Examples: '義 (gī)'},
          {IPA: 'ŋ', Symbols: 'ng/ㄫ/ㄥ/ㄤ/ㆲ', Examples: '吳 (ngôo)/櫻 (ing)/幫 (pang)/王 (ông)'},
          {IPA: 'h', Symbols: 'h/ㄏ', Examples: '曉 (hiáu)'},
          {IPA: 'ʔ', Symbols: '∅ /-h/◌ㄏ', Examples: '影 (íng)/桌 (toh)'},
          {IPA: 't͡s', Symbols: 'ch/ㄗ', Examples: '走 (tsáu)'},
          {IPA: 't͡ɕ', Symbols: 'ch/ㄐ', Examples: '精 (tsing)'},
          {IPA: 't͡sʰ', Symbols: 'chh/ㄘ', Examples: '菜 (tshài)'},
          {IPA: 't͡ɕʰ', Symbols: 'chh/ㄑ', Examples: '市 (tshī)'},
          {IPA: 's', Symbols: 's/ㄙ', Examples: '三 (sam)'},
          {IPA: 'ɕ', Symbols: 's/ㄒ', Examples: '審 (sím)'},
          {IPA: 'd͡z', Symbols: 'j/ㆡ', Examples: '熱 (jua̍h)'},
          {IPA: 'z', Symbols: 'j/ㆡ', Examples: '熱 (jua̍h)'},
          {IPA: 'd͡ʑ', Symbols: 'j/ㆢ', Examples: '日 (ji̍t)'},
          {IPA: 'ʑ', Symbols: 'j/ㆢ', Examples: '日 (ji̍t)'},
          {IPA: 'm̩', Symbols: 'm/ㆬ', Examples: '姆 (ḿ)'},
          {IPA: 'ŋ̍', Symbols: 'ng/ㆭ', Examples: '光 (kng)'},
          {IPA: 'p̚', Symbols: 'p/◌ㄅ', Examples: '合 (ha̍p)'},
          {IPA: 't̚', Symbols: 't/◌ㄉ', Examples: '七 (tshit)'},
          {IPA: 'k̚', Symbols: 'k/◌ㄍ', Examples: '角 (kak)'},
      ],
      vowels: [
          {IPA: "a", Symbols: "a/ㄚ", Examples: "鴨 (ah)"}, 
          {IPA: "e", Symbols: "e/ㆤ", Examples: "家 (ke)"}, 
          {IPA: "o", Symbols: "o/ㄛ", Examples: "高 (ko)"}, 
          {IPA: "ɔ", Symbols: "o͘/ㆦ | ong/op/ok/ㆲ/ㆦㆴ/ㆦㆶ", Examples: "烏 (oo) | 福 (hok)"}, 
          {IPA: "i", Symbols: "i/一", Examples: "一 (it)"}, 
          {IPA: "u", Symbols: "u/ㄨ", Examples: "武 (bú)"}, 
          {IPA: "ai̯", Symbols: "ai/ㄞ", Examples: "愛 (ài)"}, 
          {IPA: "au̯", Symbols: "au/ㄠ", Examples: "交 (kau)"}, 
          {IPA: "i̯a", Symbols: "ia 一ㄚ", Examples: "射 (siā)"}, 
          {IPA: "i̯ɛ", Symbols: "ian/iat 一ㄢ, 一ㄚㄉ", Examples: "電 (tiān)/結 (kiat)"}, 
          {IPA: "iə̯", Symbols: "eng/ek 一ㄥ, 一ㄍ", Examples: "英 (ing)/色 (sik)"}, 
          {IPA: "i̯ə", Symbols: "io/一ㄜ", Examples: "腰 (ior)"}, 
          {IPA: "i̯o", Symbols: "io/一ㄛ", Examples: "腰 (io)"}, 
          {IPA: "i̯ɔ", Symbols: "iong/iok/一ㆲ/一ㆦㄍ", Examples: "中 (tiong), 欲 (io̍k)"}, 
          {IPA: "i̯u", Symbols: "iu/一ㄨ", Examples: "手 (tshiú)"}, 
          {IPA: "u̯a", Symbols: "oa/ㄨㄚ", Examples: "化 (huà)"}, 
          {IPA: "u̯e", Symbols: "oe/ㄨㆤ", Examples: "尾 (bué)"}, 
          {IPA: "u̯i", Symbols: "ui/ㄨ一", Examples: "水 (suí)"}, 
          {IPA: "i̯au̯", Symbols: "iau/一ㄠ", Examples: "妖 (iau)"}, 
          {IPA: "u̯ai̯", Symbols: "oai/ㄨㄞ", Examples: "怪 (kuài)"}, 
          {IPA: "◌̃ ", Symbols: "m◌/n◌/ng◌/ㄇ◌/ㄋ◌/ㄫ◌", Examples: "鰻 (muâ)/梁 (niû)/迎 (ngiâ)"},
          {IPA: "ã", Symbols: "an/ㆩ", Examples: "衫 (sann)"}, 
          {IPA: "ĩ", Symbols: "in/ㆪ", Examples: "圓 (înn)"}, 
          {IPA: "ɔ̃", Symbols: "on/ㆧ", Examples: "否 (hónn)"}, 
          {IPA: "ãĩ̯", Symbols: "ain/ㆮ", Examples: "載 (tsáinn)"}, 
          {IPA: "ĩ̯ã", Symbols: "ian/一ㆩ", Examples: "兄 (hiann)"}, 
          {IPA: "ũ̯ã", Symbols: "oan/ㄨㆩ", Examples: "官 (kuann)"}, 
          {IPA: "ĩ̯ãũ̯", Symbols: "iaun/一ㆯ", Examples: "喓 (iaunn)"}, 
      ]
  }
}

//-----------------------------------------------------------------------------------------
//section to combine
//-----------------------------------------------------------------------------------------


//sets up keys for combination in next step and sets up lang variable for later access

//************************************************************
// input MUST BE STRINGS e.g. language 1 must be "mandarin"
//************************************************************
function tableFormer(language1, language2) {
    
  let lang1 = languages[language1].consonants
  let lang1Key = languages[language1].consonants.map( x => {
    return x.IPA
  })
  let lang1Vowels = languages[language1].vowels
  let lang1VowelKey = languages[language1].vowels.map( x => {
    return x.IPA
  })
  //console.log(lang1)
  
  let lang2 = languages[language2].consonants
  let lang2Key = languages[language2].consonants.map( x => {
    return x.IPA
  })
  let lang2Vowels = languages[language2].vowels
  let lang2VowelKey = languages[language2].vowels.map( x => {
      return x.IPA
    })
  //console.log(lang1Vowels)
  
  //forms key with duplicates to be filterd out in next step
  let langKeys = [...lang1Key,...lang2Key]
  let langVowelKeys = [...lang1VowelKey,...lang2VowelKey]
  
  // *** Vowel Expansion (VE) so far, so good
  //console.log(lang1Key)
  //console.log(lang1VowelKey)
  //console.log(lang2Key)
  //console.log(lang2VowelKey)
  
//this function takes the combined keys and filters them out for the distinct 
//keys creating the key to forming the combined tables i.e. there are no repeating 
//elements in the array afterwars
const distinct = arr => arr.filter((item, index) => arr.indexOf(item) === index);

let coLangKey = distinct(langKeys)
let coVowelKey = distinct(langVowelKeys)

// VE so far so good
//console.log(coLangKey)
//console.log(coVowelKey)


/*
store missing items in each using key to id what items in the key are missing 
from each lang
Basic principals
*/
function check(a, b) {
    let missing = []
    a.map(value => {
        // B did not include value
        if (!b.includes(value)) {
            // Output
            missing.push(a.indexOf(value))
        }
    });
    return missing
}


//const lang1MissingPosition = check(coLangKey, lang1Key)
const lang2MissingPosition = check(coLangKey, lang2Key)

//const lang1MissingVowels = check(coVowelKey, lang1VowelKey)
const lang2MissingVowels = check(coVowelKey, lang2VowelKey)

//console.log(coVowelKey)
//console.log(lang2VowelKey)
//console.log(lang2MissingVowels)

//VE looks good
//console.log(lang1MissingPosition)
//console.log(lang2MissingPosition)

//console.log(lang1MissingVowels)
//console.log(lang2MissingVowels)

/*
 uses missing1 (the locations langKeys that are missing from the language in 
question) and adds the missing elements to said language to then be combined 
with other lang
*/
const missingAdder = (missingElem, langNeedingElems) => {
  for (i = 0; i < missingElem.length; i++) {
    langNeedingElems.push({IPA: coLangKey[missingElem[i]], Symbols: "", Examples: ""})
    
  }
  return langNeedingElems
}

const missingVowelAdder = (missingElem, langNeedingElems) => {
  for (i = 0; i < missingElem.length; i++) {
    langNeedingElems.push({IPA: coVowelKey[missingElem[i]], Symbols: "", Examples: ""})
    
  }
  return langNeedingElems
}
//only lang2 needs to be processed as lang is automatically in order
//missingAdder(lang1MissingPosition, lang1)
missingAdder(lang2MissingPosition, lang2)

//VE looks good
//missingAdder(lang1MissingVowels, lang1)
missingVowelAdder(lang2MissingVowels, lang2Vowels)
//console.log(lang2)
//console.log(lang2Vowels)



/* 
sorting according to coLangKey for easy combination into pre-table format & 
so that coLangKey could be sorted later if needed e.g. via a master key such 
as prioritizing articulator position in mouth or series such as zh-ch-sh or 
order like this series but dependent on first language i.e. so that you get 
different orders based on your first language or TL OR a drop down allowing 
items to be sorted via this type of option
*/
function langSort(keyToUse, languagetoSort) {
  let output = []
  for (i = 0; i < keyToUse.length; i++) {
    for (j = 0; j < languagetoSort.length; j++){
      if (keyToUse[i] === languagetoSort[j].IPA) {
        output.push(languagetoSort[j])
      }
    }
  }
  return output
}
//use coLangKey as key to insert lang objects into new array using fxn

const sortedLang = langSort(coLangKey, lang2)
const sortedVowels = langSort(coVowelKey,lang2Vowels)

//VE checks out
//console.log(sortedVowels)
//console.log(lang1)
//console.log(sortedLang)

//combines languages to be able to be then fed to ejs
const combinedLangs = (a,b) => {
    let combinedObjs = []
    for (i = 0; i < a.length; i++) {
        combinedObjs.push(({IPA: a[i].IPA, Symbols1: a[i].Symbols, Symbols2: b[i].Symbols, Examples1: a[i].Examples, Examples2: b[i].Examples}))
    }
    return combinedObjs
}


combinedLangsForTable = combinedLangs(lang1, sortedLang)
combinedVowelsForTable = combinedLangs(lang1Vowels, sortedVowels)

//console.log(combinedLangsForTable)

return {
  combinedLangsForTable,
  combinedVowelsForTable
  };
}


//-----------------------------------------------------------------------------------------
// END section to combine
//checkbox for table gen
//-----------------------------------------------------------------------------------------
function createPhoneticTable(languagesToOutput) {
  let table = document.createElement('table');
  let tr = document.createElement('tr');
  let array = ['IPA', 'Symbols1', 'Symbols2', 'Examples1', 'Examples2'];
  
  
  for (let j = 0; j < array.length; j++) {
    let th = document.createElement('th'); //column
    let text = document.createTextNode(array[j]); //cell
    th.appendChild(text);
    tr.appendChild(th);
  }
  table.appendChild(tr);
  
  for (let i = 0; i < languagesToOutput.length; i++) {
    let tr = document.createElement('tr');
  
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    
    //let td4 = document.createElement('td');
  
    let text1 = document.createTextNode(languagesToOutput[i].IPA);
    let text2 = document.createTextNode(languagesToOutput[i].Symbols1);
    let text3 = document.createTextNode(languagesToOutput[i].Symbols2);
    let text4 = document.createTextNode(languagesToOutput[i].Examples1);
    let text5 = document.createTextNode(languagesToOutput[i].Examples2);
    //let text4 = document.createTextNode('Text4');
  
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    //td4.appendChild(text4);
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    //tr.appendChild(td4);
  
    table.appendChild(tr);
  }
  document.body.appendChild(table);
  }
  




document.querySelector('#submitButton').addEventListener('click', languageSelection)

function languageSelection(e) {
  let mandarin = document.querySelector('#mandarin')
  let cantonese = document.querySelector('#cantonese')
  let hokkien = document.querySelector('#hokkien')
  
  e.preventDefault()

  let checkedArr = [mandarin.checked, cantonese.checked, hokkien.checked]
  if(document.querySelector('table')) {document.querySelector('table').remove()}
  if(checkedArr.filter(Boolean).length !== 2) {
    alert(`Please select two languages to be combined.`)
  } else if (mandarin.checked == true && cantonese.checked == true) {
        const finalInput = (tableFormer("mandarin","cantonese"))
        createPhoneticTable(finalInput.combinedLangsForTable)
        createPhoneticTable(finalInput.combinedVowelsForTable)
  } else if (mandarin.checked == true && hokkien.checked == true) {
        const finalInput = (tableFormer("mandarin","hokkien"))
        createPhoneticTable(finalInput.combinedLangsForTable)
        createPhoneticTable(finalInput.combinedVowelsForTable)
  } else if (hokkien.checked == true && cantonese.checked == true) {
        const finalInput = (tableFormer("cantonese","hokkien"))
        createPhoneticTable(finalInput.combinedLangsForTable)
        createPhoneticTable(finalInput.combinedVowelsForTable)
        
  }
}
