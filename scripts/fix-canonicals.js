const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix canonical URLs that have backslashes instead of forward slashes
async function fixCanonicalUrls() {
  // Find all page.tsx files
  const pageFiles = glob.sync('app/**/page.tsx');
  console.log(`Found ${pageFiles.length} page files to process`);
  
  let fixedCount = 0;
  
  for (const file of pageFiles) {
    try {
      const fileContent = fs.readFileSync(file, 'utf8');
      
      // Check if the file has a canonical URL with backslash
      if (fileContent.includes('canonical:') && fileContent.includes('\\page.tsx')) {
        // Fix the canonical URL by replacing backslashes with forward slashes
        const updatedContent = fileContent.replace(
          /canonical: ['"]https:\/\/abjdeat\.com\\([^'"]*)['"]/g,
          (match, p1) => {
            const fixedPath = p1.replace(/\\/g, '/');
            return `canonical: 'https://abjdeat.com${fixedPath}'`;
          }
        );
        
        // Also remove page.tsx from the path
        const finalContent = updatedContent.replace(
          /canonical: ['"]https:\/\/abjdeat\.com(\/[^'"]*?)\/page\.tsx['"]/g,
          'canonical: \'https://abjdeat.com$1\''
        );

        // Fix the root path if needed
        const rootFixed = finalContent.replace(
          /canonical: ['"]https:\/\/abjdeat\.com\/page\.tsx['"]/g,
          'canonical: \'https://abjdeat.com/\''
        );
        
        // Write back to file if changed
        if (rootFixed !== fileContent) {
          fs.writeFileSync(file, rootFixed, 'utf8');
          fixedCount++;
          console.log(`✓ Fixed canonical URL in ${file}`);
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