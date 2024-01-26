interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

const index = ({ title, description, subtitle }: Props) => {
  return (
    <section className="masthead -type-3 z-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/1/bg.webp" className="js-lazy" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                {title ?? "Find Next Place To Visit"}
              </h1>
              <h2 className="text-40 lg:text-20 md:text-10 text-white">
                {subtitle ?? "Find Next Place To Visit"}
              </h2>
              <p
                className="text-white mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {description ?? "Discover amzaing places at exclusive deals"}
              </p>
            </div>
            {/* End hero title */}

            <div
              className="tabs -underline mt-60 js-tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
