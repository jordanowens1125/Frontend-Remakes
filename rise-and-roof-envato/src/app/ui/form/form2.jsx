import "./form2.scss";

export default function Form2() {
  return (
    <form className="group form2">
      <span>
        <label htmlFor="">Name:</label>
        <input type="text" placeholder="John Doe" />
      </span>
      <span>
        <label htmlFor="">Email:</label>
        <input type="text" placeholder="123@email.com" />
      </span>
      <span>
        <label htmlFor="">Phone Number:</label>
        <input type="text" placeholder="123-456-7890" />
      </span>
      <span>
        <label htmlFor="">Write Message:</label>
        <textarea type="text" placeholder="Message" rows={10} />
      </span>
      <button className="btn-1">Submit Request</button>
    </form>
  );
}
