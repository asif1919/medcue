// Language Toggle Functionality
const translations = {
    en: {
        appName: "MEDCUE",
        appTagline: "AI Health Assistant",
        langLabel: "English",
        navFeatures: "Features",
        navHowItWorks: "How It Works",
        navTestimonials: "Reviews",
        navAbout: "About",
        navContact: "Contact",
        navDownload: "Download",
        newFeature: "✨ New AI-Powered Features",
        heroTitle: "MEDCUE",
        heroSubtitle: "Scan RX & Manage Meds",
        heroTagline: "Your AI Health Assistant – Simplifying medication management for everyone.",
        benefit1: "AI-Powered Scanning",
        benefit2: "Smart Reminders",
        benefit3: "Local Prices",
        downloadPlay: "Download on Google Play",
        appStoreSoon: "– Coming Soon –",
        trust1: "Free to Download",
        trust2: "No Ads",
        trust3: "Privacy First",
        featuresTitle: "Powerful Features at Your Fingertips",
        featuresSubtitle: "Discover how MEDCUE revolutionizes medication management with cutting-edge AI technology",
        feature1Title: "AI RX Scanner",
        feature1Desc: "Scan handwritten prescriptions with ease and accuracy using advanced AI technology.",
        feature2Title: "Smart Pill Reminder",
        feature2Desc: "Never miss a dose with intelligent, customizable reminders and notifications.",
        feature3Title: "Offline Support",
        feature3Desc: "Access your medication information even without internet connection.",
        feature4Title: "Local Medicine Prices",
        feature4Desc: "Get up-to-date local cost information for medicines across Bangladesh.",
        feature5Title: "Family Health Organizer",
        feature5Desc: "Effortlessly manage health records for your entire family in one place.",
        feature6Title: "Medicine Info",
        feature6Desc: "Tap any medicine to get comprehensive information about usage, side effects, and precautions.",
        howItWorksTitle: "How MEDCUE Works",
        howItWorksSubtitle: "Simple steps to transform your medication management experience",
        step1Title: "Scan Your Prescription",
        step1Desc: "Simply take a photo of your handwritten or printed prescription with our AI scanner.",
        step2Title: "AI Detects & Sorts",
        step2Desc: "Our advanced AI accurately identifies and organizes your medications automatically.",
        step3Title: "Get Smart Reminders",
        step3Desc: "Receive intelligent alerts for Morning, Afternoon, and Night doses on time.",
        step4Title: "Stay Informed",
        step4Desc: "Tap any medicine to access comprehensive information instantly.",
        elderlyTitle: "Designed for Our Elderly Loved Ones",
        elderlySubtitle: "Accessible design that makes medication management simple for everyone",
        elderlyFeature1Title: "One Tap Scan",
        elderlyFeature1Desc: "Effortless prescription scanning with a single tap - no complex steps required.",
        elderlyFeature2Title: "Voice-Guided Alerts",
        elderlyFeature2Desc: "Clear audio reminders for medication doses that are easy to understand.",
        elderlyFeature3Title: "Simplified Layout",
        elderlyFeature3Desc: "Large buttons and high-contrast design for easy navigation and readability.",
        doseTimelineTitle: "Effortless Dose Management",
        doseTimelineDesc: "No more guessing from the prescription. MEDCUE automatically separates your doses into clear, easy-to-follow timelines. Just open the app and take your dose.",
        doseMorning: "Morning",
        doseAfternoon: "Afternoon",
        doseNight: "Night",
        screenshotsTitle: "A Glimpse Inside MEDCUE",
        screenshotsSubtitle: "Explore the intuitive interface designed for seamless medication management",
        screenshot1Title: "AI Scanner",
        screenshot1Desc: "Smart prescription detection",
        screenshot2Title: "Smart Reminders",
        screenshot2Desc: "Never miss a dose",
        screenshot3Title: "Medicine Info",
        screenshot3Desc: "Comprehensive details",
        screenshot4Title: "Family Health",
        screenshot4Desc: "Manage everyone's meds",
        screenshot5Title: "Offline Access",
        screenshot5Desc: "Works without internet",
        testimonialsTitle: "What Our Users Say",
        testimonialsSubtitle: "Real stories from real users who have transformed their medication management",
        testimonial1Quote: "\"MEDCUE has truly transformed how my family manages medication. The AI scanner is a lifesaver, especially for my elderly parents. Highly recommended!\"",
        testimonial2Quote: "\"The smart reminders have been incredible. I never miss my medications anymore, and the local price information helps me save money.\"",
        testimonial3Quote: "\"As a doctor, I recommend MEDCUE to my patients. The AI accuracy is impressive and the offline functionality is perfect for rural areas.\"",
        aboutTitle: "About MEDCUE",
        aboutText: "We created MEDCUE to solve the confusion and medication mismanagement people face every day. Especially for the elderly and chronic patients, our goal is to provide a reliable, easy-to-use solution that brings peace of mind and better health outcomes.",
        aboutMissionTitle: "Our Mission",
        aboutMissionText: "To simplify medication management for everyone in Bangladesh through innovative AI technology.",
        aboutVisionTitle: "Our Vision",
        aboutVisionText: "A world where medication management is effortless and accessible to everyone, regardless of age or technical ability.",
        aboutValuesTitle: "Our Values",
        aboutValuesText: "Innovation, accessibility, and user-centered design drive everything we do at MEDCUE.",
        blogTitle: "Latest Health Insights",
        blogSubtitle: "Stay informed with expert health tips and insights from our medical team",
        blogPost1Title: "Tips for Managing Chronic Diseases",
        blogPost1Desc: "Learn essential strategies to live healthier with chronic conditions and improve your quality of life.",
        blogPost2Title: "Understanding Your Prescriptions",
        blogPost2Desc: "Demystifying medical jargon for better understanding of your medications and treatment plans.",
        blogPost3Title: "The Future of Digital Health in BD",
        blogPost3Desc: "Exploring how technology is shaping healthcare in Bangladesh and improving patient outcomes.",
        readMore: "Read More",
        footerDescription: "Your AI-powered health assistant, making medication management simple, accurate, and accessible for everyone in Bangladesh.",
        quickLinks: "Quick Links",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        contact: "Contact",
        support: "Support",
        contactUs: "Contact Us",
        address: "Dhaka, Bangladesh",
        trustSeal: "Powered by ATechHouse © 2023",
        copyright: "&copy; 2025 MEDCUE. All rights reserved."
    },
    bn: { // Bengali translations (example, fill with actual translations)
        appName: "মেডকিউ",
        appTagline: "এআই স্বাস্থ্য সহকারী",
        langLabel: "বাংলা",
        navFeatures: "বৈশিষ্ট্য",
        navHowItWorks: "কিভাবে কাজ করে",
        navTestimonials: "পর্যালোচনা",
        navAbout: "সম্পর্কে",
        navContact: "যোগাযোগ",
        navDownload: "ডাউনলোড",
        newFeature: "✨ নতুন এআই-চালিত বৈশিষ্ট্য",
        heroTitle: "মেডকিউ",
        heroSubtitle: "প্রেসক্রিপশন স্ক্যান ও ঔষধ ব্যবস্থাপনা",
        heroTagline: "আপনার এআই স্বাস্থ্য সহকারী – সবার জন্য ঔষধ ব্যবস্থাপনা সহজ করে তোলে।",
        benefit1: "এআই-চালিত স্ক্যানিং",
        benefit2: "স্মার্ট রিমাইন্ডার",
        benefit3: "স্থানীয় মূল্য",
        downloadPlay: "গুগল প্লে থেকে ডাউনলোড করুন",
        appStoreSoon: "শীঘ্রই আসছে",
        trust1: "বিনামূল্যে ডাউনলোড",
        trust2: "কোন বিজ্ঞাপন নেই",
        trust3: "গোপনীয়তা প্রথম",
        featuresTitle: "আপনার হাতের মুঠোয় শক্তিশালী বৈশিষ্ট্য",
        featuresSubtitle: "মেডকিউ কীভাবে অত্যাধুনিক এআই প্রযুক্তির মাধ্যমে ঔষধ ব্যবস্থাপনায় বিপ্লব ঘটায় তা আবিষ্কার করুন",
        feature1Title: "এআই আরএক্স স্ক্যানার",
        feature1Desc: "উন্নত এআই প্রযুক্তি ব্যবহার করে সহজে এবং নির্ভুলভাবে হাতে লেখা প্রেসক্রিপশন স্ক্যান করুন।",
        feature2Title: "স্মার্ট পিল রিমাইন্ডার",
        feature2Desc: "বুদ্ধিমান, কাস্টমাইজযোগ্য রিমাইন্ডার এবং বিজ্ঞপ্তির মাধ্যমে আর কখনও ডোজ মিস করবেন না।",
        feature3Title: "অফলাইন সমর্থন",
        feature3Desc: "ইন্টারনেট সংযোগ ছাড়াই আপনার ঔষধের তথ্য অ্যাক্সেস করুন।",
        feature4Title: "স্থানীয় ঔষধের মূল্য",
        feature4Desc: "বাংলাদেশের ঔষধের আপ-টু-ডেট স্থানীয় মূল্যের তথ্য পান।",
        feature5Title: "পারিবারিক স্বাস্থ্য সংগঠক",
        feature5Desc: "আপনার পুরো পরিবারের স্বাস্থ্য রেকর্ড সহজে এক জায়গায় পরিচালনা করুন।",
        feature6Title: "ঔষধ তথ্য",
        feature6Desc: "ব্যবহার, পার্শ্বপ্রতিক্রিয়া এবং সতর্কতা সম্পর্কে বিস্তারিত তথ্য পেতে যেকোনো ঔষধে ট্যাপ করুন।",
        howItWorksTitle: "মেডকিউ কীভাবে কাজ করে",
        howItWorksSubtitle: "আপনার ঔষধ ব্যবস্থাপনা অভিজ্ঞতা পরিবর্তন করার সহজ ধাপ",
        step1Title: "আপনার প্রেসক্রিপশন স্ক্যান করুন",
        step1Desc: "আমাদের এআই স্ক্যানার দিয়ে আপনার হাতে লেখা বা প্রিন্ট করা প্রেসক্রিপশনের একটি ছবি তুলুন।",
        step2Title: "এআই সনাক্ত করে ও সাজায়",
        step2Desc: "আমাদের উন্নত এআই স্বয়ংক্রিয়ভাবে আপনার ঔষধগুলি নির্ভুলভাবে সনাক্ত করে এবং সংগঠিত করে।",
        step3Title: "স্মার্ট রিমাইন্ডার পান",
        step3Desc: "সঠিক সময়ে সকাল, দুপুর এবং রাতের ডোজের জন্য বুদ্ধিমান সতর্কতা পান।",
        step4Title: "জানুন সবকিছু",
        step4Desc: "যেকোনো ঔষধের বিস্তারিত তথ্য তাৎক্ষণিকভাবে অ্যাক্সেস করুন।",
        elderlyTitle: "আমাদের বয়স্ক প্রিয়জনদের জন্য ডিজাইন করা হয়েছে",
        elderlySubtitle: "সহজলভ্য ডিজাইন যা সবার জন্য ঔষধ ব্যবস্থাপনা সহজ করে তোলে",
        elderlyFeature1Title: "এক ট্যাপ স্ক্যান",
        elderlyFeature1Desc: "এক ট্যাপে সহজে প্রেসক্রিপশন স্ক্যানিং - কোন জটিল ধাপের প্রয়োজন নেই।",
        elderlyFeature2Title: "ভয়েস-নির্দেশিত সতর্কতা",
        elderlyFeature2Desc: "স্পষ্ট অডিও রিমাইন্ডার যা ঔষধের ডোজের জন্য বুঝতে সহজ।",
        elderlyFeature3Title: "সরলীকৃত লেআউট",
        elderlyFeature3Desc: "সহজ নেভিগেশন এবং পঠনযোগ্যতার জন্য বড় বাটন এবং উচ্চ-কন্ট্রাস্ট ডিজাইন।",
        doseTimelineTitle: "সহজ ডোজ ব্যবস্থাপনা",
        doseTimelineDesc: "No more guessing from the prescription. MEDCUE automatically separates your doses into clear, easy-to-follow timelines. Just open the app and take your dose.",
        doseMorning: "সকাল",
        doseAfternoon: "দুপুর",
        doseNight: "রাত",
        screenshotsTitle: "মেডকিউ এর একটি ঝলক",
        screenshotsSubtitle: "নির্বিঘ্ন ঔষধ ব্যবস্থাপনার জন্য ডিজাইন করা স্বজ্ঞাত ইন্টারফেসটি অন্বেষণ করুন",
        screenshot1Title: "এআই স্ক্যানার",
        screenshot1Desc: "স্মার্ট প্রেসক্রিপশন সনাক্তকরণ",
        screenshot2Title: "স্মার্ট রিমাইন্ডার",
        screenshot2Desc: "আর কখনও ডোজ মিস করবেন না",
        screenshot3Title: "ঔষধ তথ্য",
        screenshot3Desc: "বিস্তারিত তথ্য",
        screenshot4Title: "পারিবারিক স্বাস্থ্য",
        screenshot4Desc: "সবার ঔষধ পরিচালনা করুন",
        screenshot5Title: "অফলাইন অ্যাক্সেস",
        screenshot5Desc: "ইন্টারনেট ছাড়াই কাজ করে",
        testimonialsTitle: "আমাদের ব্যবহারকারীরা কী বলেন",
        testimonialsSubtitle: "প্রকৃত ব্যবহারকারীদের বাস্তব গল্প যারা তাদের ঔষধ ব্যবস্থাপনা পরিবর্তন করেছেন",
        testimonial1Quote: "\"মেডকিউ সত্যিই আমার পরিবারের ঔষধ ব্যবস্থাপনার পদ্ধতি পরিবর্তন করেছে। এআই স্ক্যানার আমার বয়স্ক বাবা-মায়ের জন্য জীবন রক্ষাকারী। অত্যন্ত সুপারিশকৃত!\"",
        testimonial2Quote: "\"স্মার্ট রিমাইন্ডারগুলি অবিশ্বাস্য। আমি আর কখনও আমার ঔষধ মিস করি না, এবং স্থানীয় মূল্যের তথ্য আমাকে অর্থ সাশ্রয় করতে সাহায্য করে।\"",
        testimonial3Quote: "\"একজন ডাক্তার হিসাবে, আমি আমার রোগীদের মেডকিউ সুপারিশ করি। এআই এর নির্ভুলতা চিত্তাকর্ষক এবং অফলাইন কার্যকারিতা গ্রামীণ এলাকার জন্য উপযুক্ত।\"",
        aboutTitle: "মেডকিউ সম্পর্কে",
        aboutText: "আমরা মেডকিউ তৈরি করেছি প্রতিদিন মানুষ যে বিভ্রান্তি এবং ঔষধের ভুল ব্যবস্থাপনার মুখোমুখি হয় তা সমাধান করতে। বিশেষ করে বয়স্ক এবং দীর্ঘস্থায়ী রোগীদের জন্য, আমাদের লক্ষ্য হল একটি নির্ভরযোগ্য, সহজে ব্যবহারযোগ্য সমাধান প্রদান করা যা মানসিক শান্তি এবং উন্নত স্বাস্থ্য ফলাফল নিয়ে আসে।",
        aboutMissionTitle: "আমাদের লক্ষ্য",
        aboutMissionText: "উদ্ভাবনী এআই প্রযুক্তির মাধ্যমে বাংলাদেশের সবার জন্য ঔষধ ব্যবস্থাপনা সহজ করা।",
        aboutVisionTitle: "আমাদের ভিশন",
        aboutVisionText: "এমন একটি বিশ্ব যেখানে ঔষধ ব্যবস্থাপনা সহজ এবং সবার জন্য সহজলভ্য, বয়স বা প্রযুক্তিগত ক্ষমতা নির্বিশেষে।",
        aboutValuesTitle: "আমাদের মূল্যবোধ",
        aboutValuesText: "উদ্ভাবন, সহজলভ্যতা এবং ব্যবহারকারী-কেন্দ্রিক ডিজাইন মেডকিউতে আমাদের সবকিছুকে চালিত করে।",
        blogTitle: "সর্বশেষ স্বাস্থ্য অন্তর্দৃষ্টি",
        blogSubtitle: "আমাদের চিকিৎসা দলের বিশেষজ্ঞ স্বাস্থ্য টিপস এবং অন্তর্দৃষ্টি দিয়ে অবগত থাকুন",
        blogPost1Title: "দীর্ঘস্থায়ী রোগ ব্যবস্থাপনার টিপস",
        blogPost1Desc: "দীর্ঘস্থায়ী অসুস্থতা নিয়ে স্বাস্থ্যকর জীবনযাপন এবং আপনার জীবনযাত্রার মান উন্নত করার জন্য প্রয়োজনীয় কৌশলগুলি শিখুন।",
        blogPost2Title: "আপনার প্রেসক্রিপশন বোঝা",
        blogPost2Desc: "আপনার ঔষধ এবং চিকিৎসার পরিকল্পনা সম্পর্কে আরও ভাল বোঝার জন্য চিকিৎসা পরিভাষা সহজ করা।",
        blogPost3Title: "বাংলাদেশে ডিজিটাল স্বাস্থ্যের ভবিষ্যৎ",
        blogPost3Desc: "প্রযুক্তি কীভাবে বাংলাদেশে স্বাস্থ্যসেবাকে রূপ দিচ্ছে এবং রোগীর ফলাফল উন্নত করছে তা অন্বেষণ করা।",
        readMore: "আরও পড়ুন",
        footerDescription: "আপনার এআই-চালিত স্বাস্থ্য সহকারী, যা বাংলাদেশের সবার জন্য ঔষধ ব্যবস্থাপনা সহজ, নির্ভুল এবং সহজলভ্য করে তোলে।",
        quickLinks: "দ্রুত লিঙ্ক",
        privacyPolicy: "গোপনীয়তা নীতি",
        termsOfService: "পরিষেবার শর্তাবলী",
        contact: "যোগাযোগ",
        support: "সহায়তা",
        contactUs: "যোগাযোগ করুন",
        address: "ঢাকা, বাংলাদেশ",
        trustSeal: "Powered by ATechHouse © 2023",
        copyright: "&copy; 2025 মেডকিউ। সর্বস্বত্ব সংরক্ষিত।"
    }
};

