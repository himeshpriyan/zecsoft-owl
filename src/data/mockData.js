// ============================================================
// REALISTIC MOCK DATA - The Owl Creations
// ============================================================

export const services = [
  {
    id: 'media',
    category: '🎥 Media Production',
    color: '#FF6B00',
    items: [
      { id: 'cinematography', title: 'Cinematography', icon: '🎬', description: 'Professional framing and cinematic storytelling.', benefit: 'High-quality equipment and experienced framing.', price: 25000 },
      { id: 'direction', title: 'Direction', icon: '🎭', description: 'Complete creative and technical leadership.', benefit: 'Cohesive vision for your visual projects.', price: 20000 },
      { id: 'video-editing', title: 'Video Editing', icon: '✂️', description: 'Professional post-production and cutting.', benefit: 'Pacing and narrative structuring.', price: 15000 },
      { id: 'color-correction', title: 'Color Correction', icon: '🎨', description: 'Color grading and visual balancing.', benefit: 'Professional color tone matching.', price: 10000 },
      { id: 'sfx', title: 'SFX (Special Effects)', icon: '✨', description: 'Visual and sound effect integration.', benefit: 'Enhanced visual fidelity.', price: 18000 },
      { id: 'product-shoot', title: 'Product Shoot', icon: '📷', description: 'High-quality photography for products.', benefit: 'Boost e-commerce and catalog appeal.', price: 12000 },
      { id: 'short-film', title: 'Short Film Production', icon: '🎞️', description: 'End-to-end film production pipeline.', benefit: 'Complete cinematography, editing, color, and SFX.', price: 80000 },
    ]
  },
  {
    id: 'marketing',
    category: '📱 Digital Marketing',
    color: '#8B5CF6',
    items: [
      { id: 'social-media', title: 'Social Media Management', icon: '📲', description: 'Consistent brand presence on social platforms.', benefit: 'Grow your digital footprint and audience.', price: 15000 },
      { id: 'content-creation', title: 'Content Creation', icon: '✍️', description: 'Tailored posts, reels, and media.', benefit: 'Engaging content tailored for virality.', price: 18000 },
      { id: 'marketing-post-design', title: 'Post Design', icon: '🖼️', description: 'Graphics tailored for marketing campaigns.', benefit: 'High-converting visual aesthetic.', price: 10000 },
      { id: 'promotion', title: 'Promotion', icon: '📢', description: 'Targeted brand promotion across networks.', benefit: 'Increased visibility and reach.', price: 25000 },
      { id: 'ad-campaigns', title: 'Ad Campaign Management', icon: '🚀', description: 'Management of paid digital ad strategies.', benefit: 'Optimized ROI for paid traffic.', price: 30000 },
    ]
  },
  {
    id: 'web',
    category: '💻 Web & Design',
    color: '#06B6D4',
    items: [
      { id: 'website-dev', title: 'Website Development', icon: '🌐', description: 'Custom coded fast platforms and applications.', benefit: 'Robust digital ecosystem for your brand.', price: 45000 },
      { id: 'ui-ux', title: 'UI/UX Design', icon: '🎯', description: 'User interface and experience design.', benefit: 'Intuitive flow that increases conversions.', price: 35000 },
      { id: 'web-post-design', title: 'Post Design', icon: '🎨', description: 'Creative web assets and banners.', benefit: 'Cohesive branding across your site.', price: 12000 },
      { id: 'landing-page', title: 'Landing Page Design', icon: '📄', description: 'Targeted single-page websites.', benefit: 'Conversion-optimized focus pages.', price: 20000 },
      { id: 'responsive-design', title: 'Responsive Website Design', icon: '📱', description: 'Mobile, tablet, and desktop adaptive sites.', benefit: 'Perfect viewing experience on any device.', price: 30000 },
    ]
  },
  {
    id: 'technical',
    category: '🛠️ Technical & Dev',
    color: '#10B981',
    items: [
      { id: 'equipment', title: 'Equipment', icon: '🎥', description: 'High-end technical gear provision.', benefit: 'Industry-standard production tools.', price: 15000 },
      { id: 'application-dev', title: 'Application Development', icon: '💻', description: 'Custom mobile and desktop software.', benefit: 'Bespoke software solutions.', price: 60000 },
      { id: 'automation', title: 'Automation Solutions', icon: '🤖', description: 'Workflow automation and scripting.', benefit: 'Save thousands of hours of manual work.', price: 40000 },
    ]
  },
  {
    id: 'interior',
    category: '🏠 Interior Designing',
    color: '#F59E0B',
    items: [
      { id: 'interior-design', title: 'Interior Designing', icon: '🏡', description: 'Transforms physical spaces beautifully.', benefit: 'Aesthetically pleasing and functional spaces.', price: 75000 },
    ]
  },
  {
    id: 'events',
    category: '🎉 Event Coverage',
    color: '#EC4899',
    items: [
      { id: 'college-event', title: 'College Events', icon: '🎓', description: 'Complete media coverage for universities.', benefit: 'Dynamic youth-focused media.', price: 25000 },
      { id: 'school-event', title: 'School Events', icon: '🏫', description: 'Preserving institutional legacy.', benefit: 'Professional coverage for parents and staff.', price: 20000 },
      { id: 'wedding', title: 'Wedding Events', icon: '💍', description: 'Cinematic wedding masterpieces & memoirs.', benefit: 'Eternal cinematic memories.', price: 55000 },
      { id: 'birthday', title: 'Birthday Events', icon: '🎂', description: 'Memorable birthday party coverage.', benefit: 'Heartwarming celebration videos.', price: 15000 },
      { id: 'award', title: 'Award Functions', icon: '🏆', description: 'Multi-camera corporate award shoots.', benefit: 'Corporate coverage that commands respect.', price: 45000 },
    ]
  }
];

