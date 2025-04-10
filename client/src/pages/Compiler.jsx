import React, { useState } from "react";
import Editor from "../components/Editor";
import { compileCode } from "../api";
import { languageOptions } from "../languageOptions";

const Compiler = () => {
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("JavaScript (Node.js 12.14.0)");

  const [output, setOutput] = useState("");

  const handleCompile = async () => {
    const langObj = languageOptions.find(l => l.name === language);
    if (!langObj) {
      setOutput("❗ Selected language is not supported.");
      return;
    }
    const result = await compileCode({ source_code: code, language_id: langObj.id });
    if (result.stdout) {
      setOutput(result.stdout);
    } else if (result.compile_output) {
      setOutput("❌ Compile Error:\n" + result.compile_output);
    } else if (result.stderr) {
      setOutput("💥 Runtime Error:\n" + result.stderr);
    } else {
      setOutput("No output received");
    }
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          {languageOptions.map(lang => (
            <option key={lang.id}>{lang.name}</option>
          ))}
        </select>
        <button
          onClick={handleCompile}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Compile & Run
        </button>
      </div>

      <Editor code={code} setCode={setCode} language={language} />

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Output:</h2>
        <div className="bg-black p-4 rounded min-h-[100px] whitespace-pre-wrap">{output}</div>
      </div>
    </div>
  );
};

export default Compiler;