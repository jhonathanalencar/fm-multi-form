import "./styles.scss";

export function Form() {
  return (
    <div className="form">
      <div className="form__container">
        <form action="" className="form__content">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="e.g. Stephen Hawking" />
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="e.g. stephenhawking@lorem.com" />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="e.g. +1 234 567 890"
          />
        </form>
      </div>
    </div>
  );
}
