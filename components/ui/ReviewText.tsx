import React, { useState } from "react";

interface ReviewTextProps {
  text: string;
  maxLength?: number;
}

const ReviewText: React.FC<ReviewTextProps> = ({ text, maxLength = 250 }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > maxLength;
  const displayText = expanded || !isLong ? text : text.slice(0, maxLength) + "...";

  return (
    <>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed whitespace-pre-line">{displayText}</p>
      {isLong && (
        <button
          className="text-blue-600 hover:underline text-xs font-medium focus:outline-none"
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </>
  );
};

export default ReviewText;
