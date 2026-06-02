import { useState, useCallback } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { PreLoader } from "./components/PreLoader";

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  return (
    <>
      {/* Pre-Loader — plays once per session, then self-removes */}
      {!preloaderDone && <PreLoader onComplete={handlePreloaderComplete} />}

      {/* Main application — rendered immediately but revealed after preloader */}
      <div
        style={{
          opacity: preloaderDone ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
}
