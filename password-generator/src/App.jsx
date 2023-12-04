import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8); //default value 8
  const [numberAllowed, setNumberAllowed] = useState(false); //default for number checkbox
  const [charAllowed, setCharAllowed] = useState(false); //Character check box default false/blank
  const [password, setPassword] = useState("");
  const [buttonText,setButtonText] = useState("Copy");
  //userRef() hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (charAllowed) {
      str = str + "~!@#$%^&*()-+{}[]<>";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.random() * str.length + 1;
      pass = pass + str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  //function to copy the text value to the clipboard of the system

  const copyPassWordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)

    //I have called the function here in this 
    //Because only one function can be called in onClick event of button.
    //To call mutiple function we need tio call one then the remaining function inside the called function

    handleClick();

  }, [password]);

  //It changes the value of button when it is clicked

  const handleClick = ()=>{
    setButtonText("Copied!!");
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-200">
        <h1 className="text-3xl text-center text-orange-600 mb-6 font-extrabold">
          PASSWORD GENERATOR
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
            onClick={copyPassWordToClipboard}
          >
            {buttonText}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="font-bold">Length {length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="font-bold">Number</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="font-bold">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
