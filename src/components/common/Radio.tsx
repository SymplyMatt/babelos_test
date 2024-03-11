
interface ComponentProps {
    options: string[];
    name?: string;
}
const Radio: React.FC<ComponentProps> = ({options, name = 'random'}) => {
  return (
    <div className="radio-container">
        {
            options.map((option, index) => (
                <div key={index}>
                    <input type="radio" name={name} /> {option}
                </div>
            ))
        }
    </div>
  )
}

export default Radio