// data/faqData.ts
// This file stores all FAQ data for different brands

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  [brand: string]: FAQItem[];
}

const faqData: FAQData = {
  // ==================== IPHONE FAQs ====================
  'iphone': [
    {
      question: "How to Identify Your iPhone Model?",
      answer: `
        <p class="mb-3">Need to find out which iPhone model you have? Here are a few easy ways to check:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Check the Retail Box:</strong> The quickest way is to look at the original box your iPhone came in—it will list the exact model name.</li>
          <li><strong>Check in Settings:</strong> Turn on your iPhone and go to:
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Settings > General > About</li>
              <li>Look under <strong>Model Name</strong> for your iPhone's exact model.</li>
            </ul>
          </li>
          <li><strong>Find the Model Number for More Details:</strong> If needed, you can also find the model number:
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>In the same "About" section, look for <strong>Model Number</strong>.</li>
              <li>Tap on the number, and it will switch to a five-character code (e.g., A2650).</li>
              <li>You can then visit Apple's iPhone Model Identification Page, and use the search function on your device to enter the model number. This will confirm the exact model, show available storage capacities, release details, and provide sample images of your device for visual confirmation—although the images on our website are accurate.</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      question: "How is the price determined for my iPhone?",
      answer: `
        <p class="mb-3">The price for your iPhone is determined by several factors:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Model and storage capacity</li>
          <li>Physical and functional condition</li>
          <li>Current market demand</li>
          <li>Age and release date of the device</li>
        </ul>
      `
    },
    {
      question: "How should I prepare my iPhone for shipping?",
      answer: `
        <p class="mb-3">Follow these steps to prepare your iPhone:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Back up your data to iCloud or your computer</li>
          <li>Sign out of iCloud and disable Find My iPhone</li>
          <li>Factory reset your device (Settings > General > Reset > Erase All Content and Settings)</li>
          <li>Remove your SIM card</li>
        </ul>
      `
    },
    {
      question: "Why should I choose BuyBackTronics for selling my iPhone?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Competitive prices for all iPhone models</li>
          <li>Fast and secure payment processing</li>
          <li>Free shipping with tracking</li>
          <li>Data security guaranteed</li>
          <li>Environmentally responsible recycling</li>
          <li>Excellent customer support</li>
        </ul>
      `
    },
    {
      question: "How does the iPhone trade-in process work?",
      answer: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>Get an instant quote online</li>
          <li>Ship your iPhone for free using our prepaid label</li>
          <li>Receive payment within 24-48 hours after inspection</li>
        </ol>
      `
    },
    {
      question: "How can I sell multiple iPhones in bulk?",
      answer: `
        <p class="mb-3">For bulk sales, please contact our business team directly:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Email us at bulk@buybacktronics.com</li>
          <li>Call our business line for special pricing</li>
          <li>We offer customized solutions for enterprises</li>
        </ul>
      `
    }
  ],

  // ==================== CELLPHONE FAQs ====================
  'cellphone': [
    {
      question: "How do I identify my Cell Phone?",
      answer: `
        <p class="mb-3">To identify your Android phone model:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Check in Settings:</strong> Go to Settings > About phone > Model number to find your phone's model number.</li>
          <li><strong>Use the Serial Number:</strong> You can also identify your model by checking the serial number on your device or packaging. For more details, refer to this guide.</li>
        </ul>
      `
    },
    {
      question: "What factors affect the value of my Cell Phone?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Brand and model popularity</li>
          <li>Storage capacity and RAM</li>
          <li>Physical condition and screen quality</li>
          <li>Network carrier and unlock status</li>
        </ul>
      `
    },
    {
      question: "How do I prepare my Cell Phone for shipping?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Backup your data to cloud storage</li>
          <li>Remove Google account and factory reset</li>
          <li>Remove SD card, SIM card, and any cases</li>
          <li>Disable screen lock and security features</li>
          <li>Clean the device and pack securely</li>
        </ul>
      `
    },
    {
      question: "Why should I sell my cell phone to BuyBackTronics?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>We accept all major brands (Samsung, Google, OnePlus, etc.)</li>
          <li>Competitive pricing for Android devices</li>
          <li>Fast payment processing</li>
          <li>Eco-friendly recycling practices</li>
          <li>Free shipping with insurance</li>
          <li>Trusted by thousands of customers</li>
        </ul>
      `
    },
    {
      question: "How does the Cell Phone trade-in process work?",
      answer: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>Select your phone brand and model</li>
          <li>Answer questions about condition</li>
          <li>Ship for free and get paid quickly</li>
        </ol>
      `
    },
    {
      question: "How can I sell multiple cell phones in bulk?",
      answer: `
        <p class="mb-3">We offer bulk purchase programs:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Contact our business team for volume pricing</li>
          <li>Custom quotes for 10+ devices</li>
          <li>Dedicated account manager for large orders</li>
        </ul>
      `
    }
  ],

  // ==================== MACBOOK FAQs ====================
  'macbook': [
    {
      question: "How to Identify Your MacBook Model?",
      answer: `
        <p class="mb-3">Find your MacBook details:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Apple Menu:</strong> Click the Apple logo () in the top-left corner > About This Mac</li>
          <li><strong>Model Information:</strong> You'll see the model name (MacBook Air, MacBook Pro), year, processor, and memory</li>
          <li><strong>Serial Number:</strong> Click "System Report" for detailed specifications and serial number</li>
          <li><strong>Bottom Case:</strong> Some models have the serial number printed on the bottom case</li>
        </ul>
      `
    },
    {
      question: "What affects my MacBook's trade-in value?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>MacBook model and release year</li>
          <li>Processor type (Intel vs Apple Silicon M1/M2/M3)</li>
          <li>RAM and storage configuration</li>
          <li>Screen condition and battery cycle count</li>
          <li>Overall physical and functional condition</li>
        </ul>
      `
    },
    {
      question: "How do I prepare my MacBook for shipping?",
      answer: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>Backup your data using Time Machine or cloud storage</li>
          <li>Sign out of iCloud, iTunes, and iMessage</li>
          <li>Deauthorize your computer in iTunes/Music app</li>
          <li>Erase your hard drive and reinstall macOS</li>
          <li>Reset NVRAM/PRAM if necessary</li>
          <li>Clean the device and pack securely with original box if available</li>
        </ol>
      `
    },
    {
      question: "Why choose BuyBackTronics for selling my MacBook?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Top dollar for MacBook Air and MacBook Pro</li>
          <li>Accept all models (Intel and Apple Silicon)</li>
          <li>Free insured shipping with professional packaging</li>
          <li>Secure data erasure guarantee</li>
          <li>Quick payment after inspection</li>
          <li>Experienced Mac specialists</li>
        </ul>
      `
    },
    {
      question: "How does the MacBook trade-in process work?",
      answer: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>Select your MacBook model and answer condition questions</li>
          <li>Get instant quote and free shipping label</li>
          <li>Ship your MacBook securely</li>
          <li>Receive payment after device verification</li>
        </ol>
      `
    }
  ],

  // ==================== IPAD FAQs ====================
  'ipad': [
    {
      question: "How to Identify Your iPad Model?",
      answer: `
        <p class="mb-3">Find your iPad model easily:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Check Settings:</strong> Go to Settings > General > About and look for Model Name</li>
          <li><strong>Model Number:</strong> Find the model number (starts with A) on the back of your iPad or in Settings</li>
          <li><strong>Original Packaging:</strong> The box will show the exact model and specifications</li>
          <li><strong>Physical Identification:</strong> Check screen size and presence of Face ID or Touch ID</li>
        </ul>
      `
    },
    {
      question: "What determines the price of my iPad?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>iPad generation and year (iPad, iPad Air, iPad Pro, iPad mini)</li>
          <li>Storage capacity (64GB, 256GB, 512GB, 1TB, 2TB)</li>
          <li>WiFi-only or WiFi + Cellular capability</li>
          <li>Screen size (9.7", 10.2", 10.9", 11", 12.9")</li>
          <li>Physical and screen condition</li>
        </ul>
      `
    },
    {
      question: "How do I prepare my iPad for trade-in?",
      answer: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>Backup to iCloud or computer</li>
          <li>Sign out of iCloud and disable Find My iPad</li>
          <li>Unpair Apple Pencil and Smart Keyboard if applicable</li>
          <li>Erase all content and settings</li>
          <li>Remove SIM card (for cellular models)</li>
          <li>Remove any protective cases or screen protectors</li>
        </ol>
      `
    },
    {
      question: "Why sell your iPad to BuyBackTronics?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Competitive prices for all iPad models</li>
          <li>Accept iPad Pro, Air, mini, and standard models</li>
          <li>Quick and easy process</li>
          <li>Free shipping with insurance</li>
          <li>Secure data handling</li>
          <li>Fast payment processing</li>
        </ul>
      `
    },
    {
      question: "How does the iPad trade-in work?",
      answer: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>Tell us about your iPad model and condition</li>
          <li>Get instant quote</li>
          <li>Ship for free using our prepaid label</li>
          <li>Get paid quickly after inspection</li>
        </ol>
      `
    }
  ],

  // ==================== APPLE WATCH FAQs ====================
  'apple watch': [
    {
      question: "How to Identify Your Apple Watch Model?",
      answer: `
        <p class="mb-3">Find your Apple Watch details:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Watch App on iPhone:</strong> Open Watch app > General > About to see model name and number</li>
          <li><strong>On the Watch:</strong> Settings > General > About</li>
          <li><strong>Model Number:</strong> Look for the model number starting with "A" (e.g., A2376)</li>
          <li><strong>Back Case:</strong> Some models have text engraved on the back showing series and size</li>
          <li><strong>Identify Series:</strong> Series SE, 3, 4, 5, 6, 7, 8, 9, Ultra, or Ultra 2</li>
        </ul>
      `
    },
    {
      question: "What factors determine my Apple Watch price?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Series number (SE, Series 3-9, Ultra, Ultra 2)</li>
          <li>Case material (Aluminum, Stainless Steel, Titanium, Ceramic)</li>
          <li>Case size (38mm, 40mm, 41mm, 42mm, 44mm, 45mm, 49mm)</li>
          <li>GPS or GPS + Cellular connectivity</li>
          <li>Condition of case, screen, and Digital Crown</li>
          <li>Band type (not heavily factored but considered)</li>
        </ul>
      `
    },
    {
      question: "How do I prepare my Apple Watch for shipping?",
      answer: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>Create a backup through the Watch app on your iPhone</li>
          <li>Unpair Apple Watch from your iPhone (this automatically erases the watch)</li>
          <li>If not automatically erased, manually erase: Settings > General > Reset > Erase All Content and Settings</li>
          <li>Remove from iCloud account (happens automatically when unpaired)</li>
          <li>Turn off Activation Lock if not already disabled</li>
          <li>Clean the device thoroughly</li>
          <li>Include any original accessories if you have them</li>
        </ol>
      `
    },
    {
      question: "Why choose BuyBackTronics for your Apple Watch?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Fair prices for all Apple Watch models and series</li>
          <li>Accept all conditions (working and non-working)</li>
          <li>Fast and secure payment</li>
          <li>Free shipping with tracking</li>
          <li>Eco-friendly recycling practices</li>
          <li>Apple Watch specialists on staff</li>
        </ul>
      `
    },
    {
      question: "How does the Apple Watch trade-in process work?",
      answer: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>Select your Apple Watch model, series, and size</li>
          <li>Answer condition questions honestly</li>
          <li>Receive instant quote and free shipping label</li>
          <li>Ship your Apple Watch securely</li>
          <li>Get paid quickly after inspection</li>
        </ol>
      `
    }
  ],

  // ==================== DEFAULT FAQs (fallback) ====================
  'default': [
    {
      question: "How do I identify my device?",
      answer: `
        <p class="mb-3">To identify your device:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Check the device settings for model information</li>
          <li>Look for model number on the device or original packaging</li>
          <li>Refer to the manufacturer's website for identification guides</li>
        </ul>
      `
    },
    {
      question: "How is the price determined?",
      answer: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Device model and age</li>
          <li>Storage capacity</li>
          <li>Physical and functional condition</li>
          <li>Current market demand</li>
        </ul>
      `
    },
    {
      question: "How do I prepare my device for shipping?",
      answer: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>Backup your data</li>
          <li>Sign out of all accounts</li>
          <li>Factory reset the device</li>
          <li>Clean and pack securely</li>
        </ol>
      `
    }
  ]
};

export default faqData;