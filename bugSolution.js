```javascript
// pages/index.js

import MyComponent from './MyComponent'; // Correct import path

export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
      <MyComponent />
      <p>This is a simple Next.js 15 app.</p>
    </div>
  );
}
```
```javascript
// pages/MyComponent.js

export default function MyComponent() {
  return <p>This is a custom component.</p>;
}
```