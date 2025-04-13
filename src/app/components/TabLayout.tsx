import { useState } from "react";

interface TabProps {
  id: string;
  label: string;
  content: React.ReactNode;
}
export default function TabbedDocs({ tabs }: { tabs: TabProps[] }) {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="w-full">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm rounded-t cursor-pointer ${
              activeTab === tab.id
                ? "bg-zinc-800"
                : "text-zinc-400 hover:text-(--text-color)"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 rounded border border-(--secondary-color)">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
