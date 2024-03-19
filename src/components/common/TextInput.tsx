import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/AuthContext";

interface ComponentProps {
    label?: string;
    placeholder?: string;
    span?: string;
    spanClass?: string;
    withLabel?: boolean;
    reset?: boolean;
    type?: string;
    name?: string;
    regex: RegExp;
    updateFunction?: Function;
}

const TextInput: React.FC<ComponentProps> = ({
    label,
    placeholder,
    span,
    withLabel = true,
    spanClass = 'font-8',
    type = 'text',
    name = '',
    updateFunction,
    reset = false,
    regex,
}) => {
    const { updateFormInputs } = useContext(Context);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (name === 'credential') {
            setInputValue('234');
        }
    }, []);

    useEffect(() => {
        if (reset) {
            setInputValue('');
        }
    }, [reset]);

    useEffect(() => {
        if (updateFunction) {
            updateFunction(inputValue);
        } else {
            if (name) {
                updateFormInputs(name, inputValue);
            }
        }
    }, [inputValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (value === '' || new RegExp(regex).test(value)) {
            setInputValue(value);
        }
    };

    return (
        <div className="input-area w-full">
            {withLabel && (
                <div className="label">
                    {label} <span className={spanClass}>{span}</span>
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default TextInput;
