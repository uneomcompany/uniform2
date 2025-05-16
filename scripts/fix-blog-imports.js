const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Function to find all blog post files
async function findBlogPostFiles(dir) {
  const files = [];
  
  async function scan(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        await scan(fullPath);
      } else if (entry.name === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  await scan(dir);
  return files;
}

// Function to fix imports in a file
async function fixImportsInFile(filePath) {
  console.log(`Processing ${filePath}`);
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Count directory levels from app/blog to determine correct import path
    const relativePath = path.relative(path.join(process.cwd(), 'app', 'blog'), path.dirname(filePath));
    const levels = relativePath.split(path.sep).length;
    
    // Create the correct import prefix based on directory depth
    const importPrefix = '../'.repeat(levels);
    
    // Replace various relative import patterns with absolute paths
    let fixedContent = content;
    
    // Replace pattern: import X from '../../components/Y'
    fixedContent = fixedContent.replace(
      /import\s+(\w+)\s+from\s+['"]\.\.\/\.\.\/components\/(\w+)['"]/g,
      `import $1 from '${importPrefix}../components/$2'`
    );
    
    // Replace pattern: import X from '../../../components/Y'
    fixedContent = fixedContent.replace(
      /import\s+(\w+)\s+from\s+['"]\.\.\/\.\.\/\.\.\/components\/(\w+)['"]/g,
      `import $1 from '${importPrefix}../components/$2'`
    );
    
    // Replace pattern: import X from '../../../../components/Y'
    fixedContent = fixedContent.replace(
      /import\s+(\w+)\s+from\s+['"]\.\.\/\.\.\/\.\.\/\.\.\/components\/(\w+)['"]/g,
      `import $1 from '${importPrefix}../components/$2'`
    );
    
    // Write the fixed content back to the file
    await writeFile(filePath, fixedContent, 'utf8');
    console.log(`✅ Fixed imports in ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}: ${error.message}`);
  }
}

// Main function
async function main() {
  try {
    const blogDir = path.join(process.cwd(), 'app', 'blog');
    console.log('Looking for blog posts in:', blogDir);
    
    const blogPostFiles = await findBlogPostFiles(blogDir);
    console.log(`Found ${blogPostFiles.length} blog post files to process`);
    
    for (const file of blogPostFiles) {
      await fixImportsInFile(file);
    }
    
    console.log('All blog post imports have been fixed!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main(); 