import { FormHeading } from "../../../FormHeading";

import "./styles.scss";

export function PersonalInfoForm() {
  return (
    <>
      <FormHeading
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />

      <form action="">
        <div className="input__group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="e.g. Stephen Hawking" />
        </div>
        <div className="input__group">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="e.g. stephenhawking@lorem.com" />
        </div>
        <div className="input__group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </>
  );
}
