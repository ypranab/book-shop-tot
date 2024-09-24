const FAQ = () => {
  return (
    <div>
      <section className="m-10">
        <h1 className="text-center text-3xl my-10">FAQ</h1>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is React.js and Explain the concept of "components" in React
          </div>
          <div className="collapse-content">
            <p>-------</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is JSX in React, and how does it work?
          </div>
          <div className="collapse-content">
            <p>---------</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is the Virtual DOM, and how does React use it to optimize
            performance?
          </div>
          <div className="collapse-content">
            <p>-----</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is the Virtual DOM, and how does React use it to optimize
            performance?
          </div>
          <div className="collapse-content">
            <p>-----</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is "state" in React, and how does it differ from props?
          </div>
          <div className="collapse-content">
            <p>-----</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is the purpose of the useEffect hook in React, and when would
            you use it?
          </div>
          <div className="collapse-content">
            <p>-----</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
