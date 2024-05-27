import {
  forwardRef,
  ComponentProps,
  RefAttributes,
  ForwardRefExoticComponent,
  SVGProps,
} from "react";

export interface CardProps extends Omit<ComponentProps<"div">, "children"> {
  Icon?: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  href?: string;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white bg-opacity-5 rounded-lg border shadow-sm p-4 relative overflow-hidden h-full mx-auto ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);


export default Card;
