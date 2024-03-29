//could change Symbols to array and add breaks

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
        {IPA: "ɻ̩", Symbols: "zhi/chi/shi/ri/ㄭ", Examples: "之/吃/是/日"},
        {IPA: "ɹ̩", Symbols: "zi/ci/si/ㄭ", Examples: "子/次/私"},
        {IPA: "u", Symbols: "wu/-u/ㄨ", Examples: "土"},
        {IPA: "ʊ", Symbols: "-ong/ㄨㄥ/ㄩㄥ", Examples: "冬/用"},
        {IPA: "y", Symbols: "yu/-ü/ㄩ", Examples: "雨"},
        {IPA: "aɪ", Symbols: "ai/ㄞ", Examples: "艾"},
        {IPA: "aʊ", Symbols: "ao/ㄠ", Examples: "凹"},
        {IPA: "eɪ", Symbols: "ei/ㄟ", Examples: "杯"},
        {IPA: "oʊ", Symbols: "ou/ㄡ", Examples: "偶"},
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
        {IPA: "m", Symbols: "m/ㄇ", Examples: "莫"},
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
        {IPA: "m̩", Symbols: "m/ㄇ", Examples: "唔"},
        {IPA: "ŋ̩", Symbols: "ng/ㄫ ", Examples: "五"},
        {IPA: "ŋ̍", Symbols: "ng/ㄫ ", Examples: "五"},
    ],
    vowels: [
          {IPA: "aː", Symbols: "aa/ㄚ", Examples: "亞（亚）"},
          {IPA: "aːi", Symbols: "aai/ㄞ", Examples: "界"},
          {IPA: "aːu", Symbols: "aau/ㄠ", Examples: "交"},
          {IPA: "ɐ", Symbols: "a/--", Examples: "甩"},
          {IPA: "ɐi", Symbols: "ai/ㄟ", Examples: "矮"},
          {IPA: "ɐu", Symbols: "au/ㄡ", Examples: "歐（欧）"},
          {IPA: "ei", Symbols: "ei/ㄝ一", Examples: "悲"},
          {IPA: "ɛː", Symbols: "e/ㄝ", Examples: "些"},
          {IPA: "ɛːu", Symbols: "eu/ㄝㄨ", Examples: "掉/(口)"},
          {IPA: "e", Symbols: "i/(-ik/-ing)/一", Examples: "色"},
          {IPA: "iː", Symbols: "i/一", Examples: "意"},
          {IPA: "iːu", Symbols: "iu/一ㄨ", Examples: "橋（桥）"},
          {IPA: "ou", Symbols: "ou/ㄛㄨ", Examples: "奧（奥）"},
          {IPA: "ɔː", Symbols: "o/ㄛ", Examples: "我"},
          {IPA: "ɔːy", Symbols: "oi/ㄛ一", Examples: "哀"},
          {IPA: "œː", Symbols: "oe/*", Examples: "靴"},
          {IPA: "ɵ", Symbols: "eo/--", Examples: "出"},
          {IPA: "ɵy", Symbols: "eoi/*", Examples: "去"},
          {IPA: "o", Symbols: "u/(-ik/-ing)/ㄨ", Examples: "福"},
          {IPA: "uː", Symbols: "u/ㄨ", Examples: "鳥（鸟）"},
          {IPA: "uːy", Symbols: "ui/ㄨ一", Examples: "回"},
          {IPA: "yː", Symbols: "yu/ㄩ", Examples: "於（于"},
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
  },
  spanish:{
    consonants:[
        {IPA: 'b', Symbols: 'b-/-b-/v-/-v-', Examples: 'bestia, embuste, vaca, envidia, fútbol'},
        {IPA: 'β', Symbols: '-b-/-v-/-p-', Examples: 'bebé, viva, curva, obtuso, apto'},
        {IPA: 'd', Symbols: 'd-/-d-', Examples: 'dedo, cuando, aldaba'},
        {IPA: 'ð', Symbols: '-d-/-d/-t-', Examples: 'dádiva, arder, admirar, atmósfera, juventud'},
        {IPA: 'f', Symbols: 'f-', Examples: 'fase'},
        {IPA: 'ɡ', Symbols: 'g/-g-', Examples: 'gato, guerra, lengua'},
        {IPA: 'ɣ', Symbols: '-g-', Examples: 'trigo, amargo, signo, doctor'},
        {IPA: 'ʝ', Symbols: '-y-', Examples: 'ayuno'},
        {IPA: 'ɟʝ', Symbols: 'y-/-y-', Examples: 'yermo, cónyuge'},
        {IPA: 'k', Symbols: 'c-/qu-/k-', Examples: 'caña, quise, kilo'},
        {IPA: 'l', Symbols: 'l-', Examples: 'lino'},
        {IPA: 'm', Symbols: 'm-/-m-', Examples: 'madre, campo'},
        {IPA: 'ɱ', Symbols: '-n-', Examples: 'anfibio'},
        {IPA: 'n', Symbols: 'n-/-n/-m', Examples: 'nido, sin, álbum'},
        {IPA: 'ɲ', Symbols: 'ñ-/-n-', Examples: 'ñandú, cónyuge'},
        {IPA: 'ŋ', Symbols: '-n-', Examples: 'cinco, tengo'},
        {IPA: 'p', Symbols: 'p-', Examples: 'pozo'},
        {IPA: 'r', Symbols: 'r-/-r-/-rr-', Examples: 'rumbo, carro, honra, subrayar'},
        {IPA: 'ɾ', Symbols: '-r-/-r', Examples: 'caro, bravo, partir'},
        {IPA: 's', Symbols: 's-/-s-/x-/c-/z-', Examples: 'saco, espita, xenón, cereal, zorro'},
        {IPA: 'z', Symbols: '-z-/-s-', Examples: 'jazmín, juzgar/isla, mismo, riesgo'},
        {IPA: 'ʃ', Symbols: 'sh-/-ch-/-x-', Examples: 'show, Rocher, Freixenet'},
        {IPA: 't', Symbols: 't-', Examples: 'tamiz'},
        {IPA: 'tʃ', Symbols: 'ch-', Examples: 'chubasco'},
        {IPA: 'v', Symbols: '-f-', Examples: 'afgano'},
        {IPA: 'x', Symbols: 'j-/g-/-x-/h-', Examples: 'jamón, general, México, hámster'},
        {IPA: 'ʎ', Symbols: 'll-', Examples: 'llave'},
    ],
    vowels:[
        {IPA: 'a', Symbols: 'a', Examples: 'mal'},
        {IPA: 'e', Symbols: 'e', Examples: 'es'},
        {IPA: 'i', Symbols: 'i/y', Examples: 'di, y'},
        {IPA: 'o', Symbols: 'o', Examples: 'sol'},
        {IPA: 'u', Symbols: 'u', Examples: 'su'},
        {IPA: 'j', Symbols: 'i/y', Examples: 'ciudad, rey'},
        {IPA: 'w', Symbols: 'u', Examples: 'cuatro, Huila, auto'},
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

  let lang1Consonants = languages[language1].consonants
  let lang1ConsonantKey = languages[language1].consonants.map( x => {
  return x.IPA
  })
  let lang1Vowels = languages[language1].vowels
  let lang1VowelKey = languages[language1].vowels.map( x => {
  return x.IPA
  })
  //console.log(`language1 = ${language1}`)
  //console.log(`language2 = ${language2}`)

  //console.log(lang1)

  let lang2Consonants = languages[language2].consonants
  let lang2ConsonantKey = languages[language2].consonants.map( x => {
  return x.IPA
  })
  let lang2Vowels = languages[language2].vowels
  let lang2VowelKey = languages[language2].vowels.map( x => {
    return x.IPA
  })
  //console.log(lang1Consonants)
  //console.log(lang1ConsonantKey)
  //console.log(lang1Vowels)
  //console.log(lang1VowelKey)

  //console.log(lang2Consonants)
  //console.log(lang2ConsonantKey)
  //console.log(lang2Vowels)
  //console.log(lang2VowelKey)


  //forms key with duplicates to be filterd out in next step
  let langConsonantKeys = [...lang1ConsonantKey,...lang2ConsonantKey]
  let langVowelKeys = [...lang1VowelKey,...lang2VowelKey]


  //console.log(langConsonantKeys)
  //console.log(langVowelKeys)

  //removes duplicate from langConsonantKeys and langVowelKeys
  const distinct = arr => arr.filter((item, index) => arr.indexOf(item) === index);

  let coLangKey = distinct(langConsonantKeys)
  let coVowelKey = distinct(langVowelKeys)

  //console.log(coLangKey)
  //console.log(coVowelKey)


  /*
  store missing items in each using key to id what items in the key are missing 
  from each lang

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


  const lang1MissingConsonants = check(coLangKey, lang1ConsonantKey)
  const lang2MissingConsonants = check(coLangKey, lang2ConsonantKey)

  const lang1MissingVowels = check(coVowelKey, lang1VowelKey)
  const lang2MissingVowels = check(coVowelKey, lang2VowelKey)



  //console.log(lang1MissingConsonants)
  //console.log(lang2MissingConsonants)

  //console.log(lang1MissingVowels)
  //console.log(lang2MissingVowels)

  /*
  uses missing1 (the locations langConsonantKeys that are missing from the language in 
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
  //only lang2Consonants needs to be processed as lang is automatically in order
  //12/22/22 ignoring above line and adding lang1 back in
  missingAdder(lang1MissingConsonants, lang1Consonants)
  missingAdder(lang2MissingConsonants, lang2Consonants)


  missingAdder(lang1MissingVowels, lang1Vowels)
  missingVowelAdder(lang2MissingVowels, lang2Vowels)
  //console.log(lang2Consonants)
  //console.log(lang2Vowels)
  //console.log(lang1Consonants)
  //console.log(lang1Vowels)



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
  const sortedLang1Consonants = langSort(coLangKey, lang1Consonants)
  const sortedLang1Vowels = langSort(coVowelKey,lang1Vowels)
  const sortedLang2Consonants = langSort(coLangKey, lang2Consonants)
  const sortedLang2Vowels = langSort(coVowelKey,lang2Vowels)

  //console.log(sortedLang1Consonants)
  console.log(sortedLang1Vowels)
  //console.log(sortedLang2Consonants)
  console.log(sortedLang2Vowels)

  //combines languages to be able to be then fed to ejs
  const combinedLangs = (a,b) => {
    let combinedObjs = []
    for (i = 0; i < a.length; i++) {

        combinedObjs.push({IPA: a[i].IPA, Symbols1: a[i].Symbols, Symbols2: b[i].Symbols, Examples1: a[i].Examples, Examples2: b[i].Examples})
    }
    for (i = a.length; i < b.length; i++) {
        combinedObjs.push({IPA: b[i].IPA, Symbols1: '', Symbols2: b[i].Symbols, Examples1: '', Examples2: b[i].Examples})
    }
    return combinedObjs
  }

  combinedLangsForTable = combinedLangs(sortedLang1Consonants, sortedLang2Consonants)
  combinedVowelsForTable = combinedLangs(sortedLang1Vowels, sortedLang2Vowels)
  let combinedLanguages = [combinedLangsForTable, combinedVowelsForTable]

  // console.log(combinedLangsForTable)
  // console.log(combinedVowelsForTable)

  return combinedLanguages


}




//-----------------------------------------------------------------------------------------
// END section to combine
//checkbox for table gen
//-----------------------------------------------------------------------------------------
function createPhoneticTable(languagesToOutput) {
  let div = document.createElement('div') //container
  //console.log(languagesToOutput.length)
  for (i = 0; i < languagesToOutput.length; i++) {
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

    for (let k = 0; k < languagesToOutput[i].length; k++) {
      let tr = document.createElement('tr');
    
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');

      //let td4 = document.createElement('td');
    
      let text1 = document.createTextNode(languagesToOutput[i][k].IPA);
      let text2 = document.createTextNode(languagesToOutput[i][k].Symbols1);
      let text3 = document.createTextNode(languagesToOutput[i][k].Symbols2);
      let text4 = document.createTextNode(languagesToOutput[i][k].Examples1);
      let text5 = document.createTextNode(languagesToOutput[i][k].Examples2);
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
    div.appendChild(table);
  }
  document.body.appendChild(div);

}







function languageSelection(e) {
  //removes the two tables generated could be done better
  console.log(e)
  if (document.querySelector('table')) {
    let parentEl = document.querySelector('table').parentElement
    const removeChildrenElements = (parent) => {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      }
    }

    removeChildrenElements(parentEl);
    parentEl.remove()
    resetIPAVals();
  }

  //set up variables
  let mandarin = document.querySelector('#mandarin')
  let cantonese = document.querySelector('#cantonese')
  let hokkien = document.querySelector('#hokkien')
  let spanish = document.querySelector('#spanish')

  //stopping button from immediately removing result a split second after click
  e.preventDefault()
  e.cancelBubble = true;
  //for use in conditional chain
  let checkedArr = [mandarin.checked, cantonese.checked, hokkien.checked, spanish.checked]

  //conditional chain checks that only two options are selected, then generates the two tables based on choices of available options
  if(checkedArr.filter(Boolean).length !== 2) {
    alert(`Please select two languages to be combined.`)

  } else if (mandarin.checked == true && cantonese.checked == true) {
        createPhoneticTable(tableFormer("mandarin","cantonese"))
        //if (document.querySelector())
  } else if (mandarin.checked == true && hokkien.checked == true) {
        createPhoneticTable(tableFormer("mandarin","hokkien"))

  } else if (cantonese.checked == true && hokkien.checked == true) {
        createPhoneticTable(tableFormer("cantonese","hokkien"))

  } else if (mandarin.checked == true && spanish.checked == true) {
        createPhoneticTable(tableFormer("mandarin","spanish"))

  } else if (cantonese.checked == true && spanish.checked == true) {
        createPhoneticTable(tableFormer("cantonese","spanish"))

  } else if (hokkien.checked == true && spanish.checked == true) {
        createPhoneticTable(tableFormer("hokkien","spanish"))

  }
document.getElementById("form").reset()
}
document.querySelector('#submitButton').addEventListener('click', languageSelection)

// consistencyEnforcer PSEUDOCODE
// O = forming up IPA keys to compare 
//  = compare the lang1+2 consonant and vowel keys with  combined lang analogues for consistency, identifying indices of items not found in lang1 + lang2's
//  = use indices to strip said keys' objects out of lang1+2 
//  = return lang1+2

//if this doesn't work, add IPA keys after consonant and vowels in each object in languages and use those to conduct the above process

function consistencyEnforcer (combinedLanguage, language1, language2) {
  let lang1ConsonantKey = languages[language1].consonants.map( x => {
return x.IPA
})
let lang1VowelKey = languages[language1].vowels.map( x => {
  return x.IPA
})
let lang2ConsonantKey = languages[language2].consonants.map( x => {
  return x.IPA
})
let lang2VowelKey = languages[language2].vowels.map( x => {
  return x.IPA
})

let langConsonantKeys = [...lang1ConsonantKey,...lang2ConsonantKey]
let langVowelKeys = [...lang1VowelKey,...lang2VowelKey]

let combinedLangConsonantKey = combinedLanguage.consonants.map( x => {
  return x.IPA
})
let combinedLangVowelKey = combinedLanguage.vowels.map( x => {
    return x.IPA
})

//if combined has a value that langConsonantKeys doesn't, then find the index of combined's object with that IPA value and strip it from combined
//arr1 is bigger & returns what arr1 has that arr2 doesn't
//let difference = arr1.filter(x => !arr2.includes(x));
//this gets the IPA keys not found in langConsonantKeys

let consonantsToSplice = findIndicesOfConsonantsToSplice(combinedLangConsonantKey, langConsonantKeys)
let vowelsToSplice = findIndicesOfVowelsToSplice(combinedLangVowelKey, langVowelKeys)

return arraySplicer(consonantsToSplice, vowelsToSplice, combinedLanguage)

}


function findIndicesOfConsonantsToSplice (combinedLangConsonantKey, langConsonantKeys) {
  let difference = combinedLangConsonantKey.filter(x => !langConsonantKeys.includes(x));
  let consonantIndicesNeeded = []

  for(i = 0; i < difference.length; i++) {
  consonantIndicesNeeded.push(combinedLangConsonantKey.indexOf(difference[i]))
}
return consonantIndicesNeeded
}


function findIndicesOfVowelsToSplice (combinedLangVowelKey, langVowelKeys) {
  let difference = combinedLangVowelKey.filter(x => !langVowelKeys.includes(x));
  let vowelIndicesNeeded = []

  for(i = 0; i < difference.length; i++) {
  vowelIndicesNeeded.push(combinedLangVowelKey.indexOf(difference[i]))
}
return vowelIndicesNeeded
}

function arraySplicer (consonantsToSplice, vowelstoSplice, combinedLanguage) {
  for (key of consonantsToSplice) {
      combinedLanguage.consonants.splice(consonantsToSplice,1)
  }
  for (key of vowelstoSplice) {
      combinedLanguage.vowels.splice(vowelstoSplice,1)
  }
  return combinedLanguage
}


console.log(consistencyEnforcer(combinedLang, "mandarin", "hokkien"))

//console.log(combinedLang)
//console.log(consistencyChecker(combinedLang, mandarin, spanish))
//console.log(consistencyChecker(combinedLang, hokkien, spanish))


