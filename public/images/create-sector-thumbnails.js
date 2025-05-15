// Script to create consistent sector thumbnails from existing images
const fs = require('fs');
const path = require('path');

const sectors = [
  {
    name: 'transport',
    source: 'transport_uniforms.png', // source file that exists
    target: 'transport_thumbnail.jpg' // target thumbnail name
  },
  {
    name: 'aviation',
    source: 'cabin-crew-uniforms.jpg', 
    target: 'aviation_thumbnail.jpg'
  },
  {
    name: 'banking_finance',
    source: 'banking_uniforms.jpg', 
    target: 'banking_thumbnail.jpg'
  },
  {
    name: 'industrial',
    source: 'workwear.jpeg', 
    target: 'industrial_thumbnail.jpg'
  },
  {
    name: 'restaurants',
    source: 'chef_uniforms.jpg', 
    target: 'restaurants_thumbnail.jpg'
  },
  {
    name: 'retail',
    source: 'retail_uniforms.jpg', 
    target: 'retail_thumbnail.jpg'
  }
];

// For each sector, copy a representative image to use as thumbnail
sectors.forEach(sector => {
  try {
    const basePath = path.join(__dirname);
    const sectorDir = `${sector.name}_sector`;
    const sectorPath = path.join(basePath, sectorDir);
    
    console.log(`Processing ${sectorPath}`);
    
    // Check if sector directory exists
    if (fs.existsSync(sectorPath)) {
      const sourcePath = path.join(sectorPath, sector.source);
      const targetPath = path.join(sectorPath, sector.target);
      
      // Check if source exists
      if (fs.existsSync(sourcePath)) {
        console.log(`Copying ${sourcePath} to ${targetPath}`);
        fs.copyFileSync(sourcePath, targetPath);
      } else {
        // Fallback - find any image in the directory to use
        const files = fs.readdirSync(sectorPath);
        const imageFiles = files.filter(file => 
          file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
        );
        
        if (imageFiles.length > 0) {
          const sourceFallback = path.join(sectorPath, imageFiles[0]);
          console.log(`Using fallback image: ${sourceFallback} to ${targetPath}`);
          fs.copyFileSync(sourceFallback, targetPath);
        } else {
          console.log(`No images found for ${sectorDir}`);
        }
      }
    } else {
      console.log(`Directory ${sectorDir} not found`);
    }
  } catch (err) {
    console.error(`Error processing ${sector.name}: ${err.message}`);
  }
});

console.log('Sector thumbnails created successfully'); 