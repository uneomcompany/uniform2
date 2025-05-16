const fs = require('fs');
const path = require('path');

// Output directory of Next.js static export
const outDir = path.join(process.cwd(), 'out');

// Copy index.html to 404.html to handle client-side routing
try {
  console.log('Creating 404.html for client-side routing...');
  const indexContent = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
  fs.writeFileSync(path.join(outDir, '404.html'), indexContent);
  console.log('Successfully created 404.html');
} catch (err) {
  console.error('Error creating 404.html:', err);
}

// Ensure _redirects is copied to the output directory
try {
  console.log('Ensuring _redirects file is in the output directory...');
  if (fs.existsSync(path.join(process.cwd(), 'public', '_redirects'))) {
    const redirectsContent = fs.readFileSync(path.join(process.cwd(), 'public', '_redirects'), 'utf8');
    fs.writeFileSync(path.join(outDir, '_redirects'), redirectsContent);
    console.log('Successfully copied _redirects file');
  } else {
    console.log('No _redirects file found in public directory');
  }
} catch (err) {
  console.error('Error handling _redirects file:', err);
}

console.log('Static export post-processing completed'); 