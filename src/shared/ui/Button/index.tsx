import * as React from "react";
import { ElementType } from "react";
import { buttonVariants, ButtonVariants } from "./buttonVariants";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

type PolymorphicRef<T extends ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

type Props<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & ButtonVariants &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

type ButtonRender = (
  props: Props<ElementType>,
  ref: React.ForwardedRef<unknown>,
) => React.ReactElement | null;

const ButtonImpl = <T extends ElementType = "button">(
  { as, variant, size, className, children, ...props }: Props<T>,
  ref: PolymorphicRef<T>,
) => {
  const Component = as || "button";

  return (
    <Component
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

const Forward = React.forwardRef(ButtonImpl as unknown as ButtonRender);

type ButtonComponent = (<T extends ElementType = "button">(
  props: Props<T> & { ref?: PolymorphicRef<T> },
) => React.ReactElement | null) & {
  displayName?: string;
};

export const Button = Forward as ButtonComponent;

Button.displayName = "Button";
