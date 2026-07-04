"use client";

import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";

export default function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-slate-200">{label}</span>
      <div className="flex items-center justify-between bg-black border border-solid border-black rounded-md p-2 cursor-pointer" onClick={handleCopy} role="button" tabIndex={0}>
        <code className="text-sm text-slate-200">{value}</code>
        <span className="font-medium text-green-300 flex-shrink-0 ml-4">{copied ? <ClipboardCheck /> : <Clipboard />}</span>
      </div>
    </div>
  );
}
