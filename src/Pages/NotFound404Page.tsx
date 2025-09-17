import Breadcrumbs from "@/components/common/Breadcrumbs";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function NotFound404Page() {
  return (
    <>
      <div className="container mx-auto px-5">
        <Breadcrumbs />

        <div className="flex items-center justify-center  flex-col text-center mt-20">
          <h1 className="font-bold text-[30px] md:text-[70px]">
            404 Not Found
          </h1>
          <p>Your visited page not found. You may go home page.</p>
          <Button className="py-7 mt-18 mb-10">
            {" "}
            <Link className="" to="/">
              Back to home page
            </Link>{" "}
          </Button>
        </div>
      </div>
    </>
  );
}

export default NotFound404Page;
