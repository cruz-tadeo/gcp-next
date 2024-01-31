"use client";

const resortCredit = () => {
  return (
    <>
      <div>
        <h5 className="text-decoration-underline fw-italic">Resort Credits</h5>
      </div>
      <ul className="list-reservation p-2">
        <li className="fw-bold my-1">
          If applicable as part of a promotion, resort credits are only
          redeemable based on a chart provided at check-in.
        </li>
        <li className="fw-bold my-1">
          Resort credits may only be applied during the stay of the booking and
          not for future travel. Credits may not be transferred to to a third
          party, reservation, nor redeemed for cash value.
        </li>
      </ul>
    </>
  );
};

export default resortCredit;
