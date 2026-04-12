"use client";

const Checkbox = ({ checked }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => e.currentTarget.form?.requestSubmit()}
      className="h-5 w-5"
      style={{ marginTop: "0.5rem" }}
    />
  );
};

export default Checkbox;