import React, { useRef, useEffect } from "react";

export default function MyLandbot({ url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const _landbot = new Landbot.Container({
      container: containerRef.current,
      configUrl: url,
    });

    return () => _landbot.destroy();
  }, [url, containerRef]);

  return (
    <div className="flex flex-col h-screen mt-10">
      <h2 className="pb-1 m-auto text-center font-bold text-xl text-blue-700 border-b border-blue-200">
        Have a chat to Terry and get bidding in minutes
      </h2>
      <div
        className="h-full w-full border border-solid border-blue-900 border-opacity-20 rounded-md overflow-hidden m-5"
        ref={containerRef}
      />
    </div>
  );
}