export const portfolio = [
  { id: 1, title: 'Wedding Highlight Video', category: 'Wedding', thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', description: 'A beautiful video covering the entire wedding day from start to finish.', tags: ['Video Editing', 'Cinematography'] },
  { id: 2, title: 'Startup Brand Promo', category: 'Corporate', thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', description: 'A short promotional video created to introduce a new business to social media.', tags: ['Marketing', 'Promo Video'] },
  { id: 3, title: 'Restaurant Food Shoot', category: 'Product', thumbnail: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', description: 'High-quality photography of menu items for a local restaurant.', tags: ['Product Shoot', 'Photography'] },
  { id: 4, title: 'NGO Awareness Campaign', category: 'Social', thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80', description: 'A social media campaign designed to raise awareness for ocean cleaning.', tags: ['Social Media', 'Content Creation'] },
  { id: 5, title: 'College Fest Coverage', category: 'Event', thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80', description: 'Full day photography and video coverage of a college cultural festival.', tags: ['Event Coverage', 'Photography'] },
  { id: 6, title: 'Clothing Brand Website', category: 'Web', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', description: 'A fast, responsive e-commerce website built for a new clothing store.', tags: ['Web Development', 'UI/UX'] },
  { id: 7, title: '25th Birthday Party Video', category: 'Event', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', description: 'A fun highlight video of a birthday celebration with family and friends.', tags: ['Event Coverage', 'Video Editing'] },
  { id: 8, title: 'Business Conference Shoot', category: 'Corporate', thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', description: 'Professional recording of guest speakers at an annual business conference.', tags: ['Corporate', 'Cinematography'] },
];

export const testimonials = [
  { id: 1, name: 'Ananya Malhotra', role: 'Elite Client', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya', rating: 5, review: 'Absolutely redefined my perception of visual storytelling. The Eternal Wedding film is more than a video; it\'s a piece of art that breathes life into our every memory.', location: 'Delhi' },
  { id: 2, name: 'Siddharth Mehta', role: 'CEO, X-Orbit Ventures', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth', rating: 5, review: 'The Brand Genesis film was a pivotal moment for our unicorn launch. The visual precision and narrative depth Owl Creations brought to the table was world-class.', location: 'Bangalore' },
  { id: 3, name: 'Elena Rodriguez', role: 'Global Art Director', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena', rating: 5, review: 'Their architectural look for our latest product launch was phenomenal. The macro-cinematography was exquisite, capturing details we didn\'t even know existed.', location: 'London' },
  { id: 4, name: 'Rohan Deshmukh', role: 'Festival Director', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan', rating: 5, review: 'Covering a 20k attendees festival with five 4K cameras and delivering a masterpiece after-movie in 48 hours is unheard of. A true technical powerhouse.', location: 'Mumbai' },
  { id: 5, name: 'Isabella Chen', role: 'Luxury Brand Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella', rating: 5, review: 'The Aura Luxury Interface is perfect. It\'s fast, beautiful, and the neuromorphic UX has already increased our conversion rates by 65%. Highly recommended!', location: 'Singapore' },
];

export const whyChooseUs = [
  { icon: '🎬', title: 'High-Quality Equipment', description: 'We use professional cameras and top-tier software to ensure your videos and designs look stunning.', highlight: 'Top Gear' },
  { icon: '⚡', title: 'Fast Delivery', description: 'We work quickly and efficiently. You can expect to see the first draft of your project in no time.', highlight: 'Quick Turnaround' },
  { icon: '💡', title: 'Creative Storytelling', description: 'We don\'t just take pictures or make posts; we tell your brand\'s story in a way people love.', highlight: 'Great Ideas' },
  { icon: '💰', title: 'Value for Money', description: 'We offer great quality services at fair prices. Every rupee you spend helps grow your business.', highlight: 'Great Value' },
  { icon: '🏆', title: '100% Quality Assured', description: 'We care about your success and treat every project like it\'s our own. We guarantee you\'ll be happy.', highlight: 'Top Quality' },
  { icon: '🤝', title: 'Always Here for You', description: 'We are friendly and always available to answer your questions and support you whenever you need us.', highlight: 'Full Support' },
];

export const serviceCategories = {
  Media: ['Cinematography', 'Direction', 'Video Editing', 'Color Correction', 'SFX', 'Product Shoot', 'Short Film'],
  Marketing: ['Social Media', 'Content Creation', 'Post Design', 'Promotion', 'Ad Campaigns'],
  Web: ['Website Development', 'UI/UX Design', 'Landing Page Design', 'Responsive Design'],
  Technical: ['Equipment', 'Application Dev', 'Automation'],
  Interior: ['Interior Designing'],
  Events: ['College Event', 'School Event', 'Wedding', 'Birthday', 'Award Functions'],
};

export const budgetMultipliers = {
  Low: 0.8,
  Medium: 1.0,
  Premium: 2.5,
};
