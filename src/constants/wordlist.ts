import { CONFIG } from './config'

export const WORDS = [
  'agust',
  "ah'ha",
  'ashuk',
  'biich',
  'bloom',
  'camas',
  'canim',
  'chako',
  'chaku',
  'chesp',
  'chope',
  'chuck',
  'cosho',
  'dakta',
  'dleit',
  'dolla',
  'emeek',
  'flour',
  'heilo',
  'iktas',
  'ilahi',
  'iskum',
  'kakwa',
  'kehwa',
  'kopet',
  'lahal',
  'lakit',
  'latet',
  'lawen',
  'lecoo',
  'ledoo',
  'leili',
  'lekye',
  'leloo',
  'lepan',
  'lesak',
  'likoo',
  'lotel',
  'maika',
  'makuk',
  'mamuk',
  'minit',
  'mokst',
  'moola',
  'naika',
  'nekst',
  'olali',
  'paiya',
  'peipa',
  'salal',
  'spose',
  'stone',
  'taiyi',
  'tanse',
  'tenas',
  'tipso',
  'tlawa',
  'ulken',
  'windo',
  'yawaa',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
