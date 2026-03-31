import { useApp } from '../context/AppContext';

export default function FloatingActionBar() {
  const { setQuoteModal } = useApp();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const fabs = [
    {
      label: 'Call Now',
      icon: '📞',
      bg: '#10B981',
      action: () => window.open('tel:+919999999999'),
    },
    {
      label: 'WhatsApp',
      icon: '💬',
      bg: '#22C55E',
      action: () => window.open('https://wa.me/919999999999?text=Hi! I want to enquire about your services.', '_blank'),
    },
    {
      label: 'Get Quote',
      icon: '🚀',
      bg: '#F97316',
      action: () => setQuoteModal(true),
    },
    {
      label: 'Book Now',
      icon: '📅',
      bg: '#8B5CF6',
      action: () => scrollTo('#contact'),
    },
  ];

  return (
    <div className="fab-bar">
      {fabs.map((fab) => (
        <button
          key={fab.label}
          onClick={fab.action}
          className="fab-btn"
          style={{ background: fab.bg }}
          title={fab.label}
        >
          <span className="fab-label">{fab.label}</span>
          <span className="text-xl">{fab.icon}</span>
        </button>
      ))}
    </div>
  );
}
