import React, { createContext, useContext, useCallback, useRef, useState } from "react";
import {ToastContainer} from "./toast.jsx";


const ToastContext = createContext(null);

// Lets non-React code (e.g. the axios response interceptor) raise a toast
// without a hook — set to the live `toast` callback while a ToastProvider
// is mounted, a no-op before/after that.
let emitToast = () => {};
export function toastFromOutsideReact(opts) {
    emitToast(opts);
}

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const idRef = useRef(0);

    const toast = useCallback(({ message, title, type = "info", duration = 3000 }) => {
        const id = idRef.current++;
        setToasts((prev) => [...prev, { id, message, title, type, duration }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
    }, []);
    emitToast = toast;

    const dismiss = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);


    return (
        <ToastContext.Provider value={{ toast }}>

            {children}
            <ToastContainer toasts={toasts} onDismiss={dismiss} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
    return ctx.toast;
}