import { TableHead } from "~/components/table-head";
import { SelectProvider, useSelect } from "~/contexts/select";
import { calculateActive } from "~/utils/calculate-active";

export default function () {
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

const TableRow = function TableRow({
  color,
  category,
  price,
  name,
  index,
}: {
  color: string;
  category: string;
  price: string;
  name: string;
  index: number;
}) {
  const { selectItem, selectedId } = useSelect();
  const isSelected = calculateActive(index, selectedId);

  return (
    <tr
      onClick={() => {
        selectItem(index);
      }}
      key={name}
      className={`bg-white border-b  dark:border-gray-700 ${
        index === products.length - 1 ? "" : "border-b"
      } ${isSelected ? "dark:bg-gray-700" : "dark:bg-gray-800"}`}
    >
      <TableHead isName>{name}</TableHead>
      <TableHead isName>{color}</TableHead>
      <TableHead isName>{category}</TableHead>
      <TableHead isName>{price}</TableHead>
    </tr>
  );
};

const products = [
  {
    name: 'Apple MacBook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
  {
    name: "Apple iPhone 15",
    color: "Blue",
    category: "Smartphone",
    price: "$999",
  },
  {
    name: "Samsung Galaxy S23",
    color: "Green",
    category: "Smartphone",
    price: "$899",
  },
  {
    name: "Sony WH-1000XM5",
    color: "Black",
    category: "Headphones",
    price: "$349",
  },
  {
    name: "Bose QuietComfort 45",
    color: "Silver",
    category: "Headphones",
    price: "$329",
  },
  {
    name: "Dell XPS 13",
    color: "Platinum",
    category: "Laptop",
    price: "$1299",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    color: "Black",
    category: "Laptop",
    price: "$1599",
  },
  {
    name: "Apple iPad Pro 12.9",
    color: "Space Gray",
    category: "Tablet",
    price: "$1099",
  },
  {
    name: "Microsoft Surface Go 3",
    color: "Platinum",
    category: "Tablet",
    price: "$499",
  },
  {
    name: "GoPro HERO10 Black",
    color: "Black",
    category: "Camera",
    price: "$499",
  },
  {
    name: "Canon EOS R6",
    color: "Black",
    category: "Camera",
    price: "$2499",
  },
  {
    name: "Apple Watch Series 8",
    color: "Midnight",
    category: "Smartwatch",
    price: "$399",
  },
  {
    name: "Garmin Forerunner 945",
    color: "Black",
    category: "Smartwatch",
    price: "$599",
  },
  {
    name: "Sony PlayStation 5",
    color: "White",
    category: "Console",
    price: "$499",
  },
  {
    name: "Xbox Series X",
    color: "Black",
    category: "Console",
    price: "$499",
  },
  {
    name: "Nintendo Switch OLED",
    color: "White",
    category: "Console",
    price: "$349",
  },
  {
    name: "Razer DeathAdder V2",
    color: "Black",
    category: "Mouse",
    price: "$69",
  },
  {
    name: "Logitech MX Master 3",
    color: "Graphite",
    category: "Mouse",
    price: "$99",
  },
  {
    name: "Samsung 32” Odyssey G7",
    color: "Black",
    category: "Monitor",
    price: "$799",
  },
  {
    name: "LG 27” 4K UHD Monitor",
    color: "Black",
    category: "Monitor",
    price: "$499",
  },
  {
    name: "Acer Predator Helios 300",
    color: "Black",
    category: "Laptop",
    price: "$1599",
  },
  {
    name: "HP Spectre x360",
    color: "Nightfall Black",
    category: "Laptop",
    price: "$1499",
  },
  {
    name: "Google Pixel 6",
    color: "Stormy Black",
    category: "Smartphone",
    price: "$599",
  },
  {
    name: "Apple AirPods Pro 2",
    color: "White",
    category: "Accessories",
    price: "$249",
  },
  {
    name: "JBL Flip 5",
    color: "Blue",
    category: "Speaker",
    price: "$119",
  },
  {
    name: "Sonos One SL",
    color: "Black",
    category: "Speaker",
    price: "$199",
  },
  {
    name: "Samsung Galaxy Tab S8",
    color: "Graphite",
    category: "Tablet",
    price: "$699",
  },
  {
    name: "Kindle Paperwhite",
    color: "Black",
    category: "E-Reader",
    price: "$139",
  },
  {
    name: "Amazon Echo Dot 4th Gen",
    color: "Charcoal",
    category: "Smart Speaker",
    price: "$49",
  },
  {
    name: "Apple HomePod Mini",
    color: "Space Gray",
    category: "Smart Speaker",
    price: "$99",
  },
  {
    name: "Nest Learning Thermostat",
    color: "White",
    category: "Smart Home",
    price: "$129",
  },
  {
    name: "Wyze Cam v3",
    color: "White",
    category: "Smart Home",
    price: "$35",
  },
  {
    name: "Sony A7 III",
    color: "Black",
    category: "Camera",
    price: "$1999",
  },
  {
    name: "Apple AirPods 3rd Gen",
    color: "White",
    category: "Accessories",
    price: "$179",
  },
  {
    name: "Shure SM7B",
    color: "Black",
    category: "Microphone",
    price: "$399",
  },
  {
    name: "Blue Yeti X",
    color: "Black",
    category: "Microphone",
    price: "$169",
  },
  {
    name: "Fitbit Charge 5",
    color: "Black",
    category: "Fitness Tracker",
    price: "$149",
  },
  {
    name: "Withings Steel HR",
    color: "Black",
    category: "Smartwatch",
    price: "$199",
  },
  {
    name: "Apple Mac Mini",
    color: "Space Gray",
    category: "Desktop",
    price: "$699",
  },
  {
    name: "Dell Inspiron Desktop",
    color: "Black",
    category: "Desktop",
    price: "$599",
  },
  {
    name: "HP Omen 30L",
    color: "Black",
    category: "Desktop",
    price: "$1699",
  },
  {
    name: "Apple Magic Keyboard",
    color: "White",
    category: "Accessories",
    price: "$99",
  },
  {
    name: "Logitech G915 TKL",
    color: "Black",
    category: "Keyboard",
    price: "$229",
  },
  {
    name: "Razer Kraken V3",
    color: "Black",
    category: "Headset",
    price: "$129",
  },
  {
    name: "Logitech G Pro X",
    color: "Blue",
    category: "Headset",
    price: "$199",
  },
  {
    name: "Wacom Cintiq Pro 16",
    color: "Black",
    category: "Graphics Tablet",
    price: "$1499",
  },
  {
    name: "Microsoft Surface Book 3",
    color: "Platinum",
    category: "Laptop",
    price: "$1599",
  },
  {
    name: "Asus ROG Strix G15",
    color: "Black",
    category: "Laptop",
    price: "$1399",
  },
  {
    name: "Samsung Galaxy Buds Pro",
    color: "Phantom Violet",
    category: "Accessories",
    price: "$199",
  },
  {
    name: "Sony Xperia 1 IV",
    color: "Black",
    category: "Smartphone",
    price: "$1399",
  },
  {
    name: "Apple TV 4K",
    color: "Black",
    category: "Streaming Device",
    price: "$179",
  },
  {
    name: "Nvidia GeForce RTX 3080",
    color: "Black",
    category: "Graphics Card",
    price: "$699",
  },
  {
    name: 'Apple MacBook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
  {
    name: "Apple iPhone 15",
    color: "Blue",
    category: "Smartphone",
    price: "$999",
  },
  {
    name: "Samsung Galaxy S23",
    color: "Green",
    category: "Smartphone",
    price: "$899",
  },
  {
    name: "Sony WH-1000XM5",
    color: "Black",
    category: "Headphones",
    price: "$349",
  },
  {
    name: "Bose QuietComfort 45",
    color: "Silver",
    category: "Headphones",
    price: "$329",
  },
  {
    name: "Dell XPS 13",
    color: "Platinum",
    category: "Laptop",
    price: "$1299",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    color: "Black",
    category: "Laptop",
    price: "$1599",
  },
  {
    name: "Apple iPad Pro 12.9",
    color: "Space Gray",
    category: "Tablet",
    price: "$1099",
  },
  {
    name: "Microsoft Surface Go 3",
    color: "Platinum",
    category: "Tablet",
    price: "$499",
  },
  {
    name: "GoPro HERO10 Black",
    color: "Black",
    category: "Camera",
    price: "$499",
  },
  {
    name: "Canon EOS R6",
    color: "Black",
    category: "Camera",
    price: "$2499",
  },
  {
    name: "Apple Watch Series 8",
    color: "Midnight",
    category: "Smartwatch",
    price: "$399",
  },
  {
    name: "Garmin Forerunner 945",
    color: "Black",
    category: "Smartwatch",
    price: "$599",
  },
  {
    name: "Sony PlayStation 5",
    color: "White",
    category: "Console",
    price: "$499",
  },
  {
    name: "Xbox Series X",
    color: "Black",
    category: "Console",
    price: "$499",
  },
  {
    name: "Nintendo Switch OLED",
    color: "White",
    category: "Console",
    price: "$349",
  },
  {
    name: "Razer DeathAdder V2",
    color: "Black",
    category: "Mouse",
    price: "$69",
  },
  {
    name: "Logitech MX Master 3",
    color: "Graphite",
    category: "Mouse",
    price: "$99",
  },
  {
    name: "Samsung 32” Odyssey G7",
    color: "Black",
    category: "Monitor",
    price: "$799",
  },
  {
    name: "LG 27” 4K UHD Monitor",
    color: "Black",
    category: "Monitor",
    price: "$499",
  },
  {
    name: "Acer Predator Helios 300",
    color: "Black",
    category: "Laptop",
    price: "$1599",
  },
  {
    name: "HP Spectre x360",
    color: "Nightfall Black",
    category: "Laptop",
    price: "$1499",
  },
  {
    name: "Google Pixel 6",
    color: "Stormy Black",
    category: "Smartphone",
    price: "$599",
  },
  {
    name: "Apple AirPods Pro 2",
    color: "White",
    category: "Accessories",
    price: "$249",
  },
  {
    name: "JBL Flip 5",
    color: "Blue",
    category: "Speaker",
    price: "$119",
  },
  {
    name: "Sonos One SL",
    color: "Black",
    category: "Speaker",
    price: "$199",
  },
  {
    name: "Samsung Galaxy Tab S8",
    color: "Graphite",
    category: "Tablet",
    price: "$699",
  },
  {
    name: "Kindle Paperwhite",
    color: "Black",
    category: "E-Reader",
    price: "$139",
  },
  {
    name: "Amazon Echo Dot 4th Gen",
    color: "Charcoal",
    category: "Smart Speaker",
    price: "$49",
  },
  {
    name: "Apple HomePod Mini",
    color: "Space Gray",
    category: "Smart Speaker",
    price: "$99",
  },
  {
    name: "Nest Learning Thermostat",
    color: "White",
    category: "Smart Home",
    price: "$129",
  },
  {
    name: "Wyze Cam v3",
    color: "White",
    category: "Smart Home",
    price: "$35",
  },
  {
    name: "Sony A7 III",
    color: "Black",
    category: "Camera",
    price: "$1999",
  },
  {
    name: "Apple AirPods 3rd Gen",
    color: "White",
    category: "Accessories",
    price: "$179",
  },
  {
    name: "Shure SM7B",
    color: "Black",
    category: "Microphone",
    price: "$399",
  },
  {
    name: "Blue Yeti X",
    color: "Black",
    category: "Microphone",
    price: "$169",
  },
  {
    name: "Fitbit Charge 5",
    color: "Black",
    category: "Fitness Tracker",
    price: "$149",
  },
  {
    name: "Withings Steel HR",
    color: "Black",
    category: "Smartwatch",
    price: "$199",
  },
  {
    name: "Apple Mac Mini",
    color: "Space Gray",
    category: "Desktop",
    price: "$699",
  },
  {
    name: "Dell Inspiron Desktop",
    color: "Black",
    category: "Desktop",
    price: "$599",
  },
  {
    name: "HP Omen 30L",
    color: "Black",
    category: "Desktop",
    price: "$1699",
  },
  {
    name: "Apple Magic Keyboard",
    color: "White",
    category: "Accessories",
    price: "$99",
  },
  {
    name: "Logitech G915 TKL",
    color: "Black",
    category: "Keyboard",
    price: "$229",
  },
  {
    name: "Razer Kraken V3",
    color: "Black",
    category: "Headset",
    price: "$129",
  },
  {
    name: "Logitech G Pro X",
    color: "Blue",
    category: "Headset",
    price: "$199",
  },
  {
    name: "Wacom Cintiq Pro 16",
    color: "Black",
    category: "Graphics Tablet",
    price: "$1499",
  },
  {
    name: "Microsoft Surface Book 3",
    color: "Platinum",
    category: "Laptop",
    price: "$1599",
  },
  {
    name: "Asus ROG Strix G15",
    color: "Black",
    category: "Laptop",
    price: "$1399",
  },
  {
    name: "Samsung Galaxy Buds Pro",
    color: "Phantom Violet",
    category: "Accessories",
    price: "$199",
  },
  {
    name: "Sony Xperia 1 IV",
    color: "Black",
    category: "Smartphone",
    price: "$1399",
  },
  {
    name: "Apple TV 4K",
    color: "Black",
    category: "Streaming Device",
    price: "$179",
  },
  {
    name: "Nvidia GeForce RTX 3080",
    color: "Black",
    category: "Graphics Card",
    price: "$699",
  },
  {
    name: 'Apple MacBook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
  {
    name: "Apple iPhone 15",
    color: "Blue",
    category: "Smartphone",
    price: "$999",
  },
  {
    name: "Samsung Galaxy S23",
    color: "Green",
    category: "Smartphone",
    price: "$899",
  },
  {
    name: "Sony WH-1000XM5",
    color: "Black",
    category: "Headphones",
    price: "$349",
  },
  {
    name: "Bose QuietComfort 45",
    color: "Silver",
    category: "Headphones",
    price: "$329",
  },
  {
    name: "Dell XPS 13",
    color: "Platinum",
    category: "Laptop",
    price: "$1299",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    color: "Black",
    category: "Laptop",
    price: "$1599",
  },
  {
    name: "Apple iPad Pro 12.9",
    color: "Space Gray",
    category: "Tablet",
    price: "$1099",
  },
  {
    name: "Microsoft Surface Go 3",
    color: "Platinum",
    category: "Tablet",
    price: "$499",
  },
  {
    name: "GoPro HERO10 Black",
    color: "Black",
    category: "Camera",
    price: "$499",
  },
  {
    name: "Canon EOS R6",
    color: "Black",
    category: "Camera",
    price: "$2499",
  },
  {
    name: "Apple Watch Series 8",
    color: "Midnight",
    category: "Smartwatch",
    price: "$399",
  },
  {
    name: "Garmin Forerunner 945",
    color: "Black",
    category: "Smartwatch",
    price: "$599",
  },
  {
    name: "Sony PlayStation 5",
    color: "White",
    category: "Console",
    price: "$499",
  },
  {
    name: "Xbox Series X",
    color: "Black",
    category: "Console",
    price: "$499",
  },
  {
    name: "Nintendo Switch OLED",
    color: "White",
    category: "Console",
    price: "$349",
  },
  {
    name: "Razer DeathAdder V2",
    color: "Black",
    category: "Mouse",
    price: "$69",
  },
];
