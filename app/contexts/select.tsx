import {
  createContext,
  use,
  useCallback,
  useState,
  type PropsWithChildren,
} from "react";

type SelectContextParams = {
  selectedId: number;
  selectItem: (id: number) => void;
} | null;

const SelectContext = createContext<SelectContextParams>(null);

export function SelectProvider({ children }: PropsWithChildren) {
  const [selected, setSelected] = useState(0);

  const selectItem = useCallback(function selectItem(index: number) {
    setSelected(index);
  }, []);

  return (
    <SelectContext value={{ selectedId: selected, selectItem }}>
      {children}
    </SelectContext>
  );
}

export function useSelect() {
  const context = use(SelectContext);

  if (!context) {
    throw new Error("useSelect must be used within SelectProvider");
  }

  return context;
}
