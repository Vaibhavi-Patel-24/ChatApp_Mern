import React, { useState, useEffect } from "react";
import Right from "./Right/Right";
import Left from "./Left/Left";
import Logout from "./Left/Logout";
import useConversation from "../statemanage/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle screen resize to update isMobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Mobile View: Show Left Sidebar only if no conversation is selected */}
      {isMobile && !selectedConversation && (
        <div className="w-full flex flex-col">
          <Left />
        </div>
      )}

      {/* Mobile View: Show Right (Chat) when a conversation is selected */}
      {isMobile && selectedConversation && (
        <div className="w-full">
          <Right />
        </div>
      )}

      {/* Desktop View: Show everything normally */}
      {!isMobile && (
        <>
          <Logout />
          <Left />
          <Right />
        </>
      )}
    </div>
  );
};

export default Home;
