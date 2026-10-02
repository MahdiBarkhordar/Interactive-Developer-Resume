   /* =========================================================
   PORTFOLIO APPLICATION
========================================================= */
/* ---------------------------------------------------------
   01. Localized content & labels
--------------------------------------------------------- */
const D = {
    fa: "مهدی برخوردار|طراح وب|طراح وب در استان کرمان با ۴ سال تجربه و بیش از ۱۰ پروژه وب|درباره من|مهارت‌ها|نمونه‌کارها|تجربه|تماس|من مهدی برخوردار هستم، طراح وب در استان کرمان. ۴ سال تجربه دارم و در طراحی و توسعه وب‌سایت‌های مدرن، سریع و کاربرمحور فعالیت می‌کنم.|ارسال پیام|تنظیمات|تم|روشن|تیره|خودکار|رنگ اصلی|زبان|فونت|انیمیشن‌ها|حالت ویرایش|بازنشانی|چاپ / PDF|آماده پروژه جدید|طراح وب|توسعه‌دهنده وب|طراح و توسعه‌دهنده وب|پیام شما|گوشه‌ها|تیز|نرم|گرد|پس‌زمینه|ساده|نقطه‌ای|شبکه|شفق|درخشش ماوس|سال تجربه|پروژه|فناوری|خدمات|طراحی سایت|طراحی UI / UX|توسعه فرانت‌اند و بک‌اند|بهینه‌سازی سرعت و سئو|روند کار|شناخت|طراحی|ساخت|انتشار|نام شما",
    en: "Mahdi Barkhordar|Web Designer|Web Designer in Kerman Province with 4 years of experience and 10+ web projects|About|Skills|Work|Experience|Contact|I'm Mahdi Barkhordar, a web designer in Kerman Province with 4 years of experience, focused on modern, fast and user-focused websites.|Send message|Settings|Theme|Light|Dark|Auto|Accent color|Language|Font|Animations|Edit mode|Reset|Print / PDF|Open to new projects|Web Designer|Web Developer|Web Designer & Developer|Your message|Corners|Sharp|Soft|Round|Background|Plain|Dots|Grid|Aurora|Cursor glow|Years Experience|Projects|Technologies|Services|Website Design|UI / UX Design|Front-end & Back-end Development|Speed Optimization & SEO|Process|Discover|Design|Build|Launch|Your name",
    ar: "مهدي برخوردار|مصمم مواقع|أصمم مواقع هادئة وسريعة تقول ما تريد بدقة.|نبذة|المهارات|الأعمال|الخبرة|تواصل|أنا مصمم مواقع أركز على الواجهات النظيفة والخطوط الواضحة والتفاعل السلس. أحوّل الأفكار إلى مواقع يستمتع الناس باستخدامها.|إرسال الرسالة|الإعدادات|المظهر|فاتح|داكن|تلقائي|لون التمييز|اللغة|الخط|الحركات|وضع التحرير|إعادة ضبط|طباعة / PDF|متاح لمشاريع جديدة|مصمم مواقع أول|مطوّر واجهات أمامية|مصمم واجهات|رسالتك|الزوايا|حادة|ناعمة|دائرية|الخلفية|سادة|نقاط|شبكة|شفق|توهج المؤشر|سنوات|مشروع|عميل|الخدمات|تصميم المواقع|تصميم UI / UX|تطوير الواجهات|السرعة وSEO|طريقة العمل|استكشاف|تصميم|بناء|إطلاق|اسمك",
    tr: "Mahdi Barkhordar|Web Tasarımcı|Ne demek istediğini tam söyleyen, sakin ve hızlı siteler tasarlıyorum.|Hakkımda|Yetenekler|Projeler|Deneyim|İletişim|Temiz arayüzlere, net tipografiye ve akıcı etkileşime odaklanan bir web tasarımcısıyım. Fikirleri insanların kullanmaktan keyif aldığı sitelere dönüştürüyorum.|Mesaj gönder|Ayarlar|Tema|Açık|Koyu|Otomatik|Vurgu rengi|Dil|Yazı tipi|Animasyonlar|Düzenleme modu|Sıfırla|Yazdır / PDF|Yeni projelere açık|Kıdemli Web Tasarımcı|Front-end Geliştirici|Arayüz Tasarımcısı|Mesajınız|Köşeler|Keskin|Yumuşak|Yuvarlak|Arka plan|Düz|Nokta|Izgara|Aurora|İmleç parıltısı|Yıl|Proje|Müşteri|Hizmetler|Web tasarımı|UI / UX tasarımı|Front-end geliştirme|Hız ve SEO|Süreç|Keşif|Tasarım|Geliştirme|Yayın|Adınız",
    de: "Mahdi Barkhordar|Webdesigner|Ich gestalte ruhige, schnelle Websites, die genau sagen, was sie meinen.|Über mich|Fähigkeiten|Projekte|Erfahrung|Kontakt|Ich bin Webdesigner mit Fokus auf klare Oberflächen, präzise Typografie und flüssige Interaktion. Ich mache aus Ideen Websites, die man gern nutzt.|Nachricht senden|Einstellungen|Design|Hell|Dunkel|Auto|Akzentfarbe|Sprache|Schrift|Animationen|Bearbeitungsmodus|Zurücksetzen|Drucken / PDF|Offen für neue Projekte|Senior Webdesigner|Frontend-Entwickler|UI-Designer|Deine Nachricht|Ecken|Eckig|Weich|Rund|Hintergrund|Schlicht|Punkte|Raster|Aurora|Cursor-Glow|Jahre|Projekte|Kunden|Leistungen|Webdesign|UI- / UX-Design|Frontend-Entwicklung|Speed & SEO|Ablauf|Verstehen|Gestalten|Bauen|Launch|Dein Name",
    fr: "Mahdi Barkhordar|Web designer|Je conçois des sites calmes et rapides qui disent exactement ce qu'ils veulent dire.|À propos|Compétences|Projets|Expérience|Contact|Je suis web designer, spécialisé dans les interfaces épurées, la typographie claire et les interactions fluides. Je transforme les idées en sites agréables à utiliser.|Envoyer|Paramètres|Thème|Clair|Sombre|Auto|Couleur d'accent|Langue|Police|Animations|Mode édition|Réinitialiser|Imprimer / PDF|Ouvert aux nouveaux projets|Web designer senior|Développeur front-end|Designer UI|Votre message|Coins|Droits|Doux|Ronds|Arrière-plan|Uni|Points|Grille|Aurore|Halo du curseur|Ans|Projets|Clients|Services|Design de sites|Design UI / UX|Dév. front-end|Vitesse & SEO|Méthode|Découvrir|Concevoir|Construire|Lancer|Votre nom",
    es: "Mahdi Barkhordar|Diseñador web|Diseño sitios tranquilos y rápidos que dicen exactamente lo que quieren decir.|Sobre mí|Habilidades|Proyectos|Experiencia|Contacto|Soy diseñador web y me centro en interfaces limpias, tipografía clara e interacción fluida. Convierto ideas en sitios que da gusto usar.|Enviar mensaje|Ajustes|Tema|Claro|Oscuro|Auto|Color de acento|Idioma|Fuente|Animaciones|Modo edición|Restablecer|Imprimir / PDF|Disponible para proyectos|Diseñador web sénior|Desarrollador front-end|Diseñador UI|Tu mensaje|Esquinas|Rectas|Suaves|Redondas|Fondo|Liso|Puntos|Cuadrícula|Aurora|Brillo del cursor|Años|Proyectos|Clientes|Servicios|Diseño web|Diseño UI / UX|Desarrollo front-end|Velocidad y SEO|Proceso|Descubrir|Diseñar|Construir|Lanzar|Tu nombre",
    ru: "Мехди Бархордар|Веб-дизайнер|Я делаю спокойные и быстрые сайты, которые говорят ровно то, что нужно.|Обо мне|Навыки|Работы|Опыт|Контакты|Я веб-дизайнер: чистые интерфейсы, ясная типографика и плавное взаимодействие. Превращаю идеи в сайты, которыми приятно пользоваться.|Отправить|Настройки|Тема|Светлая|Тёмная|Авто|Акцентный цвет|Язык|Шрифт|Анимации|Режим правки|Сбросить|Печать / PDF|Открыт к новым проектам|Старший веб-дизайнер|Front-end разработчик|UI-дизайнер|Ваше сообщение|Углы|Острые|Мягкие|Круглые|Фон|Чистый|Точки|Сетка|Аврора|Свечение курсора|Лет|Проектов|Клиентов|Услуги|Веб-дизайн|UI / UX дизайн|Front-end разработка|Скорость и SEO|Процесс|Изучение|Дизайн|Сборка|Запуск|Ваше имя"
};
const E = {
    fa: "استان|کرمان، ایران|سن|۱۷ سال|تجربه|۴ سال · بیش از ۱۰ پروژه|تلفن|طراح وب/توسعه‌دهنده فرانت‌اند و بک‌اند/طراح سایت/متخصص سرعت و سئو|تحصیلات|فنی حرفه‌ای · در حال تحصیل|گواهینامه‌ها|زبان‌ها|ابزارها|نظر مشتریان|همکاری با مهدی راحت و نتیجه‌اش فراتر از انتظار بود.|سایت‌مان سریع‌تر، زیباتر و تمیزتر از همیشه شد.|کاغذی|نیمه‌شب|سفارشی|جلوه‌ها|نشانگر|درباره|سرعت انیمیشن|کارت‌های سه‌بعدی|متن تایپی|نوار پیشرفت|شماره بخش‌ها|کنتراست بالا|فشرده|عرض محتوا|سبک کارت|شیشه‌ای|خطی|توپر|جابه‌جایی نوار کناری|نشانگر ماوس|اسکرول‌بار|خاموش|حلقه|نقطه|هاله|رنگ|گرادیان|باریک|ضخیم|سازنده رزومه|طراحی و محتوا|برنامه‌نویسی|خطوط|مورب|مش|ستاره|دانه|صلیب",
    en: "Province|Kerman, Iran|Age|17 years|Experience|4 years · 10+ projects|Phone|Web Designer/Front-end & Back-end Developer/Website Designer/Speed & SEO Specialist|Education|Technical & Vocational School · Currently Studying|Certificates|Languages|Tools|Testimonials|Working with Mahdi was effortless and the result beat every expectation.|Our site is faster, cleaner and prettier than ever.|Sepia|Midnight|Custom|Effects|Cursor|About|Animation speed|3D cards|Typing text|Progress bar|Section numbers|High contrast|Compact|Content width|Card style|Glass|Outline|Solid|Flip sidebar|Mouse cursor|Scrollbar|Off|Ring|Dot|Halo|Color|Gradient|Thin|Bold|Resume builder|Design & content|Development|Lines|Diagonal|Mesh|Stars|Grain|Cross",
    ar: "المدينة|طهران، إيران|العمر|27 سنة|نوع التعاون|عمل حر · عن بعد|الهاتف|مطوّر واجهات أمامية/مصمم واجهات/مصمم مواقع/مطوّر React|التعليم|بكالوريوس هندسة الحاسوب|الشهادات|اللغات|الأدوات|آراء العملاء|كان العمل مع مهدي سهلًا والنتيجة فاقت التوقعات.|موقعنا أصبح أسرع وأنظف وأجمل من أي وقت.|ورقي|منتصف الليل|مخصص|المؤثرات|المؤشر|حول|سرعة الحركة|بطاقات ثلاثية الأبعاد|نص الكتابة|شريط التقدم|ترقيم الأقسام|تباين عالٍ|مضغوط|عرض المحتوى|نمط البطاقة|زجاجي|إطار|صلب|قلب الشريط الجانبي|مؤشر الفأرة|شريط التمرير|إيقاف|حلقة|نقطة|هالة|اللون|تدرج|رفيع|عريض|منشئ السيرة|التصميم والمحتوى|البرمجة|خطوط|قطري|مش|نجوم|حبيبات|صليب",
    tr: "Şehir|Tahran, İran|Yaş|27 yaş|Çalışma türü|Freelance · Uzaktan|Telefon|Front-end Geliştirici/Arayüz Tasarımcısı/Web Tasarımcı/React Geliştirici|Eğitim|Bilgisayar Mühendisliği Lisans|Sertifikalar|Diller|Araçlar|Referanslar|Mahdi ile çalışmak çok kolaydı, sonuç beklentilerin üzerindeydi.|Sitemiz hiç olmadığı kadar hızlı, temiz ve güzel.|Sepya|Gece yarısı|Özel|Efektler|İmleç|Hakkında|Animasyon hızı|3B kartlar|Yazan metin|İlerleme çubuğu|Bölüm numaraları|Yüksek kontrast|Sıkı|İçerik genişliği|Kart stili|Cam|Çerçeve|Dolu|Kenar çubuğunu çevir|Fare imleci|Kaydırma çubuğu|Kapalı|Halka|Nokta|Hale|Renk|Gradyan|İnce|Kalın|Özgeçmiş oluşturucu|Tasarım ve içerik|Geliştirme",
    de: "Stadt|Teheran, Iran|Alter|27 Jahre|Zusammenarbeit|Freelance · Remote|Telefon|Frontend-Entwickler/UI-Designer/Webdesigner/React-Entwickler|Ausbildung|B.Sc. Informatik|Zertifikate|Sprachen|Werkzeuge|Stimmen|Die Zusammenarbeit mit Mahdi war mühelos, das Ergebnis übertraf alles.|Unsere Seite ist schneller, klarer und schöner denn je.|Sepia|Mitternacht|Eigene|Effekte|Cursor|Info|Animationstempo|3D-Karten|Tipptext|Fortschrittsbalken|Abschnittsnummern|Hoher Kontrast|Kompakt|Inhaltsbreite|Kartenstil|Glas|Kontur|Voll|Seitenleiste tauschen|Mauszeiger|Scrollleiste|Aus|Ring|Punkt|Halo|Farbe|Verlauf|Dünn|Fett|Lebenslauf-Ersteller|Design & Inhalt|Entwicklung",
    fr: "Ville|Téhéran, Iran|Âge|27 ans|Collaboration|Freelance · À distance|Téléphone|Développeur front-end/Designer UI/Web designer/Développeur React|Formation|Licence en informatique|Certificats|Langues|Outils|Témoignages|Travailler avec Mahdi fut simple et le résultat a dépassé nos attentes.|Notre site est plus rapide, plus net et plus beau que jamais.|Sépia|Minuit|Perso|Effets|Curseur|À propos|Vitesse d'animation|Cartes 3D|Texte tapé|Barre de progression|Numéros de section|Contraste élevé|Compact|Largeur du contenu|Style de carte|Verre|Contour|Plein|Inverser la barre latérale|Curseur souris|Barre de défilement|Off|Anneau|Point|Halo|Couleur|Dégradé|Fine|Épaisse|Créateur du CV|Design et contenu|Développement",
    es: "Ciudad|Teherán, Irán|Edad|27 años|Colaboración|Freelance · Remoto|Teléfono|Desarrollador front-end/Diseñador UI/Diseñador web/Desarrollador React|Educación|Grado en Ingeniería Informática|Certificados|Idiomas|Herramientas|Opiniones|Trabajar con Mahdi fue fácil y el resultado superó lo esperado.|Nuestro sitio es más rápido, limpio y bonito que nunca.|Sepia|Medianoche|Personal|Efectos|Cursor|Acerca de|Velocidad de animación|Tarjetas 3D|Texto tecleado|Barra de progreso|Números de sección|Alto contraste|Compacto|Ancho del contenido|Estilo de tarjeta|Cristal|Contorno|Sólido|Invertir barra lateral|Cursor del ratón|Barra de desplazamiento|Apagado|Anillo|Punto|Halo|Color|Degradado|Fina|Gruesa|Creador del CV|Diseño y contenido|Desarrollo",
    ru: "Город|Тегеран, Иран|Возраст|27 лет|Формат работы|Фриланс · Удалённо|Телефон|Front-end разработчик/UI-дизайнер/Веб-дизайнер/React-разработчик|Образование|Бакалавр, компьютерная инженерия|Сертификаты|Языки|Инструменты|Отзывы|С Мехди легко работать, результат превзошёл ожидания.|Наш сайт стал быстрее, чище и красивее, чем когда-либо.|Сепия|Полночь|Свой|Эффекты|Курсор|О сайте|Скорость анимации|3D-карточки|Печатный текст|Индикатор прокрутки|Номера разделов|Высокий контраст|Компактно|Ширина контента|Стиль карточек|Стекло|Контур|Заливка|Поменять сторону панели|Курсор мыши|Полоса прокрутки|Выкл|Кольцо|Точка|Ореол|Цвет|Градиент|Тонкая|Толстая|Автор резюме|Дизайн и контент|Разработка"
};
/* ---------------------------------------------------------
   02. Languages, flags & fonts
--------------------------------------------------------- */
const LN = { fa: "فارسی", en: "English", ar: "العربية", tr: "Türkçe", de: "Deutsch", fr: "Français", es: "Español", ru: "Русский" };
const T = l => { const a = (D[l] + "|" + E[l]).split("|"), b = (D.en + "|" + E.en).split("|"); return b.map((x, i) => a[i] || x); };
const H = a => a.map((c, i) => `<rect y="${i * 20 / a.length}" width="30" height="${20 / a.length + .1}" fill="${c}"/>`).join("");
const FG = { fa: H(["#239f40", "#fff", "#da0000"]), ru: H(["#fff", "#0039a6", "#d52b1e"]), de: H(["#000", "#d00", "#ffce00"]), es: H(["#aa151b", "#f1bf00", "#f1bf00", "#aa151b"]),
    fr: '<rect width="10" height="20" fill="#0055a4"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#ef4135"/>',
    ar: '<rect width="30" height="20" fill="#006c35"/><rect x="6" y="13" width="18" height="1.6" rx=".8" fill="#fff"/><rect x="8" y="6" width="14" height="2" rx="1" fill="#fff"/>',
    tr: '<rect width="30" height="20" fill="#e30a17"/><circle cx="11" cy="10" r="5" fill="#fff"/><circle cx="12.6" cy="10" r="4" fill="#e30a17"/><circle cx="17.5" cy="10" r="1.4" fill="#fff"/>',
    en: '<rect width="30" height="20" fill="#012169"/><path d="M0 0l30 20M30 0 0 20" stroke="#fff" stroke-width="4"/><path d="M0 0l30 20M30 0 0 20" stroke="#c8102e" stroke-width="1.5"/><path d="M15 0v20M0 10h30" stroke="#fff" stroke-width="6"/><path d="M15 0v20M0 10h30" stroke="#c8102e" stroke-width="3.5"/>' };
