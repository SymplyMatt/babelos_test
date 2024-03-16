import React from 'react';
import FlowLine from './FlowLine';

interface FormTitleProps {
  title: string;
  description: string;
  span?: string;
  step?: string;
}

const FormTitle: React.FC<FormTitleProps> = ({ title, description, span, step = 'one' }) => {
  return (
    <div className="form-section w-80">
      <FlowLine type='two'  icon={step == 'one' ? 'active' : 'completed'} secondLineActive={step !== 'one' }/>
      <div className="">
        <div className="">{title}</div>
        <div className="">{description} <span>{span || ''}</span></div>
      </div>
    </div>
  );
}

export default FormTitle;
