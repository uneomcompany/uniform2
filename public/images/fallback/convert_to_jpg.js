// This is a simple script to rename .html files to .jpg
// In a production environment, you would use a tool like Puppeteer to convert HTML to actual images
// For this demo, we'll just copy the files with new extensions

const fs = require('fs');
const path = require('path');

// Get all HTML files in the current directory
const fallbackDir = path.join(__dirname);
const htmlFiles = fs.readdirSync(fallbackDir).filter(file => file.endsWith('.html'));

console.log(`Found ${htmlFiles.length} HTML placeholder files.`);

// Rename each HTML file to the corresponding image format
htmlFiles.forEach(htmlFile => {
  const imageFile = htmlFile.replace('.html', '.jpg');
  
  // Check if the image file already exists
  if (fs.existsSync(path.join(fallbackDir, imageFile))) {
    console.log(`Image already exists, skipping: ${imageFile}`);
    return;
  }
  
  // Copy HTML file to image file
  fs.copyFileSync(
    path.join(fallbackDir, htmlFile), 
    path.join(fallbackDir, imageFile)
  );
  console.log(`Created image placeholder: ${imageFile}`);
});

// Create a single generic fallback image
const genericFallback = path.join(fallbackDir, 'fallback.jpg');
if (!fs.existsSync(genericFallback)) {
  // Copy the generic.jpg if it exists, otherwise use the first available .jpg
  const sourceFile = fs.existsSync(path.join(fallbackDir, 'generic.jpg')) 
    ? path.join(fallbackDir, 'generic.jpg')
    : path.join(fallbackDir, htmlFiles[0].replace('.html', '.jpg'));
    
  fs.copyFileSync(sourceFile, genericFallback);
  console.log(`Created main fallback image: fallback.jpg`);
}

console.log('\nPlaceholder conversion complete!');
console.log('These files are not actual JPG images, but will work as placeholders for test purposes.'); 