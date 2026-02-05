import type { ReactElement, ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";

const TOAST_DURATION_MS = 3000;

type ToastContextValue = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

type ToastItem = {
  id: number;
  message: string;
};

type ToastProviderProps = {
  children: ReactNode;
};

export const ToastProvider = ({
  children,
}: ToastProviderProps): ReactElement => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);

  const showToast = useCallback((message: string): void => {
    const id = idRef.current++;
    setToasts((prev) => [...prev, { id, message }]);
  }, []);

  const removeToast = useCallback((id: number): void => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      <ToastPrimitive.Provider
        duration={TOAST_DURATION_MS}
        swipeDirection="right"
      >
        {children}
        {toasts.map((toast) => (
          <ToastPrimitive.Root
            key={toast.id}
            onOpenChange={(open) => {
              if (!open) {
                removeToast(toast.id);
              }
            }}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-lg"
          >
            <ToastPrimitive.Description>
              {toast.message}
            </ToastPrimitive.Description>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-50 flex max-h-screen w-full flex-col gap-2 p-6 outline-none sm:max-w-[420px]" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};

/* eslint-disable-next-line react-refresh/only-export-components */
export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (ctx === null) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
};
