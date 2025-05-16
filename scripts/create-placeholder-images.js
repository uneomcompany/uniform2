const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// List of author image files to create
const authorImages = [
  // Arabic names
  'عبدالله_الخالدي.jpg',
  'فاطمة_الرشيد.jpg',
  'عبدالرحمن_الدوسري.jpg',
  'ناصر_الحربي.jpg',
  'محمد_الصالح.jpg',
  'فاطمة_الزهراني.jpg',
  'فيصل_الحربي.jpg',
  'أمينة_الزهراني.jpg',
  'أحمد_الحربي.jpg',
  'خالد_آل_سعود.jpg',
  'نورة_القحطاني.jpg',
  'حسن_القحطاني.jpg',
  'عائشة_الناصر.jpg',
  'ليلى_القحطاني.jpg',
  'أحمد_القحطاني.jpg',
  'فاطمة_العثمان.jpg',
  'فاطمة_الدوسري.jpg',
  'محمد_السعيد.jpg',
  'عمر_الحربي.jpg', 
  'محمد_الغامدي.jpg',
  'سامي_المالكي.jpg',
  'نورة_الزهراني.jpg',
  'ليلى_السليمان.jpg',
  'خالد_العتيبي.jpg',
  'ليلى_الغامدي.jpg',
  'إبراهيم_السليمان.jpg',
  'سارة_القحطاني.jpg',
  'فيصل_الشريف.jpg',
  'فهد_المحمود.jpg',
  'نادية_آل_سعود.jpg',
  
  // English names
  'mohammed-al-otaibi.png',
  'noura-al-khalidi.png',
  'sara-al-rashidi.jpg',
  'sara-al-qahtani.png',
  'fahad-al-anazi.png'
];

// List of expert image files to create
const expertImages = [
  'maritime_expert.jpeg',
  'sustainability_expert.jpeg',
  'tech_expert.jpeg'
];

// Function to create a placeholder image
function createPlaceholderImage(filePath, extension) {
  const width = 400;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Fill background with gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f0f0f0');
  gradient.addColorStop(1, '#d0d0d0');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Draw placeholder text
  ctx.font = '24px Arial';
  ctx.fillStyle = '#666666';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Placeholder Image', width/2, height/2);
  
  // Draw border
  ctx.strokeStyle = '#999999';
  ctx.lineWidth = 8;
  ctx.strokeRect(4, 4, width-8, height-8);
  
  // Get file name for display
  const fileName = path.basename(filePath);
  ctx.font = '16px Arial';
  ctx.fillText(fileName, width/2, height/2 + 40);
  
  // Save as PNG or JPEG based on extension
  let buffer;
  if (extension === 'png') {
    buffer = canvas.toBuffer('image/png');
  } else {
    buffer = canvas.toBuffer('image/jpeg');
  }
  
  fs.writeFileSync(filePath, buffer);
}

// Create author images
const authorDir = path.join(process.cwd(), 'public', 'images', 'author');
authorImages.forEach(image => {
  const imagePath = path.join(authorDir, image);
  const extension = path.extname(image).substring(1).toLowerCase();
  
  if (!fs.existsSync(imagePath) || fs.statSync(imagePath).size < 1000) {
    try {
      createPlaceholderImage(imagePath, extension);
      console.log(`Created ${image}`);
    } catch (error) {
      console.error(`Error creating ${image}:`, error);
    }
  } else {
    console.log(`${image} already exists and has sufficient size`);
  }
});

// Create expert images
const expertsDir = path.join(process.cwd(), 'public', 'images', 'authors');
expertImages.forEach(image => {
  const imagePath = path.join(expertsDir, image);
  const extension = path.extname(image).substring(1).toLowerCase();
  
  if (!fs.existsSync(imagePath) || fs.statSync(imagePath).size < 1000) {
    try {
      createPlaceholderImage(imagePath, extension);
      console.log(`Created ${image}`);
    } catch (error) {
      console.error(`Error creating ${image}:`, error);
    }
  } else {
    console.log(`${image} already exists and has sufficient size`);
  }
});

console.log('All placeholder image files have been created successfully.'); 