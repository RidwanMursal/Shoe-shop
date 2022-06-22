
const Options = ({values}) => {
  //console.log(values)
  return (
    <> 
        {values.map(value => <option key={value} value={value}>Size: {value}</option>)}
    </>
  )
}

export default Options