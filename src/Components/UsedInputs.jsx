export const Message = ({ label, placeholder }) => {
  return (
    <div className="text-sm w-full text-white">
      <label htmlFor="" className="font-semibold">
        {" "}
        {label}{" "}
      </label>
      <textarea
        placeholder={placeholder}
        className="w-full h-40 mt-2 text-white p-6 bg-main border border-border"
      ></textarea>
    </div>
  );
};

export const Select = ({ label, options, onChange, placeholder }) => {
  return (
    <>
      <label className="text-border font-semibold">{label}</label>
      <select
        onChange={onChange}
        className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded "
      >
        {options.map((o, index) => (
          <option key={index} value={o.value}>
            {o.title}
          </option>
        ))}
      </select>
    </>
  );
};

export const Input = ({ label, placeholder, type, bg }) => {
  return (
    <div className="text-sm w-full">
      <label className="text-border font-semibold">{label}</label>
      <input
       required
        type={type} 
        placeholder={placeholder} 
        className={`w-full text-sm mt-1 p-4 border border-border rounded text-white ${bg ? "bg-main" : "bg-dry" }`}
        
        />
    </div>
  );
};
