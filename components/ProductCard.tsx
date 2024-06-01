"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] flex flex-col bg-white rounded-lg transition-transform transform hover:scale-105"
    >
      <div className="relative w-full h-80 overflow-hidden rounded-t-lg">
        <Image
          src={product.media[0]}
          alt="product"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 ease-in-out hover:opacity-0"
        />
        {product.media.length > 1 && (
          <Image
            src={product.media[0]}
            alt="product"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
          />
        )}
      </div>
      <div className="flex flex-col p-4 gap-1">
        <p className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600 hover:underline">{product.title}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
      </div>
      <div className="flex justify-between items-center px-4 pb-4">
        <p className="text-lg font-bold">Rs. {product.price}</p>
        <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
      </div>
    </Link>
  );
};

export default ProductCard;
