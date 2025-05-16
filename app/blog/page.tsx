import Link from 'next/link'
import Image from 'next/image'
import BlogPostCard from '../components/BlogPostCard'

// Import LazyPosts directly, we'll handle the client-side loading properly
import LazyPosts from '../../components/LazyPosts'

export const metadata = {
  title: 'Blog - Saudi Uniform Solutions',
  description: 'Explore articles and insights about uniform solutions for various sectors in Saudi Arabia including transport, aviation, banking, industrial, restaurants, and retail.',
}

// Featured posts from each sector
const featuredPosts = [
  {
    title: 'On the Move with Style: 2025 Uniform Trends for Saudi Arabia\'s Transport Sector',
    imageSrc: '/images/transport_sector/transport_uniforms.png',
    url: '/blog/transport-uniform-trends-2025',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Elevating Sky-High Standards: 2025 Uniform Trends for Saudi Aviation Professionals',
    imageSrc: '/images/aviation_sector/aviation_uniforms.jpg',
    url: '/blog/aviation-uniform-trends-2025',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Projecting Trust & Professionalism: 2025 Uniform Styles for Saudi Banks',
    imageSrc: '/images/banking_finance_sector/bank_uniforms.jpg',
    url: '/blog/bank-uniform-styles-2025',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Safety First, Style Second: 2025\'s Top Industrial Uniforms for Saudi Arabia',
    imageSrc: '/images/industrial_sector/industrial_uniforms.jpeg',
    url: '/blog/top-industrial-uniforms-2025',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Dishing Out Style: 2025 Restaurant Uniform Trends for Saudi Arabia',
    imageSrc: '/images/restaurants_sector/restaurant_uniforms.jpg',
    url: '/blog/restaurant-uniform-trends-2025',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Dressing for Sales: Top Retail Uniform Trends in Saudi Arabia for 2025',
    imageSrc: '/images/retail_sector/retail_uniforms.jpg',
    url: '/blog/retail-uniform-trends-2025',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  }
];

