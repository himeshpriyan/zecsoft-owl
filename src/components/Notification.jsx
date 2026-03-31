import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function Notification() {
  const { notification } = useApp();

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -60, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -60, x: '-50%' }}
          className="fixed top-20 left-1/2 z-[3000] px-6 py-3 rounded-xl border shadow-2xl font-semibold text-sm"
          style={{
            background: notification.type === 'error' ? 'rgba(239,68,68,0.95)' : 'rgba(249,115,22,0.95)',
            border: notification.type === 'error' ? '1px solid #f87171' : '1px solid #fb923c',
            color: 'white',
            backdropFilter: 'blur(8px)',
          }}>
          {notification.msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
