import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const TagInput = ({ name, maxLength, setFieldValue, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (e.nativeEvent.data == ",") {
      if (inputValue.length) {
        setTags([...tags, inputValue]);
        setInputValue("");
      }
    }
  };

  const handleDeleteTag = (index) => {
    const newTags = tags;
    newTags.splice(index, 1);
    console.log(newTags);
    setTags([...newTags]);
  };

  useEffect(() => {
    setFieldValue("authors", tags);
  }, [tags]);

  return (
    <div className="grid w-full grid-cols-[min-content_1fr] rounded-[5px] border-[1px] border-secondary">
      <div className="flex h-full max-w-[400px] overflow-x-auto pl-[0]">
        {tags.map((tag, index) => (
          <span
            className="m-[4px] mr-[0] flex whitespace-nowrap rounded-[5px] border-[1px] border-lightGray bg-dimmedWhite px-[5px]   last:mr-[5px]"
            key={index}
          >
            {tag}
            <button
              className="ml-[5px]"
              type="button"
              onClick={() => handleDeleteTag(index)}
            >
              <FontAwesomeIcon className=" " icon={faTimes} />
            </button>
          </span>
        ))}
      </div>
      {tags.length == maxLength ? null : (
        <input
          className="col-start-2 w-full rounded-[5px] p-[5px] pl-[10px]  "
          name={name}
          type={"text"}
          onChange={handleInput}
          value={inputValue}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default TagInput;
