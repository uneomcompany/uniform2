const fs = require('fs');
const path = require('path');

// Define directories to create
const directories = [
  'public/images/sectors',
  'public/images/transport_sector',
  'public/images/aviation_sector',
  'public/images/banking_finance_sector',
  'public/images/industrial_sector',
  'public/images/restaurants_sector',
  'public/images/retail_sector',
  'public/images/testimonials',
  'public/images/blog'
];

// Create directories if they don't exist
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Generate a simple HTML placeholder image with the specified text
const generatePlaceholderHTML = (text, width, height, bgColor = '#3B82F6', textColor = '#FFFFFF') => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${text} Placeholder</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${width}px;
      height: ${height}px;
      background: ${bgColor};
      background: linear-gradient(135deg, ${bgColor} 0%, #1E3A8A 100%);
      color: ${textColor};
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .container {
      padding: 20px;
    }
    h2 {
      margin: 0 0 10px 0;
      font-size: ${Math.max(Math.floor(width / 20), 16)}px;
    }
    p {
      margin: 0;
      opacity: 0.8;
      font-size: ${Math.max(Math.floor(width / 30), 12)}px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>${text}</h2>
    <p>Placeholder Image</p>
  </div>
</body>
</html>
  `.trim();
};

// Define placeholder images to create
const placeholders = [
  // Sector thumbnails
  { path: 'public/images/sectors/transport_thumbnail.jpg', text: 'Transport Sector', width: 600, height: 400 },
  { path: 'public/images/sectors/aviation_thumbnail.jpg', text: 'Aviation Sector', width: 600, height: 400 },
  { path: 'public/images/sectors/banking_finance_thumbnail.jpg', text: 'Banking & Finance', width: 600, height: 400 },
  { path: 'public/images/sectors/industrial_thumbnail.jpg', text: 'Industrial Sector', width: 600, height: 400 },
  { path: 'public/images/sectors/restaurants_thumbnail.jpg', text: 'Restaurants Sector', width: 600, height: 400 },
  { path: 'public/images/sectors/retail_thumbnail.jpg', text: 'Retail Sector', width: 600, height: 400 },
  
  // Hero images
  { path: 'public/images/sectors/sectors_hero.jpg', text: 'Industry Sectors Hero', width: 1200, height: 800 },
  { path: 'public/images/sectors/transport_hero.jpg', text: 'Transport Sector Hero', width: 1200, height: 800 },
  { path: 'public/images/sectors/aviation_hero.jpg', text: 'Aviation Sector Hero', width: 1200, height: 800 },
  { path: 'public/images/sectors/banking_finance_hero.jpg', text: 'Banking & Finance Hero', width: 1200, height: 800 },
  { path: 'public/images/sectors/industrial_hero.jpg', text: 'Industrial Sector Hero', width: 1200, height: 800 },
  { path: 'public/images/sectors/restaurants_hero.jpg', text: 'Restaurants Sector Hero', width: 1200, height: 800 },
  { path: 'public/images/sectors/retail_hero.jpg', text: 'Retail Sector Hero', width: 1200, height: 800 },
  
  // Transport sector images
  { path: 'public/images/sectors/transport_bus_driver.jpg', text: 'Bus Driver Uniforms', width: 800, height: 600 },
  { path: 'public/images/sectors/transport_taxi_driver.jpg', text: 'Taxi Driver Uniforms', width: 800, height: 600 },
  { path: 'public/images/sectors/transport_service_staff.jpg', text: 'Transport Service Staff', width: 800, height: 600 },
  { path: 'public/images/sectors/transport_maintenance.jpg', text: 'Maintenance Crew', width: 800, height: 600 },
  { path: 'public/images/sectors/transport_safety_vest.jpg', text: 'Safety Vests', width: 800, height: 600 },
  { path: 'public/images/sectors/transport_complete_set.jpg', text: 'Complete Uniform Sets', width: 800, height: 600 },
  { path: 'public/images/sectors/transport_driver.jpg', text: 'Transport Driver', width: 800, height: 600 },
  { path: 'public/images/sectors/transport_service.jpg', text: 'Transport Service', width: 800, height: 600 },
  { path: 'public/images/sectors/transport_comfortable.jpg', text: 'Comfortable Driving Wear', width: 800, height: 600 },
  { path: 'public/images/sectors/transport_fleet.jpg', text: 'Transport Fleet', width: 800, height: 600 },
  
  // Retail sector images
  { path: 'public/images/sectors/retail_sales_associate.jpg', text: 'Sales Associate Uniforms', width: 800, height: 600 },
  { path: 'public/images/sectors/retail_cashier.jpg', text: 'Cashier Uniforms', width: 800, height: 600 },
  { path: 'public/images/sectors/retail_manager.jpg', text: 'Store Manager Uniforms', width: 800, height: 600 },
  { path: 'public/images/sectors/retail_merchandiser.jpg', text: 'Visual Merchandiser Uniforms', width: 800, height: 600 },
  { path: 'public/images/sectors/retail_security.jpg', text: 'Retail Security Uniforms', width: 800, height: 600 },
  { path: 'public/images/sectors/retail_accessories.jpg', text: 'Retail Accessories', width: 800, height: 600 },
  { path: 'public/images/sectors/retail_sales_floor.jpg', text: 'Retail Sales Floor', width: 800, height: 600 },
  { path: 'public/images/sectors/retail_cashier_counter.jpg', text: 'Cashier Counter', width: 800, height: 600 },
  { path: 'public/images/sectors/retail_manager_customer.jpg', text: 'Manager with Customer', width: 800, height: 600 },
  { path: 'public/images/sectors/retail_merchandising.jpg', text: 'Visual Merchandising', width: 800, height: 600 },
  
  // Testimonial images
  { path: 'public/images/testimonials/transport-client.jpg', text: 'Transport Client', width: 400, height: 600, bgColor: '#475569' },
  { path: 'public/images/testimonials/aviation-client.jpg', text: 'Aviation Client', width: 400, height: 600, bgColor: '#475569' },
  { path: 'public/images/testimonials/banking-client.jpg', text: 'Banking Client', width: 400, height: 600, bgColor: '#475569' },
  { path: 'public/images/testimonials/industrial-client.jpg', text: 'Industrial Client', width: 400, height: 600, bgColor: '#475569' },
  { path: 'public/images/testimonials/restaurants-client.jpg', text: 'Restaurant Client', width: 400, height: 600, bgColor: '#475569' },
  { path: 'public/images/testimonials/retail-client.jpg', text: 'Retail Client', width: 400, height: 600, bgColor: '#475569' },
  
  // Blog images
  { path: 'public/images/blog/banking_trends.jpg', text: 'Banking Uniform Trends', width: 800, height: 500, bgColor: '#166534' },
  { path: 'public/images/blog/airline_evolution.jpg', text: 'Airline Uniform Evolution', width: 800, height: 500, bgColor: '#1E40AF' },
  { path: 'public/images/blog/industrial_workwear.jpg', text: 'Industrial Workwear', width: 800, height: 500, bgColor: '#9A3412' },
  
  // Home page
  { path: 'public/images/hero-uniform.jpg', text: 'Saudi Uniform Solutions', width: 1600, height: 900, bgColor: '#0F172A' }
];

// Create HTML files for all placeholders
placeholders.forEach(placeholder => {
  const htmlContent = generatePlaceholderHTML(
    placeholder.text, 
    placeholder.width, 
    placeholder.height, 
    placeholder.bgColor, 
    placeholder.textColor
  );
  
  // Save html file to public folder as .html
  const htmlPath = placeholder.path.replace(/\.\w+$/, '.html');
  fs.writeFileSync(htmlPath, htmlContent);
  console.log(`Created HTML placeholder: ${htmlPath}`);
});

console.log('\nPlaceholder generation complete!');
console.log('\nNOTE: For a production environment, you would convert these HTML files to images using');
console.log('a tool like Puppeteer, but for development these HTML files work as placeholders.');
console.log('To use, manually rename the .html files to .jpg or create a script to handle this conversion.') 