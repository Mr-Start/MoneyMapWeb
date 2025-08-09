"use client";

import { usePage } from "@/context/usePage";

const MainHeader = () => {
  const { selectedPage, setSelectedPage } = usePage();

  return (
    <div className="border-b flex justify-between items-center p-1 border-[#daa95a]">
      <div className="flex items-center gap-4">
        <h1
          className={`text-xl font-bold cursor-pointer pb-3 hover:text-[#daa95a] ${
            selectedPage === "Orçamento Doméstico"
              ? "font-bold border-b-3 border-[#daa95a]"
              : "text-gray-300"
          }`}
          onClick={() => setSelectedPage("Orçamento Doméstico")}
        >
          Orçamento Doméstico
        </h1>
        <h1
          className={`text-xl font-bold cursor-pointer pb-3 hover:text-[#daa95a] ${
            selectedPage === "Minhas Metas"
              ? "font-bold border-b-3 border-[#daa95a] "
              : "text-gray-300"
          }`}
          onClick={() => setSelectedPage("Minhas Metas")}
        >
          Minhas Metas
        </h1>
      </div>
      <div>user</div>
    </div>
  );
};

export default MainHeader;
