import React, { useCallback, useState, useRef } from "react"
import "./index.css"

const App = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(12)
  const [numberAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [passtext, setPassText] = useState(false)
  const [theme, setTheme] = useState(true) // true = light, false = dark

  const passselect = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+-=[]{}|;:,.<>?/"

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, numberAllow, charAllow])

  const passcopyclipboard = () => {
    passselect.current.select()
    navigator.clipboard.writeText(password)
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-500 ${
        theme
          ? "bg-gradient-to-br from-indigo-50 via-white to-emerald-50"
          : "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
      }`}
    >
      <div
        className={`w-full max-w-md sm:max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all ${
          theme
            ? "bg-white/70 text-gray-900"
            : "bg-slate-800/60 text-gray-100"
        }`}
      >
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex gap-2 mb-5">
          <input
            ref={passselect}
            type="text"
            value={password}
            readOnly
            placeholder="Generated password"
            className={`flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:outline-none ${
              theme
                ? "bg-white border border-gray-300"
                : "bg-slate-700 border border-slate-600"
            }`}
          />
          <button
            onClick={passcopyclipboard}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Copy
          </button>
        </div>

        {/* Length */}
        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <label>Length</label>
            <span className="font-semibold text-indigo-500">{length}</span>
          </div>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-indigo-500"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between mb-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllow}
              onChange={() => setNumAllow(!numberAllow)}
              className="accent-indigo-500"
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllow}
              onChange={() => setCharAllow(!charAllow)}
              className="accent-indigo-500"
            />
            Characters
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={() => {
            passwordGenerator()
            setPassText(true)
          }}
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
        >
          {passtext ? "Change Password" : "Generate Password"}
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(!theme)}
          className={`mt-4 w-full py-2 rounded-lg font-medium transition ${
            theme
              ? "bg-slate-200 text-slate-900 hover:bg-slate-300"
              : "bg-slate-700 text-white hover:bg-slate-600"
          }`}
        >
          {theme ? "🌙 Dark Mode" : "☀ Light Mode"}
        </button>
      </div>
    </div>
  )
}

export default App
