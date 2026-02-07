// import React, {  useCallback, useEffect, useState , useRef} from 'react'
// import "./index.css"


// const App = () => {
//  const [password , setPassword]=useState("")
//  const [length , setLength] = useState(8)
//  const [numberAllow , setNumAllow]=useState(false)
//  const [charAllow , setCharAllow]=useState(false)
//  const [passtext , setpassset]= useState(false)
//  const [theme , settheme ]=useState(true)
 
//  const passselect = useRef(password)
//  const themehandle =()=>{
//       settheme(prev=>!prev)
//  }

//  const passwordGenerator = useCallback(()=>{
// let pass=""
//  let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//  if (numberAllow) {
//   str+="1234567890"
//  }
//  if (charAllow) {
//   str+="!@#$%^&*()_+-=[]{}|;:,.<>?/" }

// for (let i = 0; i < length; i++) {
//    let char= Math.floor(Math.random()*str.length) 
//   pass+=str.charAt(char)
 
// }
//  setPassword(pass)


//  } , [length , numberAllow , charAllow  ])


// const passcopyclipboard = useCallback(()=>{
//   passselect.current.select(password)
//   window.navigator.clipboard.writeText(password)
// } , [password])

//   return (
//     <>
//  <div
//   className={`min-h-screen flex items-center justify-center ${
//     theme
//       ? "bg-gradient-to-br from-indigo-50 via-white to-emerald-50 "
//       : "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 "
//   }`}
// >

//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        
//         {/* Title */}
//         <h1 className="text-2xl font-bold text-center mb-6">
//           🔐 Password Generator
//         </h1>

//         {/* Password Input + Copy */}
//         <div className="flex gap-2 mb-5">
//           <input
//             type="text"
//             placeholder="Generated password"
//             className="flex-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//            value={password}
//            readOnly
//            ref={passselect}
          
//           />
//           <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition" onClick={passcopyclipboard}>
//             Copy
//           </button>
//         </div>

//         {/* Length Slider */}
//         <div className="mb-5">
//           <div className="flex justify-between mb-1">
//             <label className="font-medium">Length</label>
//             <span className="text-indigo-600 font-semibold">{length}</span>
//           </div>
//           <input
//             type="range"
//             min="8"
//             max="32"
//             className="w-full accent-indigo-600"
//             value={length}
//               onChange={(e)=>{setLength(e.target.value)}}
//           />
//         </div>

//         {/* Options */}
//         <div className="flex justify-between mb-6">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="checkbox"
//               className="accent-indigo-600"
//               defaultChecked={numberAllow}
//               onChange={()=>{setNumAllow((prev)=>!prev)}}
//             />
//             Numbers
//           </label>

//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="checkbox"
//               className="accent-indigo-600"
//                  defaultChecked={charAllow}
//               onChange={()=>{setCharAllow((prev)=>!prev)}}
//             />
//             Characters
//           </label>
//         </div>

//         {/* Generate Button */}
//         <button className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition" onClick={()=>{
//           passwordGenerator()
//           setpassset(true)
         
//         }}>
//         {passtext?"change password":"password generator"}
        
//         </button>
//         <button onClick={themehandle}>

//           {theme==true?"light":"dark"}
//         </button>

//       </div>
//     </div>
 
//     </>
//   )
// }

// export default App
import React, { useCallback, useState, useRef } from "react"
import "./index.css"

const App = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [passtext, setpassset] = useState(false)
  const [theme, settheme] = useState(true)

  const passselect = useRef(null)

  const themehandle = () => {
    settheme((prev) => !prev)
  }

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllow) str += "1234567890"
    if (charAllow) str += "!@#$%^&*()_+-=[]{}|;:,.<>?/"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllow, charAllow])

  const passcopyclipboard = useCallback(() => {
    passselect.current.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme
          ? "bg-gradient-to-br from-indigo-50 via-white to-emerald-50"
          : "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
      }`}
    >
      {/* Glass Card */}
      <div
        className={`w-full max-w-md rounded-2xl p-6 shadow-xl backdrop-blur-xl transition-all duration-300 ${
          theme
            ? "bg-white/60 border border-white/20 text-gray-900"
            : "bg-slate-800/60 border border-white/10 text-gray-100"
        }`}
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Generated password"
            className={`flex-1 px-4 py-2 rounded-lg focus:outline-none ${
              theme
                ? "bg-white/70 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                : "bg-slate-700/60 text-gray-100 border border-slate-600 focus:ring-2 focus:ring-indigo-400"
            }`}
            value={password}
            readOnly
            ref={passselect}
          />

          <button
            className={`px-4 py-2 rounded-lg text-white transition ${
              theme
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-indigo-500 hover:bg-indigo-400"
            }`}
            onClick={passcopyclipboard}
          >
            Copy
          </button>
        </div>

        {/* Length */}
        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <label className="font-medium">Length</label>
            <span className="font-semibold text-indigo-500">{length}</span>
          </div>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className={`w-full ${
              theme ? "accent-indigo-600" : "accent-indigo-400"
            }`}
          />
        </div>

        {/* Options */}
        <div className="flex justify-between mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="accent-indigo-500"
              defaultChecked={numberAllow}
              onChange={() => setNumAllow((prev) => !prev)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="accent-indigo-500"
              defaultChecked={charAllow}
              onChange={() => setCharAllow((prev) => !prev)}
            />
            Characters
          </label>
        </div>

        {/* Generate Button */}
        <button
          className={`w-full py-3 rounded-xl font-semibold transition ${
            theme
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-purple-500 hover:bg-purple-400 text-white"
          }`}
          onClick={() => {
            passwordGenerator()
            setpassset(true)
          }}
        >
          {passtext ? "Change Password" : "Generate Password"}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={themehandle}
          className={`mt-4 w-full py-2 rounded-lg border transition ${
            theme
              ? "bg-white/40 border-white/30 text-gray-800"
              : "bg-slate-700/50 border-white/10 text-gray-200"
          }`}
        >
          {theme ? "🌙 Dark Mode" : "☀ Light Mode"}
        </button>
      </div>
    </div>
  )
}

export default App
