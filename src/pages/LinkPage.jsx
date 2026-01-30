// function LinkPage() {
//   const links = [
//     { name: "Home", url: "/" },
//     { name: "Disabled", url: "/disabled"}, // disabled link
//   ];

//   return (
//     <div className="p-8 max-w-md mx-auto">
//       <h1 className="text-4xl font-bold mb-6 text-center">My Links</h1>
//       <p className="text-lg mb-6 text-center text-gray-700">
//         Welcome to my link page!
//       </p>

//       <ul className="space-y-4">
//         {links.map((link, index) => (
//           <li key={index}>
//             <a
//               href={link.disabled ? "#" : link.url}
//               className={`block text-center py-2 px-4 rounded-lg transition-colors duration-200
//                 ${link.disabled
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-blue-500 text-white hover:bg-blue-600"}
//               `}
//               onClick={(e) => link.disabled && e.preventDefault()}
//             >
//               {link.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LinkPage;





function LinkPage() {
  const links = [
    { name: "Home", url: "/", description: "Go to the homepage" },
    { name: "About", url: "/about", description: "Learn more about us" },
    { name: "Contact", url: "/contact", description: "Get in touch" },
    { name: "Disabled", url: "/disabled", description: "This link is disabled", disabled: true },
  ];

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        My Links
      </h1>
      <p className="text-lg mb-8 text-center text-gray-600">
        Welcome to my link page! Click any link below to visit.
      </p>

      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.disabled ? "#" : link.url}
              className={`block p-4 rounded-xl shadow-md transition-transform duration-200 transform
                ${link.disabled
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"}
              `}
              onClick={(e) => link.disabled && e.preventDefault()}
            >
              <h2 className="text-xl font-semibold">{link.name}</h2>
              {link.description && (
                <p className="text-sm text-gray-100 mt-1">
                  {link.description}
                </p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkPage;
