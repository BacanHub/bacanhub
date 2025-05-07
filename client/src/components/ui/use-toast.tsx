import React, { useState, useCallback } from 'react';

type ToastType = 'default' | 'destructive';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(({ title, description, type = 'default' }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, title, description, type }]);

    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toast, toasts, removeToast };
}

export function ToastContainer({ toasts, removeToast }: { toasts: Toast[]; removeToast: (id: string) => void }) {
  return (
    <div className="fixed bottom-0 right-0 p-4 space-y-4 z-50">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`p-4 rounded-lg shadow-lg ${
            t.type === 'destructive' ? 'bg-red-500' : 'bg-green-500'
          } text-white`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{t.title}</h3>
              {t.description && <p className="text-sm mt-1">{t.description}</p>}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="ml-4 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 