import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="m-2 p-2 font-bold text-xl">Contact details</h1>
      <form action="">
        <input
          type="text"
          placeholder="name"
          className="p-2 m-2 border border-slate-200 rounded-xl"
        />
        <input
          type="text"
          placeholder="message"
          className="p-2 m-2 border border-slate-200 rounded-xl"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
