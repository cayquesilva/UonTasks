import { useState } from "react";
import { Button } from "./button";

export function AddTask({handleTaskAddition}){

    const [inputData, setInputData] = useState('')

    function handleInputChange(e){
        setInputData(e.target.value)
    }

    function handleAddTaskClick(){
        handleTaskAddition(inputData)
        setInputData('')
    }

    return(
        <div className="flex my-4 mx-0 w-full">
            <input 
             onChange={handleInputChange}
             type="text"
             value={inputData}
             className="flex-1 bg-zinc-700 h-10 py-0 px-3 border-none text-white text-sm rounded-md"/>
            <div className="ml-1 flex">
                <Button onClick={handleTaskAddition}>Adicionar</Button>
            </div>
        </div>
    )
}