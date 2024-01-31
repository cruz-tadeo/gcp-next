"use client";
import "./about.css";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalJewel } from "../../../../core/components/members/ModalJewel";

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
        <div className="text-container">
          <h6>Exotic Travelers Club</h6>
          <p>
            At Exotic Travelers, we believe that your vacation should be a time
            of complete freedom and boundless choices. That's why we've
            meticulously curated a unique collection of exquisite resorts and
            villas in the world's most sought-after destinations, giving you the
            power to design your dream getaway. Whether you prefer to bask in
            luxury for three days, a week, any time you can get away, our
            membership grants you access to opulent accommodations and exclusive
            privileges that ensure an extraordinary experience. Our commitment
            to your satisfaction goes beyond the norm. We offer six levels of
            membership, each exceeding the typical all-inclusive experience with
            exceptional amenities and benefits. Our VIP Concierge Service is
            dedicated to helping you plan and book your vacation seamlessly at
            our resorts or through our esteemed exchange partners and premium
            travel networks. Leave the hassle of finding the best deals on
            airfares and exceptional excursions to us. With just one call, we'll
            whisk you away to any corner of the globe, making your journey as
            effortless as possible.
          </p>
        </div>
        <div className="text-container">
          <h6>Our History</h6>
          <p>
            Exotic Travelers owes its inception to a visionary team of experts
            in hotel operation, business development, and financial services,
            responsible for transforming our Hotels & Resorts into award-winning
            international brands. Breaking away from the complex timeshare
            business model that plagued the industry in the past, Exotic
            Travelers reinvented the travelers club experience by offering
            flexibility, extraordinary service, and exceptional savings through
            group-buying power. Since our establishment in 2003, Exotic
            Travelers has been synonymous with delivering unparalleled luxury,
            privilege, and value. Our portfolio includes a diverse array of
            upscale Gourmet Inclusive Resorts, City Resorts, and All-Inclusive
            Resorts worldwide, making each destination a treasure trove of
            unforgettable experiences.
          </p>
        </div>
        <div className="text-container">
          <h6>A Vacation of a Lifetime, Every Time</h6>
          <p>
            Unlock a world of endless possibilities, and allow us to redefine
            the way you travel. With discounts on luxury services and
            once-in-a-lifetime expeditions along with special rates at premier
            destinations around the globe, we offer unparalleled cost savings
            that makes us a favorite amongst savvy travelers. Embark on a
            journey filled with luxury, adventure, and unforgettable memories.
            The world is yours to explore, and we're here to make it all
            possible.
          </p>
        </div>
      </section>
    </>
  );
}
