const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

// Create slider images for categories
async function createCategorySliders() {
  try {
    // Define categories and their colors
    const categories = [
      { name: 'transport', color: '#1E40AF', arabicName: 'قطاع النقل' },
      { name: 'aviation', color: '#0369A1', arabicName: 'قطاع الطيران' },
      { name: 'banking', color: '#047857', arabicName: 'القطاع المصرفي' },
      { name: 'industrial', color: '#B45309', arabicName: 'القطاع الصناعي' },
      { name: 'restaurants', color: '#B91C1C', arabicName: 'قطاع المطاعم' },
      { name: 'retail', color: '#7E22CE', arabicName: 'قطاع التجزئة' }
    ];

    // Create images directory if it doesn't exist
    const categoryDir = path.join(__dirname, 'category_name');
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    // Create slider images for each category
    for (const category of categories) {
      // Create slider image
      const width = 1200;
      const height = 600;
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext('2d');

      // Fill background with gradient
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, category.color);
      gradient.addColorStop(1, adjustColor(category.color, -30));
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      
      // Horizontal lines
      for (let i = 0; i < height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }
      
      // Vertical lines
      for (let i = 0; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }

      // Add pattern elements
      addPatternElements(ctx, width, height, category.name);

      // Add text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'bold 72px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(category.arabicName, width / 2, height / 2 - 40);

      // Add subtitle
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '32px Arial';
      ctx.fillText('حلول أزياء متخصصة', width / 2, height / 2 + 40);

      // Save image
      const buffer = canvas.toBuffer('image/jpeg');
      fs.writeFileSync(path.join(categoryDir, `${category.name}_slider.jpg`), buffer);
      console.log(`Created slider image for ${category.name}`);
    }

    // Create a main slider image
    const mainWidth = 1600;
    const mainHeight = 800;
    const mainCanvas = createCanvas(mainWidth, mainHeight);
    const mainCtx = mainCanvas.getContext('2d');

    // Fill background with gradient
    const mainGradient = mainCtx.createLinearGradient(0, 0, mainWidth, 0);
    mainGradient.addColorStop(0, '#0F172A');
    mainGradient.addColorStop(1, '#1E3A8A');
    mainCtx.fillStyle = mainGradient;
    mainCtx.fillRect(0, 0, mainWidth, mainHeight);

    // Add decorative elements
    addDecorativeElements(mainCtx, mainWidth, mainHeight);

    // Add main text
    mainCtx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    mainCtx.font = 'bold 92px Arial';
    mainCtx.textAlign = 'center';
    mainCtx.textBaseline = 'middle';
    mainCtx.fillText('حلول الأزياء الموحدة', mainWidth / 2, mainHeight / 2 - 60);

    // Add subtitle
    mainCtx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    mainCtx.font = '42px Arial';
    mainCtx.fillText('مصممة خصيصًا لاحتياجات عملك', mainWidth / 2, mainHeight / 2 + 40);

    // Save main slider image
    const mainBuffer = mainCanvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join(categoryDir, 'main_slider.jpg'), mainBuffer);
    console.log('Created main slider image');

    console.log('All slider images created successfully!');
  } catch (error) {
    console.error('Error creating slider images:', error);
  }
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
  // Convert hex to RGB
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);

  // Adjust brightness
  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Add pattern elements based on category
function addPatternElements(ctx, width, height, category) {
  // Add some random shapes based on category
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  
  // Different patterns for different categories
  switch (category) {
    case 'transport':
      // Draw vehicle-like shapes
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 60 + 20;
        
        ctx.beginPath();
        ctx.roundRect(x, y, size * 2, size, 10);
        ctx.fill();
      }
      break;
      
    case 'aviation':
      // Draw airplane-like shapes
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 80 + 40;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size * 0.8, y + size * 0.3);
        ctx.closePath();
        ctx.fill();
      }
      break;
      
    case 'banking':
      // Draw currency-like symbols
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 40 + 20;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
      
    case 'industrial':
      // Draw gear-like shapes
      for (let i = 0; i < 12; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 50 + 30;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = adjustColor(ctx.fillStyle, -20);
        ctx.fill();
      }
      break;
      
    case 'restaurants':
      // Draw plate/utensil-like shapes
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 60 + 30;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
      
    case 'retail':
      // Draw shopping bag-like shapes
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 70 + 30;
        
        ctx.beginPath();
        ctx.rect(x, y, size, size * 1.2);
        ctx.fill();
      }
      break;
      
    default:
      // Default pattern
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 50 + 20;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
  }
}

// Add decorative elements to main slider
function addDecorativeElements(ctx, width, height) {
  // Add flowing curves
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 10;
  
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(0, Math.random() * height);
    
    // Create a bezier curve across the canvas
    const cp1x = width * 0.3;
    const cp1y = Math.random() * height;
    const cp2x = width * 0.6;
    const cp2y = Math.random() * height;
    const endX = width;
    const endY = Math.random() * height;
    
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
    ctx.stroke();
  }
  
  // Add some particles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 6 + 1;
    
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Add some geometric shapes
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let i = 0; i < 15; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 150 + 50;
    
    // Randomly choose between circle, square, and triangle
    const shape = Math.floor(Math.random() * 3);
    
    switch (shape) {
      case 0: // Circle
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 1: // Square
        ctx.beginPath();
        ctx.rect(x - size / 2, y - size / 2, size, size);
        ctx.fill();
        break;
        
      case 2: // Triangle
        ctx.beginPath();
        ctx.moveTo(x, y - size / 2);
        ctx.lineTo(x + size / 2, y + size / 2);
        ctx.lineTo(x - size / 2, y + size / 2);
        ctx.closePath();
        ctx.fill();
        break;
    }
  }
}

// Run the function
createCategorySliders(); 