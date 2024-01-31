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
        <div>
          <h2 className="text-privacy">Privacy Statement</h2>
          <p className="text-dark my-1">
            Exotic Travelers is committed to protecting your privacy and
            developing technology that gives you the most powerful and safe
            online experience. This Statement of Privacy applies to the Exotic
            Travelers Web site and governs data collection and usage. By using
            the Exotic Travelers website, you consent to the data practices
            described in this statement.
          </p>
        </div>
        <div className="text-container">
          <h6>Collection of your Personal Information</h6>
          <p>
            Exotic Travelers collects personally identifiable information, such
            as your e-mail address, name, home or work address or telephone
            number. Exotic Travelers also collects anonymous demographic
            information, which is not unique to you, such as your ZIP code, age,
            gender, preferences, interests and favorites.
          </p>
          <p>
            There is also information about your computer hardware and software
            that is automatically collected by Exotic Travelers. This
            information can include: your IP address, browser type, domain
            names, access times and referring Web site addresses. This
            information is used by Exotic Travelers for the operation of the
            service, to maintain quality of the service, and to provide general
            statistics regarding use of the Exotic Travelers Web site.
          </p>
          <p>
            Please keep in mind that if you directly disclose personally
            identifiable information or personally sensitive data through Exotic
            Travelers public message boards, this information may be collected
            and used by others. Note: Exotic Travelers does not read any of your
            private online communications.
          </p>
          <p>
            Exotic Travelers encourages you to review the privacy statements of
            Web sites you choose to link to from Exotic Travelers so that you
            can understand how those Web sites collect, use and share your
            information. Exotic Travelers is not responsible for the privacy
            statements or other content on Web sites outside of the Exotic
            Travelers and Exotic Travelers family of Web sites.
          </p>
        </div>
        <div className="text-container">
          <h6>Use of your Personal Information</h6>
          <p>
            Exotic Travelers collects and uses your personal information to
            operate the Exotic Travelers Web site and deliver the services you
            have requested. Exotic Travelers also uses your personally
            identifiable information to inform you of other products or services
            available from Exotic Travelers and its affiliates. Exotic Travelers
            may also contact you via surveys to conduct research about your
            opinion of current services or of potential new services that may be
            offered.
          </p>
          <p>
            Exotic Travelers does not sell, rent or lease its customer lists to
            third parties. Exotic Travelers may, from time to time, contact you
            on behalf of external business partners about a particular offering
            that may be of interest to you. In those cases, your unique
            personally identifiable information (e-mail, name, address,
            telephone number) is not transferred to the third party. In
            addition, Exotic Travelers may share data with trusted partners to
            help us perform statistical analysis, send you email or postal mail,
            provide customer support, or arrange for deliveries. All such third
            parties are prohibited from using your personal information except
            to provide these services to Exotic Travelers, and they are required
            to maintain the confidentiality of your information.
          </p>
          <p>
            Exotic Travelers does not use or disclose sensitive personal
            information, such as race, religion, or political affiliations,
            without your explicit consent.
          </p>
          <p>
            Exotic Travelers keeps track of the Web sites and pages our
            customers visit within Exotic Travelers, in order to determine what
            Exotic Travelers services are the most popular. This data is used to
            deliver customized content and advertising within Exotic Travelers
            to customers whose behavior indicates that they are interested in a
            particular subject area.
          </p>
          <p>
            Exotic Travelers Web sites will disclose your personal information,
            without notice, only if required to do so by law or in the good
            faith belief that such action is necessary to: (a) conform to the
            edicts of the law or comply with legal process served on Exotic
            Travelers or the site; (b) protect and defend the rights or property
            of Exotic Travelers; and, (c) act under exigent circumstances to
            protect the personal safety of users of Exotic Travelers, or the
            public.
          </p>
        </div>
        <div className="text-container">
          <h6>Use of Cookies</h6>
          <p>
            The Exotic Travelers Web site use "cookies" to help you personalize
            your online experience. A cookie is a text file that is placed on
            your hard disk by a Web page server. Cookies cannot be used to run
            programs or deliver viruses to your computer. Cookies are uniquely
            assigned to you, and can only be read by a web server in the domain
            that issued the cookie to you.
          </p>
          <p>
            One of the primary purposes of cookies is to provide a convenience
            feature to save you time. The purpose of a cookie is to tell the Web
            server that you have returned to a specific page. For example, if
            you personalize Exotic Travelers pages, or register with Exotic
            Travelers site or services, a cookie helps Exotic Travelers to
            recall your specific information on subsequent visits. This
            simplifies the process of recording your personal information, such
            as billing addresses, shipping addresses, and so on. When you return
            to the same Exotic Travelers Web site, the information you
            previously provided can be retrieved, so you can easily use the
            Exotic Travelers features that you customized.
          </p>
          <p>
            You have the ability to accept or decline cookies. Most Web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. If you choose to
            decline cookies, you may not be able to fully experience the
            interactive features of the Exotic Travelers services or Web sites
            you visit.
          </p>
        </div>
        <div className="text-container">
          <h6>Security of your Personal Information</h6>
          <p>
            Exotic Travelers secures your personal information from unauthorized
            access, use or disclosure. Exotic Travelers secures the personally
            identifiable information you provide on computer servers in a
            controlled, secure environment, protected from unauthorized access,
            use or disclosure. When personal information (such as a credit card
            number) is transmitted to other Web sites, it is protected through
            the use of encryption, such as the Secure Socket Layer (SSL)
            protocol.
          </p>
        </div>
        <div className="text-container">
          <h6>Changes to this Statement</h6>
          <p>
            Exotic Travelers will occasionally update this Statement of Privacy
            to reflect company and customer feedback. Exotic Travelers
            encourages you to periodically review this Statement to be informed
            of how Exotic Travelers is protecting your information.
          </p>
        </div>
        <div className="text-container">
          <h6>Contact Information</h6>
          <p>
            Exotic Travelers welcomes your comments regarding this Statement of
            Privacy. If you believe that Exotic Travelers has not adhered to
            this Statement, please contact Exotic Travelers at{" "}
            <a href="mailto:memberservices@Exotictravelers.com">
              memberservices@Exotictravelers.com
            </a>{" "}
            . We will use commercially reasonable efforts to promptly determine
            and remedy the problem.
          </p>
        </div>
      </section>
    </>
  );
}
