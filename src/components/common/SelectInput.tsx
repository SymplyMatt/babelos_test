import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/AuthContext";

interface ComponentProps {
    label?: string;
    options: string[];
    span?: string;
    spanClass?: string;
    name?: string;
    withLabel?: boolean;
    updateFunction?: Function;
}

const SelectInput: React.FC<ComponentProps> = ({ label, span, withLabel = true, spanClass = 'font-8', options, name = '', updateFunction }) => {
    const [selected, setSelected] = useState<any>([options[0]]);
    const { updateFormInputs } = useContext(Context);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    };

    useEffect(()=>{
    if(updateFunction){
        updateFunction(name,selected);

    }else{
        updateFormInputs(name, selected);
    }
    },[selected]);

    return (
        <div className="input-area w-full">
            {withLabel && <div className="label">{label} <span className={spanClass}>{span}</span></div>}
            <select value={selected} onChange={handleSelectChange}>
                {options.map((option, index) => (
                    <option value={option} key={index}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
