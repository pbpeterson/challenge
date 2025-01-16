// 🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩 Não mude esse arquivo!!!

export function calculateColor(isSelected: boolean) {
  const start = performance.now();
  while (performance.now() - start < 20) {}

  return isSelected ? "#374151" : "#1F2937";
}
