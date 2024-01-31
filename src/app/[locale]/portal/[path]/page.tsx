"use client";
import Hero3 from "../../../../core/template/hero/hero-3";
import "./benefits.css";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { ModalJewel } from "../../../../core/components/members/ModalJewel";
import { useParams } from "next/navigation";
import { desencrypt, encrypt } from "src/core/utils";

export default function Page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();
  const { path } = params;

  useEffect(() => {
    const userData = desencrypt(path.toString());
    if (userData) {
      const searchParams = new URLSearchParams(userData);

      const salesForceValues = {};
      searchParams.forEach((value, key) => {
        salesForceValues[key] = value;
      });

      sessionStorage.setItem("params", encrypt(salesForceValues));
    }
  });

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
        <div className="container-iframe">
          <iframe
            src={`https://exotic-dev.lomastravel.com/?${desencrypt(
              path.toString()
            )}`}
            width="1500"
            height="1220"
          ></iframe>
        </div>
      </section>
    </>
  );
}
