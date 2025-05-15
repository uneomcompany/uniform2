"use client"

import React, { useState } from 'react';

export default function RequestQuoteForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    numberOfEmployees: '',
    sector: '',
    uniformType: '',
    additionalDetails: '',
    preferredContactMethod: 'email',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        numberOfEmployees: '',
        sector: '',
        uniformType: '',
        additionalDetails: '',
        preferredContactMethod: 'email',
      });
    } catch (err) {
      setError('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.');
    } finally {
      setSubmitting(false);
    }
  };
  
  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-green-800 mb-2">تم استلام طلبك بنجاح!</h3>
        <p className="text-green-700 mb-4">سيقوم فريقنا بالتواصل معك قريبًا لمناقشة التفاصيل وتقديم عرض سعر مخصص.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-green-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition"
        >
          طلب عرض سعر آخر
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} id="request-form" className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
            الاسم الكامل <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="أدخل اسمك الكامل"
          />
        </div>
        
        <div>
          <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
            اسم الشركة <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="أدخل اسم شركتك"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            البريد الإلكتروني <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            dir="ltr"
            placeholder="example@company.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            رقم الهاتف <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            dir="ltr"
            placeholder="+966 5X XXX XXXX"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="sector" className="block text-gray-700 font-medium mb-2">
          القطاع <span className="text-red-500">*</span>
        </label>
        <select
          id="sector"
          name="sector"
          value={formData.sector}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>اختر القطاع</option>
          <option value="transport">قطاع النقل</option>
          <option value="aviation">قطاع الطيران</option>
          <option value="banking">القطاع المصرفي والمالي</option>
          <option value="industrial">القطاع الصناعي</option>
          <option value="restaurants">قطاع المطاعم</option>
          <option value="retail">قطاع التجزئة</option>
          <option value="other">قطاع آخر</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="numberOfEmployees" className="block text-gray-700 font-medium mb-2">
            عدد الموظفين <span className="text-red-500">*</span>
          </label>
          <select
            id="numberOfEmployees"
            name="numberOfEmployees"
            value={formData.numberOfEmployees}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>اختر العدد التقريبي</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="101-500">101-500</option>
            <option value="500+">أكثر من 500</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="uniformType" className="block text-gray-700 font-medium mb-2">
            نوع الزي المطلوب <span className="text-red-500">*</span>
          </label>
          <select
            id="uniformType"
            name="uniformType"
            value={formData.uniformType}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>اختر نوع الزي</option>
            <option value="formal">زي رسمي</option>
            <option value="casual">زي غير رسمي</option>
            <option value="safety">ملابس السلامة</option>
            <option value="executive">زي تنفيذي</option>
            <option value="service">زي خدمة العملاء</option>
            <option value="mixed">مجموعة متنوعة</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="additionalDetails" className="block text-gray-700 font-medium mb-2">
          تفاصيل إضافية
        </label>
        <textarea
          id="additionalDetails"
          name="additionalDetails"
          value={formData.additionalDetails}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="يرجى تقديم أي تفاصيل إضافية حول متطلبات الزي الموحد الخاص بك"
        ></textarea>
      </div>
      
      <div>
        <p className="block text-gray-700 font-medium mb-2">
          طريقة التواصل المفضلة <span className="text-red-500">*</span>
        </p>
        <div className="flex flex-wrap gap-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="preferredContactMethod"
              value="email"
              checked={formData.preferredContactMethod === 'email'}
              onChange={handleChange}
              className="text-blue-600 focus:ring-blue-500 h-5 w-5"
            />
            <span className="mr-2">البريد الإلكتروني</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="preferredContactMethod"
              value="phone"
              checked={formData.preferredContactMethod === 'phone'}
              onChange={handleChange}
              className="text-blue-600 focus:ring-blue-500 h-5 w-5"
            />
            <span className="mr-2">الهاتف</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="preferredContactMethod"
              value="whatsapp"
              checked={formData.preferredContactMethod === 'whatsapp'}
              onChange={handleChange}
              className="text-blue-600 focus:ring-blue-500 h-5 w-5"
            />
            <span className="mr-2">واتساب</span>
          </label>
        </div>
      </div>
      
      <div className="flex items-center">
        <input
          id="terms"
          type="checkbox"
          required
          className="h-5 w-5 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="terms" className="mr-2 text-gray-700">
          أوافق على <a href="/privacy-policy" className="text-blue-600 hover:underline">سياسة الخصوصية</a> و<a href="/terms-of-service" className="text-blue-600 hover:underline">شروط الخدمة</a>
        </label>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={submitting}
          className={`w-full bg-blue-600 text-white py-3 px-8 rounded-lg font-bold transition hover:bg-blue-700 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {submitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              جاري الإرسال...
            </span>
          ) : (
            'إرسال طلب عرض السعر'
          )}
        </button>
      </div>
    </form>
  );
}
