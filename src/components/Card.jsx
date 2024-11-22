
const Card = (props) => {
  return (
    <>
    <div className="border-2 h-auto max-w-96 min-w-96 rounded-xl my-2 p-9 shadow-md">
        <img src={props.petImage} alt="" className="h-44 w-64 rounded ml-8 mb-3 border"/>
        <h3 className="text-2xl font-semibold font-mono">{props.petName}</h3>
        <h3 className="text-xl my-2">Age- {props.age}</h3>
        <p>{props.description}</p>
        <h2 className="text-xl pt-2 font-semibold text-slate-300">${props.price}</h2>
        <button className="text-emerald-900 font-bold bg-white px-4 py-1 rounded-xl mt-6 hover:bg-emerald-950 hover:border hover:text-white h-10 p">See More</button>
    </div>
    </>
  )
}

export default Card