// This is a simple script to rename .html files to .jpg
// In a production environment, you would use a tool like Puppeteer to convert HTML to actual images
// For this demo, we'll just rename the files

const fs = require('fs');
const path = require('path');

// Function to walk through directories recursively
function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Recurse into subdirectory
      results = results.concat(walkDir(filePath));
    } else {
      // Add file to results
      results.push(filePath);
    }
  });
  
  return results;
}

// Get all HTML files in the public/images directory
const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const allFiles = walkDir(publicImagesDir);
const htmlFiles = allFiles.filter(file => file.endsWith('.html'));

console.log(`Found ${htmlFiles.length} HTML placeholder files.`);

// Rename each HTML file to the corresponding image format
htmlFiles.forEach(htmlFile => {
  const imageFile = htmlFile.replace('.html', '.jpg');
  
  // Check if the image file already exists
  if (fs.existsSync(imageFile)) {
    console.log(`Image already exists, skipping: ${imageFile}`);
    return;
  }
  
  // Copy HTML file to image file
  fs.copyFileSync(htmlFile, imageFile);
  console.log(`Created image placeholder: ${imageFile}`);
});

console.log('\nPlaceholder conversion complete!');
console.log('Note: In a production environment, use actual images for better quality and performance.'); 