import React, { useState } from "react";

const PageSelector: React.FC = () => {
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());

  const togglePageSelection = (page: number) => {
    setSelectedPages((prevSelectedPages) => {
      const newSelectedPages = new Set(prevSelectedPages);
      if (newSelectedPages.has(page)) {
        newSelectedPages.delete(page);
      } else {
        newSelectedPages.add(page);
      }
      return newSelectedPages;
    });
  };

  const isAllSelected = selectedPages.size === 4;
  const toggleAllPages = () => {
    if (isAllSelected) {
      setSelectedPages(new Set());
    } else {
      setSelectedPages(new Set([1, 2, 3, 4]));
    }
  };

  return (
    <div className='page-selector'>
      <div className='checkbox-container'>
        <label className='checkbox-label'>
          All pages
          <input
            type='checkbox'
            checked={isAllSelected}
            onChange={toggleAllPages}
          />
        </label>
        <hr />
        {[1, 2, 3, 4].map((page) => (
          <label key={page} className='checkbox-label'>
            Page {page}
            <input
              type='checkbox'
              checked={selectedPages.has(page)}
              onChange={() => togglePageSelection(page)}
            />
          </label>
        ))}
      </div>
      <hr />
      <button className='done-button'>Done</button>
    </div>
  );
};

export default PageSelector;
