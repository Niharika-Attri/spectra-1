function ClassTab(props){
    return(<>
        <div className="bg-white rounded-xl h-32 m-2 flex">
            <div className="w-1/5 bg-slate-200 rounded-l-xl">
            </div>
            <div className="items-center">
                <h2 className="text-gray-500">{props.code}</h2>
                <h1 className="font-">{props.name}</h1>
            </div>
            
        </div>
    </>)
}

export default ClassTab;