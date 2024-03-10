
interface ComponentProps {
    options: string[];
}
const Radio: React.FC<ComponentProps> = ({options}) => {
  return (
    <div className="radio-container">
        {
            options.map((option, index) => (
                <div key={index}>
                    <input type="radio" name="radioGroup" /> {option}
                </div>
            ))
        }
    </div>
  )
}

export default Radio