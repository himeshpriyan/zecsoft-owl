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
  { id: 1, title: 'Dental Clinic Website Redesign', category: 'Website Design', thumbnail: 'https://images.unsplash.com/photo-1540562947137-b1a92e105db0?w=800&q=80', description: 'Modern, fast-loading design that increased online appointment bookings by 55%.', tags: ['Web Development', 'UI/UX'] },
  { id: 2, title: 'Corporate Promo For SaaS', category: 'Video Production', thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', description: 'Engaging software overview video. Helped client increase landing page conversions by 40%.', tags: ['Video Editing', 'Cinematography'] },
  { id: 3, title: 'E-Commerce Marketing Strategy', category: 'Marketing Campaign', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', description: 'Full-scale ad management that boosted online store revenue by 2x in three months.', tags: ['Marketing', 'Ads'] },
  { id: 4, title: 'Local Coffee Shop SEO', category: 'Marketing Campaign', thumbnail: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', description: 'Targeted local SEO campaign driving a 150% increase in foot traffic.', tags: ['Social Media', 'Content Creation'] },
  { id: 5, title: 'Real Estate Drone Tour', category: 'Video Production', thumbnail: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', description: 'Cinematic property showcases helping realtors sell properties 30% faster.', tags: ['Event Coverage', 'Photography'] },
  { id: 6, title: 'Fintech App Landing Page', category: 'Website Design', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', description: 'Sleek, high-converting one-page site generating 500+ waitlist signups in week one.', tags: ['Web Design', 'UI/UX'] }
];

export const testimonials = [
  { id: 1, name: 'Arjun M.', role: 'Startup Founder', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun', rating: 5, review: 'Great service and quick delivery. The website they built increased our daily leads by 40%. Highly recommended!', location: 'Delhi' },
  { id: 2, name: 'Samantha P.', role: 'Marketing Director', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sam', rating: 5, review: 'Fast, professional, and affordable. The promo video captured our product perfectly and drove massive engagement.', location: 'Bangalore' },
  { id: 3, name: 'Ravi Chopra', role: 'E-commerce Owner', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi', rating: 5, review: 'We saw real results within weeks. Our ad campaigns have never performed this well. A truly professional team!', location: 'London' },
  { id: 4, name: 'Priya K.', role: 'Agency Lead', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya', rating: 5, review: 'They delivered our landing page ahead of schedule, and the UI is absolutely premium. Worth every penny.', location: 'Mumbai' },
  { id: 5, name: 'John Doe', role: 'Business Owner', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JohnD', rating: 5, review: 'Incredible value for money. Their smart AI strategies completely automated our lead funnel.', location: 'Singapore' },
];

export const whyChooseUs = [
  { icon: '⚡', title: 'Fast Delivery', description: 'We launch campaigns and complete projects ahead of schedule, letting you see ROI faster.', highlight: 'Quick Turnaround' },
  { icon: '💰', title: 'Affordable Pricing', description: 'Premium quality work designed to fit scalable budgets. Maximum impact without the insane agency fees.', highlight: 'Great Value' },
  { icon: '👔', title: 'Professional Team', description: 'Work directly with industry veterans who understand exactly how to position your brand for growth.', highlight: 'Experts' },
  { icon: '📈', title: 'Real Results', description: 'We don’t just deliver beautiful designs; we engineer assets strictly optimized to convert visitors into clients.', highlight: 'High ROI' }
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
