const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Base URL for canonical tags
const BASE_URL = 'https://abjdeat.com';

// Function to add canonical URL to metadata
function addCanonicalToMetadata(fileContent, pagePath) {
  // Create canonical URL
  const canonicalUrl = `${BASE_URL}${pagePath}`;
  
  // Check if the file already has metadata
  if (fileContent.includes('export const metadata')) {
    // Add canonical URL to existing metadata if it doesn't already have one
    if (!fileContent.includes('canonical:')) {
      fileContent = fileContent.replace(
        /export const metadata = {/,
        `export const metadata = {\n  canonical: '${canonicalUrl}',`
      );
    }
  } else {
    // Add new metadata with canonical URL before the component definition
    const metadataBlock = `export const metadata = {
  canonical: '${canonicalUrl}',
  // Preserving existing page title and description
  ...(typeof metadata !== 'undefined' ? metadata : {})
};\n\n`;
    
    // Find the component export position
    const exportDefaultPos = fileContent.indexOf('export default');
    if (exportDefaultPos !== -1) {
      // Insert before the component definition
      fileContent = fileContent.slice(0, exportDefaultPos) + metadataBlock + fileContent.slice(exportDefaultPos);
    }
  }
  
  return fileContent;
}

// Function to process file paths and extract URL paths
function getPagePath(filePath) {
  // Convert the file path to a URL path
  let pagePath = filePath
    .replace(/^app/, '') // Remove 'app' prefix
    .replace(/\/page\.tsx$/, '') // Remove '/page.tsx' suffix
    
  // Handle index routes
  if (pagePath === '') pagePath = '/';
  
  return pagePath;
}

// Main function to process all page files
async function addCanonicalToAllPages() {
  // Find all page.tsx files
  const pageFiles = glob.sync('app/**/page.tsx');
  console.log(`Found ${pageFiles.length} page files to process`);
  
  let modifiedCount = 0;
  
  for (const file of pageFiles) {
    try {
      const fileContent = fs.readFileSync(file, 'utf8');
      const pagePath = getPagePath(file);
      
      // Skip if the page already has a canonical tag
      if (fileContent.includes('canonical:')) {
        console.log(`✓ ${file} already has canonical URL`);
        continue;
      }
      
      const updatedContent = addCanonicalToMetadata(fileContent, pagePath);
      
      // Write back to file if changed
      if (updatedContent !== fileContent) {
        fs.writeFileSync(file, updatedContent, 'utf8');
        modifiedCount++;
        console.log(`✓ Added canonical URL to ${file} -> ${pagePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  console.log(`\nAdded canonical URLs to ${modifiedCount} page files`);
}

// Run the script
addCanonicalToAllPages(); 