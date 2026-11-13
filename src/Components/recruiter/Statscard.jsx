
function Statscard({title,value,icon}) {
  return (

<div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
<div>
<p className="text-sm text-gray-500">{title}</p>    
<p className="text-2xl font-bold mt-1">{value}</p>
</div>   
{icon && <div className="text-3xl">{icon}</div>} 
</div>
  );
}

export default Statscard;