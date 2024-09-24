const FAQ = () => {
  return (
    <div>
      <section className="m-10">
        <h1 className="text-center text-3xl my-10">FAQ</h1>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is a Royal Caribbean beverage drink package?
          </div>
          <div className="collapse-content">
            <p>
              Quench your thirst onboard with a beverage package that gets you
              the best value on your favorite drinks, from Coca-Cola® to fine
              wine, premium and frozen cocktails to a full selection of beers,
              fruit juices and water. Purchase onboard or pre-reserve before you
              set sail. The beverage packages are honored at any of our bars or
              lounges, Windjammer Café, Main Dining Room, and our private
              destinations during normal business hours. Room service and
              minibar are not included. You can visit our Beverage section or if
              you are booked, visit Cruise Planner for more information and to
              pre-purchase. The all-inclusive beverage packages are sold onboard
              all sailings.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is Royal Caribbean's service gratuities (tips) price and
            policy?
          </div>
          <div className="collapse-content">
            <p>
              Guests who choose not to prepay gratuities at the time of booking
              will have a service gratuity automatically applied to their
              respective SeaPass® account on a daily basis, in the amounts shown
              below:* $20.50 per guest, per day will be applied to guests.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I order multiple drinks at a time with the all-inclusive
            beverage packages?
          </div>
          <div className="collapse-content">
            <p>
              No. As this is a personal package, only one beverage per guest
              will be served. Packages can be purchased by individual guests.
              All packages are for single guest use and cannot be shared by
              multiple people.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
