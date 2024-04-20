import { Task } from "./task";

export function Tasks({tasks}){

    return (
        <>
            {tasks.map((task: any) => (
            <Task task={task}/>
            ))}

        
        </>
    )
} 