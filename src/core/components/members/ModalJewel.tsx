
import React, {FC} from "react";
import { Button, Modal } from "react-bootstrap";
import { ColoredLine } from "../shape/ColoredLine";
import Image from "next/image";
import { CircleSVG } from "../shape/CircleSVG";

interface Props{
  show:boolean
  handleClose: ()=>void
}
export const ModalJewel:FC<Props> = ({show,handleClose}) => {


  return (
    <>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <div className="bg-white row">
            <div className="col-4 pt-3">
              <div className="row justify-content-center">
                <div className="col-4 d-flex justify-content-center px-0">
                  <Image
                      src="/img/members/safiro.svg"
                      alt="jewels"
                      width={61}
                      height={61}
                  />
                </div>

                <div className="text-25 text-exotic-text col-8 text-left px-0">
                  <div>Saphire</div>
                  <div className="text-15">Member benefits</div>
                </div>
              </div>
            </div>
            <div className="d-flex col-8 pe-0 align-items-center">
              <ColoredLine color="sapphire" className="rounded-start w-100"/>
            </div>
            <div className="col-12 text-24 text-exotic fw-bold px-3 pb-3">Includes:</div>
            <ul className="col-6 px-3 pb-3">
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Yachtclub, world cuisine
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Good burger
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Bikini Bottom, Bar & Gourmet corner
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Piazza
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Le Spatula, market dining
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Snick Lounge
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Nick Bistro
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Cosmo’s, swim up bar
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Wanda’s, swim up bar
              </li>
            </ul>
            <ul className="col-6 px-3 pb-3">
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Yachtclub, world cuisine
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Good burger
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Bikini Bottom, Bar & Gourmet corner
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Piazza
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Le Spatula, market dining
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Snick Lounge
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Nick Bistro
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Cosmo’s, swim up bar
              </li>
              <li>
                <CircleSVG
                    className="mx-2"
                    width={8}
                    height={8}
                    fill="--color-exotic"
                />
                Wanda’s, swim up bar
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