let currentLang = 'en'; // Default language

// Function to update text content based on selected language
function updateContent(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = translations[lang].langLabel;
    currentLang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang); // Load English by default

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Smooth scrolling for navigation links with header offset
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                // Fallback: try direct navigation
                window.location.hash = targetId;
            }
        });
    });

    // Event listener for language toggle
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('change', (event) => {
            const newLang = event.target.checked ? 'bn' : 'en';
            updateContent(newLang);
        });
    }

    // Scroll Animations using Intersection Observer
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Auto-scrolling for screenshot carousel
    const screenshotCarousel = document.querySelector('.screenshot-carousel');
    if (screenshotCarousel) {
        let scrollInterval;
        const scrollAmount = 300; // Adjust this value to control scroll distance

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (screenshotCarousel.scrollLeft + screenshotCarousel.clientWidth >= screenshotCarousel.scrollWidth) {
                    // If at the end, scroll back to the beginning
                    screenshotCarousel.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    screenshotCarousel.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }, 3000); // Scroll every 3 seconds
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        // Start auto-scroll when the carousel is visible
        const carouselObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAutoScroll();
                } else {
                    stopAutoScroll();
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the carousel is visible
        });

        carouselObserver.observe(screenshotCarousel);

        // Optional: Pause on hover
        screenshotCarousel.addEventListener('mouseenter', stopAutoScroll);
        screenshotCarousel.addEventListener('mouseleave', startAutoScroll);
    }
});
