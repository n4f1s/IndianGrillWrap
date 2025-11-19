'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

type BaseProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
  icon?: boolean; 
  srLabel?: string; 
} & React.ComponentPropsWithoutRef<'button'>;

type AnchorProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'children'> & {
  href: string;
};

type ButtonProps = BaseProps | (BaseProps & AnchorProps);

const base =
  'group inline-flex items-center justify-center gap-1 rounded-[10px] px-5 py-2 text-sm sm:text-base font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const variants: Record<'primary' | 'secondary', string> = {
  primary:
    'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary',
  secondary:
    'bg-white text-black hover:bg-gray-50 ring-1 ring-black/10 focus-visible:ring-black/30',
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      className,
      children,
      icon = true,
      srLabel,
      ...rest
    } = props as ButtonProps;

    const content = (
      <>
        {srLabel ? <span className="sr-only">{srLabel}</span> : null}
        <span aria-hidden={!!srLabel}>{children}</span>

        {icon && (
          <span className="relative inline-flex items-center overflow-hidden">
            <ChevronRight
              aria-hidden="true"
              className="size-5 text-gray-300 transform transition-transform duration-300 ease-out group-hover:translate-x-1 opacity-100 group-hover:opacity-0"
            />
            <ArrowRight
              aria-hidden="true"
              className="size-5 -ml-5 transform transition-transform duration-300 ease-out group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
            />
          </span>
        )}
      </>
    );

    const classes = cx(base, variants[variant], className);

    // Anchor case when href provided
    if ('href' in props && props.href) {
      const { href, ...anchorRest } = rest as AnchorProps;
      // Use Next.js Link for client-side routing
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorRest}
        >
          {content}
        </Link>
      );
    }

    // Button case
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={(rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type ?? 'button'}
        className={classes}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);
