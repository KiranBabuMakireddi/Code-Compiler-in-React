import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { monokai } from "@uiw/codemirror-theme-monokai";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { useSettings } from "../context/SettingsContext";
import { keymap } from "@codemirror/view";
import { insertTab } from "@codemirror/commands"; // Ensures we insert spaces instead of indenting

const languageExtensions = {
  JavaScript: javascript(),
  TypeScript: javascript({ typescript: true }),
  Python: python(),
  Java: java(),
  "C++": cpp(),
};

const themes = {
  dark: githubDark,
  light: githubLight,
  dracula: dracula,
  monokai: monokai,
};

const Editor = ({ code, setCode, language }) => {
  const { theme, fontSize, tabSize } = useSettings();
  const [extension, setExtension] = useState(javascript());

  useEffect(() => {
    const baseLang = language.split(" ")[0];
    setExtension(languageExtensions[baseLang] || javascript());
  }, [language]);

  return (
    <div className="border border-gray-700 rounded-lg">
      <CodeMirror
        value={code}
        height="400px"
        theme={themes[theme] || githubDark}
        extensions={[
          extension,
          EditorView.theme({
            "&": {
              fontSize: `${fontSize}px`,
            },
          }),
          EditorState.tabSize.of(Number(tabSize)), // Control number of spaces per tab
          keymap.of([
            { key: "Tab", run: insertTab }, // Ensure tab inserts spaces, no indentation
          ]),
          EditorView.lineWrapping, // Wrap long lines if needed
        ]}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default Editor;
