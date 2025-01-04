```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Use a callback function to update state
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Update every 1 second

    // Cleanup function to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```