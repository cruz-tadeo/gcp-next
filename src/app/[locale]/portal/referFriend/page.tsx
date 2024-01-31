"use client";
import Hero3 from "../../../../core/template/hero/hero-3";
import "./referFriend.css";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { ModalJewel } from "../../../../core/components/members/ModalJewel";
import { useParams } from "next/navigation";
import { desencrypt, encrypt } from "src/core/utils";

export default function Page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {});

  const t = useTranslations("benefits");
  return (
    <>
      <ModalJewel handleClose={handleClose} show={show} />
      <Hero3
        title={t("title")}
        description={t("description")}
        img="/img/benefits/benefits-01.jpg"
      />
      <section className="section-bg pb-40" data-aos="fade-up">
        <div className="container row mx-auto mt-15 mb-60">
          <div className="col-6">
            <img src="/img/portal/exotic.png" alt="" />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <p className="text-membership">MEMBERSHIP BENEFITS</p>
            <p className="text-secondMembership">Special Discounted Rates</p>
            <p className="text-20 text-long">
              Stay in a Royal Suite or any other Presidential category in any of
              our present and future hotels and receive up to 50% off published
              rack rates, guaranteed! Check-in the day you wish, stay as long as
              you like and use as many rooms as your require.
            </p>
          </div>
        </div>
        <div className="container bg-exotic row mx-auto">
          <div className="col-5 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-white">BECOME A MEMBER</h3>
            <p className="text-center text-20 text-white">
              We'll be glad to answer all of your questions at a convenient time
              for you! Simply tell us when you are available and one of our
              representatives will contact you.
            </p>
          </div>
          <div className="col-7">
            <form
              className="bg-exotic d-flex justify-content-center py-30
        "
            >
              <div className="container">
                <div className="row y-gap-20 justify-center text-center mt-5 text-white">
                  <div className="col-xl-9   row x-gap-20 y-gap-20">
                    <div className="col-md-6">
                      <div className="form-input bg-white">
                        <input type="text" required />
                        <label className="lh-1 text-16 text-exotic-text">
                          First Name
                        </label>
                      </div>
                    </div>
                    {/* End col-6 */}

                    <div className="col-md-6">
                      <div className="form-input bg-white">
                        <input type="text" required />
                        <label className="lh-1 text-16 text-exotic-text">
                          Last Name
                        </label>
                      </div>
                    </div>
                    {/* End col-6 */}

                    <div className="col-md-6">
                      <div className="form-input bg-white">
                        <input type="text" required />
                        <label className="lh-1 text-16 text-exotic-text">
                          Email
                        </label>
                      </div>
                    </div>
                    {/* End col-12 */}
                    <div className="col-md-6">
                      <div className="form-input bg-white ">
                        <input type="text" required />
                        <label className="lh-1 text-16 text-exotic-text">
                          Phone Number
                        </label>
                      </div>
                    </div>
                    {/* End col-6 */}

                    <div className="col-12">
                      <div className="form-input bg-white">
                        <input type="text" required />
                        <label className="lh-1 text-16 text-exotic-text">
                          Country
                        </label>
                      </div>
                    </div>
                    {/* End col-6 */}

                    <div className="col-12">
                      <div className="form-input bg-white">
                        <textarea rows={4}></textarea>
                        <label className="lh-1 text-16 text-exotic-text">
                          Comments
                        </label>
                      </div>
                    </div>
                    {/* End col-6 */}

                    {/* End col-12 */}
                    <div className="col-12 d-flex justify-content-center">
                      <div className="d-block">
                        <button
                          type="submit"
                          className="button h-50 px-24 -white-exotic bg-exotic-dark text-white"
                        >
                          Submit{" "}
                          {/*<div className="icon-arrow-top-right ml-15"/>*/}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container row mx-auto mt-15 mb-60">
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <p className="text-membership">MEMBERSHIP BENEFITS</p>
            <p className="text-secondMembership">Worldwide Resorts</p>
            <p className="text-20 text-long">
              Enjoy the privilege of travel around the world and destinations
              with comfort, luxury & services that can be extended to your
              friends and family.
            </p>
          </div>
          <div className="col-6">
            <img src="/img/portal/exotic.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
