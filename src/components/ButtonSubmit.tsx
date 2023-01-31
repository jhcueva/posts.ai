import { fixMyEnglish } from "../services/cohere.js";

let promise = null;

function SubmitButton() {
  const handleClick = async () => {
    const text = document.getElementById("textArea").value;
    promise = fixMyEnglish(text);
    const value = await promise;
    console.log("Response: ", value);
  };

  return <button onClick={handleClick}>Submit</button>;
}

export default SubmitButton;
