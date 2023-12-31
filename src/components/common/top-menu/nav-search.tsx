"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  Apple,
  SearchIcon,
  Loader2,
  Edit3Icon,
  ShoppingBagIcon,
} from "lucide-react";

import { Button } from "@/components/common";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/common/top-menu/command";
import { globalSearch, getAllProductsWitoutSub } from "@/helpers";
import _ from "lodash";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("rich");
  const [items, setItems] = React.useState([]);
  const [allProducts, setAllProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleDialog();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const debouncedGlobalSearch = React.useCallback(
    _.debounce((query) => {
      if (query.trim() !== "") {
        globalSearch(query)
          .then((searchResult) => {
            setItems(searchResult);
            console.log(searchResult);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setItems([]);
      }
    }, 1000),
    []
  );

  React.useEffect(() => {
    if (search.trim() !== "") {
      debouncedGlobalSearch(search);
    } else {
      setItems([]);
    }
  }, [search, debouncedGlobalSearch]);

  const toggleDialog = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  React.useEffect(() => {
    // console.log(items);
  }, [items]);

  const handleInputChange = (event: any) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    getAllProductsWitoutSub()
      .then((data) => {
        console.log(data);
        setAllProducts(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // In case of error, set loading to false as well
      });
  }, []);

  // const toggleDialog = () => {
  //   // Implement your toggleDialog functionality here
  // };

  // React.useEffect(() => {
  //   getAllProductsWitoutSub()
  //     .then((data) => {
  //       console.log(data);
  //       setAllProducts(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  React.useEffect(() => {}, []);

  return (
    <>
      <div className="py-6 flex justify-center items-center">
        <div
          onClick={toggleDialog}
          className="w-[445px] h-10 rounded-full border border-gray-50 justify-between items-center hidden lg:inline-flex"
        >
          <div className="flex justify-around items-center gap-3">
            <Search className="pl-4" size={32} />
            <p className="text-gray-200 text-xs">Search for products</p>
          </div>
          <Button>Search</Button>
        </div>
        <Search
          onClick={toggleDialog}
          className="pl-4 lg:hidden"
          size={36}
          strokeWidth={1.5}
        />
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>
            {loading ? (
              <div className="w-full flex justify-center items-center">
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              <h1>No products found!</h1>
            )}
          </CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Edit3Icon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem>
              <ShoppingBagIcon className="mr-2 h-4 w-4" />
              <span>Cart</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="All Products">
            {loading ? (
              <div className="w-full flex justify-center items-center">
                <Loader2 className="animate-spin mb-2" />
              </div>
            ) : null}
            {allProducts.map((product: any) => (
              <Link
                onClick={() => setOpen(!open)}
                key={product.productId}
                href={`${BASE_URL}/products/${product.mainCategoryId}/${product.productId}`}
              >
                <CommandItem>{product.productName}</CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
