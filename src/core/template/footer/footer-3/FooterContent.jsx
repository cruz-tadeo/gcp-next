import Link from "next/link";

const footerDataContent = [
  {
    id: 1,
    title: "Company",
    menuList: [
      { name: "About Us", routerPath: "/" },
      { name: "Careers", routerPath: "/" },
      { name: "Blog", routerPath: "/" },
      { name: "Press", routerPath: "/" },
      { name: "Gift Cards", routerPath: "/" },
    ],
  },
  {
    id: 2,
    title: "Support",
    menuList: [
      { name: "Contact", routerPath: "/" },
      { name: "Legal Notice", routerPath: "/" },
      { name: "Privacy Policy", routerPath: "/" },
      { name: "Terms and Conditions", routerPath: "/" },
      { name: "Sitemap", routerPath: "/" },
    ],
  },
  {
    id: 3,
    title: "Other Services",
    menuList: [
      { name: "Car hire", routerPath: "/" },
      { name: "Activity Finder", routerPath: "/" },
      { name: "Tour List", routerPath: "/" },
      { name: "Flight finder", routerPath: "/" },
      { name: "Cruise Ticket", routerPath: "/" },
      { name: "Holiday Rental", routerPath: "/" },
      { name: "Travel Agents", routerPath: "/" },
    ],
  },
];

const FooterContent = () => {
  return (
    <>
      {footerDataContent.map((item) => (
        <div className="col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-16 fw-500 mb-30">{item.title}</h5>
          <div className="d-flex y-gap-10 flex-column">
            {item.menuList.map((menu, i) => (
              <Link href={menu.routerPath} key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
