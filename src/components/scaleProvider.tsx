"use client";
import React, { ReactNode, useEffect } from "react";

function ScaleProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.innerWidth >= 2560) {
      document.body.style.zoom = "1.7"; // Adjust scaling factor as needed
    } else if (window.innerWidth <= 1024 && window.innerWidth >= 1000) {
      document.body.style.zoom = "1.5"; // Adjust scaling factor as needed
    } else if (window.innerWidth < 1000 && window.innerWidth >= 920) {
      document.body.style.zoom = "1.3"; // Adjust scaling factor as needed
    }
  }, []);

  return <>{children}</>;
}

export default ScaleProvider;
