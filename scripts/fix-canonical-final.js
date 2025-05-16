const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix canonical URLs
async function fixCanonicalUrls() {
  // Find all page.tsx files
  const pageFiles = glob.sync('app/**/page.tsx');
  console.log(`Found ${pageFiles.length} page files to process`);
  
  let fixedCount = 0;
  
  for (const file of pageFiles) {
    try {
      const fileContent = fs.readFileSync(file, 'utf8');
      
      // Check if the file has a canonical URL
      if (fileContent.includes('canonical:')) {
        // Check if the canonical URL contains 'page.tsx'
        if (fileContent.includes('/page.tsx')) {
          // Fix the canonical URL by removing 'page.tsx'
          const updatedContent = fileContent.replace(
            /(canonical: ['"]https:\/\/abjdeat\.com.*?)\/page\.tsx(['"]\,?)/g,
            '$1$2'
          );
          
          // Write back to file if changed
          if (updatedContent !== fileContent) {
            fs.writeFileSync(file, updatedContent, 'utf8');
            fixedCount++;
            console.log(`✓ Fixed canonical URL in ${file}`);
          }
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  console.log(`\nFixed canonical URLs in ${fixedCount} page files`);
}

// Run the script
fixCanonicalUrls(); 