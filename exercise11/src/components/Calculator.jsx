import { useState } from "react";

function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (op) => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) return setResult("Nhập số hợp lệ!");
    if (op === "/" && y === 0) return setResult("Không chia được cho 0!");
    const ops = { "+": x + y, "-": x - y, "*": x * y, "/": x / y };
    setResult(ops[op]);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Số a" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Số b" />
      <div>
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => calculate(op)}>{op}</button>
        ))}
      </div>
      {result !== null && <p>Kết quả: {result}</p>}
    </div>
  );
}
export default Calculator;