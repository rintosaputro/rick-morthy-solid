import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const className = (...classes: ClassValue[]) => twMerge(clsx(classes));

export default className;
