"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-odal";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart();

  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
  };

  return (
    <li
      onClick={handleClick}
      className="bg-white group  cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt={data?.name}
          className=" aspect-square object-cover rounded-md"
        />
        <div
          className=" opacity-0 group-hover:opacity-100 transition absolute w-full px6
         bottom-5"
        >
          <div className=" flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className=" text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className=" text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className=" font-semibold text-lg">{data.name}</p>
        <p className=" text-sm to-gray-500">{data.category?.name}</p>
      </div>
      <div className=" flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </li>
  );
};

export default ProductCard;
