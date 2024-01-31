"use client";

const villaMaroma = () => {
  return (
    <div className="my-3" data-aos="fade-up">
      <div>
        <h4 className="text-center">VILLAS</h4>
        <h5 className="text-decoration-underline fw-italic">
          Azul Casa del Mar & Villa Maroma
        </h5>
      </div>
      <ul className="list-reservation p-2">
        <li className="fw-bold my-1">
          A $5,000 deposit must be issued at the time of booking. This deposit
          will be held and will only be processed after 15 days from the time of
          booking. Guests may cancel without penalty within these 15 days.
          <ul className="list-reservation p-2">
            <li>
              Payment for (A) weeks: full payment must be issued 120 prior to
              arrival
            </li>
            <li>
              Payment for (B) weeks: Full payment must be issued 60 days prior
              to arrival.
            </li>
          </ul>
        </li>
        <li className="fw-bold my-1">
          Payment must be made in US dollars and must indicate: Client name,
          Villa's confirmation number, arrival date, departure date, number of
          guests.
        </li>
        <li className="fw-bold my-1">
          A $10,000 damage deposit is required 48 hours prior to arrival of the
          guest. KHR will issue a notification email to the guest stating that
          the deposit has been approved. The damage deposit will be released
          upon the guest's check out.
        </li>
      </ul>
    </div>
  );
};

export default villaMaroma;
