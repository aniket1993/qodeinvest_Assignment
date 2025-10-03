'use client'
import { useRef } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, PgStore } from './PgStore';

export default function StoreProvider({ children }) {
    const storeRef = useRef(null);

    if (!storeRef.current) {
        storeRef.current = PgStore;
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}