import React from "react";

const FundGenius = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">FundGenius</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">About Us</a>
          <a href="#" className="text-gray-600 hover:text-black">askAI</a>
          <a href="#" className="text-gray-600 hover:text-black">Contact Us</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center text-white py-20 bg-cover bg-center" style={{backgroundImage: "url('https://source.unsplash.com/1600x900/?finance')"}}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Grow your savings with better budgeting...</h2>
          <button className="bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold">Start Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {[
          { title: "Income Management", icon: "💰" },
          { title: "Expense Management", icon: "💸" },
          { title: "Budget Planning", icon: "📊" }
        ].map((feature, index) => (
          <div key={index} className="bg-blue-200 p-6 text-center rounded-lg shadow-md">
            <div className="text-5xl mb-2">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>2024 FundGenius TEAM. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-pink-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default FundGenius;
