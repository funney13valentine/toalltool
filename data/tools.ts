export interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
  features: string[];
  category: string;
  subcategory: string;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "file-converters",
    name: "File Converters",
    slug: "file-converters",
    description: "Convert, compress, edit, and enhance every kind of file with trusted online tools.",
    icon: "⇄",
  },
  { id: "translation-tools", name: "Translation Tools", slug: "translation-tools", description: "Translate text, documents, websites, and conversations across languages.", icon: "文" },
  { id: "learning-platforms", name: "Learning Platforms", slug: "learning-platforms", description: "Learn new skills through courses, practice, tutorials, and certifications.", icon: "◈" },
  { id: "resume-builders", name: "Resume Builders", slug: "resume-builders", description: "Create polished resumes, cover letters, portfolios, and job applications.", icon: "▤" },
  { id: "logo-makers", name: "Logo Makers", slug: "logo-makers", description: "Design memorable logos and build a consistent visual brand identity.", icon: "◉" },
  { id: "presentation-tools", name: "Presentation Tools", slug: "presentation-tools", description: "Create engaging slides, pitch decks, visual reports, and live presentations.", icon: "▣" },
  { id: "flowchart-diagram", name: "Flowchart & Diagram", slug: "flowchart-diagram", description: "Map ideas, processes, systems, and plans with clear visual diagrams.", icon: "⌘" },
  { id: "3d-design", name: "3D Design", slug: "3d-design", description: "Model, sculpt, render, share, and explore three-dimensional creations.", icon: "◆" },
  { id: "music-production", name: "Music Production", slug: "music-production", description: "Create, record, mix, master, and share music with modern production tools.", icon: "♫" },
  { id: "photo-editor-online", name: "Photo Editor Online", slug: "photo-editor-online", description: "Edit, retouch, enhance, and transform images directly in your browser.", icon: "◫" },
  { id: "color-tools", name: "Color Tools", slug: "color-tools", description: "Create palettes, explore color systems, check contrast, and build visual identities.", icon: "◐" },
  { id: "typography-tools", name: "Typography Tools", slug: "typography-tools", description: "Find, pair, preview, and create typefaces for design and web work.", icon: "Aa" },
  { id: "icon-finders", name: "Icon Finders", slug: "icon-finders", description: "Discover icons, symbols, illustrations, and interface assets for any project.", icon: "◇" },
  { id: "stock-photos", name: "Stock Photos", slug: "stock-photos", description: "Find high-quality photos, videos, illustrations, and visual assets.", icon: "▧" },
  { id: "qr-code-generator", name: "QR Code Generator", slug: "qr-code-generator", description: "Create, customize, manage, and track scannable QR codes for every use case.", icon: "▦" },
  { id: "email-tools", name: "Email Tools", slug: "email-tools", description: "Create newsletters, automate campaigns, verify addresses, and improve delivery.", icon: "✉" },
  { id: "scheduling-tools", name: "Scheduling Tools", slug: "scheduling-tools", description: "Book meetings, coordinate availability, manage appointments, and plan calendars.", icon: "◷" },
  { id: "password-manager", name: "Password Manager", slug: "password-manager", description: "Store passwords securely, generate credentials, and protect digital accounts.", icon: "▣" },
  { id: "vpn-tools", name: "VPN Tools", slug: "vpn-tools", description: "Protect your privacy, secure internet connections, and access the web safely.", icon: "◌" },
  { id: "cloud-storage", name: "Cloud Storage", slug: "cloud-storage", description: "Store, sync, back up, and share files securely from anywhere.", icon: "☁" },
  { id: "file-sharing", name: "File Sharing", slug: "file-sharing", description: "Send, receive, sync, and securely share files of any size.", icon: "⇧" },
  { id: "compression-tools", name: "Compression Tools", slug: "compression-tools", description: "Compress, extract, archive, and optimize files for easier storage and sharing.", icon: "▤" },
  { id: "speed-test-tools", name: "Speed Test Tools", slug: "speed-test-tools", description: "Measure internet speed, latency, network quality, and website performance.", icon: "↯" },
  { id: "dns-checker", name: "DNS Checker", slug: "dns-checker", description: "Inspect DNS records, test propagation, and troubleshoot domains and networks.", icon: "◎" },
  { id: "seo-tools", name: "SEO Tools", slug: "seo-tools", description: "Research keywords, audit websites, track rankings, and improve search visibility.", icon: "⌕" },
  { id: "analytics-tools", name: "Analytics Tools", slug: "analytics-tools", description: "Understand visitors, product usage, marketing performance, and business metrics.", icon: "◫" },
  { id: "survey-tools", name: "Survey Tools", slug: "survey-tools", description: "Create surveys, collect feedback, run research, and analyze responses.", icon: "☷" },
  { id: "collaboration-tools", name: "Collaboration Tools", slug: "collaboration-tools", description: "Communicate, coordinate projects, and work together effectively from anywhere.", icon: "♢" },
  { id: "document-tools", name: "Document Tools", slug: "document-tools", description: "Write, organize, edit, sign, and collaborate on documents and knowledge.", icon: "▤" },
  { id: "whiteboard-tools", name: "Whiteboard Tools", slug: "whiteboard-tools", description: "Brainstorm, plan workshops, map ideas, and collaborate visually.", icon: "▱" },
  { id: "time-tracking", name: "Time Tracking", slug: "time-tracking", description: "Track work hours, improve focus, manage timesheets, and understand productivity.", icon: "◴" },
  { id: "invoice-generators", name: "Invoice Generators", slug: "invoice-generators", description: "Create invoices, accept payments, manage clients, and run business billing workflows.", icon: "₹" },
  { id: "template-libraries", name: "Template Libraries", slug: "template-libraries", description: "Find ready-made templates and creative assets for design, web, business, and content.", icon: "▦" },
  { id: "animation-tools", name: "Animation Tools", slug: "animation-tools", description: "Create motion graphics, animated videos, characters, and interactive visual stories.", icon: "✧" },
  { id: "screen-sharing", name: "Screen Sharing", slug: "screen-sharing", description: "Share screens, provide remote support, record demos, and collaborate live.", icon: "▣" },
  { id: "chat-tools", name: "Chat Tools", slug: "chat-tools", description: "Use AI chat, customer messaging, and conversational tools for work and learning.", icon: "◌" },
  { id: "writing-assistants", name: "Writing Assistants", slug: "writing-assistants", description: "Improve grammar, clarity, style, originality, and writing quality.", icon: "✎" },
  { id: "bookmark-manager", name: "Bookmark Manager", slug: "bookmark-manager", description: "Save, organize, tag, search, and share useful links and online resources.", icon: "☆" },
  { id: "feed-readers", name: "Feed Readers", slug: "feed-readers", description: "Follow websites, newsletters, creators, news, and research from one inbox.", icon: "◔" },
  { id: "marketplace-tools", name: "Marketplace Tools", slug: "marketplace-tools", description: "Build online stores, manage products, sell across channels, and grow ecommerce businesses.", icon: "▥" },
];

