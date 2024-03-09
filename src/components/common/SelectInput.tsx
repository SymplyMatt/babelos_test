
interface ComponentProps {
    label?: string;
    options: string[];
    span? : string;
    spanClass? : string;
    withLabel? : boolean;
}
const SelectInput: React.FC<ComponentProps> = ({label, span, withLabel = true, spanClass = 'font-8', options}) => {
  return (
    <div className="input-area w-full">
        {withLabel && <div className="label">{label} <span className={spanClass}>{span}</span></div>}
        <select>
            {
                options.map((i,index) =>(
                    <option value="" key={index}>{i}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectInput