class Shape {
  constructor(color) { this.color = color; }
  getArea() { return 0; }
  toString() { return `Shape [color=${this.color}]`; }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() { return this.length * this.width; }
  toString() { return `Rectangle [color=${this.color}, length=${this.length}, width=${this.width}]`; }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea() { return 0.5 * this.base * this.height; }
  toString() { return `Triangle [color=${this.color}, base=${this.base}, height=${this.height}]`; }
}

// Hàm khởi tạo bộ đếm (Yêu cầu: hàm trả về số tăng dần mỗi lần gọi)
const createIncrementer = () => {
  let count = 0;
  return () => count++;
};
const increment = createIncrementer();

const Exercise4 = () => {
  // --- PHẦN 2: DỮ LIỆU MẪU ---
  const people = [
    { name: 'Jack', age: 50 }, { name: 'Michael', age: 9 },
    { name: 'John', age: 40 }, { name: 'Ann', age: 19 }, { name: 'Elisabeth', age: 16 }
  ];
  const array = [1, 2, 3, 4];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const courses = ["React", "ReactNative", "NodeJs"];
  const person = { name: "Costas", address: { street: "Lalaland 12" } };
  
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
   
  ];

  // --- PHẦN 3: XỬ LÝ LOGIC ES6 ---
  
  // 1. People checks
  const firstTeen = people.find(p => p.age >= 10 && p.age <= 20);
  const allTeens = people.filter(p => p.age >= 10 && p.age <= 20);
  const isEveryTeen = people.every(p => p.age >= 10 && p.age <= 20);
  const isAnyTeen = people.some(p => p.age >= 10 && p.age <= 20);

  // 2. Array [1,2,3,4] reduce (tính tích bằng Arrow Function)
  const product = array.reduce((acc, val) => acc * val, 1);

  // 3. Companies & Ages
  const after1987 = companies.filter(c => c.start > 1987);
  const retailPlusOne = companies
    .filter(c => c.category === "Retail")
    .map(c => ({ ...c, start: c.start + 1 }));
  const sortedByEnd = [...companies].sort((a, b) => a.end - b.end);
  const agesDescending = [...ages].sort((a, b) => b - a);
  const totalAge = ages.reduce((sum, age) => sum + age, 0);

  // 4. Object Destructuring & Object từ companies[0]
  const { address: { street } } = person;
  const { name: cName, category: cCat } = companies[0];
  const newObj = { name: cName, category: cCat, print() { console.log(this.name); } };

  // 5. Rest Parameters & Smart Array Function
  const sumUnknown = (...args) => args.reduce((a, b) => a + b, 0);
  const combineToArray = (...args) => args.reduce((acc, val) => acc.concat(val), []);

  // 6. URL Parser
  const parseUrl = (url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    return Object.fromEntries(params.entries());
  };

  const rect = new Rectangle('Red', 5, 3);
  const tri = new Triangle('Blue', 8, 6);
  const sampleUrl = 'https://example.com?foo=bar&baz=1';
  const parsedUrl = parseUrl(sampleUrl);
  const unknownSum = sumUnknown(1, 2, 3, 4);
  const combined = combineToArray([1, 2], [3, 4], 5);

  // 7. Promise
  const handlePromise = () => {
    new Promise((resolve, reject) => {
      const n = Math.floor(Math.random() * 10) + 1;
      n > 5 ? resolve(n) : reject("Error");
    })
    .then(res => alert("Success: " + res))
    .catch(err => alert(err));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
    

      {/* Header */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Hello <span style={{ color: 'blue' }}>React</span></h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo" style={{ width: '120px' }} />
        <p>The library for web and native user interfaces</p>
      </div>

      {/* Courses */}
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ color: 'blue' }}>This is JSX</h2>
        <h3>Course names</h3>
        <ul>{courses.map((c, i) => <li key={i}>{c}</li>)}</ul>
      </div>

      {/* Retail Companies DOM Output */}
      <div style={{ padding: '20px' }}>
        <h3>Retail Companies (Start+1)</h3>
        {retailPlusOne.map((c, i) => (
          <div key={i} style={{ border: '1px solid #ccc', margin: '5px 0', padding: '10px' }}>
            <p><strong>{c.name}</strong> ({c.category})</p>
            <p>Year: {c.start} - {c.end}</p>
          </div>
        ))}
      </div>

      {/* Logic Results */}
      <div style={{ padding: '20px', backgroundColor: '#eee' }}>
        <h3>ES6 Logic Results</h3>
        <p>First Teenager: {firstTeen?.name}</p>
        <p>All Teenagers: {allTeens.map(p => p.name).join(', ') || 'None'}</p>
        <p>Every Teen? {isEveryTeen ? 'Yes' : 'No'}</p>
        <p>Any Teen? {isAnyTeen ? 'Yes' : 'No'}</p>
        <p>Product of [1,2,3,4]: {product}</p>
        <p>Companies after 1987: {after1987.map(c => c.name).join(', ') || 'None'}</p>
        <p>First company by end year: {sortedByEnd[0]?.name}</p>
        <p>Top ages descending: {agesDescending.slice(0, 5).join(', ')}</p>
        <p>Street: {street}</p>
        <p>Total Age: {totalAge}</p>
        <p>New Object: {newObj.name} ({newObj.category})</p>
        <p>Sum unknown: {unknownSum}</p>
        <p>Combined array: {JSON.stringify(combined)}</p>
        <p>Parsed URL: {JSON.stringify(parsedUrl)}</p>
        <p>Rectangle: {rect.toString()} - Area: {rect.getArea()}</p>
        <p>Triangle: {tri.toString()} - Area: {tri.getArea()}</p>
        <button onClick={() => console.log('Increment:', increment())}>Call Increment (Console)</button>
        <button onClick={handlePromise} style={{ marginLeft: '10px' }}>Test Promise</button>
      </div>
    </div>
  );
};

export default Exercise4;