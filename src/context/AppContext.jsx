import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [quoteModal, setQuoteModal] = useState(false);
  const [portfolioModal, setPortfolioModal] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [notification, setNotification] = useState(null);

  const showNotification = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addService = (service) => {
    setSelectedServices(prev => {
      const exists = prev.find(s => s.id === service.id);
      if (exists) return prev;
      const updated = [...prev, service];
      setTotalCost(updated.reduce((sum, s) => sum + s.price, 0));
      return updated;
    });
  };

  const removeService = (id) => {
    setSelectedServices(prev => {
      const updated = prev.filter(s => s.id !== id);
      setTotalCost(updated.reduce((sum, s) => sum + s.price, 0));
      return updated;
    });
  };

  return (
    <AppContext.Provider value={{
      quoteModal, setQuoteModal,
      portfolioModal, setPortfolioModal,
      selectedServices, addService, removeService,
      totalCost,
      notification, showNotification,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
