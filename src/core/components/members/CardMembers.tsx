import Image from "next/image";

interface Props {
  title: string;
  img: string;
}
export const CardMembers = ({ title, img }: Props) => {
  return (
    <div className="p-4 row justify-content-center">
      <div className="col-lg-12 d-flex justify-content-center pb-35">
        <Image src={img} alt="jewels" width={61} height={61} />
      </div>

      <h2 className="text-15 text-exotic-text col-lg-12 text-center">
        {title}
      </h2>
    </div>
  );
};
