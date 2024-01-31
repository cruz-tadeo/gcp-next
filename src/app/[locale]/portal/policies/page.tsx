"use client";
import Hero3 from "../../../../core/template/hero/hero-3";
import "./policies.css";
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
        <div className="p-4 reservation-policies">
          <h6 className="text-center">RESERVATION, PAYMENT AND CANCELATION</h6>
          <h6 className="text-center">POLICIES</h6>
          <p className="text-13 text-center text-dark fw-bold">
            PLEASE NOTE THESE POLICIES ARE SUBJECT TO CHANGE AT ANY TIME
          </p>
        </div>
        <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls">
          {filterOptions.map((option) => (
            <div className="col-auto" key={option.value}>
              <button
                className={`tabs__button text-14 fw-500 px-20 py-10 bg-light-2 js-tabs-button tab  fw-bolder ${
                  filterOption === option.value ? "tab-active" : ""
                }`}
                onClick={() => setFilterOption(option.value)}
              >
                {option.label.toUpperCase()}
              </button>
            </div>
          ))}
        </div>
        <div>
          {filterOption === "reservation_deposit" ? (
            <div className="col-12">
              <ReservationPolicy></ReservationPolicy>
            </div>
          ) : (
            ""
          )}

          {filterOption === "resort_credit" ? (
            <div className="col-12">
              <ResortCredit></ResortCredit>
            </div>
          ) : (
            ""
          )}

          {filterOption === "airfare" ? (
            <div className="col-12">
              <Airfare></Airfare>
            </div>
          ) : (
            ""
          )}

          {filterOption === "passport" ? (
            <div className="col-12">
              <Passport></Passport>
            </div>
          ) : (
            ""
          )}

          {filterOption === "liability" ? (
            <div className="col-12">
              <Liability></Liability>
            </div>
          ) : (
            ""
          )}

          {filterOption === "villa_esmeralda" ? (
            <div className="col-12">
              <VillaEsmeralda></VillaEsmeralda>
            </div>
          ) : (
            ""
          )}

          {filterOption === "villa_maroma" ? (
            <div className="col-12">
              <VillaMaroma></VillaMaroma>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}
