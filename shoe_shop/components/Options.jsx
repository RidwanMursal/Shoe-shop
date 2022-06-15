
const Options = ({values}) => {
  console.log(values)
  return (
    <> 
        {values.map(value => <option value={value}>Size: {value}</option>)}
    </>
  )
}

export default Options