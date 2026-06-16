import UserPosts from './components/UserPosts';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';

function App() {
  return (
    <div>
      <h1>Exercise 13 - useEffect</h1>

      <h2>1. User Posts (userId = 1)</h2>
      <UserPosts userId={1} />

      <h2>2. Countdown Timer</h2>
      <CountdownTimer initialValue={10} />

      <h2>3. Window Size</h2>
      <WindowSize />

      <h2>4. Validated Input</h2>
      <ValidatedInput
        validationFunction={(val) => val.length >= 3}
        errorMessage="Phải nhập ít nhất 3 ký tự!"
      />
    </div>
  );
}

export default App;