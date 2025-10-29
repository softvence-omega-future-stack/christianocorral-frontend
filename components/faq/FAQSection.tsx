"use client";

import { useState } from 'react';

export default function FAQPage() {
  type OpenItems = Record<string, boolean>;
  const [openItems, setOpenItems] = useState<OpenItems>({});

  const toggleItem = (id: string): void => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqSections = [
    {
      id: 'general',
      title: 'General FAQs',
      description: 'Find answers to the most common questions about our services, policies, and processes. Whether you\'re new to our platform or a returning customer, this section covers the basics.',
      questions: [
        {
          id: 'general-1',
          question: 'What is this site about?',
          answer: 'This platform provides a secure and convenient way to buy, sell, and trade pre-owned electronics. We specialize in smartphones, tablets, laptops, and other devices, offering competitive prices and a seamless experience for both buyers and sellers.'
        },
        {
          id: 'general-2',
          question: 'How does the buying process work?',
          answer: 'Browse our inventory, select your desired device, add it to cart, and proceed to checkout. We offer multiple payment options and fast shipping. All devices are thoroughly tested and come with a warranty.'
        },
        {
          id: 'general-3',
          question: 'Do you accept credit cards?',
          answer: 'Yes, we accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept Apple Pay and other digital payment methods for your convenience.'
        },
        {
          id: 'general-4',
          question: 'What are my shipping options?',
          answer: 'We offer standard shipping (5-7 business days), expedited shipping (2-3 business days), and overnight shipping. Shipping costs vary based on your location and the shipping method selected.'
        }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      description: 'Learn about our streamlined buying and selling procedures. This section walks you through each step, from initial inquiry to final transaction, ensuring transparency and ease of use.',
      questions: [
        {
          id: 'process-1',
          question: 'How do I sell my device?',
          answer: 'Get an instant quote by selecting your device model and condition. Ship your device to us using our prepaid shipping label. Once received and inspected, you\'ll receive payment within 24-48 hours via your preferred method.'
        },
        {
          id: 'process-2',
          question: 'What is the inspection process?',
          answer: 'Our certified technicians perform a comprehensive inspection including hardware diagnostics, screen testing, battery health check, and functional testing of all features. The inspection typically takes 1-2 business days.'
        },
        {
          id: 'process-3',
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 5-7 business days, expedited shipping takes 2-3 business days, and overnight shipping delivers within 1 business day. Tracking information is provided for all shipments.'
        }
      ]
    },
    {
      id: 'quote',
      title: 'Quote/Offer',
      description: 'Understand how we determine device values and what factors influence our offers. Get insights into pricing, quotes validity, and how to maximize your device\'s worth.',
      questions: [
        {
          id: 'quote-1',
          question: 'How is my device valued?',
          answer: 'Device values are determined by model, storage capacity, condition, age, market demand, and current resale values. We use real-time market data to ensure competitive and fair pricing.'
        },
        {
          id: 'quote-2',
          question: 'Can I negotiate the price?',
          answer: 'Our quotes are based on current market values and are generally firm. However, for bulk sales or unique circumstances, please contact our sales team to discuss potential adjustments.'
        },
        {
          id: 'quote-3',
          question: 'How long is a quote valid?',
          answer: 'Quotes are typically valid for 30 days from the date of issue. Market conditions may affect pricing, so we recommend completing your transaction within the validity period.'
        },
        {
          id: 'quote-4',
          question: 'What if my device condition differs?',
          answer: 'If the actual condition differs from what you described, we\'ll contact you with a revised offer before proceeding. You can accept the new offer or have your device returned at no cost.'
        }
      ]
    },
    {
      id: 'inspection',
      title: 'Inspection',
      description: 'Discover what happens during our thorough device inspection. We explain our quality standards, testing procedures, and how we ensure every device meets our strict criteria.',
      questions: [
        {
          id: 'inspection-1',
          question: 'What do you check during inspection?',
          answer: 'We check physical condition, screen quality, battery health, camera functionality, network connectivity, buttons and ports, software performance, and verify the device is not blacklisted or locked.'
        },
        {
          id: 'inspection-2',
          question: 'How long does inspection take?',
          answer: 'Standard inspection takes 1-2 business days. During peak periods, it may take up to 3 business days. You\'ll receive email updates throughout the process.'
        },
        {
          id: 'inspection-3',
          question: 'What if my device fails inspection?',
          answer: 'If your device doesn\'t meet our standards, we\'ll contact you with options: accept a revised lower offer, pay for return shipping, or authorize responsible recycling at no cost.'
        },
        {
          id: 'inspection-4',
          question: 'Can I track my device inspection?',
          answer: 'Yes, you\'ll receive email notifications at each stage: device received, inspection started, inspection completed, and payment processed. You can also check status in your account dashboard.'
        }
      ]
    },
    {
      id: 'returns',
      title: 'Returns',
      description: 'Review our return policy and procedures. Learn about eligibility, timeframes, and steps to return a device if it doesn\'t meet your expectations.',
      questions: [
        {
          id: 'returns-1',
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy on all purchases. Devices must be in the same condition as received with all original accessories and packaging. Return shipping is free for defective items.'
        },
        {
          id: 'returns-2',
          question: 'How do I initiate a return?',
          answer: 'Log into your account, go to order history, select the item, and click "Request Return". You\'ll receive a prepaid return label via email. Pack the device securely and drop it off at any authorized location.'
        },
        {
          id: 'returns-3',
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 3-5 business days after we receive and inspect the returned device. The refund will be issued to your original payment method and may take an additional 5-7 business days to appear.'
        },
        {
          id: 'returns-4',
          question: 'Are there any restocking fees?',
          answer: 'There are no restocking fees for defective items or items that don\'t match the description. For buyer\'s remorse returns, a 15% restocking fee may apply unless you exchange for another device.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Payment',
      description: 'Explore payment options, security measures, and timing. This section covers everything from accepted payment methods to when you can expect to receive funds.',
      questions: [
        {
          id: 'payment-1',
          question: 'What payment methods do you accept?',
          answer: 'We accept Visa, Mastercard, American Express, Discover, JCB, Diners Club, Apple Pay, PayPal, and bank transfers. For selling devices, we offer payment via PayPal, Venmo, Zelle, check, or store credit.'
        },
        {
          id: 'payment-2',
          question: 'When will I receive payment for my device?',
          answer: 'Payment is processed within 24-48 hours after your device passes inspection. Electronic payments (PayPal, Venmo, Zelle) are instant. Checks are mailed and typically arrive within 5-7 business days.'
        },
        {
          id: 'payment-3',
          question: 'Is my payment information secure?',
          answer: 'Yes, we use industry-standard SSL encryption and PCI-DSS compliant payment processors. We never store your full credit card information on our servers. All transactions are monitored for fraud protection.'
        },
        {
          id: 'payment-4',
          question: 'Can I get paid in store credit?',
          answer: 'Yes, choosing store credit provides a 10% bonus on your device value. Store credit never expires and can be used for any purchase on our platform, including sale items.'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account',
      description: 'Manage your account settings, security, and personal information. Find help with login issues, password resets, and account preferences.',
      questions: [
        {
          id: 'account-1',
          question: 'How do I create an account?',
          answer: 'Click "Sign Up" in the top right corner, enter your email and create a password. You\'ll receive a verification email. Click the link to activate your account and start buying or selling.'
        },
        {
          id: 'account-2',
          question: 'I forgot my password. What do I do?',
          answer: 'Click "Forgot Password" on the login page, enter your email address, and you\'ll receive a password reset link. The link is valid for 24 hours. If you don\'t receive the email, check your spam folder.'
        },
        {
          id: 'account-3',
          question: 'How do I update my account information?',
          answer: 'Log into your account, click on your profile icon, select "Account Settings". You can update your email, phone number, shipping address, payment methods, and communication preferences.'
        },
        {
          id: 'account-4',
          question: 'Can I delete my account?',
          answer: 'Yes, you can request account deletion by contacting customer support. Please note that this action is permanent and will delete all your order history, saved preferences, and stored payment methods.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-100 to-blue-200 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <circle cx="350" cy="50" r="120" fill="currentColor" className="text-blue-300" />
            <circle cx="380" cy="80" r="80" fill="currentColor" className="text-blue-400" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-5xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Questions? Look here.
            </h1>
            <p className="text-base sm:text-lg text-gray-700">
              Can&#39;t find the answer you&#39;re looking for? Reach out to our customer support team.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12 sm:space-y-16">
          {faqSections.map((section) => (
            <div key={section.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Section Info */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Questions */}
              <div className="lg:col-span-8">
                <div className="space-y-3">
                  {section.questions.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-300 transition-colors"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm sm:text-base font-medium text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <svg
                          className={`w-5 h-5 shrink-0 text-gray-500 transition-transform ${
                            openItems[item.id] ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openItems[item.id] && (
                        <div className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                          <div className="pt-4">{item.answer}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}