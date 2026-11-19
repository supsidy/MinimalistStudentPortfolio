// Write-ups shown on the Projects page, keyed by project id ('lite-e1', 'itc-s4', ...).
// Edit the text here; data.ts merges it into each project.
export interface ProjectDetail { details: string; challenges: string[]; outcomes: string[] }

export const projectDetails: Record<string, ProjectDetail> = {
  // ---------------- Living in the IT Era (GEE-LITE) ----------------
  'lite-e1': {
    details: 'A reflection on what I expect to gain from Living in the IT Era. I wrote about using devices for everyday tasks, keeping up with fast changes like the rise of artificial intelligence, and staying safe from online threats such as phishing, malware and fraud.',
    challenges: ['Keeping the reflection within the 300–400 word limit while covering several expectations.', 'Turning general worries about online safety into clear, specific learning goals.'],
    outcomes: ['Set three goals for the course: ICT literacy, preventing cyberattacks and knowing what to do when under attack.', 'Framed the subject as a guide to becoming a better and safer person on the internet.'],
  },
  'lite-e2': {
    details: 'A written response to the "A Day Made of Glass" videos from 2011–2012. I compared the glass technology imagined in the videos with real products today: the transparent handheld display, the interactive classroom panel and the touch-controlled glass surface.',
    challenges: ['Finding real products that genuinely match concepts shown more than a decade ago.', 'Explaining each comparison briefly without losing the key details.'],
    outcomes: ['Matched each concept to a real product: the Nothing Phone, smart AI-assisted whiteboards and touchscreen induction cookers.', "Concluded that today's \"impossible\" ideas often become tomorrow's normal technology."],
  },
  'lite-e3': {
    details: 'A six-page worksheet defining 100 internet and computing terms, from the internet, the World Wide Web and protocols like HTTP, HTTPS and TCP/IP, to e-commerce models, cyber threats, copyright and country domain extensions.',
    challenges: ['Writing clear, accurate definitions for 100 terms in one worksheet.', 'Telling apart closely related terms such as phishing, pharming and spoofing, or freeware, shareware and crippleware.'],
    outcomes: ['A complete glossary I can use as a quick reference for later IT subjects.', 'A stronger vocabulary for cybersecurity, digital citizenship and online commerce.'],
  },
  'lite-e4': {
    details: 'A professional curriculum vitae built from a Google Docs template. It covers a summary, experience, education, projects, skills, awards and languages, written as a forward-looking CV of where I want my career to go.',
    challenges: ['Choosing a layout that keeps a lot of information readable on one page.', 'Writing a short professional summary that sounds confident without overstating.'],
    outcomes: ['A clean, reusable CV structure with clear sections and hierarchy.', 'The content became the base for my Canva resume redesign (S1).'],
  },
  'lite-e5': {
    details: 'Completion of the Google Workspace with Gemini learning path for Gmail, Docs and the overall AI workflow. Each module showed how to use Gemini to draft, summarise and organise everyday work.',
    challenges: ['Working through each module and its checks to qualify for the badges.', 'Learning to write prompts that give useful results instead of generic text.'],
    outcomes: ['Earned three completion badges on Aug 28, 2026: Gemini in Google Docs, Gemini in Gmail, and Foundations of Your AI Workflow.', 'Practical habits for using AI to speed up writing and email tasks.'],
  },
  'lite-e6': {
    details: 'Completion of the Google Workspace with Gemini learning path for Slides, Sheets and Meet, focusing on AI help for presentations, spreadsheets and video calls.',
    challenges: ['Applying Gemini features to three very different apps.', 'Checking AI-generated slides and formulas for accuracy instead of trusting them as-is.'],
    outcomes: ['Earned three completion badges on Sep 7, 2026: Gemini in Google Meet, Gemini in Google Sheets and Gemini in Google Slides.', 'Faster ways to build slides and analyse data with AI support.'],
  },
  'lite-e7': {
    details: 'Completion of the Google Workspace with Gemini learning path for Chat, Drive and Vids, covering AI help for messaging, finding files and making short videos.',
    challenges: ['Learning Google Vids, a newer tool I had not used before.', 'Finishing the path on a tight schedule alongside other activities.'],
    outcomes: ['Earned three completion badges on Sep 7, 2026: Gemini in Google Vids, Gemini in Google Drive and Gemini in Google Chat.', 'Completed all nine badges across the three Gemini learning paths.'],
  },
  'lite-m1': {
    details: 'A recorded slide presentation on financial fraud, titled "Financial Fraud: The Hidden Cost of Digital Trust". I presented a comic-style deck on camera, explaining how fraud exploits the trust people place in digital systems.',
    challenges: ['Explaining fraud schemes clearly for a general audience.', 'Presenting the slides and speaking on camera at the same time without losing the flow.'],
    outcomes: ['A complete recorded presentation, available on Google Drive.', 'A bold, themed slide deck that keeps a serious topic engaging.'],
  },
  'lite-s0': {
    details: 'A promotional poster for "Kapehan ni Mang Max", a made-up coffee shop with a racing theme. It advertises a Buy 1 Get 1 "Paddock Promo" with a price burst, the featured drinks and a contact bar.',
    challenges: ['Layering cut-out photos of drinks and a model car over a busy, blurred pit-lane background.', 'Keeping the offer and price readable at a glance.'],
    outcomes: ['A finished promo poster with a clear brand, offer, price and contact details.', 'A consistent brand that pairs with the KMM logo (S6).'],
  },
  'lite-s1': {
    details: 'My CV redesigned in Canva as a visual one-page resume. It adds a portrait and organises About Me, Education, Experience, Skills, Languages and Contact into two clear columns.',
    challenges: ['Fitting a full CV into two columns without crowding.', 'Balancing the photo, headings and body text so the page still reads top to bottom.'],
    outcomes: ['A modern, visual resume that stands out from a plain document.', 'Practice in layout, alignment and typography in Canva.'],
  },
  'lite-s2': {
    details: 'A recruitment poster for the University of Nueva Caceres School of Computer and Information Sciences, announcing that enrollment is open for the 2nd semester of A/Y 2026–2027.',
    challenges: ['Combining a campus photo, student cut-outs and two logos without clutter.', 'Making the "Enroll Now" call to action stand out against a busy background.'],
    outcomes: ['A complete recruitment poster with the school logos, key dates and contact details.', 'A bold red, yellow and blue palette that matches the school identity.'],
  },
  'lite-s3': {
    details: 'An infographic on typhoon preparedness, split into what to do before, during and after a typhoon, with icons for each action and a #StaySafe #StayUnited #BeAlert footer.',
    challenges: ['Organising many tips into a tall format that is easy to scan.', 'Choosing icons that explain each action without extra words.'],
    outcomes: ['A clear three-phase guide covering eleven preparedness actions.', 'A practical public-safety design suited to the typhoon season in Bicol.'],
  },
  'lite-s4': {
    details: 'A horizontal graduation streamer designed in Canva, congratulating a BSIT Summa Cum Laude graduate of Batch Prometheus, Class of 2030, with the university seal and a crowd photo from commencement.',
    challenges: ['Working in a very wide format while keeping the name as the focal point.', 'Blending a portrait, a crowd photo and the seal in a gold and red palette.'],
    outcomes: ['A finished congratulatory streamer ready for printing or posting.', 'Practice with typography styles and layered photo effects.'],
  },
  'lite-s5': {
    details: 'A personal calling card for a fictional company, Shinkenjoy Ltd., with my name, title, phone, email, website and address, plus a vertical brand strip and logo mark.',
    challenges: ['Fitting all the contact details into a small card without it feeling cramped.', 'Creating a clear hierarchy between the name, title and contact lines.'],
    outcomes: ['A clean, professional calling card in a navy and white palette.', 'Consistent icons and spacing across every contact line.'],
  },
  'lite-s6': {
    details: 'A personal logo for "Kapehan ni Mang Max" (KMM), digitised from my sketch into a circular badge. It is the same brand used on my coffee shop poster (S0).',
    challenges: ['Simplifying the sketch so the logo still reads at small sizes.', 'Keeping it consistent with the colours and style of the S0 poster.'],
    outcomes: ['A finished circular logo badge used on the coffee shop poster.', 'Experience turning a hand-drawn idea into a digital design.'],
  },

  // ---------------- Introduction to Computing (ITC) ----------------
  'itc-e1': {
    details: "Completion of a Code.org Hour of Code activity, solving block-based programming puzzles. I earned a certificate for completing The Hour of A.I. and showing an understanding of the basic concepts of artificial intelligence.",
    challenges: ['Thinking through each puzzle step by step to get the logic right.', 'Understanding how simple rules and data lead to AI behaviour.'],
    outcomes: ['A Code.org Certificate of Completion for The Hour of A.I.', 'A first, hands-on look at programming logic and AI concepts.'],
  },
  'itc-e2': {
    details: 'A spreadsheet of 500 patient records set in the Bicol Region, with name, age, address, blood type, height, weight, blood pressure, allergies, chronic condition, employer, health card, occupation and BMI. It includes pivot tables, charts and a summary report.',
    challenges: ['Building 500 realistic records with addresses only from Bicol towns and barangays.', 'Computing BMI and its category with formulas, and summarising the data with pivot tables.'],
    outcomes: ['Found that hypertension is the most common condition (95 patients, 19%) and O+ the most common blood type (39.2%).', 'Showed that 41% of patients are overweight or obese, suggesting where community health screening should focus.'],
  },
  'itc-e3': {
    details: 'A Google Sheets inventory of 150 cars: 15 brands with 10 units each. Each unit has a car number, brand, model, type, seats, transmission, fuel type, year model, status, unit price and date sold, with total 2026 sales computed per brand.',
    challenges: ['Researching realistic market prices for brand-new and second-hand units.', 'Keeping 150 rows consistent in format so the sales totals stay correct.'],
    outcomes: ['A complete, consistent car inventory from C-0001 to C-0150.', 'Brand-by-brand total sales for 2026 computed with formulas.'],
  },
  'itc-e4': {
    details: 'Car Deals V2 builds on the Car Sales sheet by adding a photo and a colour swatch for every unit. It also adds monthly sales monitoring from January to December 2026 and shows which brand had the highest and lowest sales.',
    challenges: ['Inserting and sizing 150 car photos so the sheet stays readable.', 'Building monthly summaries that tally units sold and total sales per brand.'],
    outcomes: ['A visual inventory where each car is shown with its photo and colour.', 'A year-long sales view that identifies the best- and worst-selling brands.'],
  },
  'itc-e5': {
    details: 'Step-by-step solutions to ten problems: five arithmetic expressions and five logical conditions. I worked through operator precedence, integer division, modulo and the NOT, AND and OR operators.',
    challenges: ['Remembering that integer division drops decimals (2 / 3 = 0), unlike 3.0 / 4 = 0.75.', 'Applying NOT, AND and OR in the right order inside nested conditions.'],
    outcomes: ['Correct, fully worked solutions for all ten problems.', 'A solid base in how programs evaluate expressions and conditions.'],
  },
  'itc-a5': {
    details: 'A recorded discussion for the midterm project. From nine expression and condition problems (a = 4, b = 11, c = 13, d = 5), I chose four, wrote a script for each solution, then recorded myself explaining them step by step.',
    challenges: ['Writing a script so the recording flows smoothly from one problem to the next.', 'Explaining precedence and logic out loud clearly enough for viewers to follow.'],
    outcomes: ['A complete recorded explanation of four problems, available on Google Drive.', 'Practice turning a written solution into a clear spoken walkthrough.'],
  },
  'itc-s1': {
    details: 'A p5.js sketch modified from a single-star example to draw five stars in different colours on a new red background, labelled "Star Formation". Each star is built point by point with a custom drawStar function.',
    challenges: ['Positioning five stars and a label on a 720 × 480 canvas without overlap.', 'Understanding the angle maths that places the outer and inner points of each star.'],
    outcomes: ['A finished sketch with five coloured stars and a descriptive label.', 'A reusable drawStar function that takes position, size, points and colour.'],
  },
  'itc-s2': {
    details: 'A p5.js drawing of the flag of the United Kingdom on a 600 × 300 flag area, with its name and a short country description. The Union Jack is built in layers: the blue field, the white and red diagonals, then the white and red crosses.',
    challenges: ['Offsetting the red Saint Patrick diagonals off-centre like the real flag.', 'Clipping the drawing so the diagonals do not spill outside the flag.'],
    outcomes: ['An accurate Union Jack drawn entirely with code.', 'Practice with layering, line weights and clipping in p5.js.'],
  },
  'itc-s3': {
    details: 'A restyled version of the classic snake game in p5.js. I changed the background to crimson, gave the snake a blue head and black body, made the food green, and set each food item to award 100 points.',
    challenges: ['Preventing the snake from reversing straight into itself.', 'Tuning the frame rate so the game is challenging but still playable.'],
    outcomes: ['A playable snake game with arrow and WASD controls, scoring and a restart with SPACE.', 'A personalised look that sets it apart from the starter code.'],
  },
  'itc-s4': {
    details: 'Hill Dash, a hill-climb driving game made in p5.js. It has five themed levels plus a daily challenge, garage upgrades, unlockable skins, a ghost replay of your best run, weather that affects grip, chiptune music and a saved leaderboard.',
    challenges: ['Keeping the car physics stable on rough terrain, using small physics substeps.', 'Saving runs, upgrades and settings safely in the browser even when storage fails.'],
    outcomes: ['A complete, playable game you can try in the p5.js editor.', 'Five creativity features implemented, matching the rubric for logic, structure, data, interface and creativity.'],
  },
}
