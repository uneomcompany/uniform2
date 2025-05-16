const fs = require('fs');
const path = require('path');

// Path to the problematic file
const filePath = path.join(process.cwd(), 'app', 'blog', 'buying-guides', 'how-to-choose-reliable-uniform-supplier-saudi-arabia', 'page.tsx');

// Read the file content
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  // Fix the import paths - ensure they're using the correct number of "../"
  // The file is in app/blog/buying-guides/how-to-choose... so we need "../../../components/"
  const fixedContent = data.replace(
    /import\s+(\w+)\s+from\s+['"]\.\.+\/+components\/([^'"]+)['"]/g,
    `import $1 from '../../../components/$2'`
  );

  // Write the fixed content back to the file
  fs.writeFile(filePath, fixedContent, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error(`Error writing file: ${writeErr.message}`);
      process.exit(1);
    }
    console.log(`✅ Successfully fixed imports in ${filePath}`);
  });
}); 