"use client";
import { ParallaxBanner } from "../../../../../core/template/banner/ParallaxBanner";
import { RedirectType, redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { LinksOfHotel } from "../resort-data";
import { IResortParams } from "../resort-params";

import "photoswipe/dist/photoswipe.css";
import "./page.style.scss";

const Page = () => {
  const [informationHotel, setInformationHotel] = useState<IResortParams>(
    {} as IResortParams
  );
  const { banner, descriptionHotel, list, gallery, paragraph } =
    informationHotel;
  const params = useParams();

  useEffect(() => {
    const { linkHotel } = params;
    const storeInformationHotel = LinksOfHotel[linkHotel as string];

    if (storeInformationHotel) {
      setInformationHotel(storeInformationHotel);
      return;
    }

    redirect("/hotel-no-encontrado", RedirectType.replace);
  }, [params]);

  return (
    <>
      <ParallaxBanner image={banner?.default.src} />

      <div className="color-main">
        <section className="d-flex justify-content-center my-5">
          <p className="description-main">{descriptionHotel}</p>
        </section>

        <section className="d-flex justify-content-center my-5 flex-column align-items-center">
          <div className="w-75 row g-5">
            {list &&
              list.map((item, index) => (
                <div className="col-6" key={index}>
                  <h3 className="title my-3">{item.title}</h3>
                  <ul className="list-point">
                    {item.description &&
                      item.description.map((description, index) => (
                        <li key={index}>
                          <span className="point"></span>
                          <span>{description}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </section>

        <section className="d-flex justify-content-center my-5">
          <div className="w-75">
            <h4 className="title my-3">{paragraph?.title}</h4>
            {paragraph?.text}
          </div>
        </section>

        <div className="container mb-4 w-75">
          <section className="row g-4">
            <Gallery>
              {gallery?.map((image, i) => (
                <Item
                  original={image.default.src}
                  thumbnail={image.default.src}
                  width={800}
                  height={450}
                  key={i}
                >
                  {({ ref, open }) => (
                    <div className={image.default.className} onClick={open}>
                      <img className="img-fluid" src={image.default.src} />
                    </div>
                  )}
                </Item>
              ))}
            </Gallery>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
