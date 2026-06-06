export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
    'author'?: Array<{
      name: string;
    }>;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

export const CATEGORIES: WPCategory[] = [
  { id: 1, name: "Fashion", slug: "fashion", count: 8 },
  { id: 2, name: "Outfit Inspo", slug: "outfit-inspo", count: 6 },
  { id: 3, name: "Styling Tips", slug: "styling-tips", count: 7 },
  { id: 4, name: "Capsule Wardrobe", slug: "capsule-wardrobe", count: 3 },
  { id: 5, name: "Seasonal Trends", slug: "seasonal-trends", count: 5 },
  { id: 6, name: "Muse Journal", slug: "muse-journal", count: 4 },
];

export const PAGES: WPPage[] = [
  {
    id: 101,
    slug: "about",
    title: { rendered: "About" },
    content: {
      rendered: `
<div class="wp-block-columns has-2-columns is-layout-flex wp-container-core-columns-is-layout-8f761849 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="flex-basis:33%">
<figure class="wp-block-image size-full is-style-default"><img decoding="async" width="800" height="800" src="/images/profile-avatar.png" alt="Valerie Profile" class="wp-image-523"></figure>
</div>

<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<h1 class="wp-block-heading has-text-align-center">Hi, I’m Valerie — founder of <strong>The Capsule Muse</strong>.</h1>

<p class="wp-block-paragraph">The Capsule Muse was created from my lifelong love for fashion, beauty, and intentional living. I’ve always believed that what we wear is more than just clothing — it’s a form of self-expression, confidence, and personal power.</p>

<p class="wp-block-paragraph">As a designer by profession and a fashion lover at heart, I curate pieces that help women feel stylish, confident, and effortlessly put together in real life. Not just for special occasions — but for everyday moments: school drop-offs, workdays, brunch with friends, date nights, vacations, and everything in between.</p>

<p class="wp-block-paragraph">At The Capsule Muse, you’ll find thoughts on quality, fit, comfort, and elevated design. I focus on timeless silhouettes with a modern edge, so you can build a wardrobe that feels chic, versatile, and true to you.</p>

<p class="wp-block-paragraph">This blog is an extension of that vision.</p>

<p class="wp-block-paragraph">Here, I share:</p>

<ul class="wp-block-list">
<li>Outfit inspiration for real life</li>

<li>Styling ideas that save you time and make getting dressed easy</li>

<li>Seasonal trend edits and capsule wardrobes</li>

<li>Shopping guides and curated collections</li>

<li>Tips on building a wardrobe you love</li>
</ul>

<p class="wp-block-paragraph">My goal is simple:<br>To help you feel beautiful, confident, and empowered — every single day.</p>

<p class="wp-block-paragraph">Fashion should be fun. Getting dressed should feel exciting. And your wardrobe should support the life you’re building.</p>

<p class="wp-block-paragraph">Welcome to The Capsule Muse.<br>I’m so happy you’re here.</p>

<p class="wp-block-paragraph">With love,<br><strong>Valerie</strong><br>Founder, The Capsule Muse 💖</p>
</div>
</div>
      `
    }
  },
  {
    id: 102,
    slug: "privacy-policy",
    title: { rendered: "Privacy Policy" },
    content: {
      rendered: `
<h3 class="wp-block-heading">Privacy Policy for The Capsule Muse Blog</h3>

<p class="wp-block-paragraph"><strong>Last Updated:</strong> September 12, 2025</p>

<p class="wp-block-paragraph">Your privacy is critically important to us. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to protect your data. This policy applies to all visitors of our blog, as well as customers who interact with our boutique initiatives, The Capsule Muse.</p>

<h4 class="wp-block-heading">1. Information We Collect</h4>

<p class="wp-block-paragraph">We may collect the following types of information from you:</p>

<p class="wp-block-paragraph"><strong>a. Information You Voluntarily Submit:</strong> When you interact with our website, you may provide us with information. This includes:</p>

<ul class="wp-block-list">
<li>Your name and email address when you sign up for our newsletter, comment on a blog post, or fill out a contact form.</li>
</ul>

<p class="wp-block-paragraph"><strong>b. Information We Collect from Third Parties:</strong> We may receive information about you from other sources, such as payment processors that provide us with transaction details, or from social media platforms.</p>

<p class="wp-block-paragraph"><strong>c. Automatically-Collected Information:</strong> When you visit our website, we automatically collect certain information about your device and your activity. This may include:</p>

<ul class="wp-block-list">
<li>Your IP address, browser type, and operating system.</li>

<li>The pages you visited on our site, the time and date of your visit, and the time spent on those pages.</li>

<li>Information collected via cookies, which are small data files stored on your browser.</li>
</ul>

<h4 class="wp-block-heading">2. How We Use Your Information</h4>

<p class="wp-block-paragraph">The information we collect is used to:</p>

<ul class="wp-block-list">
<li><strong>Operate and maintain the website:</strong> To deliver the content you request, and to ensure the website functions correctly.</li>

<li><strong>Communicate with you:</strong> To send you newsletters, promotional materials, order confirmations, and administrative emails.</li>

<li><strong>Improve our services:</strong> To analyze website usage, track marketing campaigns, and personalize your experience on the blog.</li>

<li><strong>Protect our business:</strong> To prevent and detect fraudulent or illegal activity.</li>
</ul>

<h4 class="wp-block-heading">3. Cookies and Tracking Technologies</h4>

<p class="wp-block-paragraph">We use cookies to:</p>

<ul class="wp-block-list">
<li>Remember your preferences and past interactions.</li>

<li>Compile data about site traffic and site interactions to improve our services and advertising.</li>
</ul>

<p class="wp-block-paragraph">You can choose to disable cookies through your individual browser settings. However, doing so may affect your ability to use certain features on our website.</p>

<h4 class="wp-block-heading">4. Third-Party Links and Services</h4>

<p class="wp-block-paragraph">This website may contain links to third-party websites. These sites have their own privacy policies, and we are not responsible for their content or activities. We also use third-party service providers to help us operate our business. These providers may have access to your personal information to perform their functions on our behalf. Examples include:</p>

<ul class="wp-block-list">
<li><strong>Email Marketing Services:</strong> To send out newsletters and promotional emails.</li>

<li><strong>Analytics Services:</strong> To track website performance and user behavior (e.g., Google Analytics).</li>

<li><strong>Affiliate Networks:</strong> To track affiliate commissions.</li>

<li><strong>Display Advertising:</strong> Ad services that use cookies to provide personalized advertising.</li>
</ul>

<h4 class="wp-block-heading">5. Your Rights</h4>

<p class="wp-block-paragraph">Depending on where you live, you may have the right to:</p>

<ul class="wp-block-list">
<li><strong>Opt-Out:</strong> Unsubscribe from our email list at any time by clicking the “unsubscribe” link in any email.</li>

<li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>

<li><strong>Amend:</strong> Request that we correct any inaccurate information.</li>

<li><strong>Erase:</strong> Request that we delete your personal data.</li>
</ul>

<h4 class="wp-block-heading">6. Contact Information</h4>

<p class="wp-block-paragraph">If you have any questions about this Privacy Policy, please contact us at:</p>

<p class="wp-block-paragraph">hello@thecapsulemuse.com</p>
      `
    }
  },
  {
    id: 103,
    slug: "disclosure-policy",
    title: { rendered: "Disclaimer and Disclosure Policy" },
    content: {
      rendered: `
<p class="wp-block-paragraph"><strong>Last Updated: October 17, 2025</strong></p>

<p class="wp-block-paragraph">This policy governs the operation of the website (the “Site”) and our related initiatives, The Capsule Muse. By using this Site, you agree to the terms laid out below. The terms “we,” “us,” and “our” refer to the owners of this website and The Capsule Muse.</p>

<h2 class="wp-block-heading">1. Affiliate Disclosure (How We Earn Money)</h2>

<p class="wp-block-paragraph">Running this website is a significant endeavor that requires substantial time and resources. We are committed to transparency regarding our business operations and revenue streams.</p>

<p class="wp-block-paragraph">We earn money in the following ways:</p>

<h3 class="wp-block-heading">A. The Capsule Muse Brand Initiatives</h3>

<p class="wp-block-paragraph">We curate, design, and share items through our online platforms under The Capsule Muse brand. Actions taken directly through these channels support the operation of this Site.</p>

<h3 class="wp-block-heading">B. Affiliate Partnerships</h3>

<p class="wp-block-paragraph">We participate in various affiliate marketing programs. This means that when we link to a third-party product or service and you click on that link and subsequently make a purchase, we may earn a small commission.</p>

<p class="wp-block-paragraph"><strong>Crucially, these commissions are earned at absolutely no extra cost to you.</strong> The price you pay remains the same, and the commission is paid by the retailer as a thank you for directing traffic to them.</p>

<p class="wp-block-paragraph">We are a proud participant in the Amazon Services LLC Associates Program, along with other programs. We only recommend products and services that we genuinely believe are of value and that we have often used or researched ourselves.</p>

<h2 class="wp-block-heading">2. General Disclaimer and Limitation of Liability</h2>

<p class="wp-block-paragraph">The content provided on this Site (including blog posts, product reviews, and styling advice) is for general informational, educational, and entertainment purposes only.</p>

<h3 class="wp-block-heading">No Professional Advice</h3>

<p class="wp-block-paragraph">The information presented on this website does not constitute professional advice (including but not limited to fashion, financial, or legal advice). You should not rely solely on the information provided here. Always consult with a qualified professional for your specific needs and circumstances.</p>

<h3 class="wp-block-heading">Not an Endorsement / Personal Due Diligence</h3>

<p class="wp-block-paragraph">While we recommend products and services based on our personal positive experiences and genuine belief in their quality, this is not a guarantee or official endorsement. You are solely responsible for conducting your own research (due diligence) to ensure that any product or service is right for you before making a purchase.<br></p>

<h3 class="wp-block-heading">External Links</h3>

<p class="wp-block-paragraph">When you click on an affiliate or third-party link, you are leaving our Site and visiting an external website that is not controlled by us. We cannot be held responsible for the content, privacy policies, or actions of any external site, nor for any damages or issues resulting from your use of those sites.</p>

<h3 class="wp-block-heading">No Guarantees</h3>

<p class="wp-block-paragraph">You agree that we provide no express or implied guarantees regarding any specific results you may achieve from using the information, products, or services mentioned on this Site. Your individual success is contingent upon your own personal circumstances, effort, and execution.</p>

<h3 class="wp-block-heading">Policy Scope</h3>

<p class="wp-block-paragraph">This Disclosure and Disclaimer policy applies to all forms of communication, including our website, social media channels, emails, and any other products or services we offer.</p>
      `
    }
  }
];

