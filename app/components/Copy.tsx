"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const Copy = ({ title }: { title: string }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(title)
      .then(() => {
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <Button
      className="mt-3 flex max-w-[320px] gap-4"
      variant="secondary"
      onClick={copyToClipboard}
    >
      <p className="line-clamp-1 w-full max-w-full text-xs font-medium text-black-2">
        {title}
      </p>

      {hasCopied ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor">
          <rect width="14" height="14" x="8" y="8" rx="2"></rect>
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10"></path>
        </svg>
      )}
    </Button>
  );
};

export default Copy;
