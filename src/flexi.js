import React, { useState, useEffect } from "react";

const Flexi = ({ onSubmitFn, config }) => {
  const [inputVal, setInputVal] = useState("");
  const [ddVal, setDdVal] = useState("");

  useEffect(() => {
  }, []);

  const changeHandler = e => {
    setInputVal(e.target.value);
  };

  const changeHandlerDD = e => {
    setDdVal(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    onSubmitFn({ name: inputVal, dd: ddVal });
  };

  return (
    <>
      <h1>Boilerplate app</h1>
      <form>
        {(config.length > 0) ?config.map((val, index) => {
          if (val.type === "TextField") {
            return (
              <div>
                <label htmlFor={val.label}>{val.label}:</label>
                <input type="text" id={val.label} onChange={changeHandler} />
              </div>
            );
          }
          if (val.type === "DropDown") {
            return (
              <div>
                <label htmlFor={val.label}>{val.label}:</label>
                <select type="text" id={val.label} onChange={changeHandlerDD}>
                  <option value="" />
                  {val.values.map(ddOption => {
                    return <option value={ddOption}>{ddOption}</option>;
                  })}
                </select>
              </div>
            );
          }
        }): <p>No data received</p> }
        <button type="submit" onClick={formSubmitHandler}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Flexi;
