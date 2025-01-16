import type { PropsWithChildren } from "react";

export function TableHead({
  children,
  isName = false,
}: PropsWithChildren<{ isName?: boolean }>) {
  return (
    <th
      scope="row"
      className={
        isName
          ? "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          : "px-6 py-4"
      }
    >
      {children}
    </th>
  );
}
