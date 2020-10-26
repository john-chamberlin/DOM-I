const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV DOM STARTS HERE
const navA7 = document.createElement('a');
navA7.textContent = 'Careers';
navA7.href = '#';
document.querySelector('nav').appendChild(navA7);

const navA8 = document.createElement('a');
navA8.textContent = 'Employees';
navA8.href = '#';
document.querySelector('nav').appendChild(navA8);


const nav = document.querySelector('nav');

const navA = document.querySelectorAll('a');
navA.forEach ((nav) => nav.style.color = 'green');

const navA1 = nav.querySelector('nav a:nth-of-type(1)');
navA1.textContent = siteContent['nav']['nav-item-1'];

const navA2 = navA1.nextElementSibling;
navA2.textContent = siteContent['nav']['nav-item-2'];

const navA3 = navA2.nextElementSibling;
navA3.textContent = siteContent['nav']['nav-item-3'];

const navA4 = navA3.nextElementSibling;
navA4.textContent = siteContent['nav']['nav-item-4'];

const navA5 = navA4.nextElementSibling;
navA5.textContent = siteContent['nav']['nav-item-5'];

const navA6 = navA5.nextElementSibling;
navA6.textContent = siteContent['nav']['nav-item-6'];



// NAV DOM ENDS

// CTA DOM STARTS

const cta = document.querySelector('.cta');

const ctaH1 = document.querySelector('.cta h1');
ctaH1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// CTA DOM ENDS

// MAIN CONTENT DOM START

const featuresH4 = document.querySelector('.text-content h4');
featuresH4.textContent = siteContent['main-content']['features-h4'];

const featuresContent = featuresH4.nextElementSibling;
featuresContent.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('.text-content:nth-of-type(2) h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];

const aboutContent = aboutH4.nextElementSibling;
aboutContent.textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
servicesH4.textContent = siteContent['main-content']['services-h4'];

const servicesContent = servicesH4.nextElementSibling;
servicesContent.textContent = siteContent['main-content']['services-content'];

const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productH4.textContent = siteContent['main-content']['product-h4'];

const productContent = productH4.nextElementSibling;
productContent.textContent = siteContent['main-content']['product-content'];

const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionH4.textContent = siteContent['main-content']['vision-h4'];

const visionContent = visionH4.nextElementSibling;
visionContent.textContent = siteContent['main-content']['vision-content'];


// MAIN CONTENT DOM ENDS

// CONTACT DOM START

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactAddress = contactH4.nextElementSibling;
contactAddress.textContent = siteContent['contact']['address'];

const contactPhone = contactAddress.nextElementSibling;
contactPhone.textContent = siteContent['contact']['phone'];

const contactEmail = contactPhone.nextElementSibling;
contactEmail.textContent = siteContent['contact']['email'];

// CONTACT END

const footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];
