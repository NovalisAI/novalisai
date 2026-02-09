import { cn } from "@/lib/utils";

type Props<T> = {
  elements: T[];
  renderElement: (element: T, index: number) => React.ReactNode;
  isReverse?: boolean;
};

export default function InfiniteScroll<T>({
  elements,
  isReverse = false,
  renderElement,
}: Props<T>) {
  return (
    <div className="inner">
      <div className="wrapper gap-6">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <section
              key={i}
              className={cn("gap-6", {
                "section-wrapper": !isReverse,
                "section-wrapper-reverse": isReverse,
              })}
            >
              {elements.map(renderElement)}
            </section>
          ))}
      </div>
    </div>
  );
}
