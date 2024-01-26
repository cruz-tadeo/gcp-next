const JournerForm = () => {
  return (
    <form
      className="bg-exotic d-flex justify-content-center py-30
        "
    >
      <div className="container">
        <div className="row y-gap-20 justify-center text-center mt-5 text-white">
          <div className="row col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Your Journey Starts Here</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0 text-white">
                We'd love to address any inquiries you may have at your
                convenience. Inform us of your preferred time, and one of our
                representatives will contact you.
              </p>
            </div>
          </div>

          <div className="col-xl-9   row x-gap-20 y-gap-20">
            <div className="col-md-6">
              <div className="form-input bg-white">
                <input type="text" required />
                <label className="lh-1 text-16 text-exotic-text">First Name</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input bg-white">
                <input type="text" required />
                <label className="lh-1 text-16 text-exotic-text">Last Name</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-12">
              <div className="form-input bg-white">
                <input type="text" required />
                <label className="lh-1 text-16 text-exotic-text">Email</label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input bg-white">
                <input type="text" required />
                <label className="lh-1 text-16 text-exotic-text">Country</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input bg-white">
                <input type="text" required />
                <label className="lh-1 text-16 text-exotic-text">
                  Best Time to Talk
                </label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-12">
              <div className="form-input bg-white ">
                <input type="text" required />
                <label className="lh-1 text-16 text-exotic-text">
                  Phone Number
                </label>
              </div>
            </div>
            {/* End col-12 */}
            <div className="col-12 d-flex justify-content-end">
              <div className="d-inline-block">
                <button
                  type="submit"
                  className="button h-50 px-24 -white-exotic bg-exotic-dark text-white"
                >
                  Submit {/*<div className="icon-arrow-top-right ml-15"/>*/}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default JournerForm;
