#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const EXPECTED = {
    '@alfalab/core-components': '50.0.2-478ceb3c58abab41c83649575eecead6d0d49cad',
    '@alfalab/core-components-calendar': '9.0.2-abd29ceb1bf74b8e9bd542a8613956f72698cc8a',
};

let ok = true;
for (const [pkg, expected] of Object.entries(EXPECTED)) {
    const pkgPath = path.join('node_modules', pkg, 'package.json');
    if (!fs.existsSync(pkgPath)) {
        console.error(`❌ ${pkg}: not found`);
        ok = false;
        continue;
    }
    const actual = JSON.parse(fs.readFileSync(pkgPath, 'utf8')).version;
    if (actual !== expected) {
        console.error(`❌ ${pkg}: expected ${expected}, got ${actual}`);
        ok = false;
    } else {
        console.log(`✓ ${pkg}: ${actual}`);
    }
}

if (!ok) {
    process.exit(1);
}
