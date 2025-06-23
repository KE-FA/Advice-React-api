import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading]=useState(false)

  async function handleGetAdvice() {
        setLoading(true)

   try {
     const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
    setResult(data);
   } catch (error) {
    console.error('something occured', error)
   }finally{
    setLoading(false)
   }
  }

  useEffect(() => {
    handleGetAdvice();
  }, []);

  return (
    <div className="advice">
      <h1 className="advice-gen">Advice Generator</h1>
      <p className="advice-p">Get an advice to keep you going on</p>
      <button className="btn-advice" onClick={handleGetAdvice} >
       {loading ? (
  <>
    Loading <ClipLoader color="blue" size={10} />
  </>
) : (
  "Get advice"
)}
       
      </button>
      <p className="result">{result && result.slip.advice}</p>
    </div>
  );
}
export default App;
