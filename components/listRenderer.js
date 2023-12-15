export default function ListRendered({ list, onChecked }) {
  const itemsInList = list.length
  return (
    <div>
        { itemsInList && <ul className=" text-black bg-white  border-blue-100 px-4 rounded-md py-2 flex flex-col gap-y-2 justify-center items-center mx-20">
        {list.map((item, index) => (
          <li key={item.taskId} className="flex items-center w-full bg-purple-50 px-2 py-1 rounded-md">
          <input
            type="checkbox"
            id={item.taskId}
            onChange={() => onChecked(item.taskId)}
            className="mr-2"
          />
          <div className="">
            <span className={item.isDone ? "line-through" : ""}>{item.taskDescription}</span>
          </div>
        </li>
        ))}
      </ul> }, { !itemsInList && <div className="text-xl text-gray-700 w-3/4 mx-auto rounded-md shadow-sm text-center px-4 py-2 bg-purple-100">No tasks, add a task to the list</div>}
    </div>
  );
}