const makeTools = (
  subcategory: string,
  entries: Array<[string, string, string, string[], number]>,
): Tool[] =>
  entries.map(([name, url, description, features, rating]) => ({
    id: `${subcategory}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    url,
    description,
    features,
    category: "file-converters",
    subcategory,
    rating,
  }));

type CatalogTool = [name: string, url: string, rating: number];

const makeCatalogTools = (
  category: string,
  categoryName: string,
  subcategories: string[],
  entries: CatalogTool[],
): Tool[] =>
  subcategories.flatMap((subcategory) => entries.map(([name, url, rating]) => ({
    id: `${category}-${subcategory}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    url,
    description: `${name} is a trusted ${categoryName.toLowerCase()} platform for ${subcategory.toLowerCase()} workflows.`,
    features: [subcategory, "Professional tools", "Cross-platform access", "Easy sharing"],
    category,
    subcategory,
    rating,
  })));

export const tools: Tool[] = [
  ...makeTools("PDF Tools", [
    ["iLovePDF", "https://www.ilovepdf.com/", "An all-in-one PDF workspace for converting, merging, splitting, and protecting documents in your browser.", ["PDF to Word", "Merge & split", "OCR support", "Secure processing"], 4.9],
    ["Smallpdf", "https://smallpdf.com/", "Simple, polished PDF tools for converting documents, compressing files, and collecting signatures.", ["PDF to Office", "Compress PDFs", "eSign documents", "Cloud storage"], 4.8],
    ["Adobe Acrobat Online", "https://www.adobe.com/acrobat/online.html", "Adobe’s browser-based toolkit for dependable PDF conversion, editing, and sharing.", ["Export to Word", "Edit PDFs", "Fill & sign", "Trusted Adobe engine"], 4.9],
    ["PDF24 Tools", "https://tools.pdf24.org/", "A broad collection of free PDF utilities for converting, optimizing, and organizing files.", ["PDF to image", "OCR PDFs", "Compress files", "No account needed"], 4.8],
    ["Sejda PDF", "https://www.sejda.com/", "A clean PDF editor and converter with practical tools for everyday document work.", ["PDF to Excel", "Edit text", "Page tools", "Desktop option"], 4.7],
    ["PDF Candy", "https://pdfcandy.com/", "A versatile online PDF suite with conversions, editing controls, and document utilities.", ["PDF to PPT", "Watermark tools", "Image conversion", "Batch processing"], 4.6],
    ["Soda PDF", "https://www.sodapdf.com/", "Online PDF software for creating, converting, reviewing, and securely managing documents.", ["Convert PDF", "Review tools", "eSign", "Cloud integrations"], 4.6],
  ]),
  ...makeTools("Image Tools", [
    ["Remove.bg", "https://www.remove.bg/", "Remove image backgrounds automatically with AI and download clean, ready-to-use cutouts.", ["AI background removal", "High-resolution output", "API available", "Batch editing"], 4.9],
    ["TinyPNG", "https://tinypng.com/", "Smartly compress PNG, JPEG, and WebP images while preserving visual quality.", ["PNG & JPEG compression", "WebP support", "Batch uploads", "WordPress plugin"], 4.9],
    ["CloudConvert", "https://cloudconvert.com/", "A reliable file conversion platform supporting image formats and hundreds of other file types.", ["200+ formats", "Quality settings", "Batch conversion", "API access"], 4.8],
    ["Upscale.media", "https://www.upscale.media/", "Enhance image resolution online using AI without complicated editing software.", ["AI upscaling", "Noise reduction", "Bulk processing", "Fast downloads"], 4.7],
    ["Squoosh", "https://squoosh.app/", "A free browser-based image compressor with precise controls and side-by-side previews.", ["Format conversion", "Live comparison", "Offline capable", "Advanced codecs"], 4.8],
    ["Convertio", "https://convertio.co/", "Convert images and documents directly in the browser with wide file format support.", ["Image format converter", "Cloud imports", "Easy drag & drop", "Batch conversion"], 4.7],
    ["Canva Image Converter", "https://www.canva.com/features/image-converter/", "Convert common image formats inside Canva’s friendly visual design workspace.", ["JPG to PNG", "Design tools", "Simple export", "Cloud-based"], 4.6],
  ]),
  ...makeTools("Video Converters", [
    ["FreeConvert", "https://www.freeconvert.com/video-converter", "A flexible video converter with format controls, compression, and browser-based processing.", ["Video format conversion", "Large file support", "Quality controls", "Cloud imports"], 4.8],
    ["CloudConvert", "https://cloudconvert.com/video-converter", "Convert video files between popular formats with detailed codec and resolution options.", ["200+ formats", "Codec settings", "Batch conversion", "API access"], 4.8],
    ["Convertio", "https://convertio.co/video-converter/", "An approachable online converter for changing video formats from your device or cloud drive.", ["MP4 conversion", "Cloud storage", "Browser-based", "Easy exports"], 4.7],
    ["VEED", "https://www.veed.io/tools/video-converter", "Convert videos online and continue with trimming, captions, and social-ready edits.", ["Format conversion", "Video editing", "Auto subtitles", "Social presets"], 4.7],
    ["Kapwing", "https://www.kapwing.com/tools/convert-video", "Convert and edit video files in one collaborative online creative studio.", ["Convert formats", "Trim & resize", "Subtitle tools", "Team collaboration"], 4.6],
    ["Online-Convert", "https://video.online-convert.com/convert-to-mp4", "A practical collection of video conversion tools for popular formats and devices.", ["Convert to MP4", "Device presets", "Optional settings", "No software install"], 4.6],
  ]),
  ...makeTools("Audio Converters", [
    ["Online Audio Converter", "https://online-audio-converter.com/", "Quickly convert audio files between common formats with optional quality settings.", ["MP3, WAV, M4A", "Bitrate controls", "Batch conversion", "Browser-based"], 4.8],
    ["CloudConvert", "https://cloudconvert.com/audio-converter", "A powerful audio conversion service with broad format support and advanced controls.", ["200+ formats", "Codec control", "Batch jobs", "API access"], 4.8],
    ["Convertio", "https://convertio.co/audio-converter/", "Convert music, voice recordings, and audio files online in just a few steps.", ["Audio format conversion", "Cloud imports", "Simple interface", "Secure uploads"], 4.7],
    ["FreeConvert", "https://www.freeconvert.com/audio-converter", "Convert and optimize audio files with useful options for quality, channels, and trimming.", ["Format conversion", "Audio trimming", "Quality settings", "Large file support"], 4.7],
    ["Zamzar", "https://www.zamzar.com/convert/audio/", "A long-standing online file conversion service for audio and many other file types.", ["Popular audio types", "Email notification", "Simple uploads", "File management"], 4.6],
    ["Restream Audio Converter", "https://restream.io/tools/audio-converter", "A free, streamlined tool for converting audio to formats suited for sharing and streaming.", ["MP3 conversion", "Fast processing", "No download needed", "Easy sharing"], 4.6],
  ]),
  ...makeTools("Document Converters", [
    ["Convertio", "https://convertio.co/document-converter/", "Convert documents between office, text, and web formats without installing desktop software.", ["Office formats", "Cloud imports", "Batch conversion", "Drag & drop"], 4.8],
    ["CloudConvert", "https://cloudconvert.com/document-converter", "A professional conversion platform for documents with flexible output and quality settings.", ["200+ formats", "Document conversion", "Workflow API", "Secure processing"], 4.8],
    ["Zamzar", "https://www.zamzar.com/convert/document/", "Convert documents online with a familiar workflow and wide support for legacy formats.", ["DOC, DOCX & ODT", "Email notifications", "Simple uploads", "Wide compatibility"], 4.7],
    ["Online-Convert", "https://document.online-convert.com/", "Convert documents to and from popular file types with optional output customization.", ["Word converter", "Text & ebook formats", "OCR options", "Browser-based"], 4.6],
    ["Aspose", "https://products.aspose.app/", "A suite of online document applications powered by Aspose’s document-processing technology.", ["Word tools", "Spreadsheet tools", "Presentation tools", "No installation"], 4.7],
    ["FreeConvert", "https://www.freeconvert.com/document-converter", "A simple web converter for office documents, text files, and common export formats.", ["Document formats", "Batch conversion", "Cloud storage", "Quality options"], 4.6],
  ]),
  ...makeTools("eBook Converters", [
    ["CloudConvert", "https://cloudconvert.com/ebook-converter", "Convert ebook files between EPUB, MOBI, AZW3, and other reader-friendly formats.", ["EPUB & MOBI", "Quality settings", "Batch conversion", "API access"], 4.8],
    ["Convertio", "https://convertio.co/ebook-converter/", "Convert ebooks in the browser for compatibility across readers and devices.", ["Reader formats", "Cloud imports", "Quick conversion", "Simple downloads"], 4.7],
    ["Zamzar", "https://www.zamzar.com/convert/ebook/", "An easy conversion service for ebook formats, documents, and files from older readers.", ["EPUB conversion", "Kindle formats", "Email alerts", "Wide format support"], 4.6],
    ["Online-Convert", "https://ebook.online-convert.com/", "Create and convert ebook files online with options for metadata and reader formats.", ["Convert to EPUB", "MOBI support", "Metadata options", "Browser-based"], 4.6],
    ["AnyConv", "https://anyconv.com/ebook-converter/", "A straightforward online converter for common ebook and document file types.", ["EPUB & AZW3", "Quick uploads", "No installation", "Multiple formats"], 4.5],
    ["FreeConvert", "https://www.freeconvert.com/ebook-converter", "Convert ebooks online using an accessible interface and broad format support.", ["Ebook formats", "Large file support", "Easy exports", "Secure uploads"], 4.6],
  ]),
  ...makeCatalogTools("translation-tools", "Translation Tools", ["Text Translation", "Document Translation", "Website Translation", "Language Learning"], [
    ["Google Translate", "https://translate.google.com/", 4.9], ["DeepL", "https://www.deepl.com/translator", 4.9], ["Reverso", "https://www.reverso.net/text-translation", 4.7], ["Microsoft Translator", "https://www.bing.com/translator", 4.7], ["Yandex Translate", "https://translate.yandex.com/", 4.6], ["Linguee", "https://www.linguee.com/", 4.7],
  ]),
  ...makeCatalogTools("learning-platforms", "Learning Platforms", ["Professional Courses", "Academic Learning", "Coding Education", "Creative Learning"], [
    ["Udemy", "https://www.udemy.com/", 4.8], ["Coursera", "https://www.coursera.org/", 4.8], ["Khan Academy", "https://www.khanacademy.org/", 4.9], ["edX", "https://www.edx.org/", 4.8], ["LinkedIn Learning", "https://www.linkedin.com/learning/", 4.7], ["Skillshare", "https://www.skillshare.com/", 4.6],
  ]),
  ...makeCatalogTools("resume-builders", "Resume Builders", ["Resume Creation", "Professional Profiles", "Cover Letters", "Career Resources"], [
    ["Canva Resume Builder", "https://www.canva.com/resumes/", 4.8], ["Zety", "https://zety.com/resume-builder", 4.8], ["Resume.io", "https://resume.io/", 4.8], ["Novorésumé", "https://novoresume.com/", 4.7], ["Enhancv", "https://enhancv.com/", 4.7], ["Kickresume", "https://www.kickresume.com/", 4.7],
  ]),
  ...makeCatalogTools("logo-makers", "Logo Makers", ["AI Logo Makers", "Template Logo Makers", "Brand Identity", "Logo Assets"], [
    ["Looka", "https://looka.com/", 4.7], ["Canva Logo Maker", "https://www.canva.com/create/logos/", 4.8], ["DesignEvo", "https://www.designevo.com/", 4.7], ["Wix Logo Maker", "https://www.wix.com/logo/maker", 4.7], ["Tailor Brands", "https://www.tailorbrands.com/logo-maker", 4.6], ["Adobe Express", "https://www.adobe.com/express/create/logo", 4.7],
  ]),
  ...makeCatalogTools("presentation-tools", "Presentation Tools", ["AI Presentations", "Traditional Presentations", "Dynamic Presentations", "Presentation Assets"], [
    ["Gamma", "https://gamma.app/", 4.7], ["Beautiful.ai", "https://www.beautiful.ai/", 4.7], ["Prezi", "https://prezi.com/", 4.7], ["Canva Presentations", "https://www.canva.com/create/presentations/", 4.8], ["Google Slides", "https://workspace.google.com/products/slides/", 4.8], ["Microsoft PowerPoint", "https://www.microsoft.com/microsoft-365/powerpoint", 4.8],
  ]),
  ...makeCatalogTools("flowchart-diagram", "Flowchart & Diagram", ["Flowchart Makers", "Technical Diagrams", "Mind Mapping", "Whiteboard Diagrams"], [
    ["diagrams.net", "https://www.diagrams.net/", 4.8], ["Lucidchart", "https://www.lucidchart.com/", 4.8], ["Miro", "https://miro.com/", 4.8], ["Whimsical", "https://whimsical.com/", 4.7], ["Creately", "https://creately.com/", 4.7], ["Excalidraw", "https://excalidraw.com/", 4.8],
  ]),
  ...makeCatalogTools("3d-design", "3D Design", ["3D Modeling", "3D Sculpting", "3D Assets", "3D Rendering"], [
    ["Blender", "https://www.blender.org/", 4.9], ["Tinkercad", "https://www.tinkercad.com/", 4.8], ["SketchUp", "https://www.sketchup.com/", 4.7], ["ZBrush", "https://www.maxon.net/en/zbrush", 4.8], ["Sketchfab", "https://sketchfab.com/", 4.8], ["V-Ray", "https://www.chaos.com/vray", 4.8],
  ]),
  ...makeCatalogTools("music-production", "Music Production", ["Digital Audio Workstations", "Beat Making", "Mixing & Mastering", "Music Distribution"], [
    ["FL Studio", "https://www.image-line.com/fl-studio/", 4.8], ["Ableton Live", "https://www.ableton.com/live/", 4.8], ["GarageBand", "https://www.apple.com/mac/garageband/", 4.7], ["BandLab", "https://www.bandlab.com/", 4.7], ["Splice", "https://splice.com/", 4.7], ["LANDR", "https://www.landr.com/", 4.7],
  ]),
  ...makeCatalogTools("photo-editor-online", "Photo Editor Online", ["Advanced Photo Editing", "AI Photo Enhancement", "Background & Object Editing", "Quick Photo Editing"], [
    ["Photopea", "https://www.photopea.com/", 4.8], ["Adobe Photoshop on the Web", "https://www.adobe.com/products/photoshop/web.html", 4.8], ["Pixlr", "https://pixlr.com/", 4.7], ["Fotor", "https://www.fotor.com/", 4.7], ["Remove.bg", "https://www.remove.bg/", 4.9], ["Cleanup.pictures", "https://cleanup.pictures/", 4.7],
  ]),
  ...makeCatalogTools("color-tools", "Color Tools", ["Palette Generators", "Color Pickers & Converters", "Contrast & Accessibility", "Gradient Tools"], [
    ["Coolors", "https://coolors.co/", 4.9], ["Adobe Color", "https://color.adobe.com/", 4.8], ["Color Hunt", "https://colorhunt.co/", 4.7], ["ColorHexa", "https://www.colorhexa.com/", 4.7], ["WebAIM Contrast Checker", "https://webaim.org/resources/contrastchecker/", 4.9], ["CSS Gradient", "https://cssgradient.io/", 4.8],
  ]),
  ...makeCatalogTools("typography-tools", "Typography Tools", ["Font Libraries", "Font Pairing", "Font Identification", "Typography Utilities"], [
    ["Google Fonts", "https://fonts.google.com/", 4.9], ["Adobe Fonts", "https://fonts.adobe.com/", 4.8], ["Fontshare", "https://www.fontshare.com/", 4.7], ["Fontjoy", "https://fontjoy.com/", 4.7], ["WhatTheFont", "https://www.myfonts.com/pages/whatthefont", 4.7], ["WhatFont", "https://whatfontapp.com/", 4.8],
  ]),
  ...makeCatalogTools("icon-finders", "Icon Finders", ["Icon Libraries", "Premium Icon Marketplaces", "Developer Icons", "Illustration Assets"], [
    ["Flaticon", "https://www.flaticon.com/", 4.8], ["The Noun Project", "https://thenounproject.com/", 4.7], ["Icons8", "https://icons8.com/", 4.7], ["Iconify", "https://iconify.design/", 4.8], ["Font Awesome", "https://fontawesome.com/", 4.8], ["Lucide", "https://lucide.dev/", 4.8],
  ]),
  ...makeCatalogTools("stock-photos", "Stock Photos", ["Free Stock Photos", "Premium Stock Photos", "Stock Video & Motion", "Visual Search & Inspiration"], [
    ["Unsplash", "https://unsplash.com/", 4.9], ["Pexels", "https://www.pexels.com/", 4.9], ["Pixabay", "https://pixabay.com/", 4.8], ["Shutterstock", "https://www.shutterstock.com/", 4.8], ["Adobe Stock", "https://stock.adobe.com/", 4.8], ["Mixkit", "https://mixkit.co/", 4.8],
  ]),
  ...makeCatalogTools("qr-code-generator", "QR Code Generator", ["Static QR Codes", "Dynamic QR Codes", "QR Design & Branding", "QR Business Use"], [
    ["QRCode Monkey", "https://www.qrcode-monkey.com/", 4.8], ["QR TIGER", "https://www.qrcode-tiger.com/", 4.7], ["Canva QR Code Generator", "https://www.canva.com/qr-code-generator/", 4.7], ["Beaconstac", "https://www.beaconstac.com/qr-code-generator", 4.7], ["Flowcode", "https://www.flowcode.com/", 4.7], ["QR Code Chimp", "https://www.qrcodechimp.com/", 4.7],
  ]),
  ...makeCatalogTools("email-tools", "Email Tools", ["Email Marketing", "Transactional Email", "Email Verification", "Email Design & Testing"], [
    ["Mailchimp", "https://mailchimp.com/", 4.8], ["Brevo", "https://www.brevo.com/", 4.7], ["Kit", "https://kit.com/", 4.7], ["MailerLite", "https://www.mailerlite.com/", 4.7], ["SendGrid", "https://sendgrid.com/", 4.8], ["Litmus", "https://www.litmus.com/", 4.8],
  ]),
  ...makeCatalogTools("scheduling-tools", "Scheduling Tools", ["Meeting Scheduling", "Group Availability", "Appointment Booking", "Calendar Management"], [
    ["Calendly", "https://calendly.com/", 4.8], ["Doodle", "https://doodle.com/", 4.7], ["When2meet", "https://www.when2meet.com/", 4.6], ["Cal.com", "https://cal.com/", 4.7], ["Acuity Scheduling", "https://acuityscheduling.com/", 4.7], ["Google Calendar", "https://calendar.google.com/", 4.9],
  ]),
  ...makeCatalogTools("password-manager", "Password Manager", ["Personal Password Managers", "Business Password Managers", "Open-Source & Offline Vaults", "Password Security"], [
    ["1Password", "https://1password.com/", 4.9], ["Bitwarden", "https://bitwarden.com/", 4.9], ["Dashlane", "https://www.dashlane.com/", 4.8], ["LastPass", "https://www.lastpass.com/", 4.7], ["Keeper", "https://www.keepersecurity.com/", 4.7], ["KeePassXC", "https://keepassxc.org/", 4.8],
  ]),
  ...makeCatalogTools("vpn-tools", "VPN Tools", ["Premium VPN Services", "Privacy-Focused VPNs", "VPN Comparisons & Testing", "Secure Browsing"], [
    ["NordVPN", "https://nordvpn.com/", 4.8], ["ExpressVPN", "https://www.expressvpn.com/", 4.8], ["Mullvad", "https://mullvad.net/", 4.8], ["Proton VPN", "https://protonvpn.com/", 4.8], ["Surfshark", "https://surfshark.com/", 4.7], ["Cloudflare WARP", "https://one.one.one.one/", 4.7],
  ]),
  ...makeCatalogTools("cloud-storage", "Cloud Storage", ["Personal Cloud Storage", "Team Cloud Storage", "Cloud Backup", "File Sync & Transfer"], [
    ["Google Drive", "https://drive.google.com/", 4.9], ["Dropbox", "https://www.dropbox.com/", 4.8], ["Microsoft OneDrive", "https://www.microsoft.com/microsoft-365/onedrive/online-cloud-storage", 4.8], ["iCloud Drive", "https://www.icloud.com/iclouddrive/", 4.7], ["Box", "https://www.box.com/", 4.7], ["Backblaze", "https://www.backblaze.com/", 4.8],
  ]),
  ...makeCatalogTools("file-sharing", "File Sharing", ["Large File Transfer", "Peer-to-Peer Sharing", "Secure File Sharing", "FTP & Server Transfer"], [
    ["WeTransfer", "https://wetransfer.com/", 4.8], ["Send Anywhere", "https://send-anywhere.com/", 4.7], ["Dropbox Transfer", "https://www.dropbox.com/transfer", 4.7], ["Smash", "https://fromsmash.com/", 4.7], ["Filemail", "https://www.filemail.com/", 4.6], ["FileZilla", "https://filezilla-project.org/", 4.7],
  ]),
  ...makeCatalogTools("compression-tools", "Compression Tools", ["Desktop Archivers", "Online Compression", "Image Compression", "PDF Compression"], [
    ["7-Zip", "https://www.7-zip.org/", 4.9], ["WinRAR", "https://www.rarlab.com/", 4.8], ["Bandizip", "https://www.bandisoft.com/bandizip/", 4.7], ["PeaZip", "https://peazip.github.io/", 4.7], ["WinZip", "https://www.winzip.com/", 4.6], ["TinyPNG", "https://tinypng.com/", 4.9],
  ]),
  ...makeCatalogTools("speed-test-tools", "Speed Test Tools", ["Internet Speed Tests", "Latency & Network Tests", "Mobile Network Tests", "Website Performance"], [
    ["Speedtest by Ookla", "https://www.speedtest.net/", 4.9], ["Fast.com", "https://fast.com/", 4.8], ["Cloudflare Speed Test", "https://speed.cloudflare.com/", 4.8], ["M-Lab Speed Test", "https://speed.measurementlab.net/", 4.7], ["SpeedOf.Me", "https://speedof.me/", 4.6], ["Google PageSpeed Insights", "https://pagespeed.web.dev/", 4.8],
  ]),
  ...makeCatalogTools("dns-checker", "DNS Checker", ["DNS Lookup", "DNS Propagation", "DNS Security", "Domain & IP Tools"], [
    ["DNS Checker", "https://dnschecker.org/", 4.8], ["Google Public DNS", "https://dns.google/", 4.8], ["Cloudflare DNS", "https://1.1.1.1/", 4.8], ["MXToolbox", "https://mxtoolbox.com/", 4.8], ["DNSdumpster", "https://dnsdumpster.com/", 4.7], ["IntoDNS", "https://intodns.com/", 4.6],
  ]),
  ...makeCatalogTools("seo-tools", "SEO Tools", ["Keyword Research", "SEO Audits", "Rank Tracking", "Technical SEO"], [
    ["Ahrefs", "https://ahrefs.com/", 4.8], ["Semrush", "https://www.semrush.com/", 4.8], ["Moz", "https://moz.com/", 4.7], ["Google Search Console", "https://search.google.com/search-console/", 4.9], ["Ubersuggest", "https://neilpatel.com/ubersuggest/", 4.7], ["Screaming Frog", "https://www.screamingfrog.co.uk/seo-spider/", 4.8],
  ]),
  ...makeCatalogTools("analytics-tools", "Analytics Tools", ["Web Analytics", "Product Analytics", "Privacy-Focused Analytics", "Marketing Analytics"], [
    ["Google Analytics", "https://analytics.google.com/", 4.8], ["Mixpanel", "https://mixpanel.com/", 4.8], ["Plausible", "https://plausible.io/", 4.7], ["Matomo", "https://matomo.org/", 4.7], ["Hotjar", "https://www.hotjar.com/", 4.7], ["Amplitude", "https://amplitude.com/", 4.8],
  ]),
  ...makeCatalogTools("survey-tools", "Survey Tools", ["Online Surveys", "Forms & Quizzes", "Customer Feedback", "Research & Panels"], [
    ["Typeform", "https://www.typeform.com/", 4.8], ["Google Forms", "https://www.google.com/forms/about/", 4.8], ["SurveyMonkey", "https://www.surveymonkey.com/", 4.7], ["Qualtrics", "https://www.qualtrics.com/", 4.8], ["Jotform", "https://www.jotform.com/", 4.7], ["Tally", "https://tally.so/", 4.7],
  ]),
  ...makeCatalogTools("collaboration-tools", "Collaboration Tools", ["Team Messaging", "Project Management", "Video Meetings", "Knowledge Sharing"], [
    ["Slack", "https://slack.com/", 4.8], ["Microsoft Teams", "https://www.microsoft.com/microsoft-teams/", 4.7], ["Discord", "https://discord.com/", 4.7], ["Asana", "https://asana.com/", 4.7], ["Trello", "https://trello.com/", 4.7], ["Zoom", "https://zoom.us/", 4.8],
  ]),
  ...makeCatalogTools("document-tools", "Document Tools", ["Writing & Editing", "Knowledge Management", "PDF & eSign", "Document Collaboration"], [
    ["Google Docs", "https://docs.google.com/", 4.9], ["Notion", "https://www.notion.so/", 4.8], ["Obsidian", "https://obsidian.md/", 4.8], ["Microsoft Word", "https://www.microsoft.com/microsoft-365/word", 4.8], ["Adobe Acrobat", "https://www.adobe.com/acrobat.html", 4.8], ["DocuSign", "https://www.docusign.com/", 4.7],
  ]),
  ...makeCatalogTools("whiteboard-tools", "Whiteboard Tools", ["Visual Brainstorming", "Workshops & Facilitation", "Diagramming Boards", "Education Whiteboards"], [
    ["Miro", "https://miro.com/", 4.8], ["Mural", "https://www.mural.co/", 4.7], ["FigJam", "https://www.figma.com/figjam/", 4.8], ["Microsoft Whiteboard", "https://www.microsoft.com/microsoft-365/microsoft-whiteboard/digital-whiteboard-app", 4.7], ["Excalidraw", "https://excalidraw.com/", 4.8], ["Lucidspark", "https://lucidspark.com/", 4.7],
  ]),
  ...makeCatalogTools("time-tracking", "Time Tracking", ["Personal Time Tracking", "Team Timesheets", "Automatic Productivity Tracking", "Freelancer Billing"], [
    ["Toggl Track", "https://toggl.com/track/", 4.8], ["Clockify", "https://clockify.me/", 4.8], ["RescueTime", "https://www.rescuetime.com/", 4.7], ["Harvest", "https://www.getharvest.com/", 4.7], ["Timely", "https://memory.ai/timely", 4.7], ["Hubstaff", "https://hubstaff.com/", 4.7],
  ]),
  ...makeCatalogTools("invoice-generators", "Invoice Generators", ["Free Invoice Makers", "Small Business Invoicing", "Payments & Billing", "Accounting Invoices"], [
    ["Wave Invoice Generator", "https://www.waveapps.com/tools/invoice-generator", 4.7], ["Square Invoices", "https://squareup.com/us/en/invoices", 4.7], ["Zoho Invoice", "https://www.zoho.com/invoice/", 4.8], ["PayPal Invoicing", "https://www.paypal.com/us/business/accept-payments/invoice", 4.7], ["FreshBooks", "https://www.freshbooks.com/", 4.7], ["Invoice Ninja", "https://invoiceninja.com/", 4.7],
  ]),
  ...makeCatalogTools("template-libraries", "Template Libraries", ["Design Templates", "Website Templates", "Presentation Templates", "Business Templates"], [
    ["Envato Elements", "https://elements.envato.com/", 4.8], ["Creative Market", "https://creativemarket.com/", 4.7], ["Canva Templates", "https://www.canva.com/templates/", 4.8], ["ThemeForest", "https://themeforest.net/", 4.7], ["Slidesgo", "https://slidesgo.com/", 4.7], ["Notion Template Gallery", "https://www.notion.so/templates", 4.7],
  ]),
  ...makeCatalogTools("animation-tools", "Animation Tools", ["2D Animation", "Motion Graphics", "Animated Video", "Character Animation"], [
    ["Adobe Animate", "https://www.adobe.com/products/animate.html", 4.7], ["Procreate Dreams", "https://procreate.com/dreams", 4.7], ["Blender", "https://www.blender.org/", 4.9], ["Vyond", "https://www.vyond.com/", 4.7], ["Powtoon", "https://www.powtoon.com/", 4.6], ["Animaker", "https://www.animaker.com/", 4.6],
  ]),
  ...makeCatalogTools("screen-sharing", "Screen Sharing", ["Video Meetings", "Remote Desktop", "Screen Recording", "Support & Assistance"], [
    ["Zoom", "https://zoom.us/", 4.8], ["TeamViewer", "https://www.teamviewer.com/", 4.7], ["AnyDesk", "https://anydesk.com/", 4.7], ["Google Meet", "https://meet.google.com/", 4.8], ["Loom", "https://www.loom.com/", 4.8], ["Microsoft Teams", "https://www.microsoft.com/microsoft-teams/", 4.7],
  ]),
  ...makeCatalogTools("chat-tools", "Chat Tools", ["AI Assistants", "AI Search & Research", "Customer Support Chat", "Team Messaging"], [
    ["ChatGPT", "https://chatgpt.com/", 4.9], ["Claude", "https://claude.ai/", 4.9], ["Google Gemini", "https://gemini.google.com/", 4.8], ["Perplexity", "https://www.perplexity.ai/", 4.8], ["Intercom", "https://www.intercom.com/", 4.7], ["Crisp", "https://crisp.chat/", 4.7],
  ]),
  ...makeCatalogTools("writing-assistants", "Writing Assistants", ["Grammar & Spelling", "Style & Readability", "AI Writing", "Originality & Citations"], [
    ["Grammarly", "https://www.grammarly.com/", 4.8], ["ProWritingAid", "https://prowritingaid.com/", 4.7], ["Hemingway Editor", "https://hemingwayapp.com/", 4.7], ["LanguageTool", "https://languagetool.org/", 4.7], ["QuillBot", "https://quillbot.com/", 4.7], ["Scribbr", "https://www.scribbr.com/", 4.7],
  ]),
  ...makeCatalogTools("bookmark-manager", "Bookmark Manager", ["Personal Bookmarks", "Read Later", "Research Collections", "Team Knowledge Links"], [
    ["Raindrop.io", "https://raindrop.io/", 4.8], ["Pocket", "https://getpocket.com/", 4.7], ["Notion Web Clipper", "https://www.notion.so/web-clipper", 4.7], ["Pinboard", "https://pinboard.in/", 4.6], ["Linkwarden", "https://linkwarden.app/", 4.7], ["Anybox", "https://anybox.app/", 4.6],
  ]),
  ...makeCatalogTools("feed-readers", "Feed Readers", ["RSS Readers", "Newsletter Readers", "News Aggregators", "Research Monitoring"], [
    ["Feedly", "https://feedly.com/", 4.8], ["Inoreader", "https://www.inoreader.com/", 4.8], ["NewsBlur", "https://www.newsblur.com/", 4.7], ["The Old Reader", "https://theoldreader.com/", 4.6], ["Readwise Reader", "https://readwise.io/read", 4.7], ["Flipboard", "https://flipboard.com/", 4.7],
  ]),
  ...makeCatalogTools("marketplace-tools", "Marketplace Tools", ["Store Builders", "Open-Source Commerce", "Multi-Channel Selling", "Ecommerce Marketing"], [
    ["Shopify", "https://www.shopify.com/", 4.8], ["WooCommerce", "https://woocommerce.com/", 4.8], ["BigCommerce", "https://www.bigcommerce.com/", 4.7], ["Wix eCommerce", "https://www.wix.com/ecommerce/", 4.7], ["Etsy Seller", "https://www.etsy.com/sell", 4.7], ["Amazon Seller Central", "https://sellercentral.amazon.com/", 4.7],
  ]),
];

export const getCategoryBySlug = (slug: string) => categories.find((category) => category.slug === slug);
export const getToolsByCategory = (category: string) => tools.filter((tool) => tool.category === category);
export const getSubcategories = (category: string) => [...new Set(getToolsByCategory(category).map((tool) => tool.subcategory))];
