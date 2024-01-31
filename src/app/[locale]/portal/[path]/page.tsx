"use client";
import Hero3 from "../../../../core/template/hero/hero-3";
import "./benefits.css";
import { useTranslations } from "next-intl";
import { useCallback, useContext, useEffect, useState } from "react";
import { ModalJewel } from "../../../../core/components/members/ModalJewel";
import { useParams } from "next/navigation";
import { desencrypt, encrypt } from "../../../../core/utils";
import { UserContext } from "../../../providers/UserProvider";
import { getUser } from "../../../../core/services/getUser";

export default function Page() {
  const [show, setShow] = useState(false);
  const { isAuth, setAuth, setUser, user } = useContext(UserContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();
  const { path } = params;

  useEffect(() => {
    const userData = desencrypt(path.toString());
    const salesForceValues: any = {};
    if (userData) {
      const searchParams = new URLSearchParams(userData);

      searchParams.forEach((value, key) => {
        salesForceValues[key] = value;
      });

      sessionStorage.setItem("params", encrypt(salesForceValues));
    }

    async function getData(pin: string) {
      const user = await getUser(pin);

      if (user) {
        setUser(user);
        setAuth(true);
      }
    }

    if (userData) {
      const pin = salesForceValues.pin ?? "";
      getData(pin);
    }
  }, [isAuth]);

  const t = useTranslations("benefits");
  return (
    <>
      <ModalJewel handleClose={handleClose} show={show} />
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
