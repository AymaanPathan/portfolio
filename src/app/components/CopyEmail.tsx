"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" className="copy" onClick={copy} aria-label={copied ? "Email copied" : "Copy email address"}>
      <span>{email}</span>
      <span className={`copy-icon${copied ? " is-copied" : ""}`} aria-hidden="true">
        <Copy size={13} />
        <Check size={13} />
      </span>
    </button>
  );
}