const flag = k => `<svg class="fl" viewBox="0 0 30 20">${FG[k]}</svg>`;
const FL = { FA: ["Vazirmatn", "Noto Sans Arabic", "Noto Naskh Arabic", "Cairo", "Tajawal", "Lalezar", "Amiri", "Markazi Text", "IBM Plex Sans Arabic"],
    AR: ["Cairo", "Tajawal", "Almarai", "Noto Kufi Arabic", "Reem Kufi", "El Messiri", "Amiri", "Changa", "Noto Naskh Arabic"],
    LAT: ["Bricolage Grotesque", "Space Grotesk", "Fraunces", "Inter", "Manrope", "Playfair Display", "Syne", "DM Serif Display", "Space Mono"],
    CY: ["Inter", "Manrope", "Playfair Display", "Montserrat", "Raleway", "Roboto Slab", "Lora", "JetBrains Mono", "Oswald"] };
const gf = l => l == "fa" ? "FA" : l == "ar" ? "AR" : l == "ru" ? "CY" : "LAT";
/* ---------------------------------------------------------
   03. Portfolio data
--------------------------------------------------------- */
const SK = [["HTML", 100], ["CSS", 98], ["Bootstrap", 55], ["Tailwind CSS", 60], ["JavaScript", 50], ["PHP", 60], ["Laravel", 65], ["WordPress", 95], ["C#", 50], [".NET MVC 5", 65], ["Git", 85], ["AI", 85], ["SEO", 65]];
/* Navigation, social links & theme presets */
const NV = [["user", "#a", 3], ["layers", "#s", 4], ["code", "#v", 40], ["folder", "#w", 5], ["brief", "#x", 6], ["cap", "#e", 59], ["mail", "#c", 7]];
const LK = [["mail", "Email", "mahdibarkhordar142@gmail.com", "mailto:mahdibarkhordar142@gmail.com"], ["phone", 0, "09054180149", "tel:+989120000000"], ["github", "GitHub", "github.com/mahdibarkhordar", "#"], ["linkedin", "LinkedIn", "linkedin.com/in/Mahdi", "#"], ["send", "Telegram", "@Mahdii_142", "#"], ["insta", "Instagram", "@Mahdii_142", "#"]];
const PRE = [[230, 98, 62], [160, 85, 36], [335, 75, 57], [42, 90, 50], [262, 85, 66], [188, 92, 40], [12, 90, 58], [95, 60, 42]];
/* ---------------------------------------------------------
   04. State & DOM helpers
--------------------------------------------------------- */
const DEF = { theme: "auto", h: 230, s: 98, l: 62, lang: "fa", fonts: {}, rv: 10, bg: "none", card: "glass", cur: "ring", cc: "ac", sbs: "thin", sbc: "ac", anim: 1, glow: 0, tilt: 0, typing: 1, prog: 1, num: 0, hc: 0, dense: 0, flip: 0, edit: 0, sp: 1, wd: 700 };
let S = { ...DEF, fonts: {} };
try {
    Object.assign(S, JSON.parse(localStorage.getItem("mb3") || "{}"));
}
catch (e) { }
S.edit = 0;
/* ---------------------------------------------------------
   05. Dynamic UI rendering
--------------------------------------------------------- */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)], R = document.documentElement;
const ic = n => `<svg class="ic"><use href="#i-${n}"/></svg>`;
$("#nav").innerHTML = NV.map(([i, h, k]) => `<a href="${h}">${ic(i)}<span data-i="${k}"></span></a>`).join("");
$("#sk").innerHTML = SK.map(([n, v]) => `<div class="sk"><span>${n}</span><div class="bar"><i style="--v:${v}%"></i></div><em>${v}%</em></div>`).join("");
$("#lg2").innerHTML = [["fa", 100], ["en", 68]].map(([k, v]) => `<div class="sk"><span>${LN[k]}</span><div class="bar"><i style="--v:${v}%"></i></div><em>${v}%</em></div>`).join("");
$("#lks").innerHTML = LK.map(([i, l, v, h], n) => `<a class="lk cd" href="${h}"><div class="bd">${ic(i)}</div><div><small ${l ? "" : 'data-i="57"'}>${l || ""}</small><b class="e" dir="ltr">${v}</b></div>${ic("arrow").replace('class="ic"', 'class="ic arr"')}</a>`).join("");
const TG = "Figma HTML5 CSS3 JavaScript React Tailwind Webflow WordPress Next.js Framer Git Lottie".split(" ").map(x => `<span>✦ ${x}</span>`).join("");
$("#mt").innerHTML = TG + TG;
const grp = (i, k, c, inner, id = "") => `<div class="gp"><p>${ic(i)}<span data-i="${k}"></span></p><div class="tg" ${id ? `id="${id}"` : ""} style="--c:${c}">${inner}</div></div>`;
const tl = (g, v, inner, x = "") => `<button class="t ${x}" data-g="${g}" data-v="${v}">${inner}</button>`;
const lb = k => `<span data-i="${k}"></span>`;
const tgl = (g, i, k) => `<button class="t sw2" data-g="${g}"><span>${ic(i)}${lb(k)}</span><i></i></button>`;
const rng = (k, min, max, step, i, lab) => `<div class="gp"><p>${ic(i)}${lb(lab)}<span style="margin-inline-start:auto" id="v-${k}"></span></p><input type="range" data-s="${k}" min="${min}" max="${max}" step="${step}"></div>`;
const tabs = [["palette", 11], ["image", 31], ["spark", 70], ["mouse", 71], ["info", 72]];
$("#pan").innerHTML = `<h3><span style="display:flex;gap:8px;align-items:center">${ic("sliders")}${lb(10)}</span><button class="t" id="x1" style="height:34px;width:34px">${ic("x")}</button></h3>
<div class="tabs">${tabs.map(([i, k], n) => tl("tab", n, ic(i) + lb(k))).join("")}</div>
<div class="pane" data-pn="0">` +
    grp("sun", 11, 5, [["light", "sun", 12], ["dark", "moon", 13], ["auto", "monitor", 14], ["sepia", "book", 67], ["midnight", "stars", 68]].map(([v, i, k]) => tl("theme", v, ic(i) + lb(k))).join("")) +
    `<div class="gp"><p>${ic("palette")}${lb(15)}</p><div class="tg" style="--c:8">${PRE.map(p => `<button class="t c" style="--k:hsl(${p[0]} ${p[1]}% ${p[2]}%)" data-g="ac" data-v="${p}"></button>`).join("")}</div>
<div class="pk"><div class="pvw" id="pvw"></div><input type="range" id="rh" data-s="h" min="0" max="360"><input type="range" id="rs" data-s="s" min="30" max="100"><input type="range" id="rl" data-s="l" min="28" max="75"></div></div>` +
    grp("globe", 16, 4, Object.keys(LN).map(k => tl("lang", k, flag(k) + "<span>" + LN[k] + "</span>")).join("")) +
    grp("type", 17, 3, "", "fg") +
    grp("corner", 27, 4, [[0, 28], [10, 29], [24, 30]].map(([v, k]) => tl("rv", v, `<span class="pv" style="border-radius:${v / 2}px"></span>` + lb(k))).join("") + tl("rv", "c", `<span class="pv" id="rvp"></span>` + lb(69))) +
    rng("rv", 0, 40, 1, "corner", 69).replace('<div class="gp">', '<div class="gp" style="margin-top:6px">').replace(/<p>.*?<\/p>/, '') +
    `</div><div class="pane" data-pn="1">` +
    grp("image", 31, 5, ["none", "dots", "grid", "lines", "diag", "cross", "mesh", "aurora", "stars", "grain"].map((v, i) => tl("bg", v, `<span class="bp b-${v}"></span>` + lb([32, 33, 34, 99, 100, 104, 101, 35, 102, 103][i]))).join("")) +
    `</div><div class="pane" data-pn="2">` +
    grp("card", 81, 3, [["glass", 82], ["outline", 83], ["solid", 84]].map(([v, k]) => tl("card", v, ic("card") + lb(k))).join("")) +
    `<div class="gp">${tgl("anim", "play", 18)}${tgl("typing", "kbd", 75)}${tgl("tilt", "cube", 74)}${tgl("glow", "spark", 36)}${tgl("prog", "bar", 76)}${tgl("num", "hash", 77)}${tgl("hc", "hc", 78)}${tgl("dense", "dense", 79)}${tgl("flip", "flip", 85)}${tgl("edit", "pen", 19)}</div>` +
    rng("sp", .5, 2, .25, "gauge", 73) + rng("wd", 560, 900, 20, "width", 80) +
    `</div><div class="pane" data-pn="3">` +
    grp("mouse", 86, 4, [["off", "off", 88], ["ring", "ring", 89], ["dot", "dot", 90], ["blob", "blob", 91]].map(([v, i, k]) => tl("cur", v, ic(i) + lb(k))).join("")) +
    grp("palette", 92, 2, [["ac", "palette", 15], ["auto", "hc", 14]].map(([v, i, k]) => tl("cc", v, ic(i) + lb(k))).join("")) +
    grp("scroll", 87, 3, [["thin", "scroll", 94], ["bold", "scroll", 95], ["hide", "off", 88]].map(([v, i, k]) => tl("sbs", v, ic(i) + lb(k))).join("")) +
    grp("palette", 92, 3, [["ac", "palette", 15], ["grad", "spark", 93], ["plain", "card", 32]].map(([v, i, k]) => tl("sbc", v, ic(i) + lb(k))).join("")) +
    `</div><div class="pane" data-pn="4">
<div class="bb"><h4>${ic("code")}${lb(96)}</h4><div><span data-i="97"></span><b>Mahdi Barkhordar</b></div><div><span data-i="98"></span><b>Mahdi Barkhordar</b></div></div>` +
    grp("reset", 20, 2, tl("reset", "", ic("reset") + lb(20)) + tl("print", "", ic("print") + lb(21))).replace(/<p>.*?<\/p>/, '') + `</div>`;
