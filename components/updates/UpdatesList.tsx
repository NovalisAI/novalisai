import { Update } from "@/types";

export default function UpdatesList() {
  return (
    <div
      className="text-foreground space-y-10"
      style={{
        fontFamily: "'Source Code Pro', monospace",
      }}
    >
      {updates.map((update, i) => (
        <div key={i}>
          <h6 className="font-black">
            v{update.version} ({update.date})
          </h6>
          {update.ameliorations.map(({ content, type }) => (
            <h6 key={content}>
              - {type}: {content}
            </h6>
          ))}
        </div>
      ))}
    </div>
  );
}

const updates: Update[] = [
  {
    version: "1.1.0",
    date: "June 19, 2025",
    ameliorations: [
      {
        type: "Added",
        content: "180 new icons in a new 'Coding' category (all 5 styles).",
      },
      {
        type: "Fixed",
        content:
          "Distorted shape in 'music-slash' icon multimedia category, Duotone Line style.",
      },
      {
        type: "Fixed",
        content:
          "Distorted shape in 'music-note-slash' icon multimedia category, Duotone Line style.",
      },
    ],
  },
  {
    version: "1.0.0",
    date: "June 1, 2025",
    ameliorations: [
      {
        type: "Initial Release",
        content: "Official launch of the Zappicon library.",
      },
    ],
  },
];
