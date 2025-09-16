import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function NotFound404Page() {
  return (
    <>
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="font-bold text-[70px]">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Button className="py-7 mt-18">
          {" "}
          <Link to="/">Back to home page</Link>{" "}
        </Button>
      </div>
    </>
  );
}

export default NotFound404Page;
