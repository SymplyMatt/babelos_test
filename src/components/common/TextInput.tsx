
interface ComponentProps {
    label?: string;
    placeholder?: string;
    span? : string;
    spanClass? : string;
    withLabel? : boolean;
    type?: string;
}
const TextInput: React.FC<ComponentProps> = ({label, placeholder, span, withLabel = true, spanClass = 'font-8', type='text'}) => {
  return (
    <div className="input-area w-full">
        {withLabel && <div className="label">{label} <span className={spanClass}>{span}</span></div>}
        <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextInput