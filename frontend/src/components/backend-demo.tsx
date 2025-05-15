"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import fetchHello from "@/lib/api/hello";

const BackendDemo = () => {
  const [text, setText] = useState<string>("");

  const handleClick = async () => {
    try {
      const message = await fetchHello();
      setText(message);
    } catch (err) {
      setText("Error talking to backend");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <p>GET {process.env.NEXT_PUBLIC_API_URL}/api/v1/hello</p>
      <Button variant="secondary" onClick={handleClick}>
        Request text from apiº
      </Button>
      <p className="text-center">
        {text.length > 0 ? text : "Click the button to get a message"}
      </p>
    </div>
  );
};
export default BackendDemo;
