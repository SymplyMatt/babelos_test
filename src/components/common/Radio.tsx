import { useContext, useState } from "react";
import { Context } from "../../context/AuthContext";

interface ComponentProps {
    options: string[];
    name?: string;
}

const Radio: React.FC<ComponentProps> = ({ options, name = '' }) => {
    const [selected, setSelected] = useState<string | null>(options[0]);
    const { updateFormInputs } = useContext(Context);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value); 
        updateFormInputs(name, event.target.value);
    };

    return (
        <div className="radio-container">
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={selected === option}
                        onChange={handleOptionChange}
                    />
                    {option}
                </div>
            ))}
        </div>
    );
};

export default Radio;
