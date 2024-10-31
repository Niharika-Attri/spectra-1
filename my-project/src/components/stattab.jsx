function StatTab(props){
    return(<>
    <div className="flex w-full m-2 rounded-[15px] justify-between p-4 border-2" style={{ backgroundColor: props.colour, borderColor: props.colourtwo}}>
        <div className="">
            <h5>{props.label}</h5>
            <h1 className="text-2xl">{props.val}</h1>
        </div>
        <div className="inline-block text-3xl p-2 text-center">
        <div className="w-12 h-10 rounded-lg pt-1 pl-2" style={{backgroundColor:props.colourtwo}}>
            {props.icon}
        </div>

        </div>
        
        
    </div>
    </>)
}

export default StatTab;