🌐 Personal Portfolio Website

A modern, fully responsive portfolio website built using HTML, CSS, JavaScript, and EmailJS.
It showcases your personal profile, skills, education, projects, and contact form all designed to look elegant across all devices.

✨ Features

🎯 Responsive Design – Looks perfect on desktops, tablets, and mobile screens

💫 Smooth Scrolling Navigation – Transitions between sections are smooth and user-friendly

🧍 About Section – Includes profile image and short bio

🧠 Professional Skills Section – Animated skill bars with progress indicators

🎓 Education Section – Clean, card-style layout with responsive alignment

💼 Projects Showcase – Display your key works in attractive project cards

💌 Contact Form with EmailJS – Visitors can send messages directly to your email without a backend


🛠️ Technologies Used
Technology	Purpose
HTML5	Structure and semantic layout
CSS3 (Flexbox, Grid, Media Queries)	Styling and responsive design
JavaScript (ES6)	Interactivity and animations
EmailJS	Sending form submissions directly to email
Google Fonts (Poppins, Audiowide)	Clean, modern typography
📂 Folder Structure
📁 Portfolio/
├── index.html          # Main HTML structure
├── style.css           # Complete styling and responsiveness
├── script.js           # JavaScript logic (EmailJS and interactivity)
├── images/             # All images used in the site
└── README.md           # Project documentation

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/GetamesayPortfolio1/GetamesayPortfolio.git

2️⃣ Open the Project

Simply open the index.html file in your browser:

start index.html

3️⃣ Set Up EmailJS

Go to EmailJS

Sign up for a free account

Create a new email service (e.g., Gmail)

Create an email template

Copy your:

Service ID

Template ID

Public Key

Then, in your script.js, initialize EmailJS:

(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();


And in your contact form submission:

emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => alert("Message sent successfully!"))
    .catch((error) => alert("Something went wrong: " + error.text));


✅ Now, when someone fills out your contact form, the message will go straight to your inbox.

🧩 Sections Overview

Home Section – Full-screen hero image with your name and short intro

About Section – Profile photo and bio with info grid

Professional Skills – Animated skill progress bars

Education – Card layout showing academic achievements

Projects – List of highlighted projects with descriptions

Contact – EmailJS-powered contact form and social links

🧑‍💻 Author

Getamesay Mekcha
Frontend Developer & Designer

📧 Email: getamesaymekcha677@gmail.com
