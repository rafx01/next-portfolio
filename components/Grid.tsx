import { gridItems } from "@/data/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useTranslations } from "next-intl";

export const Grid = () => {
  const t = useTranslations("Bentogrid");

  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title ? t(item.title) : ""}
            description={item.description ? t(item.description) : ""}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
