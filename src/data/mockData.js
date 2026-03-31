// ============================================================
// MOCK DATA - The Owl Creations
// ============================================================

export const services = [
  {
    id: 'media',
    category: '🎥 Media Production',
    color: '#F97316',
    items: [
      { id: 'cinematography', title: 'Cinematography', icon: '🎬', benefit: 'Cinematic shots that tell your story', price: 5000 },
      { id: 'direction', title: 'Direction', icon: '🎭', benefit: 'Creative direction for impactful visuals', price: 4000 },
      { id: 'video-editing', title: 'Video Editing', icon: '✂️', benefit: 'Professional cuts with smooth transitions', price: 3000 },
      { id: 'color-correction', title: 'Color Correction', icon: '🎨', benefit: 'Film-grade color grading and correction', price: 2000 },
      { id: 'sfx', title: 'SFX & VFX', icon: '✨', benefit: 'Stunning visual effects that amaze', price: 6000 },
      { id: 'product-shoot', title: 'Product Shoot', icon: '📷', benefit: 'High-quality visuals for your products', price: 3500 },
      { id: 'short-film', title: 'Short Film Production', icon: '🎞️', benefit: 'Full production from script to screen', price: 15000 },
    ]
  },
  {
    id: 'marketing',
    category: '📱 Digital Marketing',
    color: '#8B5CF6',
    items: [
      { id: 'social-media', title: 'Social Media Management', icon: '📲', benefit: 'Grow your brand across all platforms', price: 8000 },
      { id: 'content-creation', title: 'Content Creation', icon: '✍️', benefit: 'Engaging content that converts', price: 5000 },
      { id: 'post-design', title: 'Post Design', icon: '🖼️', benefit: 'Eye-catching graphics for every platform', price: 3000 },
      { id: 'promotion', title: 'Brand Promotion', icon: '📢', benefit: 'Strategic campaigns that deliver ROI', price: 7000 },
      { id: 'ad-campaigns', title: 'Ad Campaigns', icon: '🚀', benefit: 'Targeted ads that maximize reach', price: 10000 },
    ]
  },
  {
    id: 'web',
    category: '💻 Web & Design',
    color: '#06B6D4',
    items: [
      { id: 'website-dev', title: 'Website Development', icon: '🌐', benefit: 'Fast, modern websites that impress', price: 20000 },
      { id: 'ui-ux', title: 'UI/UX Design', icon: '🎯', benefit: 'User-first designs that convert', price: 12000 },
      { id: 'landing-page', title: 'Landing Page', icon: '📄', benefit: 'High-converting landing pages', price: 8000 },
      { id: 'responsive-design', title: 'Responsive Design', icon: '📱', benefit: 'Pixel-perfect on every device', price: 6000 },
    ]
  },
  {
    id: 'technical',
    category: '🛠️ Technical',
    color: '#10B981',
    items: [
      { id: 'automation', title: 'Automation Solutions', icon: '🤖', benefit: 'Streamline your workflow with AI', price: 15000 },
      { id: 'app-dev', title: 'Equipment App Development', icon: '📱', benefit: 'Custom apps for your business needs', price: 25000 },
    ]
  },
  {
    id: 'interior',
    category: '🏠 Interior Designing',
    color: '#F59E0B',
    items: [
      { id: 'interior-design', title: 'Interior Design Consultation', icon: '🏡', benefit: 'Transform your space into a masterpiece', price: 10000 },
      { id: 'interior-3d', title: '3D Interior Visualization', icon: '🎨', benefit: 'See your dream space before it\'s built', price: 8000 },
      { id: 'interior-styling', title: 'Space Styling', icon: '🛋️', benefit: 'Professional styling for any room', price: 5000 },
    ]
  },
  {
    id: 'events',
    category: '🎉 Event Coverage',
    color: '#EC4899',
    items: [
      { id: 'college-event', title: 'College Events', icon: '🎓', benefit: 'Capture every moment of campus life', price: 5000 },
      { id: 'school-event', title: 'School Events', icon: '🏫', benefit: 'Preserve precious school memories', price: 4000 },
      { id: 'wedding', title: 'Wedding Coverage', icon: '💍', benefit: 'Timeless wedding films and photos', price: 25000 },
      { id: 'birthday', title: 'Birthday Parties', icon: '🎂', benefit: 'Fun, vibrant party coverage', price: 6000 },
      { id: 'award', title: 'Award Functions', icon: '🏆', benefit: 'Professional corporate event coverage', price: 8000 },
    ]
  }
];

