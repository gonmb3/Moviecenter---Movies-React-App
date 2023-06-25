
export const Message = ({label,placeholder}) => {

  return (

    <div className="text-sm w-full text-white">
      <label htmlFor="" className="font-semibold"> {label} </label>
      <textarea 
      placeholder={placeholder}
      className="w-full h-40 mt-2 text-white p-6 bg-main border border-border"></textarea>
    </div>
  )
}

export const Select = ({label, options, onChange}) => {
  return (
    <>
    <label className="text-border font-semibold">{label}</label>
      <select
      onChange={onChange}
       className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded ">
        {options.map((o, index) => (
          <option key={index} value={o.value}>
              {o.title}
          </option>
        ))}
       </select>
    </>
  )
}