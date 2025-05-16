const fs = require('fs');
const path = require('path');
const glob = require('glob');

// URL الأساسي للموقع
const BASE_URL = 'https://abjdeat.com';

// وظيفة لتحديث ملف مع منطق canonical
function updateFileWithCanonical(filePath, pageUrl) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // تحقق مما إذا كان الملف يحتوي بالفعل على ملفات تعريف البيانات
    if (content.includes('export const metadata')) {
      // تحقق مما إذا كان ملف التعريف يحتوي بالفعل على canonical
      if (content.includes('canonical:')) {
        console.log(`✓ الملف ${filePath} يحتوي بالفعل على canonical في metadata`);
        return content;
      }
      
      // إضافة canonical إلى metadata الموجودة
      content = content.replace(
        /export const metadata = {/,
        `export const metadata = {\n  canonical: '${pageUrl}',`
      );
      
      console.log(`✓ تمت إضافة canonical إلى metadata في ${filePath}`);
    } else {
      // إضافة كتلة metadata جديدة
      const metadataBlock = `export const metadata = {
  canonical: '${pageUrl}',
  title: 'Saudi Uniform Solutions',
  description: 'Professional uniform solutions for various sectors in Saudi Arabia',
};\n\n`;
      
      // إضافة قبل أول 'export' أو 'import' في الملف
      if (content.includes('export default') || content.includes('import ')) {
        const exportMatch = content.match(/export default|import /);
        if (exportMatch) {
          const position = exportMatch.index;
          content = content.slice(0, position) + metadataBlock + content.slice(position);
          console.log(`✓ تمت إضافة كتلة metadata جديدة إلى ${filePath}`);
        }
      } else {
        // إضافة في بداية الملف
        content = metadataBlock + content;
        console.log(`✓ تمت إضافة كتلة metadata جديدة إلى بداية ${filePath}`);
      }
    }
    
    return content;
  } catch (error) {
    console.error(`⚠️ خطأ في معالجة الملف ${filePath}:`, error);
    return null;
  }
}

// وظيفة لمعالجة مسار الملف وإنشاء مسار URL
function processFilePath(filePath) {
  // استبدال \ بـ / لضمان تنسيق URL صحيح
  filePath = filePath.replace(/\\/g, '/');
  
  // الحصول على مسار URL من مسار الملف
  let urlPath = filePath
    .replace(/^app\//, '/')  // إزالة 'app/'
    .replace(/\/page\.tsx$/, '')  // إزالة '/page.tsx'
    .replace(/\/page\.js$/, '');  // إزالة '/page.js'
  
  // التعامل مع الصفحة الرئيسية
  if (urlPath === '/' || urlPath === '') {
    return BASE_URL;
  }
  
  // إنشاء URL كامل
  return `${BASE_URL}${urlPath}`;
}

// الوظيفة الرئيسية لمعالجة جميع الملفات
async function addCanonicalsToAllPages() {
  // البحث عن جميع ملفات الصفحات
  const pageFiles = glob.sync('app/**/page.{tsx,js}');
  console.log(`تم العثور على ${pageFiles.length} ملف صفحة للمعالجة`);
  
  let modifiedCount = 0;
  
  for (const file of pageFiles) {
    // معالجة مسار الملف لإنشاء URL الكانونيكال
    const canonicalUrl = processFilePath(file);
    
    // تحديث محتوى الملف
    const updatedContent = updateFileWithCanonical(file, canonicalUrl);
    
    if (updatedContent) {
      // كتابة المحتوى المحدث إلى الملف
      fs.writeFileSync(file, updatedContent, 'utf8');
      modifiedCount++;
    }
  }
  
  console.log(`\nتمت إضافة أو تحديث علامات canonical في ${modifiedCount} ملف صفحة`);
}

// تشغيل السكريبت
addCanonicalsToAllPages(); 