// import React, { useState } from "react";
// import OrderBillingForm from "./OrderBillingForm";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(true); // Default is dark mode

//   const toggleTheme = () => setDarkMode(!darkMode);

//   return (
//     <div
//       className={`min-h-screen ${
//         darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
//       } flex items-center justify-center`}
//     >
//       <div className="absolute top-4 right-4">
//         <button
//           onClick={toggleTheme}
//           className="py-2 px-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 focus:outline-none transition-all"
//         >
//           {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </button>
//       </div>
//       <OrderBillingForm darkMode={darkMode} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import OrderBillingForm from "./OrderBillingForm";

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Default is dark mode

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } flex items-center justify-center`}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="py-2 px-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 focus:outline-none transition-all"
        >
          {darkMode ? "Switch to Owner Mode" : "Switch to Slave Mode"}
        </button>
      </div>
      <OrderBillingForm darkMode={darkMode} />
    </div>
  );
};

export default App;

