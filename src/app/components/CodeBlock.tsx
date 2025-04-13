import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  children: string;
  language?: string;
  filename?: string;
};

export default function CodeBlock({
  children,
  language = "ts",
  filename,
}: CodeBlockProps) {
  return (
    <div className="rounded-md overflow-hidden border border-zinc-700 bg-zinc-900 text-sm font-mono">
      {filename && (
        <div className="px-4 py-2 bg-zinc-800 border-b border-zinc-700 text-zinc-300">
          {filename}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent",
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
