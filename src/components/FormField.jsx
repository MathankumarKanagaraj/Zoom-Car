import React from 'react';

const FormField = ({ children, onSubmit, className }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormField;
