
import React, { useState } from "react";

const OrderBillingForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    fullName: "",
    status: "Pending", // Default value
    tracking: `TRACK-${Date.now()}`, // Auto-generated unique value
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    county: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "firstName" || name === "lastName"
        ? { fullName: `${prev.firstName} ${prev.lastName}`.trim() }
        : {}),
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip || formData.zip.length !== 6)
      newErrors.zip = "Zip Code must be 6 digits";
    if (!formData.county) newErrors.county = "County is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Bingo! You nailed the form. Great job champ!!");
    }
  };

  return (
    <form
      className={`max-w-4xl mx-auto p-6 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-md rounded-lg`}
      onSubmit={handleSubmit}
    >
      <h2
        className={`text-2xl font-bold ${
          darkMode ? "text-yellow-400" : "text-gray-800"
        } text-center mb-6 tracking-wide`}
      >
        Order Billing Form
      </h2>

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input
            type="email"
            name="email"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">First Name *</label>
          <input
            type="text"
            name="firstName"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Last Name *</label>
          <input
            type="text"
            name="lastName"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.fullName}
            readOnly
          />
        </div>

        {/* Status and Tracking */}
        <div>
          <label className="block text-sm font-medium">Status</label>
          <input
            type="text"
            name="status"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.status}
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Tracking</label>
          <input
            type="text"
            name="tracking"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.tracking}
            readOnly
          />
        </div>
      </div>

      {/* Address Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-sm font-medium">Address *</label>
          <input
            type="text"
            name="address"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Address 2</label>
          <input
            type="text"
            name="address2"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">City *</label>
          <input
            type="text"
            name="city"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">State *</label>
          <input
            type="text"
            name="state"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Zip Code *</label>
          <input
            type="text"
            name="zip"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.zip}
            onChange={handleChange}
          />
          {errors.zip && (
            <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">County *</label>
          <input
            type="text"
            name="county"
            className={`w-full mt-1 p-3 border rounded-md ${
              darkMode
                ? "border-gray-700 bg-gray-900 text-gray-200"
                : "border-gray-300 bg-gray-50 text-gray-900"
            }`}
            value={formData.county}
            onChange={handleChange}
          />
          {errors.county && (
            <p className="text-red-500 text-sm mt-1">{errors.county}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className={`mt-4 ${
          darkMode
            ? "bg-yellow-500 text-black"
            : "bg-blue-500 text-white"
        } py-2 px-4 rounded transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_rgba(255,255,0,0.8)] hover:scale-105`}
      >
        Submit Your Order
      </button>
    </form>
  );
};

export default OrderBillingForm;
// --------------------------------------------------------------------------
// import React, { useState } from "react";

// const OrderBillingForm = ({ darkMode }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     firstName: "",
//     lastName: "",
//     fullName: "",
//     status: "Pending", // Default value
//     tracking: `TRACK-${Date.now()}`, // Auto-generated unique value
//     address: "",
//     address2: "",
//     city: "",
//     state: "",
//     zip: "",
//     county: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//       ...(name === "firstName" || name === "lastName"
//         ? { fullName: `${prev.firstName} ${prev.lastName}`.trim() }
//         : {}),
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.firstName) newErrors.firstName = "First Name is required";
//     if (!formData.lastName) newErrors.lastName = "Last Name is required";
//     if (!formData.address) newErrors.address = "Address is required";
//     if (!formData.city) newErrors.city = "City is required";
//     if (!formData.state) newErrors.state = "State is required";
//     if (!formData.zip || formData.zip.length !== 6)
//       newErrors.zip = "Zip Code must be 6 digits";
//     if (!formData.county) newErrors.county = "County is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form Submitted:", formData);
//       alert(
//         `Order Submitted Successfully!\n\nDetails:\n- Full Name: ${formData.fullName}\n- Email: ${formData.email}\n- Address: ${formData.address}, ${formData.city}, ${formData.state}, ${formData.zip}, ${formData.county}\n- Tracking ID: ${formData.tracking}\n\nThank you for your order!`
//       );
//     }
//   };

//   return (
//     <form
//       className={`max-w-4xl mx-auto p-6 ${
//         darkMode ? "bg-gray-800" : "bg-white"
//       } shadow-md rounded-lg`}
//       onSubmit={handleSubmit}
//     >
//       <h2
//         className={`text-2xl font-bold ${
//           darkMode ? "text-yellow-400" : "text-gray-800"
//         } text-center mb-6 tracking-wide`}
//       >
//         Order Billing Form
//       </h2>

//       {/* Basic Information */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium">Email *</label>
//           <input
//             type="email"
//             name="email"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">First Name *</label>
//           <input
//             type="text"
//             name="firstName"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           {errors.firstName && (
//             <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Last Name *</label>
//           <input
//             type="text"
//             name="lastName"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           {errors.lastName && (
//             <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.fullName}
//             readOnly
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Status</label>
//           <input
//             type="text"
//             name="status"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.status}
//             readOnly
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Tracking</label>
//           <input
//             type="text"
//             name="tracking"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.tracking}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Address Information */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//         <div>
//           <label className="block text-sm font-medium">Address *</label>
//           <input
//             type="text"
//             name="address"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.address}
//             onChange={handleChange}
//           />
//           {errors.address && (
//             <p className="text-red-500 text-sm mt-1">{errors.address}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Address 2</label>
//           <input
//             type="text"
//             name="address2"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.address2}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">City *</label>
//           <input
//             type="text"
//             name="city"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.city}
//             onChange={handleChange}
//           />
//           {errors.city && (
//             <p className="text-red-500 text-sm mt-1">{errors.city}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">State *</label>
//           <input
//             type="text"
//             name="state"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.state}
//             onChange={handleChange}
//           />
//           {errors.state && (
//             <p className="text-red-500 text-sm mt-1">{errors.state}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Zip Code *</label>
//           <input
//             type="text"
//             name="zip"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.zip}
//             onChange={handleChange}
//           />
//           {errors.zip && (
//             <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">County *</label>
//           <input
//             type="text"
//             name="county"
//             className={`w-full mt-1 p-3 border rounded-md ${
//               darkMode
//                 ? "border-gray-700 bg-gray-900 text-gray-200"
//                 : "border-gray-300 bg-gray-50 text-gray-900"
//             }`}
//             value={formData.county}
//             onChange={handleChange}
//           />
//           {errors.county && (
//             <p className="text-red-500 text-sm mt-1">{errors.county}</p>
//           )}
//         </div>
//       </div>

//       <button
//         type="submit"
//         className={`mt-4 ${
//           darkMode
//             ? "bg-yellow-500 text-black"
//             : "bg-blue-500 text-white"
//         } py-2 px-4 rounded transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_rgba(255,255,0,0.8)] hover:scale-105`}
//       >
//         Submit Your Order
//       </button>
//     </form>
//   );
// };

// export default OrderBillingForm;
