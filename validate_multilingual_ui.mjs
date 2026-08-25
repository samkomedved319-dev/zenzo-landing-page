import { existsSync, readFileSync } from 'node:fs';

const root = '/home/ubuntu/zenzo-landing-work';
const pages = ['index.html', 'index.pre-kokonut-upgrade.html', 'about.html', 'docs.html', 'trust.html', 'privacy.html', 'terms.html', 'owner-review.html', 'request.html'];
const requiredFiles = [...pages, 'i18n.js', 'info.css'];
const missing = requiredFiles.filter((file) => !existsSync(`${root}/${file}`));
const source = Object.fromEntries(requiredFiles.filter((file) => existsSync(`${root}/${file}`)).map((file) => [file, readFileSync(`${root}/${file}`, 'utf8')]));
const checks = [
  ['shared language script exists', source['i18n.js']?.includes("const es = {") && source['i18n.js']?.includes('zenzo-mobile-menu')],
  ['language script loaded across all pages', pages.every((page) => source[page]?.includes('<script src="./i18n.js" defer></script>'))],
  ['privacy layout has safe grid minimums', source['info.css']?.includes('grid-template-columns: minmax(0, 1.5fr) minmax(0, .5fr)')],
  ['path cards protect narrow text', source['info.css']?.includes('.path-item > div { min-width: 0; overflow-wrap: anywhere; }')],
  ['main homepage remains synchronized', source['index.html'] === source['index.pre-kokonut-upgrade.html']],
  ['mobile workspace selectors remain visible and contained', source['index.html']?.includes('.rail { display: flex; width: 100%; min-width: 0; gap: 6px; overflow: hidden;')],
  ['mobile footer can wrap', source['index.html']?.includes('.footer-links { flex-wrap: wrap; justify-content: center;')]
];
const failed = checks.filter(([, ok]) => !ok).map(([name]) => name);
if (missing.length || failed.length) {
  console.error(JSON.stringify({ status: 'failed', missing, failed }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ status: 'passed', pagesValidated: pages.length, checks: checks.map(([name]) => name) }, null, 2));
