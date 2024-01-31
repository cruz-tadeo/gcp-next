import Blog4 from "../../../core/template/blog/Blog4";
import Hero3 from "../../../core/template/hero/hero-3";
import { aboutClub } from "../../../repository/BlogInMemoryRepo";
import { CardMembers } from "../../../core/components/members/CardMembers";
import { jewels } from "../../../repository/JewelsInMemoryRepository";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("home");

  return (
    <div className="overflow-hidden">
      <Hero3
        title={t("title")}
        description={t("description")}
        subtitle={t("subtitle")}
        img="/img/home/home-1.jpeg"
      />

      <section
        className="section-bg pt-80 pb-80 md:pt-40 md:pb-40"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row y-gap-30 items-center justify-between">
            <div className="col-xl-5 col-lg-6">
              <>
                <h2 className="text-31 text-exotic-text fw-normal text-center text-md-start">
                  {t("about.title")}
                </h2>
                <p className="text-15 text-exotic-text pr-40 lg:pr-0 mt-15 sm:mt-5 text-center text-md-start">
                  {t("about.description")}
                </p>

                {/* End .row */}
              </>
            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <img
                src="/img/home/about-6.jpg"
                alt="image"
                style={{ width: " 100%", height: "auto" }}
              />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
          <div className="row y-gap-30 pt-40">
            <Blog4 items={aboutClub} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      <section className="section-bg" data-aos="fade-up">
        <div className="container mb-30">
          <div className="row y-gap-30 items-center justify-content-sm-center justify-content-md-between">
            <div className="col-sm-12 col-md-5 col-lg-4 pe-md-5 pe-lg-0">
              <>
                <h2 className="text-exotic-text text-30 lh-15 fw-normal">
                  {t("members.title")}
                </h2>
                <p className="text-exotic-text text-15 pr-40 lg:pr-0 mt-15 sm:mt-5">
                  {t("members.description")}
                </p>

                <div className="row items-center pt-30 sm:pt-10">
                  <button className="col-auto button bg-exotic -white-exotic border-white-15 text-white ">
                    <div className="d-flex items-center px-20 py-10 rounded-8">
                      <div className="justify-center">
                        <div className="text-14">{t("members.button")}</div>
                      </div>
                    </div>
                  </button>
                  {/* End .col */}
                </div>
                {/* End .row */}
              </>
            </div>
            {/* End .col */}

            <div className="bg-light col-sm-12 col-md-7 shadow-lg m-sm-5 py-0 m-md-0">
              <div className="row">
                {jewels.map((j, index) => (
                  <div className="col-sm-6 col-md-4 border" key={index}>
                    <CardMembers {...j} />
                  </div>
                ))}
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/*<section className="layout-pt-lg layout-pb-md bg-exotic-ligth">
          <div className="container">
            <div className="row y-gap-20 justify-center text-center mt-5">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title text-exotic-text text-24">
                    Destinations Travellers Love
                  </h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0 text-15 text-exotic-text ">
                    These popular destinations have a lot to offer
                  </p>
                </div>
              </div>
              {/* End .col }
            </div>
            {/* End .row }

            <div className="relative pt-40 ">
              <Ratings />
            </div>
          </div>
        </section>
      */}
      {/* End Travellers Section */}
    </div>
  );
}
