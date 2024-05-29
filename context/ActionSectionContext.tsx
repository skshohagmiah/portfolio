// components/ActiveContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ActiveContextType {
  activeSection: string;
  setActiveSection: (value: string) => void;
}

// Initialize the context with undefined to enforce usage within a provider
const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

export function ActiveContextProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <ActiveContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveContext);
  if (!context) {
    throw new Error("useActiveSection must be used within an ActiveContextProvider");
  }
  return context;
}
