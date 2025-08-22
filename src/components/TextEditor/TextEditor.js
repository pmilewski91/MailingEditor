import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import Prism from "prismjs";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
import "prismjs/themes/prism-tomorrow.css";
import editorModulesConfig from "./editorModulesConfig";
import mailTemplate from "./htmlTemplates/mailTemplate";

// Funkcje pomocnicze, które nie potrzebują dostępu do stanu komponentu
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function getInitialState() {
  return {
    value: localStorage.getItem("storageValue") ?? "",
    editorHtml: localStorage.getItem("storageEditorHtml") ?? "",
    jsonText:
      localStorage.getItem("storageJsonText") ??
      `{
      "text1":"Mailing Title", 
      "text2":"Subtitle Mailing"
  }`,
  };
}

export default function TextEditor() {
  const initialState = getInitialState();
  const [value, setValue] = useState(initialState.value);
  const [editorHtml, setEditorHtml] = useState(initialState.editorHtml);
  const [jsonText, setJsonText] = useState(initialState.jsonText);
  const [keyInput, setKeyInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [newHtml, setNewHtml] = useState(false);

  // Użycie useRef tylko tam, gdzie jest to konieczne, np. do dostępu do API ReactQuill
  let editorRef = useRef(null);

  // Generuje i ustawia podgląd HTML
  function getHtml() {
    if (!editorRef.current) return;
    let html = editorRef.current.unprivilegedEditor.getHTML();
    let pattern = /<([a-zA-Z0-9]+)(?:\s+[^>]+)?>[\s\S]*?<\/\1>/g;
    let result = html.replace(pattern, (match) => match + "\n");

    if (isJsonString(jsonText)) {
      const obj = JSON.parse(jsonText);
      for (const [key, value] of Object.entries(obj)) {
        result = result.replaceAll(`{${key}}`, value);
      }
    }
    setEditorHtml(mailTemplate(result, 1));
  }

  // Dodaje nowy klucz i tekst do JSON-a
  function addTextToJson() {
    if (!isJsonString(jsonText)) {
      console.error("Invalid JSON format.");
      return;
    }
    const jsonTextObj = JSON.parse(jsonText);
    jsonTextObj[keyInput] = valueInput;
    const formattedJson = JSON.stringify(jsonTextObj, null, 2);
    setJsonText(formattedJson);
    setKeyInput("");
    setValueInput("");
  }

  // Kopiuje wygenerowany HTML do schowka
  function copyButton() {
    navigator.clipboard.writeText(editorHtml);
  }

  // Zamienia wartości tekstowe na klucze JSON
  function textToKeyJson() {
    if (!isJsonString(jsonText)) {
      console.error("Invalid JSON format.");
      return;
    }
    const obj = JSON.parse(jsonText);
    let newValue = value;
    for (const [key, val] of Object.entries(obj)) {
      newValue = newValue.replaceAll(val, `{${key}}`);
    }
    setValue(newValue);
  }

  // Efekt do generowania HTMLa, uruchamia się tylko po zmianie value lub jsonText
  useEffect(() => {
    getHtml();
  }, [value, jsonText]);

  // Efekt do aktualizacji localStorage, uruchamia się po zmianie value, editorHtml lub jsonText
  useEffect(() => {
    localStorage.setItem("storageValue", value);
    localStorage.setItem("storageEditorHtml", editorHtml);
    localStorage.setItem("storageJsonText", jsonText);
  }, [value, editorHtml, jsonText]);

  // Efekt do podświetlania składni, uruchamia się po zmianie editorHtml
  useEffect(() => {
    Prism.highlightAll();
  }, [editorHtml]);

  return (
    <div className="container-fluid">
      <button
        className="btn btn-primary text-uppercase pl-4 pr-4"
        onClick={() => setNewHtml(!newHtml)}
      >
        Upload Content in HTML
      </button>

      {newHtml && (
        <div className="mt-4">
          <textarea
            className="mb-4 contentHtml"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></textarea>
        </div>
      )}

      <div className="row mt-5">
        <div className="l-box col-sm-6 col-12">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={editorModulesConfig}
            ref={editorRef}
          />
        </div>
        <pre className="col-sm-6 col-12 mt-0 r-box">
          <button className="copyButton" onClick={copyButton}>
            Copy
          </button>
          <code className="language-html">{editorHtml}</code>
        </pre>
        <div className="mb-4 d-flex keyValue-box">
          <input
            className="mr-2"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            type="text"
            placeholder="key"
          />
          <input
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            type="text"
            placeholder="value"
          />
          <button
            className="btn btn-primary text-uppercase pl-4 pr-4"
            onClick={addTextToJson}
            disabled={!keyInput || !valueInput}
          >
            Add Text
          </button>
          <button
            className="btn btn-primary text-uppercase pl-4 pr-4"
            onClick={textToKeyJson}
          >
            Replace Text to Key Json
          </button>
        </div>
        <textarea
          rows="15"
          cols="50"
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
        ></textarea>
      </div>
      <div className="text-start">
        <p>Przydatne linki:</p>
        <ul>
          <li>
            <a
              href="https://csvjson.com/csv2json"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSV -&gt; Json
            </a>
          </li>
          <li>
            <a
              href="https://tableconvert.com/json-to-csv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Json -&gt; CSV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
