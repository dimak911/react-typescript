import {
  ChangeEvent,
  MouseEvent,
  FC,
  useState,
  DragEvent,
  useRef,
} from "react";

export const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log("Drag");
    e.preventDefault();
  };
  const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="controlled"
      />
      <input type="text" ref={inputRef} placeholder="uncontrolled" />
      <button onClick={clickHandler}>Click</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
        }}
      >
        Drag me
      </div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          backgroundColor: isDrag ? "blue" : "red",
          marginTop: 10,
        }}
      >
        Drop on me
      </div>
    </div>
  );
};
