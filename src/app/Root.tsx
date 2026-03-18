import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { useEffect } from "react";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll behavior temporarily to avoid long scrolling animation on route change
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    // Restore smooth scrolling for anchor links within the page
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 50);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
