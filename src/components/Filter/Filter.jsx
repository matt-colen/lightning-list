import React from "react";
import { MdFilterList } from "react-icons/md";
import Btn from "../Btn/Btn.jsx";
import styles from "./Filter.module.css";

export default function Filter() {
  const [open, setOpen] = React.useState(false);

  const handleFilterClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`${styles.filter} flex-col`}>
      {/* Toggle button with accessibility attributes */}
      <Btn
        onClick={handleFilterClick}
        className={`${styles.filterBtn} flex`}
        aria-expanded={open}
        aria-controls="filter-options"
        aria-label="Toggle filter options"
      >
        <MdFilterList />
      </Btn>

      {/* Filter options */}
      {open && (
        <div
          id="filter-options"
          role="region"
          aria-labelledby="filter-button"
          className={`${styles.filterOptions} flex-col`}
        >
          <div className={`${styles.filterOpt} flex flex-fully-centered`}>
            <label htmlFor="active">Active</label>
            <input
              id="active"
              type="checkbox"
              defaultChecked
              aria-checked="true"
            />
          </div>
          <div className={`${styles.filterOpt} flex`}>
            <label htmlFor="complete">Complete</label>
            <input
              id="complete"
              type="checkbox"
              defaultChecked
              aria-checked="true"
            />
          </div>
        </div>
      )}
    </div>
  );
}
