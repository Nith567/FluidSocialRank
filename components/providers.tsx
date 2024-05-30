'use client'
import { init, AirstackProvider } from "@airstack/airstack-react";

export default function Providers({children}: {children: JSX.Element}) {
    const apiKey = process.env.NEXT_PUBLIC_AIRSTACK_API_KEY || " "
    if (!apiKey) {
        throw new Error("No API key provided");
    }
    return ( 
        <AirstackProvider apiKey={apiKey}>
            {children}
        </AirstackProvider>
    );
}