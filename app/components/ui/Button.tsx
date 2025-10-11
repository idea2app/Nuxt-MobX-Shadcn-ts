import type { FunctionalComponent, HTMLAttributes } from 'vue';
import { Primitive } from 'radix-vue';
import { type ButtonVariants, buttonVariants } from './index';
import { cn } from '~/lib/utils';

interface ButtonProps extends HTMLAttributes {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  as?: any;
  asChild?: boolean;
}

export const Button: FunctionalComponent<ButtonProps> = (props, { slots, attrs }) => {
  const { variant, size, class: className, as = 'button', asChild, ...rest } = props;
  
  return (
    <Primitive
      as={as}
      asChild={asChild}
      class={cn(buttonVariants({ variant, size }), className)}
      {...rest}
      {...attrs}
    >
      {slots.default?.()}
    </Primitive>
  );
};

Button.props = ['variant', 'size', 'class', 'as', 'asChild'];
Button.inheritAttrs = false;
