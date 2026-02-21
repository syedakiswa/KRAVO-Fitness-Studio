import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'flex h-12 w-full border-2 border-secondary/10 bg-white px-4 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary/40 focus-visible:outline-none focus-visible:border-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref as any}
        className={cn(
          'flex min-h-[120px] w-full border-2 border-secondary/10 bg-white px-4 py-2 text-sm ring-offset-white placeholder:text-secondary/40 focus-visible:outline-none focus-visible:border-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props as any}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
