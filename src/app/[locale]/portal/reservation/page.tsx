"use client";
import Hero3 from "../../../../core/template/hero/hero-3";
import "./reservation.css";
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
  const t = useTranslations("benefits");
  return (
    <>
      <section className="section-bg pb-40" data-aos="fade-up">
        <div className="container-iframe">
          <iframe
            src={`https://exotic-dev.lomastravel.com/?pin=${user.pin}&language=es_MX&membershipLevel=${user.nivel}&currency=${user.currency}
            `}
            width="1500"
            height="1220"
          ></iframe>
        </div>
      </section>
    </>
  );
}
