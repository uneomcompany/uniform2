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
        // Process URL path from file path
        let pagePath = file
          .replace(/^app/, '') // Remove 'app' prefix
          .replace(/\/page\.tsx$/, '') // Remove '/page.tsx' suffix
          .replace(/\\/g, '/'); // Convert backslashes to forward slashes
          
        // Handle index routes
        if (pagePath === '') pagePath = '/';
        
        // Check if the canonical URL is incorrect
        const correctCanonical = `canonical: 'https://abjdeat.com${pagePath}'`;
        
        if (!fileContent.includes(correctCanonical)) {
          // Fix the canonical URL by replacing the existing one
          const updatedContent = fileContent.replace(
            /canonical: ['"]https:\/\/abjdeat\.com[^'"]*['"]/g,
            correctCanonical
          );
          
          // Write back to file if changed
          if (updatedContent !== fileContent) {
            fs.writeFileSync(file, updatedContent, 'utf8');
            fixedCount++;
            console.log(`✓ Fixed canonical URL in ${file} -> ${pagePath}`);
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