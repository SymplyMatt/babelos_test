import React from 'react';
import FlowLine from './FlowLine';

interface FormTitleProps {
  title: string;
  description: string;
}

const FormTitle: React.FC<FormTitleProps> = ({ title, description }) => {
  return (
    <div className="form-section w-80">
      <FlowLine isActive={true} step="two" type='two'/>
      <div className="">
        <div className="">{title}</div>
        <div className="">{description}</div>
      </div>
    </div>
  );
}

export default FormTitle;
