import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type: "intrinsic" | "extrinsic";
  isMaxWidth?: boolean;
  id?: string;
};
export default function Container({
  children,
  className = "",
  style,
  type = "extrinsic",
  isMaxWidth = true,
  id,
}: Props) {
  switch (type) {
    case "extrinsic":
      return (
        <div
          id={id}
          className={cn(
            {
              "px-6 max-w-318 mx-auto": isMaxWidth,
            },
            className,
          )}
          style={style}
        >
          {children}
        </div>
      );
    case "intrinsic":
      return (
        <div id={id} className={className} style={style}>
          <div
            className={cn(
              {
                "px-6 max-w-318 mx-auto": isMaxWidth,
              },
              className,
            )}
          >
            {children}
          </div>
        </div>
      );
    default:
      break;
  }
}
