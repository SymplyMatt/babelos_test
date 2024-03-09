
interface ComponentProps {
    label?: string;
    placeholder?: string;
    span? : string;
    spanClass? : string;
    withLabel? : boolean;
}
const TextInput: React.FC<ComponentProps> = ({label, placeholder, span, withLabel = true, spanClass = 'font-8'}) => {
  return (
    <div className="input-area w-full">
        {withLabel && <div className="label">{label} <span className={spanClass}>{span}</span></div>}
        <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default TextInput