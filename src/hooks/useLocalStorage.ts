"use client";
import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          const parsed = JSON.parse(item, (k, v) => {
            if (k === "createdAt" && typeof v === "string") {
              return new Date(v);
            }
            return v;
          });
          setStoredValue(parsed);
        }
      } catch (error) {
        console.error("Error reading localStorage:", error);
      }
    }
  }, [key]);

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          key,
          JSON.stringify(valueToStore, (_, v) => {
            if (v instanceof Date) return v.toISOString();
            return v;
          })
        );
      }
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return [isMounted ? storedValue : initialValue, setValue] as const;
}