// All posts from all sectors
const allPosts = [
  // 1. Aviation Sector
  {
    title: 'Elevating Sky-High Standards: 2025 Uniform Trends for Saudi Aviation Professionals',
    imageSrc: '/images/aviation_sector/aviation_uniforms.jpg',
    url: '/blog/aviation-uniform-trends-2025',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Beyond the Cabin Crew: Comprehensive Uniform Solutions for Saudi Airports in 2025',
    imageSrc: '/images/aviation_sector/air_crew_attire.jpg',
    url: '/blog/comprehensive-aviation-uniform-solutions',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Safety, Style, and Comfort: Designing Pilot & Flight Crew Uniforms for KSA Airlines (2025)',
    imageSrc: '/images/aviation_sector/pilot_uniforms.jpg',
    url: '/blog/pilot-flight-crew-uniforms-ksa',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'The Importance of Ground Staff Uniforms for Brand Identity at Saudi Airports',
    imageSrc: '/images/aviation_sector/ground_crew_uniforms.jpeg',
    url: '/blog/ground-staff-uniforms-brand-identity',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Choosing Durable and Functional Uniforms for Aviation Maintenance Crews in KSA',
    imageSrc: '/images/aviation_sector/aircraft_technician_wear.jpeg',
    url: '/blog/aviation-maintenance-crew-uniforms',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Global Best Practices in Aviation Uniforms: What Saudi Carriers Can Learn (2025)',
    imageSrc: '/images/aviation_sector/international_standard_aviation_wear.jpg',
    url: '/blog/aviation-uniform-best-practices',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'The Psychological Impact of Professional Aviation Uniforms on Passenger Trust in KSA',
    imageSrc: '/images/aviation_sector/aviation_uniform_visual_identity.jpeg',
    url: '/blog/aviation-uniforms-passenger-trust',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Integrating Technology: Smart Uniforms for Enhanced Efficiency in Saudi Aviation (2025)',
    imageSrc: '/images/aviation_sector/aviation_industry_uniforms.jpeg',
    url: '/blog/smart-aviation-uniforms',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Uniform Requirements for Private Jet & VIP Aviation Services in Saudi Arabia',
    imageSrc: '/images/aviation_sector/corporate_aviation_attire.jpg',
    url: '/blog/vip-aviation-uniform-requirements',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Sourcing Guide: Finding Top Aviation Uniform Suppliers in Saudi Arabia (2025)',
    imageSrc: '/images/aviation_sector/airline_uniform_suppliers.jpeg',
    url: '/blog/aviation-uniform-suppliers-ksa',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Customizing Aviation Uniforms to Reflect Saudi Airline Branding and Heritage',
    imageSrc: '/images/aviation_sector/aviation_logo_embroidery.jpeg',
    url: '/blog/customizing-aviation-uniforms-branding',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'From Pilots to Porters: Unified Uniform Strategies for Saudi Aviation Hubs',
    imageSrc: '/images/aviation_sector/complete_aviation_uniform_solutions.jpg',
    url: '/blog/unified-aviation-uniform-strategies',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Sustainability in the Skies: Eco-Friendly Uniform Options for Saudi Airlines (2025)',
    imageSrc: '/images/aviation_sector/aviation_workwear.jpeg',
    url: '/blog/eco-friendly-aviation-uniforms',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'Ensuring Compliance: Meeting GACA and International Standards for Aviation Uniforms in KSA',
    imageSrc: '/images/aviation_sector/aviation_clothing.jpg',
    url: '/blog/aviation-uniform-compliance',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  {
    title: 'The Future of Aviation Workwear: Innovations for the Saudi Market in 2025',
    imageSrc: '/images/aviation_sector/aviation_uniform_design.jpeg',
    url: '/blog/future-aviation-workwear-innovations',
    category: 'Aviation',
    categoryColor: 'bg-sky-600'
  },
  
  // 2. Banking & Finance Sector
  {
    title: 'Projecting Trust & Professionalism: 2025 Uniform Styles for Saudi Banks',
    imageSrc: '/images/banking_finance_sector/bank_uniforms.jpg',
    url: '/blog/bank-uniform-styles-2025',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'The Evolution of Banker Attire: Modern Uniform Solutions for KSA Finance Sector (2025)',
    imageSrc: '/images/banking_finance_sector/banking_uniforms.jpg',
    url: '/blog/modern-banking-uniform-solutions',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Dressing for Success: How Uniforms Impact Customer Perception in Saudi Banks',
    imageSrc: '/images/banking_finance_sector/banking_attire.jpeg',
    url: '/blog/bank-uniforms-customer-perception',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Choosing the Right Fabrics for Comfortable and Professional Banking Uniforms in KSA\'s Climate',
    imageSrc: '/images/banking_finance_sector/premium_uniform_fabrics.jpeg',
    url: '/blog/banking-uniform-fabrics-ksa',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Custom Corporate Wear: Tailoring Uniforms for Saudi Financial Institutions',
    imageSrc: '/images/banking_finance_sector/custom_bank_uniforms.jpg',
    url: '/blog/custom-financial-institution-uniforms',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Uniform Guidelines for Tellers, Customer Service, and Management in Saudi Banks',
    imageSrc: '/images/banking_finance_sector/customer_service_uniforms.jpg',
    url: '/blog/bank-uniform-guidelines',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'The ROI of High-Quality Uniforms for Employee Morale in KSA Banking',
    imageSrc: '/images/banking_finance_sector/bank_confidence_boosting_attire.jpeg',
    url: '/blog/banking-uniforms-employee-morale',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Balancing Tradition and Modernity in Saudi Banking Uniform Design (2025)',
    imageSrc: '/images/banking_finance_sector/bank_uniform_visual_identity.jpeg',
    url: '/blog/traditional-modern-banking-uniforms',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Subtle Branding: Incorporating Bank Logos Elegantly into KSA Uniforms',
    imageSrc: '/images/banking_finance_sector/bank_employee_uniforms.jpg',
    url: '/blog/subtle-bank-logo-branding',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Uniform Solutions for Islamic Finance Institutions in Saudi Arabia (2025)',
    imageSrc: '/images/banking_finance_sector/financial_institution_uniforms.jpeg',
    url: '/blog/islamic-finance-uniform-solutions',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'A Guide to Selecting Uniform Suppliers for the Saudi Banking & Finance Sector',
    imageSrc: '/images/banking_finance_sector/banking_attire_supply.jpg',
    url: '/blog/banking-uniform-suppliers-guide',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Ensuring a Cohesive Brand Image Across All Branches with Uniform Standards in KSA',
    imageSrc: '/images/banking_finance_sector/branch_uniform_supply_management.jpg',
    url: '/blog/cohesive-bank-branch-uniforms',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'The Future of Financial Workwear: Smart & Sustainable Options for Saudi Banks (2025)',
    imageSrc: '/images/banking_finance_sector/financial_uniforms.jpg',
    url: '/blog/future-financial-workwear',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Uniforms as a Tool for Enhancing Security and Identification in KSA Banks',
    imageSrc: '/images/banking_finance_sector/bank_manager_uniforms.jpeg',
    url: '/blog/bank-uniforms-security-identification',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  {
    title: 'Beyond the Suit: Accessory and Detail Trends for Saudi Banking Uniforms in 2025',
    imageSrc: '/images/banking_finance_sector/formal_blazers.jpeg',
    url: '/blog/banking-uniform-accessories-trends',
    category: 'Banking & Finance',
    categoryColor: 'bg-emerald-600'
  },
  
  // 3. Industrial Sector
  {
    title: 'Safety First, Style Second: 2025\'s Top Industrial Uniforms for Saudi Arabia',
    imageSrc: '/images/industrial_sector/industrial_uniforms.jpeg',
    url: '/blog/top-industrial-uniforms-2025',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'High-Visibility & Protective Workwear: Essential Uniforms for KSA Industrial Sites',
    imageSrc: '/images/industrial_sector/high_visibility_clothin.jpeg',
    url: '/blog/high-visibility-protective-workwear',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Choosing Durable and Flame-Resistant Uniforms for Saudi Oil & Gas Workers (2025)',
    imageSrc: '/images/industrial_sector/fire_resistant_uniforms.jpeg',
    url: '/blog/flame-resistant-oil-gas-uniforms',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'The Importance of Fit and Comfort in Industrial Uniforms for KSA Workforce Productivity',
    imageSrc: '/images/industrial_sector/durable_work_clothing.jpeg',
    url: '/blog/comfortable-industrial-uniforms',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Custom Industrial Uniforms: Meeting Specific Safety Standards in Saudi Arabia',
    imageSrc: '/images/industrial_sector/custom_workwear_tailoring.jpeg',
    url: '/blog/custom-industrial-safety-uniforms',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Uniform Solutions for Manufacturing Plants and Factories in KSA (2025 Trends)',
    imageSrc: '/images/industrial_sector/manufacturing_sector_uniforms.jpeg',
    url: '/blog/manufacturing-plant-uniform-solutions',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Innovations in Industrial Workwear: Smart Fabrics and Integrated Tech for Saudi Arabia',
    imageSrc: '/images/industrial_sector/specification_compliant_workwear.jpeg',
    url: '/blog/smart-fabric-industrial-workwear',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Meeting Saudi Labor Law Requirements for Protective Industrial Uniforms',
    imageSrc: '/images/industrial_sector/protective_clothing.jpeg',
    url: '/blog/labor-law-protective-uniforms',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'A Comprehensive Guide to PPE and Uniform Integration for KSA Industrial Safety',
    imageSrc: '/images/industrial_sector/safety_helmets.jpg',
    url: '/blog/ppe-uniform-integration-guide',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Branding on the Factory Floor: Professionalizing Your Saudi Industrial Team with Uniforms',
    imageSrc: '/images/industrial_sector/logo_embroidery.jpeg',
    url: '/blog/factory-floor-branding-uniforms',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Sourcing Heavy-Duty Industrial Uniforms in Saudi Arabia: What to Look For (2025)',
    imageSrc: '/images/industrial_sector/heavy_duty_industrial_fabrics.jpeg',
    url: '/blog/sourcing-heavy-duty-uniforms',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Uniforms for Construction and Engineering Projects in Saudi Arabia\'s Giga-Projects (2025 Focus)',
    imageSrc: '/images/industrial_sector/engineer_wear.jpeg',
    url: '/blog/construction-engineering-uniforms',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Sustainability in Action: Eco-Friendly and Recyclable Industrial Uniforms for KSA',
    imageSrc: '/images/industrial_sector/canvas_denim_workwear.jpeg',
    url: '/blog/eco-friendly-industrial-uniforms',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'Specialized Uniforms for Mining and Heavy Industry Sectors in Saudi Arabia',
    imageSrc: '/images/industrial_sector/oil_gas_worker_uniforms.jpeg',
    url: '/blog/mining-heavy-industry-uniforms',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  {
    title: 'The Future of Industrial Uniforms: Enhanced Protection and Comfort for KSA (2025)',
    imageSrc: '/images/industrial_sector/industrial_uniform_design.jpg',
    url: '/blog/future-industrial-uniform-innovations',
    category: 'Industrial',
    categoryColor: 'bg-orange-600'
  },
  
  // 4. Restaurants Sector
  {
    title: 'Dishing Out Style: 2025 Restaurant Uniform Trends for Saudi Arabia',
    imageSrc: '/images/restaurants_sector/restaurant_uniforms.jpg',
    url: '/blog/restaurant-uniform-trends-2025',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'From Fine Dining to Fast Casual: Choosing the Right Uniforms for Your KSA Eatery',
    imageSrc: '/images/restaurants_sector/restaurant_service_wear.jpeg',
    url: '/blog/restaurant-uniform-categories',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Chef Uniforms in Saudi Arabia: Balancing Professionalism, Comfort, and Hygiene (2025)',
    imageSrc: '/images/restaurants_sector/chef_jackets.jpeg',
    url: '/blog/chef-uniforms-professionalism-hygiene',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Waitstaff Uniforms That Enhance Customer Experience in Saudi Restaurants',
    imageSrc: '/images/restaurants_sector/waiter_uniforms.jpeg',
    url: '/blog/waitstaff-uniforms-customer-experience',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'The Impact of Uniform Color and Style on Restaurant Ambiance in KSA',
    imageSrc: '/images/restaurants_sector/restaurant_identity_uniforms.jpeg',
    url: '/blog/restaurant-uniform-color-ambiance',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Aprons, Headwear, and Accessories: Completing Your Saudi Restaurant Uniform Look',
    imageSrc: '/images/restaurants_sector/chef_hats.jpeg',
    url: '/blog/restaurant-uniform-accessories',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Custom Uniform Design to Reflect Your KSA Restaurant\'s Brand and Theme',
    imageSrc: '/images/restaurants_sector/restaurant_logo_embroidery.jpeg',
    url: '/blog/custom-restaurant-uniform-design',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Choosing Stain-Resistant and Easy-to-Clean Fabrics for KSA Food Service Uniforms',
    imageSrc: '/images/restaurants_sector/stain_resistant_uniforms.jpeg',
    url: '/blog/stain-resistant-restaurant-fabrics',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Uniforms for Outdoor Dining and Cafe Staff in Saudi Arabia\'s Climate (2025)',
    imageSrc: '/images/restaurants_sector/cafe_uniforms.jpeg',
    url: '/blog/outdoor-dining-cafe-uniforms',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Sourcing High-Quality Restaurant Uniforms in Riyadh, Jeddah & Dammam (2025 Guide)',
    imageSrc: '/images/restaurants_sector/restaurant_uniforms_riyadh.jpeg',
    url: '/blog/restaurant-uniforms-sourcing-guide',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'The ROI of Investing in Stylish Uniforms for Staff Morale in Saudi Restaurants',
    imageSrc: '/images/restaurants_sector/restaurant_service_wear_supplier.jpeg',
    url: '/blog/restaurant-uniforms-staff-morale',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Balancing Modern Trends with Cultural Sensitivities in KSA Restaurant Uniforms',
    imageSrc: '/images/restaurants_sector/modern_restaurant_wear.jpg',
    url: '/blog/modern-cultural-restaurant-uniforms',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Uniforms for Delivery Drivers: Branding Your KSA Restaurant on the Go (2025)',
    imageSrc: '/images/restaurants_sector/delivery_staff_uniforms.jpeg',
    url: '/blog/restaurant-delivery-driver-uniforms',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'Sustainable and Ethical Uniform Choices for Eco-Conscious Saudi Restaurants',
    imageSrc: '/images/restaurants_sector/restaurant_uniform_fabrics.jpeg',
    url: '/blog/sustainable-restaurant-uniforms',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  {
    title: 'The Future of Restaurant Attire: Tech-Infused and Adaptable Uniforms for KSA (2025)',
    imageSrc: '/images/restaurants_sector/restaurant_uniform_design.jpg',
    url: '/blog/future-restaurant-uniform-technology',
    category: 'Restaurants',
    categoryColor: 'bg-red-600'
  },
  
  // 5. Retail Sector
  {
    title: 'Dressing for Sales: Top Retail Uniform Trends in Saudi Arabia for 2025',
    imageSrc: '/images/retail_sector/retail_uniforms.jpg',
    url: '/blog/retail-uniform-trends-2025',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'How Store Uniforms Impact Customer Engagement and Brand Loyalty in KSA',
    imageSrc: '/images/retail_sector/sales_uniforms.jpg',
    url: '/blog/retail-uniforms-customer-engagement',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'Choosing Retail Uniforms That Reflect Your Brand\'s Personality in the Saudi Market',
    imageSrc: '/images/retail_sector/enhancing_store_identity_with_uniforms.jpeg',
    url: '/blog/retail-uniforms-brand-personality',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'Comfort and Style: Uniforms for Long Shifts on the KSA Retail Floor (2025)',
    imageSrc: '/images/retail_sector/practical_comfortable_uniforms.jpeg',
    url: '/blog/comfortable-retail-uniforms',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'Uniform Solutions for Luxury Boutiques vs. Mass Market Retailers in Saudi Arabia',
    imageSrc: '/images/retail_sector/perfume_cosmetics_store_wear.jpg',
    url: '/blog/luxury-mass-market-retail-uniforms',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'The Role of Uniforms in Creating a Cohesive In-Store Experience in KSA',
    imageSrc: '/images/retail_sector/consistent_store_colors.jpeg',
    url: '/blog/cohesive-retail-experience-uniforms',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'Customizing Retail Uniforms: Incorporating Logos and Brand Colors Effectively (Saudi Focus)',
    imageSrc: '/images/retail_sector/store_logo_caps.jpeg',
    url: '/blog/customizing-retail-uniforms-branding',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'From Sales Associates to Managers: Tiered Uniform Strategies for KSA Retail Teams',
    imageSrc: '/images/retail_sector/supervisor_uniforms.jpg',
    url: '/blog/tiered-retail-uniform-strategies',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'Sourcing Guide: Finding Reliable Retail Uniform Suppliers in Saudi Arabia (2025)',
    imageSrc: '/images/retail_sector/best_retail_uniform_supplier.jpg',
    url: '/blog/retail-uniform-suppliers-guide',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'The Power of a Name Badge: Enhancing Customer Service Through Retail Uniforms in KSA',
    imageSrc: '/images/retail_sector/employee_name_badges.jpg',
    url: '/blog/retail-name-badges-customer-service',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'Adapting Retail Uniforms for Seasonal Promotions and Campaigns in Saudi Arabia',
    imageSrc: '/images/retail_sector/seasonal_uniforms.jpg',
    url: '/blog/seasonal-retail-uniform-promotions',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'Uniforms for E-commerce Fulfillment Staff: Branding Behind the Scenes in KSA (2025)',
    imageSrc: '/images/retail_sector/stockroom_staff_uniforms.jpg',
    url: '/blog/ecommerce-fulfillment-uniforms',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'Sustainable Retail Uniforms: Appealing to Eco-Conscious Saudi Consumers (2025)',
    imageSrc: '/images/retail_sector/custom_uniforms.jpg',
    url: '/blog/sustainable-retail-uniforms',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'The Impact of Uniforms on Employee Confidence and Performance in KSA Retail',
    imageSrc: '/images/retail_sector/staff_uniforms.jpeg',
    url: '/blog/retail-uniforms-employee-performance',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  {
    title: 'Future of Retail Fashion: Smart Uniforms & Personalized Experiences in KSA (2025)',
    imageSrc: '/images/retail_sector/store_uniform_design.jpeg',
    url: '/blog/future-retail-uniform-innovations',
    category: 'Retail',
    categoryColor: 'bg-purple-600'
  },
  
  // 6. Transport Sector
  {
    title: 'On the Move with Style: 2025 Uniform Trends for Saudi Arabia\'s Transport Sector',
    imageSrc: '/images/transport_sector/transport_uniforms.png',
    url: '/blog/transport-uniform-trends-2025',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Uniforms for Public Transport Staff (Bus, Metro) in KSA: Comfort and Authority (2025)',
    imageSrc: '/images/transport_sector/bus_driver_uniforms.jpg',
    url: '/blog/public-transport-staff-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Professional Attire for Taxi and Ride-Hailing Drivers in Saudi Arabia: Building Trust',
    imageSrc: '/images/transport_sector/drivers_attire.jpeg',
    url: '/blog/taxi-ridehailing-driver-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Logistics & Delivery Driver Uniforms in KSA: Practicality, Visibility, and Branding',
    imageSrc: '/images/transport_sector/delivery_uniforms.jpg',
    url: '/blog/logistics-delivery-driver-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Uniform Requirements for Train & Rail Operators in Saudi Arabia (2025 Standards)',
    imageSrc: '/images/transport_sector/transport_company_uniforms.jpeg',
    url: '/blog/train-rail-operator-uniform-standards',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'High-Visibility Uniforms for Road Maintenance and Transport Infrastructure Crews in KSA',
    imageSrc: '/images/transport_sector/reflective_vest.jpeg',
    url: '/blog/high-visibility-transport-crew-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Choosing Durable and Weather-Appropriate Uniforms for Saudi Transport Workers',
    imageSrc: '/images/transport_sector/weather_resistant_driver_uniforms.jpeg',
    url: '/blog/durable-weather-appropriate-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'The Role of Uniforms in Enhancing Safety and Security in the KSA Transport Network',
    imageSrc: '/images/transport_sector/transport_uniform_accessories.jpeg',
    url: '/blog/transport-uniforms-safety-security',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Custom Uniform Design for Saudi Logistics Companies: Reflecting Brand Identity',
    imageSrc: '/images/transport_sector/custom_transport_uniforms.jpeg',
    url: '/blog/custom-logistics-uniform-design',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Sourcing Uniforms for Large-Scale Transport Fleets in Saudi Arabia (2025 Guide)',
    imageSrc: '/images/transport_sector/transport_fleet_uniform_solutions.jpeg',
    url: '/blog/transport-fleet-uniform-sourcing',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Integrating Technology: Smart Features in Uniforms for KSA Transport Professionals (2025)',
    imageSrc: '/images/transport_sector/driver_uniform_design.jpeg',
    url: '/blog/smart-transport-uniform-features',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Uniforms for Maritime and Port Workers in Saudi Arabia: Specific Needs',
    imageSrc: '/images/transport_sector/heavy_transport_driver_attire.jpeg',
    url: '/blog/maritime-port-worker-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Sustainability in Motion: Eco-Friendly Uniform Options for the KSA Transport Sector',
    imageSrc: '/images/transport_sector/transport_uniform_fabrics.jpeg',
    url: '/blog/eco-friendly-transport-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Ensuring a Professional Image for Customer-Facing Roles in Saudi Transport Hubs',
    imageSrc: '/images/transport_sector/transport_station_staff_clothing.jpeg',
    url: '/blog/customer-facing-transport-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'The Future of Transport Workwear: Innovations for Efficiency and Safety in KSA (2025)',
    imageSrc: '/images/transport_sector/transport_supervisor_uniforms.jpeg',
    url: '/blog/future-transport-workwear-innovations',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  }
];

// Blog categories
const blogCategories = [
  {
    title: 'Transport Sector',
    description: 'Professional uniforms for drivers and transport operators that enhance safety and corporate image',
    url: '/blog/transport',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Aviation Sector',
    description: 'Insights on luxury uniforms for flight crews, airport staff, and ground services',
    url: '/blog/aviation',
    bgColor: 'bg-sky-50'
  },
  {
    title: 'Banking & Finance',
    description: 'Articles about elegant and professional uniforms for banks, financial institutions, and administrative offices',
    url: '/blog/banking-finance',
    bgColor: 'bg-emerald-50'
  },
  {
    title: 'Industrial Sector',
    description: 'Information on durable workwear and safety equipment for factories, construction, and technical fields',
    url: '/blog/industrial',
    bgColor: 'bg-orange-50'
  },
  {
    title: 'Restaurants Sector',
    description: 'Articles about elegant and practical uniforms for all restaurant workers, from kitchen to customer service',
    url: '/blog/restaurants',
    bgColor: 'bg-red-50'
  },
  {
    title: 'Retail Sector',
    description: 'Insights on comfortable and brand-consistent uniforms for retail employees that enhance customer experience',
    url: '/blog/retail',
    bgColor: 'bg-purple-50'
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Blog</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[500px]">
          <Image 
            src="/images/blog/blog_hero.jpg" 
            alt="Uniform Solutions Blog - Articles and Insights" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Industry Insights</h1>
                <p className="text-xl mb-8">Explore articles, guides, and insights about specialized uniform solutions for various sectors in Saudi Arabia.</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#categories" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
                    Browse Categories
                  </Link>
                  <Link href="#articles" className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-medium transition">
                    Browse Articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Industry Insights & Uniform Knowledge</h2>
            <p className="text-lg text-gray-700 mb-8">
              Saudi Uniform shares valuable insights and expert knowledge about uniform design and implementation for various sectors, addressing the specific needs, regulations, and practical considerations of different industries.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section - Moved up */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Blog Categories</h2>
            <p className="text-gray-700">Our content is organized into the following industry sectors:</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogCategories.map((category, index) => (
                <div key={index} className={`p-6 border rounded-lg ${category.bgColor}`}>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <Link href={category.url} className="text-blue-600 hover:text-blue-800 font-medium">View Articles →</Link>
                </div>
              ))}
                  </div>
            <div className="text-center mt-12">
              <Link href="#articles" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                Browse Featured Articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            <p className="text-gray-700">Explore our complete collection of articles across different sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <LazyPosts posts={allPosts} />
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8">
              Stay updated with the latest articles, trends, and insights about uniform solutions for various sectors.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold transition duration-300 hover:bg-gray-100"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 