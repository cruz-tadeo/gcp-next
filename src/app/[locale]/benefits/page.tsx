"use client";
import Hero3 from "../../../core/template/hero/hero-3";
import { CircleSVG } from "../../../core/components//shape/CircleSVG";
import { helveticaNeue } from "../../../core/utils/fonts";
import { benefits } from "../../../repository/BenefitsInMemoryRepo";
import "./benefits.css";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { jewels } from "../../../repository/JewelsInMemoryRepository";
import { ModalJewel } from "../../../core/components//members/ModalJewel";
import { CardMembers } from "../../../core/components//members/CardMembers";

export default function Page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getColorJewelFill = useCallback(
    (
      existElement: boolean,
      isNone: boolean,
      jewel: "sapphire" | "ruby" | "emerald" | "diamond" | "diamond-elite"
    ) => {
      if (existElement) {
        return `--color-${jewel}`;
      }
      if (isNone) {
        return "--color-exotic-ligth";
      }
      return "--color-row-dark";
    },
    []
  );
  const t = useTranslations("benefits");
  return (
    <>
      <ModalJewel handleClose={handleClose} show={show} />
      <Hero3
        title={t("title")}
        description={t("description")}
        img="/img/benefits/benefits-01.jpg"
      />
      <section
        className="section-bg pt-80 pb-40 md:pt-40 md:pb-20"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="text-33 text-exotic-text fw-normal">
                  {t("memberLevels.title")}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0 px-80 text-16 text-exotic-text">
                  {t("memberLevels.description")}
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="row y-gap-30 pt-40 px-5">
            {jewels.map((item, index) => (
              <div
                className="col-lg-3 offset-lg-1 col-sm-4 offset-sm-0 p-3"
                key={index}
                data-aos="fade"
                data-aos-delay="100"
              >
                <div className="border shadow py-20" onClick={handleShow}>
                  <CardMembers title={item.title} img={item.img} />
                </div>
              </div>
            ))}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section
        className="section-bg pt-40 pb-40 md:pt-20 md:pb-20 bg-exotic-ligth"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row justify-center text-center">
            <div className="overflow-scroll scroll-bar-1 pt-30">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th className="py-50 pl-10 text-left fs-1 bg-exotic-ligth">
                      <div className="text-exotic-text fw-normal">
                        Members Levels
                      </div>
                    </th>
                    <th className="px-1 bg-exotic-ligth">
                      <div className="card bg-info rounded-0 py-15 w-140 sm:w-full text-13 border-0 bg-sapphire">
                        <div className="card-body text-white fw-bold px-sm-0">
                          Sapphire
                        </div>
                      </div>
                    </th>
                    <th className="px-1 bg-exotic-ligth">
                      <div className="card bg-danger rounded-0 py-15 w-140 sm:w-full border-0 bg-ruby">
                        <div className="card-body text-white text-13 fw-bold px-sm-0">
                          Ruby
                        </div>
                      </div>
                    </th>
                    <th className="px-1 bg-exotic-ligth">
                      <div className="card bg-success  rounded-0 py-15 w-140 sm:w-full border-0 bg-emerald">
                        <div className="card-body text-white text-13 fw-bold">
                          Emerald
                        </div>
                      </div>
                    </th>
                    <th className="px-1 bg-exotic-ligth">
                      <div className="card bg-secondary rounded-0 py-15 w-140 sm:w-full border-0 bg-diamond">
                        <div className="card-body text-white text-13 fw-bold">
                          Diamond
                        </div>
                      </div>
                    </th>
                    <th className="px-1 bg-exotic-ligth">
                      <div className="card bg-secondary rounded-0 py-15 w-140 sm:w-full border-0 bg-diamond-elite">
                        <div className="card-body px-sm-0 text-white text-13 fw-bold">
                          Diamond Elite
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody
                  className={`text-15 text-exotic fw-bold ${helveticaNeue.className}`}
                >
                  {benefits.map((benefit, index) => (
                    <tr key={index}>
                      <td
                        className={`pl-5 text-left bg-exotic-ligth py-4 px-1 ${
                          !(index % 2 == 0) ? " bg-row-dark" : ""
                        }`}
                      >
                        {t(`listBenefits.description${index + 1}`)}
                      </td>
                      <td
                        className={`justify-content-center px-2 py-4 ${
                          !(index % 2 == 0) ? " bg-row-dark" : "bg-exotic-ligth"
                        } `}
                      >
                        <CircleSVG
                          fill={getColorJewelFill(
                            !!benefit.sapphire,
                            index % 2 == 0,
                            "sapphire"
                          )}
                          width={17}
                          height={17}
                        />
                      </td>

                      <td
                        className={`justify-content-center px-2 py-4 ${
                          !(index % 2 == 0) ? " bg-row-dark" : "bg-exotic-ligth"
                        } `}
                      >
                        <CircleSVG
                          fill={getColorJewelFill(
                            !!benefit.ruby,
                            index % 2 == 0,
                            "ruby"
                          )}
                          width={17}
                          height={17}
                        />
                      </td>
                      <td
                        className={`justify-content-center px-2 py-4 ${
                          !(index % 2 == 0) ? " bg-row-dark" : "bg-exotic-ligth"
                        } `}
                      >
                        <CircleSVG
                          fill={getColorJewelFill(
                            !!benefit.emerald,
                            index % 2 == 0,
                            "emerald"
                          )}
                          width={17}
                          height={17}
                        />
                      </td>
                      <td
                        className={`justify-content-center px-2 py-4 ${
                          !(index % 2 == 0) ? " bg-row-dark" : "bg-exotic-ligth"
                        } `}
                      >
                        <CircleSVG
                          fill={getColorJewelFill(
                            !!benefit.diamond,
                            index % 2 == 0,
                            "diamond"
                          )}
                          width={17}
                          height={17}
                        />
                      </td>
                      <td
                        className={`justify-content-center px-2 py-4 ${
                          !(index % 2 == 0) ? " bg-row-dark" : "bg-exotic-ligth"
                        } `}
                      >
                        <CircleSVG
                          fill={getColorJewelFill(
                            !!benefit.diamondElite,
                            index % 2 == 0,
                            "diamond-elite"
                          )}
                          width={17}
                          height={17}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    </>
  );
}
