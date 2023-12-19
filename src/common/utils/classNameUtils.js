import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const clsxMerge = (...classes) => twMerge(clsx(...classes));
