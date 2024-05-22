// type annotation in typescript to specifiy variables, paramters and so on.
import { useState } from "react";

// an interface containing an object with two properties; {items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) that returns void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // use a hook to tap into built in features in React that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // the funciton below is called an Event handler (handles the Click event)
  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {/* sometimes we want to render content based on certain conditions aka conditonal rendering */}
      {/* use a ? for 'if this conditon is true', otherwise return null */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* one better way to write the above code would be using a logical AND && rather than null*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              // if the selectedIndex equals the index of the current item, give it two classes; the list group name and active. Otherwise give it the class list-group-item
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
