import { FC, PropsWithChildren, useState } from "react";
import { useGetProducts } from "@/src/entities/products";
import Product from "../units/Product";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

const TagsList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const { data: products } = useGetProducts({
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти товары"
      />
      {children}
      {products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default TagsList;