/* ---------------------------------------------------------
   06. Settings UI helpers
--------------------------------------------------------- */
function fonts() {
    const g = FL[gf(S.lang)], cur = S.fonts[S.lang] || 0;
    $("#fg").innerHTML = g.map((f, i) => tl("font", i, `<span class="fa" style="font-family:'${f}','Vazirmatn'">Aa</span><span>${f.split(" ")[0]}</span>`)).join("");
}
let TT;
function typing(w) {
    clearTimeout(TT);
    const el = $("#ty"), a = w.split("/");
    let i = 0, j = 0, d = 0;
    if (!S.typing || !S.anim) {
        el.textContent = a[0];
        return;
    }
    (function f() {
        const s = a[i];
        j += d ? -1 : 1;
        el.textContent = s.slice(0, j);
        let t = d ? 35 : 75;
        if (!d && j == s.length) {
            d = 1;
            t = 1600;
        }
        else if (d && j == 0) {
            d = 0;
            i = (i + 1) % a.length;
            t = 300;
        }
        TT = setTimeout(f, t);
    })();
}
/* ---------------------------------------------------------
   07. Localization & typography
--------------------------------------------------------- */
function text() {
    const t = T(S.lang);
    R.lang = S.lang;
    R.dir = ["fa", "ar"].includes(S.lang) ? "rtl" : "ltr";
    $$("[data-i]").forEach(e => e.textContent = t[+e.dataset.i]);
    $$("[data-p]").forEach(e => e.placeholder = t[+e.dataset.p]);
    $("#phr").textContent = t[1];
    document.title = t[0] + " · " + t[1];
    fonts();
    typing(t[58]);
    mark();
}
/* ---------------------------------------------------------
   08. Theme & settings state
--------------------------------------------------------- */
const ONOFF = ["anim", "glow", "tilt", "typing", "prog", "num", "hc", "dense", "flip", "edit"];
function mark() {
    const dk = S.theme == "auto" ? (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light") : S.theme;
    const st = R.style, ac = `hsl(${S.h} ${S.s}% ${S.l}%)`;
    R.dataset.t = dk;
    R.style.colorScheme = ["dark", "midnight"].includes(dk) ? "dark" : "light";
    R.dataset.bg = S.bg;
    R.dataset.card = S.card;
    R.dataset.cur = S.cur;
    R.dataset.cc = S.cc;
    ONOFF.forEach(k => R.dataset[k == "anim" ? "anim" : k] = S[k] ? "on" : "off");
    R.dataset.anim = S.anim ? "on" : "off";
    st.setProperty("--ac", ac);
    st.setProperty("--r", S.rv + "px");
    st.setProperty("--mw", S.wd + "px");
    st.setProperty("--sp", 1 / S.sp);
    st.setProperty("--f", `'${FL[gf(S.lang)][S.fonts[S.lang] || 0]}','Vazirmatn',sans-serif`);
    st.setProperty("--sw", S.sbs == "bold" ? "14px" : S.sbs == "hide" ? "0px" : "7px");
    st.scrollbarWidth = S.sbs == "hide" ? "none" : "";
    st.setProperty("--sbg", S.sbc == "grad" ? "linear-gradient(var(--ac),#e0457b)" : S.sbc == "plain" ? "var(--mu)" : "var(--ac)");
    $$("#pan [data-g]").forEach(b => {
        const g = b.dataset.g, v = b.dataset.v;
        let on;
        if (ONOFF.includes(g))
            on = !!S[g];
        else if (g == "ac")
            on = v == [S.h, S.s, S.l] + "";
        else if (g == "font")
            on = +v == (S.fonts[S.lang] || 0);
        else if (g == "rv")
            on = v == "c" ? ![0, 10, 24].includes(S.rv) : +v == S.rv;
        else if (g == "tab")
            on = false;
        else
            on = String(S[g]) == v;
        b.classList.toggle("on", on);
    });
    $$("[data-s]").forEach(i => { i.value = S[i.dataset.s]; });
    $("#v-rv").textContent = S.rv + "px";
    $("#v-sp").textContent = S.sp + "×";
    $("#v-wd").textContent = S.wd + "px";
    $("#rvp").style.borderRadius = S.rv / 2 + "px";
    $("#pvw").textContent = ac;
    $("#rs").style.background = `linear-gradient(90deg,hsl(${S.h} 30% ${S.l}%),hsl(${S.h} 100% ${S.l}%))`;
    $("#rl").style.background = `linear-gradient(90deg,hsl(${S.h} ${S.s}% 28%),hsl(${S.h} ${S.s}% 75%))`;
    $$("[data-i],.e").forEach(e => { if (!e.closest("#pan,form,nav"))
        e.contentEditable = !!S.edit; });
    const s = Object.assign({}, S);
    delete s.edit;
    try {
        localStorage.setItem("mb3", JSON.stringify(s));
    }
    catch (e) { }
}
/* ---------------------------------------------------------
   09. Settings interactions
--------------------------------------------------------- */
function tab(n) { $$(".pane").forEach(p => p.classList.toggle("on", p.dataset.pn == n)); $$(".tabs .t").forEach(b => b.classList.toggle("on", b.dataset.v == n)); }
tab(0);
$("#pan").onclick = e => {
    const b = e.target.closest("[data-g]");
    if (!b)
        return;
    const g = b.dataset.g, v = b.dataset.v;
    if (g == "tab") {
        tab(v);
        return;
    }
    if (g == "reset") {
        S = { ...DEF, fonts: {} };
        text();
        return;
    }
    if (g == "print") {
        print();
        return;
    }
    if (ONOFF.includes(g)) {
        S[g] = S[g] ? 0 : 1;
        if (g == "typing" || g == "anim")
            typing(T(S.lang)[58]);
    }
    else if (g == "ac")
        [S.h, S.s, S.l] = v.split(",").map(Number);
    else if (g == "font")
        S.fonts[S.lang] = +v;
    else if (g == "rv") {
        if (v != "c")
            S.rv = +v;
    }
    else
        S[g] = v;
    g == "lang" ? (S.fonts[S.lang] = S.fonts[S.lang] || 0, text()) : mark();
};
$("#pan").oninput = e => { const k = e.target.dataset.s; if (k) {
    S[k] = +e.target.value;
    mark();
} };
/* ---------------------------------------------------------
   10. Global interactions
--------------------------------------------------------- */
const pn = $("#pan");
$("#gear").onclick = e => { e.stopPropagation(); pn.classList.toggle("open"); };
$("#x1").onclick = () => pn.classList.remove("open");
addEventListener("click", e => { if (!e.target.closest("#pan"))
    pn.classList.remove("open"); });
addEventListener("keydown", e => { if (e.key == "Escape")
    pn.classList.remove("open"); });
matchMedia("(prefers-color-scheme:dark)").addEventListener("change", mark);
$("#f").onsubmit = e => { e.preventDefault(); location.href = "mailto:mahdibarkhordar142@gmail.com?subject=" + encodeURIComponent($("#fn").value) + "&body=" + encodeURIComponent($("#fm").value); };
/* ---------------------------------------------------------
   11. Pointer, motion & hover effects
--------------------------------------------------------- */
const nm = $("#nm"), gl = $("#gl"), cr = $("#cr"), cd = $("#cd");
let mx = -99, my = -99, rx = -99, ry = -99;
addEventListener("pointermove", e => {
    mx = e.clientX;
    my = e.clientY;
    const x = mx / innerWidth, w = 300 + 500 * (R.dir == "rtl" ? 1 - x : x);
    nm.style.animationName = "gs";
    nm.style.fontWeight = w;
    gl.style.transform = `translate(${mx - 220}px,${my - 220}px)`;
    const h = e.target.closest && e.target.closest("a,button,input,textarea,.cd");
    h ? R.setAttribute("data-hov", "") : R.removeAttribute("data-hov");
    const c = e.target.closest && e.target.closest(".cd");
    if (c) {
        const r = c.getBoundingClientRect(), dx = (mx - r.left) / r.width, dy = (my - r.top) / r.height;
        c.style.setProperty("--mx", dx * 100 + "%");
        c.style.setProperty("--my", dy * 100 + "%");
        if (S.tilt && c.classList.contains("done"))
            c.style.transform = `perspective(800px) rotateY(${(dx - .5) * 8}deg) rotateX(${(.5 - dy) * 8}deg) translateY(-3px)`;
    }
    const b = e.target.closest && e.target.closest(".btn");
    if (b) {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(mx - r.left - r.width / 2) * .12}px,${(my - r.top - r.height / 2) * .2}px)`;
    }
});
addEventListener("pointerout", e => { const c = e.target.closest && e.target.closest(".cd,.btn"); if (c)
    c.style.transform = ""; });
(function loop() { rx += (mx - rx) * .2; ry += (my - ry) * .2; cr.style.transform = `translate(${rx}px,${ry}px)`; cd.style.transform = `translate(${mx}px,${my}px)` + (R.hasAttribute("data-hov") ? " scale(.4)" : ""); requestAnimationFrame(loop); })();
/* ---------------------------------------------------------
   12. Scroll progress & counters
--------------------------------------------------------- */
function prog() { const p = scrollY / Math.max(1, R.scrollHeight - innerHeight); R.style.setProperty("--p", Math.min(1, p)); $("#pc").textContent = Math.round(p * 100) + "%"; }
addEventListener("scroll", prog, { passive: true });
prog();
function count(el) { const n = +el.dataset.n; if (!S.anim) {
    el.textContent = n;
    return;
} let s = null; const f = t => { s = s || t; const p = Math.min((t - s) / 1600, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1)
    requestAnimationFrame(f); }; requestAnimationFrame(f); }
/* ---------------------------------------------------------
   13. Scroll reveal & active navigation
--------------------------------------------------------- */
$$("main section").forEach(s => [...s.children].forEach(c => c.classList.add("rv")));
$$(".sk,.row,.tl>div,.cd,.pc,.tags span").forEach(e => { e.classList.add("rv"); e.style.setProperty("--d", (([...e.parentNode.children].indexOf(e)) * .09) + "s"); });
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) {
    const t = e.target;
    t.classList.add("in");
    setTimeout(() => t.classList.add("done"), 1500);
    if (t.classList.contains("st"))
        count(t.querySelector("b"));
    io.unobserve(t);
} }), { threshold: .12 });
$$(".rv").forEach(e => io.observe(e));
const no = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting)
    $$("#nav a").forEach(a => a.classList.toggle("on", a.hash == "#" + e.target.id)); }), { rootMargin: "-40% 0px -55% 0px" });
$$("main section").forEach(s => no.observe(s));
text();