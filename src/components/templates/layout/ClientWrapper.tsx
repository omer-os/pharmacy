"use client";
import { Item } from "@/db";
import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * ClientContextType is the type for the context object that provides
 * utility functions to manipulate body scroll and browser back behavior.
 */
interface ClientContextType {
  disableBodyScroll: () => void;
  enableBodyScroll: () => void;
  disableBrowserBack: (onBack?: () => void) => void;
  enableBrowserBack: () => void;
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  CartData: Item[];
  setCartData: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

/**
 * Disables scrolling on the body element.
 */
const disableBodyScroll = () => {
  document.body.style.overflow = "hidden";
};

/**
 * Enables scrolling on the body element.
 */
const enableBodyScroll = () => {
  document.body.style.overflow = "";
};

let customBackFunction: (() => void) | null = null;

/**
 * Disables browser back behavior and optionally defines a custom
 * function to be executed instead when the user presses the back button.
 *
 * Example:
 * disableBrowserBack(() => {
 *   console.log("Back button pressed!");
 * });
 *
 * @param {() => void} [onBack] - Optional custom function to execute on back button press.
 */
const disableBrowserBack = (onBack?: () => void) => {
  customBackFunction = onBack || null;
  window.addEventListener("popstate", handlePopState);
  // Add a dummy history entry
  window.history.pushState({}, "");
};

/**
 * Re-enables browser back behavior.
 */
const enableBrowserBack = () => {
  window.removeEventListener("popstate", handlePopState);
};

/**
 * Handles the popstate event by executing the customBackFunction and
 * replacing the history entry to avoid changing the URL.
 *
 * @param {PopStateEvent} event
 */
const handlePopState = (event: PopStateEvent) => {
  if (customBackFunction) {
    customBackFunction();
    // Replace the current history entry with itself.
    window.history.replaceState({}, "", window.location.href);
  }
};

/**
 * The ClientWrapper component provides utility functions through context
 * to manipulate body scroll and browser back behavior.
 *
 * Usage:
 * <ClientWrapper>
 *   <YourComponent />
 * </ClientWrapper>
 *
 * @param {{children: React.ReactNode}} children - React child components.
 */
export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [CartData, setCartData] = useState<Item[]>([]);

  useEffect(() => {
    return () => {
      // Clean up listeners when component unmounts
      enableBrowserBack();
    };
  }, []);
  return (
    <ClientContext.Provider
      value={{
        disableBodyScroll,
        enableBodyScroll,
        disableBrowserBack,
        enableBrowserBack,
        isSidebarOpen,
        setSidebarOpen,
        CartData,
        setCartData,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

/**
 * useClient hook to access the utility functions provided by ClientWrapper.
 *
 * Example:
 * const { disableBodyScroll, enableBodyScroll } = useClient();
 * disableBodyScroll();
 *
 * @returns {ClientContextType} The utility functions object.
 */
export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient must be used within a ClientWrapper");
  }
  return context;
};
