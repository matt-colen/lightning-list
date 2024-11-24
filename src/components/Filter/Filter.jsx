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
      <Btn onClick={handleFilterClick} className="flex">
        <MdFilterList />
      </Btn>
      {open && (
        <div className={`${styles.filterOptions} flex-col`}>
          <div className={`${styles.filterOpt} flex`}>
            <label htmlFor="active">Active</label>
            <input id="active" type="checkbox" checked="true" />
          </div>
          <div className={`${styles.filterOpt} flex`}>
            <label htmlFor="complete">Complete</label>
            <input id="complete" type="checkbox" checked="true" />
          </div>
        </div>
      )}
    </div>
  );
}
