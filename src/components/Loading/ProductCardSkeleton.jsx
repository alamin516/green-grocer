const ProductCardSkeleton = () => {
    return (
      <div className="grid grid-cols-6 gap-[30px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="border p-2 shadow-md">
            <div className="h-48 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="mt-2 h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="mt-1 h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            <div className="mt-2 h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  };
  
export default ProductCardSkeleton;

  