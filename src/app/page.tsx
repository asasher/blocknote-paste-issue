"use client";

import dynamic from "next/dynamic";

export default function HomePage() {
  const SimpleEditor = dynamic(() => import("../components/simple-editor"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
  });
  return <SimpleEditor />;
}
