"use client";

const airfare = () => {
  return (
    <div data-aos="fade-up">
      <div>
        <h5 className="text-decoration-underline fw-italic">Airfare</h5>
      </div>
      <p className="fw-bold text-dark my-2">
        If you have opted to book Airfare with us through one of our partners,
        the following restrictions may apply:
      </p>
      <ul className="list-reservation p-2">
        <li className="text-dark my-1">
          Ticket changes/upgrades are not allowed.
        </li>
        <li className="text-dark my-1">
          Baggage fees are not included in rate/fare. Carry-on luggage is not
          allowed. Refer to individual airline terms for complete details.
        </li>
        <li className="text-dark my-1">
          Passengers traveling together may not be seated together. Seat
          assignments are only available after check-in or at gate.
        </li>
        <li className="text-dark my-1">
          Tickets, once issued, are non-refundable/non-transferable and changes
          are not allowed thereafter.
        </li>
        <li className="text-dark my-1">Boarding will be in the last zone.</li>
      </ul>
    </div>
  );
};

export default airfare;
