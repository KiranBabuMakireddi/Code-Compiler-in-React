// import React, { useState } from "react";
// import Editor from "./components/Editor";
// import { compileCode } from "./api";
// import { languageOptions } from "./languageOptions";

// const App = () => {
//   const [code, setCode] = useState("// Write your code here");
//   const [language, setLanguage] = useState("JavaScript (Node.js)");
//   const [output, setOutput] = useState("");

//   const handleCompile = async () => {
//     const langObj = languageOptions.find((l) => l.name === language);
//     if (!langObj) return alert("Language not found!");

//     try {
//       const result = await compileCode({ source_code: code, language_id: langObj.id });

//       if (result.stdout) setOutput(result.stdout);
//       else if (result.compile_output) setOutput("❌ Compile Error:\n" + result.compile_output);
//       else if (result.stderr) setOutput("💥 Runtime Error:\n" + result.stderr);
//       else setOutput("⚠️ No output received.");
//     } catch (error) {
//       setOutput("❗ Error: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <div className="mb-4 flex justify-between items-center gap-4">
//         <select
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//           className="bg-gray-800 text-white p-2 rounded"
//         >
//           {languageOptions.map((lang) => (
//             <option key={lang.id}>{lang.name}</option>
//           ))}
//         </select>
//         <button
//           onClick={handleCompile}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
//         >
//           Compile & Run
//         </button>
//       </div>

//       <Editor code={code} setCode={setCode} language={language.split(" ")[0]} />

//       <div className="mt-6">
//         <h2 className="text-xl font-bold mb-2">Output:</h2>
//         <div className="bg-black p-4 rounded min-h-[100px] whitespace-pre-wrap">{output}</div>
//       </div>
//     </div>
//   );
// };

// export default App;


import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet } from '@tanstack/react-router';

const App = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 bg-gray-900 text-white p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  </div>
);

export default App;