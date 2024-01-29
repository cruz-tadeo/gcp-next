"use client";
import Hero3 from "../../../../core/template/hero/hero-3";
import "./benefits.css";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { ModalJewel } from "../../../../core/components/members/ModalJewel";
import { useParams } from "next/navigation";
import * as CryptoJS from "crypto-js";

export default function Page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();
  const { path } = params;
  const desencrypt = (path: string) => {
    try {
      const dataUser = decodeURIComponent(path);

      let bytes = CryptoJS.AES.decrypt(dataUser, "saleforceLomas");
      const originalText = bytes.toString(CryptoJS.enc.Utf8);

      return originalText;
    } catch (error) {
      console.error("Error during decryption:", error);
    }
  };
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
            width={1500}
            height={1200}
          ></iframe>
        </div>
      </section>
    </>
  );
}
