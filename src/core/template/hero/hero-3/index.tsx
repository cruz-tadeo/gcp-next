import { helveticaNeue } from "../../../utils/fonts";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  img: string;
}

const index = ({ title, description, subtitle, img }: Props) => {
  return (
    <section className="masthead -type-3 z-5">
      <div className="masthead__bg">
        <img alt="image" src={img} className="js-lazy" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-51 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                {title ?? "Find Next Place To Visit"}
              </h1>
              {subtitle && (
                <h2
                  className={`text-48 lg:text-20 md:text-10 text-white ${helveticaNeue.className}`}
                  data-aos="fade-up"
                >
                  {subtitle}
                </h2>
              )}
              <p
                className={`text-white mt-6 md:mt-10 text-20 ${helveticaNeue.className}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {description ?? "Discover amzaing places at exclusive deals"}
              </p>
            </div>
            {/* End hero title */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
