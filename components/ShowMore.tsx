"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { CustomButton } from "./";
import { updateSearchParams } from "@/utils";

// show more
const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter(); // use router
  // handle navigation
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    // new pathname
    const newPathname = updateSearchParams("limit", `${newLimit}`);

    // push new router
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {/* show `show more` button if next items are available */}
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
