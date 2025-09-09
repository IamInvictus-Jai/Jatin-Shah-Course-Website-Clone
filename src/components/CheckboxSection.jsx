import React, { useState } from "react";
import { checkboxData } from "../data/checkboxData";

export function CheckboxSection() {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const handleCheckboxChange = (id) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id);
    } else {
      newCheckedItems.add(id);
    }
    setCheckedItems(newCheckedItems);
  };

  const allItems = checkboxData.flatMap((section) => section.items);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
      {allItems.map((item) => (
        <label
          key={item.id}
          className="flex items-center p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <input
            type="checkbox"
            checked={checkedItems.has(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
            className="h-6 w-6 rounded appearance-none border-2 border-gray-300 checked:bg-green-600 checked:border-green-600 focus:ring-green-500 transition-colors cursor-pointer relative before:content-['✓'] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-white before:opacity-0 checked:before:opacity-100"
          />
          <span className="ml-4 text-base md:text-lg font-poppins text-gray-800">
            {item.text}
          </span>
        </label>
      ))}
    </div>
  );
}
