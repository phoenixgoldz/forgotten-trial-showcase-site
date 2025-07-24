const fs = require('fs');
const path = require('path');

// Find the built CSS and JS files
const distDir = './dist';
const assetsDir = path.join(distDir, 'assets');

// Get all CSS and JS files
const cssFiles = fs.readdirSync(assetsDir).filter(file => file.endsWith('.css'));
const jsFiles = fs.readdirSync(assetsDir).filter(file => file.endsWith('.js') && !file.includes('legacy'));

// Read the current index.html
const indexPath = path.join(distDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Find the main CSS and JS files (should be the largest ones typically)
const mainCss = cssFiles[0]; // Usually there's only one CSS file
const mainJs = jsFiles.find(file => file.includes('main') || file.includes('index')) || jsFiles[0];

console.log('Found CSS file:', mainCss);
console.log('Found JS file:', mainJs);

// Update the HTML content to reference the correct files
if (mainCss) {
  // Remove existing CSS links and add new one
  indexContent = indexContent.replace(/<link[^>]*\.css[^>]*>/g, '');
  indexContent = indexContent.replace(
    '</head>',
    `  <link rel="stylesheet" crossorigin href="./assets/${mainCss}">\n</head>`
  );
}

if (mainJs) {
  // Replace the script tag and ensure proper module loading
  indexContent = indexContent.replace(
    /<script[^>]*src="[^"]*main\.tsx[^"]*"[^>]*><\/script>/g,
    ''
  );
  indexContent = indexContent.replace(
    '</body>',
    `  <script type="module" crossorigin src="./assets/${mainJs}"></script>\n</body>`
  );
}

// Write the updated index.html
fs.writeFileSync(indexPath, indexContent);

console.log('✅ GitHub Pages build completed successfully!');
console.log('📁 Files in dist/assets:');
fs.readdirSync(assetsDir).forEach(file => {
  console.log(`   - ${file}`);
});