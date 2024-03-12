import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/AuthContext";

interface ComponentProps {
    label?: string;
    placeholder?: string;
    span? : string;
    spanClass? : string;
    withLabel? : boolean;
    type?: string;
    name?: string;
    updateFunction?: Function;
}
const TextInput: React.FC<ComponentProps> = ({label, placeholder, span, withLabel = true, spanClass = 'font-8', type='text', name='', updateFunction}) => {
  const { updateFormInputs } = useContext(Context);
  const [inputValue, setInputValue] = useState('');
  useEffect(()=>{
    if(updateFunction){
      updateFunction(name,inputValue);
    }else{
      if(name ){
        updateFormInputs(name,inputValue);
      }
    }
  },[inputValue])
  return (
    <div className="input-area w-full">
        {withLabel && <div className="label">{label} <span className={spanClass}>{span}</span></div>}
        <input type={type} placeholder={placeholder} value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value) }/>
    </div>
  )
}

export default TextInput