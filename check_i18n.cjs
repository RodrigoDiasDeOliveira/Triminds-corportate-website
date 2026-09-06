const fs = require('fs');
const content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

const enSection = content.split('en: {')[1].split('pt: {')[0];
const ptSection = content.split('pt: {')[1].split('es: {')[0];
const esSection = content.split('es: {')[1].split('};')[0];

function extractKeys(sec) {
  const matches = sec.match(/^\s*['"]([a-zA-Z0-9_.-]+)['"]\s*:/gm) || [];
  return matches.map(m => m.replace(/^\s*['"]/, '').replace(/['"]\s*:$/, ''));
}

const enKeys = extractKeys(enSection);
const ptKeys = extractKeys(ptSection);
const esKeys = extractKeys(esSection);

console.log('EN keys:', enKeys.length);
console.log('PT keys:', ptKeys.length);
console.log('ES keys:', esKeys.length);

const enSet = new Set(enKeys);
const ptSet = new Set(ptKeys);
const esSet = new Set(esKeys);

console.log('Missing in PT:', enKeys.filter(k => !ptSet.has(k)));
console.log('Missing in ES:', enKeys.filter(k => !esSet.has(k)));
console.log('Extra in PT:', ptKeys.filter(k => !enSet.has(k)));
console.log('Extra in ES:', esKeys.filter(k => !enSet.has(k)));
