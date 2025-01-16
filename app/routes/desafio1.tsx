import { useState, type CSSProperties } from "react";
import { TableHead } from "~/components/table-head";
import { SelectProvider, useSelect } from "~/contexts/select";
import { calculateColor } from "~/utils/calculate-color";
import { productsDb } from "./db";

function getFromDb() {
  return productsDb.map((products) => ({
    name: products.name,
    color: products.color,
    category: products.category,
    price: products.price,
  }));
}

export default function () {
  const [products, _] = useState(getFromDb());

  return (
    <SelectProvider>
      <div className="p-4 ">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <TableRow
                  productsLength={products.length}
                  index={index}
                  price={product.price}
                  category={product.category}
                  color={product.color}
                  name={product.name}
                  key={`product-${product.name}-${index}`}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SelectProvider>
  );
}

function TableRow({
  color,
  category,
  price,
  name,
  index,
  productsLength,
}: {
  color: string;
  category: string;
  price: string;
  name: string;
  index: number;
  productsLength: number;
}) {
  const { selectedId, selectItem } = useSelect();

  const currentBg = calculateColor(selectedId === index);

  return (
    <tr
      onClick={() => {
        selectItem(index);
      }}
      style={
        {
          "--current-bg": currentBg,
        } as CSSProperties
      }
      className={`border-b  dark:border-gray-700 ${
        index === productsLength - 1 ? "" : "border-b"
      } bg-[var(--current-bg)]`}
    >
      <TableHead isName>{name}</TableHead>
      <TableHead isName>{color}</TableHead>
      <TableHead isName>{category}</TableHead>
      <TableHead isName>{price}</TableHead>
    </tr>
  );
}
