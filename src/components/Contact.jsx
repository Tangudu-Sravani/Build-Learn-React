import React from "react";
const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact us page</h1>
      <h2>Hii Random heading </h2>
      <form>
        <input
          type="text"
          className="border boreder-black p-2 m-2"
          placeholder="Enter your name"
        />
        <input
          type="text"
          className="border boreder-black p-2 m-2"
          placeholder="Enter your message"
        />
        <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
