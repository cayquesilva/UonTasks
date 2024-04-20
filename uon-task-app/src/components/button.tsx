export function Button({children, onClick}){
    return(
        <button onClick={onClick} 
        className="h-10 py-0 px-3 rounded-md
         bg-green-700 w-full text-gray-100
         text-[16px] cursor-pointer border-none">
            {children}
        </button>
    )
}