export const POSTS: WPPost[] = [
  {
    id: 11,
    date: "2026-03-15T12:00:00",
    slug: "fresh-spring-fashion-blueprint",
    link: "/posts/fresh-spring-fashion-blueprint",
    title: { rendered: "The Fresh Spring Fashion Blueprint: 30+ Chic Spring Outfits to Elevate Daily Warm-Weather Dressing" },
    excerpt: { rendered: "Welcome the warmer weather with lighter layers, soft pastel shades, and relaxed silhouettes. Our spring checklist has everything you need to feel chic and comfortable." },
    categories: [1, 2, 3, 5],
    content: {
      rendered: `
        <p>As winter's heavy coats find their place in storage, spring offers the perfect clean slate to refresh our wardrobes. Transitioning to warmer weather is all about embracing natural textures, lighter palettes, and silhouettes that move beautifully in the afternoon breeze. The secret to an effortless spring style lies in smart layering and focusing on breathable fabrics like linen, organic cotton, and silk.</p>
        
        <h2>1. The Draped Trench & Wide-Leg Denim Formula</h2>
        <p>Nothing defines chic transitional dressing quite like a beautifully draped, lightweight trench coat paired with high-waisted wide-leg denim. This silhouette offers structural balance—combining the clean, professional lines of the trench with the relaxed ease of modern denim. Complete the ensemble with a crisp cotton crewneck tee and tan leather slides for an instant, polished daytime look.</p>
        
        <h2>2. Flowing Midi Dresses Met with Minimal Leather Sneakers</h2>
        <p>We are breaking the traditional boundaries of feminine styling by pairing lightweight midi dresses with sporty elements. A linen button-down midi dress in a neutral olive or cream pairs perfectly with sleek, clean leather sneakers. This juxtaposition keeps the outfit practical for walking through town while maintaining an elegant, fashion-forward sensibility.</p>
        
        <h2>3. Relaxed Tailoring and Soft Pastel Knitwear</h2>
        <p>Spring is the ideal time to experiment with pastel colors without going overly sweet. Try combining relaxed-fit linen trousers in ivory with a lightweight, loosely knit cotton sweater in sage green or soft blue. The knit provides warmth for cooler mornings, while the linen ensures comfort as the temperature rises throughout the day.</p>
      `
    },
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/images/bh-chic-spring-outfit-ideas-for-women-578x868.png" }],
      'wp:term': [[
        { id: 1, name: "Fashion", slug: "fashion", taxonomy: "category" },
        { id: 2, name: "Outfit Inspo", slug: "outfit-inspo", taxonomy: "category" },
        { id: 3, name: "Styling Tips", slug: "styling-tips", taxonomy: "category" },
        { id: 5, name: "Seasonal Trends", slug: "seasonal-trends", taxonomy: "category" }
      ]],
      'author': [{ name: "Valerie" }]
    }
  },
  {
    id: 12,
    date: "2026-02-14T18:00:00",
    slug: "cozy-captivating-winter-date-night-outfits",
    link: "/posts/cozy-captivating-winter-date-night-outfits",
    title: { rendered: "Cozy Yet Captivating: 17+ Elegant Outfits for Cold-Weather Date Nights" },
    excerpt: { rendered: "Plan the perfect romantic evening without freezing. Learn how to layer sleek knitwear, statement coats, and boots for an unforgettable winter date outfit." },
    categories: [1, 2, 3, 5, 6],
    content: {
      rendered: `
        <p>Finding the perfect balance between looking alluring and staying warm is the ultimate winter style challenge. A romantic evening out shouldn't mean shivering in a thin dress. With smart textile choices and sleek, long silhouettes, you can look incredibly expensive and cozy at the same time.</p>
        
        <h2>1. The Monochromatic Ribbed Knit Dress</h2>
        <p>A heavy-weight, ribbed turtleneck knit midi dress in chocolate brown, charcoal, or deep cream is a winter date night essential. The ribbed texture subtly hugs the silhouette while offering supreme comfort and warmth. Pair it with knee-high suede boots in a matching tone to create an elongated, sophisticated monochrome look. Finish the outfit with a structured leather handbag and a bold gold necklace.</p>
        
        <h2>2. Leather Trousers & Soft Cashmere Knits</h2>
        <p>For a look that mixes structure and softness, pair high-waisted black leather trousers with a luxurious cream cashmere mock-neck sweater. The contrast between the sleek, slightly edgy leather and the soft, inviting texture of the cashmere creates a compelling visual dynamic. Slip on pointed-toe ankle boots to add a dressy, feminine edge.</p>
        
        <h2>3. The Statement Wool Coat as the Centerpiece</h2>
        <p>In deep winter, your outerwear is your outfit. Elevate a simple base—like a black silk slip skirt and turtleneck—by layering a structured, double-breasted wool wrap coat in camel or herringbone over it. Belt the coat tightly at the waist to create a strong feminine shape that looks elegant from the moment you arrive.</p>
      `
    },
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/images/winter-date-night-outfits-578x868.png" }],
      'wp:term': [[
        { id: 1, name: "Fashion", slug: "fashion", taxonomy: "category" },
        { id: 2, name: "Outfit Inspo", slug: "outfit-inspo", taxonomy: "category" },
        { id: 3, name: "Styling Tips", slug: "styling-tips", taxonomy: "category" },
        { id: 5, name: "Seasonal Trends", slug: "seasonal-trends", taxonomy: "category" },
        { id: 6, name: "Muse Journal", slug: "muse-journal", taxonomy: "category" }
      ]],
      'author': [{ name: "Valerie" }]
    }
  },
  {
    id: 13,
    date: "2026-02-09T09:00:00",
    slug: "transitional-february-style-guide",
    link: "/posts/transitional-february-style-guide",
    title: { rendered: "The Transitional February Wardrobe: 2026 Winter Edition Style Guide" },
    excerpt: { rendered: "Explore the late-winter edit featuring sporty luxury aesthetics, statement layering pieces, and versatile capsule outfits for transitional winter days." },
    categories: [1, 2, 3, 5, 6],
    content: {
      rendered: `
        <p>February represents the ultimate transition period. We are tired of our heavy winter parkas, yet the spring warmth is still weeks away. The key to navigating this late-winter phase is to blend elements of cozy comfort with lighter, structured layering. This guide focuses on mixing active silhouettes with classic tailoring to create looks that feel fresh and practical.</p>
        
        <h2>1. Sporty Luxe: Tailored Blazers & Knit Hoodies</h2>
        <p>Bring an energetic twist to your corporate wear by layering a slim-fitting cashmere hoodie underneath a structured, oversized menswear-inspired wool blazer. Keep the bottom half clean with tailored trousers and leather loafers. This high-low mix feels modern, comfortable, and perfect for dynamic schedules.</p>
        
        <h2>2. Lightening the Palette</h2>
        <p>Start shifting your color palette away from deep winter darks and toward transitional neutrals. Incorporate pieces in oatmeal, bone, light taupe, and olive. A monochrome cream outfit—such as winter-white jeans paired with a matching cream knit polo—feels instantly uplifting and hints at the upcoming spring season.</p>
        
        <h2>3. Elevated Footwear and Accessories</h2>
        <p>Transition your footwear by swapping heavy winter boots for sleek, minimalist leather chelsea boots or chunky lug-sole loafers. Adding a silk neck scarf in a subtle geometric print under your coat collar adds a dash of color and class without compromising warmth.</p>
      `
    },
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/images/2026-02-09-winter-date-night-outfits-blog-578x868.png" }],
      'wp:term': [[
        { id: 1, name: "Fashion", slug: "fashion", taxonomy: "category" },
        { id: 2, name: "Outfit Inspo", slug: "outfit-inspo", taxonomy: "category" },
        { id: 3, name: "Styling Tips", slug: "styling-tips", taxonomy: "category" },
        { id: 5, name: "Seasonal Trends", slug: "seasonal-trends", taxonomy: "category" },
        { id: 6, name: "Muse Journal", slug: "muse-journal", taxonomy: "category" }
      ]],
      'author': [{ name: "Valerie" }]
    }
  },
  {
    id: 14,
    date: "2026-01-25T14:00:00",
    slug: "romantic-valentines-day-outfits",
    link: "/posts/romantic-valentines-day-outfits",
    title: { rendered: "The Valentine's Style Report: 27 Hot Romantic Outfits Beyond the Classic Red Dress" },
    excerpt: { rendered: "Whether you are planning a candlelight dinner or a cosy night in, discover the most coveted romantic outfit ideas of the season." },
    categories: [1, 2, 3, 5, 6],
    content: {
      rendered: `
        <p>Dressing for Valentine's Day doesn't have to mean wearing cliché bright red dresses. True romance in style is found in luxurious materials, subtle color pairings, and silhouettes that make you feel confident and comfortable. Whether you are heading to a fine dining venue or celebrating with a cozy movie night at home, we have designed the ultimate inspiration list.</p>
        
        <h2>1. The Crimson Silk Skirt & Cozy Cashmere Knit</h2>
        <p>Instead of a full-red dress, opt for a bias-cut silk midi skirt in deep burgundy or crimson. Balance the sensual drape of the silk by pairing it with an oversized, chunky cream cashmere sweater. The interplay between the sleek, reflective silk and the soft, matte texture of the wool is incredibly chic and perfect for a candlelit dinner.</p>
        
        <h2>2. All-Black Elegance with Sheer Details</h2>
        <p>Monochrome black is always in style. Elevate a pair of tailored black trousers by pairing them with a silk blouse featuring sheer lace panels or elegant organza sleeves. This subtle play on transparency feels romantic and elevated without being loud. Pair with sleek pointed-toe heels and delicate gold hoops.</p>
        
        <h2>3. The Luxe Satin Loungewear Set</h2>
        <p>If your plans involve staying in, reject old sweatpants and choose a high-quality silk or satin pajama-style lounge set in champagne or navy. Worn with cashmere socks and minimal jewelry, it keeps your cozy evening feeling festive and refined.</p>
      `
    },
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/images/27-Hot-Valentines-Day-Outfit-2026-blog02-578x868.png" }],
      'wp:term': [[
        { id: 1, name: "Fashion", slug: "fashion", taxonomy: "category" },
        { id: 2, name: "Outfit Inspo", slug: "outfit-inspo", taxonomy: "category" },
        { id: 3, name: "Styling Tips", slug: "styling-tips", taxonomy: "category" },
        { id: 5, name: "Seasonal Trends", slug: "seasonal-trends", taxonomy: "category" },
        { id: 6, name: "Muse Journal", slug: "muse-journal", taxonomy: "category" }
      ]],
      'author': [{ name: "Valerie" }]
    }
  },
  {
    id: 15,
    date: "2026-01-05T08:00:00",
    slug: "mid-winter-apres-ski-style-guide",
    link: "/posts/mid-winter-apres-ski-style-guide",
    title: { rendered: "Mid-Winter Comfort: January 2026 Winter Edition Style Guide" },
    excerpt: { rendered: "Start the new year with elevated layering. Review the January edit focusing on neutral tones, puffer coats, and chic mountain styles." },
    categories: [3, 6],
    content: {
      rendered: `
        <p>January brings cold temperatures and a craving for absolute comfort. Apres-ski style represents the perfect intersection of high-fashion and winter functionality. Whether you are actually heading to the ski resort or simply navigating winter in the city, layering thick wools, puffer coats, and luxury knitwear is key.</p>
        
        <h2>1. Monochromatic Alpine Layering</h2>
        <p>Layering multiple items in a single neutral family (like cream, oat, and stone) is the easiest way to look instantly expensive in winter. Try pairing ivory wool trousers with an oatmeal turtleneck knit, and layer a long, belted puffer coat over the top. The varying textures keep the monochrome look three-dimensional and interesting.</p>
        
        <h2>2. Chunky Ribbed Scarves & Shearling Details</h2>
        <p>Accessories are crucial for cold protection and style. A large, chunky ribbed wool scarf adds immediate drama and texture. Pair it with shearling-lined leather boots and a cozy beanie in a coordinating shade to complete the sporty, winter-cabin aesthetic.</p>
        
        <h2>3. Elevating the Classic Puffer</h2>
        <p>To prevent a puffer coat from looking too casual, choose one with a matte finish and a structured, oversized collar. Cinch it at the waist and pair it with tailored knit pants instead of leggings to maintain a sophisticated silhouette.</p>
      `
    },
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/images/2026-01-05-week-apres-ski-winter-outfit-ideas-feature-578x868.png" }],
      'wp:term': [[
        { id: 3, name: "Styling Tips", slug: "styling-tips", taxonomy: "category" },
        { id: 6, name: "Muse Journal", slug: "muse-journal", taxonomy: "category" }
      ]],
      'author': [{ name: "Valerie" }]
    }
  },
  {
    id: 16,
    date: "2025-10-20T10:00:00",
    slug: "25-piece-minimalist-capsule-wardrobe-checklist",
    link: "/posts/25-piece-minimalist-capsule-wardrobe-checklist",
    title: { rendered: "The 25-Piece Minimalist Checklist: How to Curate a Truly Effortless Capsule Wardrobe" },
    excerpt: { rendered: "Struggling with 'nothing to wear'? Simplify your daily routine with our ultimate 25-piece capsule wardrobe checklist." },
    categories: [3, 4],
    content: {
      rendered: `
        <p>Staring at a closet full of garments yet feeling like you have absolutely nothing to wear is a frustratingly common dilemma. The problem is rarely a lack of items, but a lack of cohesion. A minimalist capsule wardrobe simplifies your morning, saves time, and helps you hone a signature style based on pieces you truly love.</p>
        
        <h2>The Core Pillars of a 25-Piece Capsule</h2>
        <p>Our curated list focuses on high-quality, interchangeable basics that can be dressed up or down. Key items include a structured black blazer, classic blue straight-leg denim, a camel trench coat, a white silk button-down, a striped knit sweater, and minimalist leather flats. By limiting your color palette to neutrals with one or two accent colors, every top will coordinate with every bottom.</p>
        
        <h2>Why Quality Beats Quantity</h2>
        <p>Investing in natural fibers like wool, organic cotton, silk, and linen ensures your garments look better, drape more beautifully, and last for years. A simple white tee made from heavy organic cotton looks infinitely more polished than a thin synthetic alternative.</p>
        
        <h2>How to Build Your Checklist</h2>
        <p>Start by auditing what you already own. Keep only the pieces that fit well and align with your daily lifestyle. Use our 25-piece blueprint to identify gaps, and slowly purchase the remaining high-quality foundation items.</p>
      `
    },
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/images/25-capsule-wardrobe-essentials-03-578x868.png" }],
      'wp:term': [[
        { id: 3, name: "Styling Tips", slug: "styling-tips", taxonomy: "category" },
        { id: 4, name: "Capsule Wardrobe", slug: "capsule-wardrobe", taxonomy: "category" }
      ]],
      'author': [{ name: "Valerie" }]
    }
  },
  {
    id: 17,
    date: "2025-10-05T15:00:00",
    slug: "sophisticated-tops-to-pair-with-jeans",
    link: "/posts/sophisticated-tops-to-pair-with-jeans",
    title: { rendered: "Beyond Basic: 25+ Stylish Tops That Instantly Dress Up Your Denim" },
    excerpt: { rendered: "Elevate your favorite denim. Explore the best tops, shirts, and knits to dress up or down with jeans." },
    categories: [1, 3],
    content: {
      rendered: `
        <p>Jeans are the ultimate foundation of casual wardrobes. However, the top you choose determines whether your outfit looks lazy or incredibly sophisticated. Swapping a basic tee for a top with interesting texture, elegant tailoring, or luxe fabric can instantly elevate your denim for meetings, dinners, or gallery openings.</p>
        
        <h2>1. The Fluid Silk Blouse & Structured Denim Juxtaposition</h2>
        <p>Pairing high-rise, dark-wash straight-leg jeans with a fluid, slightly oversized silk button-down blouse is a classic style formula. Tuck the blouse loosely, add a high-quality leather belt, and finish with pointed ankle boots. The drape of the silk contrasts beautifully with the rugged texture of the denim.</p>
        
        <h2>2. Sculptural Knit Tops</h2>
        <p>Look for ribbed knits with unique necklines—like an asymmetric off-the-shoulder cut or a refined square neck. These sculptural details draw the eye upward and bring a polished, dressy element to casual light-wash jeans.</p>
        
        <h2>3. Tailored Waistcoats</h2>
        <p>A structured waistcoat worn as a top paired with wide-leg jeans creates a sleek, menswear-inspired silhouette. This look balances modern trendiness with timeless sophistication, perfect for warm transitional months.</p>
      `
    },
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/images/tops-for-jeans-for-ladies-578x868.png" }],
      'wp:term': [[
        { id: 1, name: "Fashion", slug: "fashion", taxonomy: "category" },
        { id: 3, name: "Styling Tips", slug: "styling-tips", taxonomy: "category" }
      ]],
      'author': [{ name: "Valerie" }]
    }
  },
  {
    id: 18,
    date: "2025-09-20T11:00:00",
    slug: "step-by-step-closet-curation-method",
    link: "/posts/step-by-step-closet-curation-method",
    title: { rendered: "The 2025 Capsule Wardrobe Guide: A Step-by-Step Closet Curation Method" },
    excerpt: { rendered: "Discover the step-by-step framework to declutter your closet, define your personal style, and construct a functional capsule closet." },
    categories: [3, 4],
    content: {
      rendered: `
        <p>Building a successful capsule closet starts with a thorough edit. You cannot build a clear style vision in a crowded space full of impulse buys and items that no longer fit. The Curation Method is a systematic, mindful approach to decluttering your wardrobe and discovering your personal style pillars.</p>
        
        <h2>Step 1: The Total Empty and Sort</h2>
        <p>Remove every single item from your closet, including shoes and accessories. Group them into three clear piles: 'Love and Wear' (items that fit perfectly and you wear constantly), 'Seasonal Store' (out-of-season clothes that will be stored away), and 'Donate/Sell' (garments that no longer align with your style or body). Be honest and ruthless with your choices.</p>
        
        <h2>Step 2: Defining Your Signature Palette</h2>
        <p>Analyze the 'Love and Wear' pile to identify patterns. What colors appear most frequently? A functional wardrobe relies on a cohesive palette: 3 base neutrals (e.g., black, cream, camel), 2 secondary neutrals (e.g., white, navy), and 1-2 accent colors (e.g., olive, burgundy) that add personality without cluttering your styling options.</p>
        
        <h2>Step 3: Finding Your Style Uniform</h2>
        <p>Identify 2-3 silhouettes that make you feel your best. Is it wide-leg trousers and a fitted knit? A midi dress with a blazer? Once you define your daily style uniforms, you can shop mindfully to fill specific gaps, rather than buying random, disconnected pieces.</p>
      `
    },
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/images/womens-capsule-wardrobe-2025-feature-v01-578x868.png" }],
      'wp:term': [[
        { id: 3, name: "Styling Tips", slug: "styling-tips", taxonomy: "category" },
        { id: 4, name: "Capsule Wardrobe", slug: "capsule-wardrobe", taxonomy: "category" }
      ]],
      'author': [{ name: "Valerie" }]
    }
  },
  {
    id: 19,
    date: "2025-09-01T09:00:00",
    slug: "welcome-to-the-capsule-muse",
    link: "/posts/welcome-to-the-capsule-muse",
    title: { rendered: "Welcome to The Capsule Muse: Redefining Everyday Style and Self-Assurance" },
    excerpt: { rendered: "We are officially launching our fashion journal! Read about our mission to help you build an elegant wardrobe that boosts your confidence." },
    categories: [1],
    content: {
      rendered: `
        <p>Hello, style lovers! I am thrilled to welcome you to <strong>The Capsule Muse</strong>, our brand-new editorial space dedicated to fashion, minimal styling, and self-confidence.</p>
        
        <p>I started this journal because I believe getting dressed in the morning should be a source of inspiration and joy, not stress. So many women struggle with closets packed with clothes, yet feel uninspired by their options. The Capsule Muse was born to change that. Our mission is to show you that a smaller, carefully curated closet of beautiful, high-quality essentials can actually unlock endless styling possibilities and give you a stronger sense of personal style.</p>
        
        <p>In this editorial space, I will be sharing detailed style blueprints, outfit breakdowns, wardrobe checklist guides, and seasonal fashion inspiration to help you feel elegant, modern, and put together every single day.</p>
        
        <p>Thank you for embarking on this style journey with us. I look forward to inspiring you!</p>
      `
    },
    _embedded: {
      'wp:featuredmedia': [{ source_url: "/images/welcome-feature.png" }],
      'wp:term': [[
        { id: 1, name: "Fashion", slug: "fashion", taxonomy: "category" }
      ]],
      'author': [{ name: "Valerie" }]
    }
  }
];