export const portfolio = [
  { id: 1, title: 'Wedding Cinematic Film', category: 'Wedding', thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', description: 'A beautiful cinematic wedding coverage for Mr. & Mrs. Sharma. Shot on RED Cinema cameras with drone aerials.', tags: ['Cinematography', 'Editing', 'Color Grading'] },
  { id: 2, title: 'Tech Startup Brand Film', category: 'Corporate', thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', description: 'A high-energy brand film for a Bangalore-based tech startup, showcasing their vision and team culture.', tags: ['Direction', 'Corporate', 'VFX'] },
  { id: 3, title: 'Restaurant Product Shoot', category: 'Product', thumbnail: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80', description: 'Delicious food photography and video production for a premium restaurant chain in Chennai.', tags: ['Product Shoot', 'Color Correction'] },
  { id: 4, title: 'NGO Awareness Campaign', category: 'Social', thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', description: 'Powerful social documentary created to raise awareness for an environmental NGO.', tags: ['Direction', 'Social Media', 'Editing'] },
  { id: 5, title: 'College Annual Day Coverage', category: 'Event', thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', description: 'Complete coverage of a college annual day event with 500+ students and celebrity performers.', tags: ['Event Coverage', 'Photography'] },
  { id: 6, title: 'Luxury E-Commerce Website', category: 'Web', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', description: 'Full-stack luxury e-commerce platform with custom UI/UX design and smooth animations.', tags: ['Web Development', 'UI/UX', 'Responsive'] },
  { id: 7, title: 'Birthday Short Film', category: 'Event', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', description: 'A cinematic short film surprise for a 25th birthday celebration, combining memories and drama.', tags: ['Short Film', 'Editing', 'SFX'] },
  { id: 8, title: 'Award Function Live', category: 'Corporate', thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', description: 'Multi-camera live coverage and post-production for an industry award function.', tags: ['Event', 'Multi-cam', 'Live'] },
];

export const testimonials = [
  { id: 1, name: 'Priya Rajan', role: 'Bride & Client', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya', rating: 5, review: 'The Owl Creations captured our wedding in the most magical way. Every frame tells a story. The team was professional, creative, and delivered beyond expectations!', location: 'Chennai' },
  { id: 2, name: 'Arjun Mehta', role: 'CEO, TechNova', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun', rating: 5, review: 'Their brand film went viral on LinkedIn! The direction, editing, and storytelling were world-class. Best investment we made for our startup launch.', location: 'Bangalore' },
  { id: 3, name: 'Sunita Krishnan', role: 'Restaurant Owner', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sunita', rating: 5, review: 'The product shoot transformed our menu. Sales increased by 40% after using their photos on our website and social media. Absolutely stunning work!', location: 'Coimbatore' },
  { id: 4, name: 'Vikram Nair', role: 'College Event Head', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram', rating: 5, review: 'They covered our entire college fest with incredible precision. The after-movie they produced was shared over 10,000 times. Phenomenal team!', location: 'Trichy' },
  { id: 5, name: 'Deepika Shetty', role: 'Fashion Blogger', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepika', rating: 5, review: 'The website they built for my blog is gorgeous. Fast, responsive, and exactly my vision. The UI/UX team understood my brand perfectly!', location: 'Mumbai' },
];

export const whyChooseUs = [
  { icon: '🎬', title: 'Cinematic Quality', description: 'Film-grade production using the latest cameras, lenses, and post-production software.', highlight: 'RED & Sony Camera' },
  { icon: '⚡', title: 'Fast Delivery', description: 'Industry-fastest turnaround. Most projects delivered within 48–72 hours.', highlight: '48-72 Hours' },
  { icon: '💡', title: 'Creative Vision', description: 'Every project is treated as a unique canvas. We craft stories, not just content.', highlight: 'Story-First Approach' },
  { icon: '💰', title: 'Affordable Excellence', description: 'Premium quality without the premium price tag. Plans for every budget.', highlight: 'Starting ₹2,999' },
  { icon: '🏆', title: '100+ Projects Done', description: 'Proven track record across industries — weddings, corporates, social media & more.', highlight: '5-Star Rated' },
  { icon: '🤝', title: 'Dedicated Support', description: 'Your project manager is available 24/7. We don\'t stop until you\'re thrilled.', highlight: '24/7 Available' },
];

export const serviceCategories = {
  Video: ['Cinematography', 'Direction', 'Video Editing', 'Color Correction', 'SFX & VFX', 'Short Film'],
  Marketing: ['Social Media Management', 'Content Creation', 'Post Design', 'Ad Campaigns'],
  Web: ['Website Development', 'UI/UX Design', 'Landing Page', 'Responsive Design'],
  Event: ['Wedding Coverage', 'College Events', 'Birthday Parties', 'Award Functions'],
};

export const budgetMultipliers = {
  Low: 0.7,
  Medium: 1.0,
  Premium: 1.5,
};
