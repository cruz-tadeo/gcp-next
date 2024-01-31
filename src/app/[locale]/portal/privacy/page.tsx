"use client";
import "./privacy.css";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalJewel } from "../../../../core/components/members/ModalJewel";
import ReservationPolicy from "../../../../core/components/portal/ReservationPolicy";
import ResortCredit from "../../../../core/components/portal/ResorCredit";
import Airfare from "../../../../core/components/portal/Airfare";
import Passport from "../../../../core/components/portal/VisaPassport";
import Liability from "../../../../core/components/portal/Liability";
import VillaEsmeralda from "../../../../core/components/portal/VillaEsmeralda";
import VillaMaroma from "../../../../core/components/portal/VillaMaroma";

export default function Page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [filterOption, setFilterOption] = useState("reservation_deposit");

  const filterOptions = [
    {
      label: "Reservation, Deposit & Cancelation Policy",
      value: "reservation_deposit",
    },
    { label: "Resort Credits", value: "resort_credit" },
    { label: "Airfare", value: "airfare" },
    { label: "visa/passport requirements", value: "passport" },
    { label: "Liability", value: "liability" },
    { label: "Azul Villa Esmeralda", value: "villa_esmeralda" },
    { label: "Azul Casa del Mar & Villa Maroma", value: "villa_maroma" },
    // add more options as needed
  ];

  const t = useTranslations("benefits");
  return (
    <>
      <ModalJewel handleClose={handleClose} show={show} />
      <section className="section-bg pb-40 container" data-aos="fade-up">
        <h2>Privacy Statement</h2>
      </section>
    </>
  );
}
