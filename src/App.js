import { useState } from "react";
import { marked } from "marked";

import "./App.css";
function App() {
  //heading element (H1 size), a sub heading element (H2 size),
  //a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
  const [text, setText] = useState(` # H1
  ## H2,
  [title](https://www.example.com),
  \`code\`, 
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`,
- First item
- Second item
- Third item,
> blockquote, 
![alt text](image.jpg),
**bold text**
  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <Previewer text={text} />
    </div>
  );
}

const Previewer = ({ text }) => {
  const renderer = new marked.Renderer();
  const markdown = marked(text);
  return (
    <div
      id="previewer"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
    ></div>
  );
};

export default App;
