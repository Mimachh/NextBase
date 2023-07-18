'use client'

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
    children: ReactNode;
}

const SessionContext = ({ children }: ProvidersProps) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default SessionContext;