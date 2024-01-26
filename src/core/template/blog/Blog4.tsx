import { useTranslations } from "next-intl";
interface Props {
  items: {
    id: number;
    img: string;
    delayAnimation?: string;
    date?: string;
  }[];
}

const Blog4 = ({ items }: Props) => {
  const t = useTranslations("home");
  return (
    <>
      {items.map((item, index) => (
        <div
          className="col-lg-4 col-sm-6 px-40"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation || "100"}
        >
          <div className="blogCard -type-1 d-block ">
            <div className="blogCard__image">
              <div className="ratio ratio-1:1 rounded-4 rounded-8">
                <img
                  className="img-ratio  js-lazy"
                  src={item.img}
                  alt="image"
                />
              </div>
            </div>
            <div>
              <h4 className="text-exotic-text text-30 fw-500 mb-20">
                {t(`aboutItems.title${index + 1}`)}
              </h4>
              {item.date && (
                <div className="text-light-1 text-15 lh-14 mt-20">
                  {item.date}
                </div>
              )}

              <div
                className="text-exotic-text text-12 lh-14 mt-5"
                dangerouslySetInnerHTML={{
                  __html: t.raw(`aboutItems.description${index + 1}`),
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog4;
