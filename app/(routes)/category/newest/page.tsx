import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";
import React from "react";
import MobileFilters from "../[categoryId]/components/MobileFilters";
import Filter from "../[categoryId]/components/Filter";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import getBillboard from "@/actions/get-billboard";

interface CategoryProps {
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const NewesPage: React.FC<CategoryProps> = async ({ searchParams }) => {
  const products = await getProducts({
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const billboard = await getBillboard("d726c6db-5d9d-49af-aea3-504b249b59c6");

  return (
    <div className=" bg-white">
      <Container>
        <Billboard data={billboard} />

        <div className=" px-4 sm:px-6 lg:px-8 pb-24">
          <div className=" lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className=" hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />

              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className=" mt-6 lg:col-span-4 lg:mt-0">
              {!products.length && <NoResults />}
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewesPage;
