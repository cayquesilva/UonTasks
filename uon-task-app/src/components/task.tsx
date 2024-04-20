export function Task({task}){

    return (
        <div className="bg-zinc-700 mx-0 my-2 flex rounded-md
         justify-between text-white text-[16px] items-center p-2">
            {task.title}
        </div>
    )
}