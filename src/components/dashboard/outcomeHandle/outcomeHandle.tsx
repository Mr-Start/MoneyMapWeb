import CategorySelector from "./categorySelector";
import OutcomeCard from "./outcomeCard";

const OutcomeHandle = () => {
  return (
    <div className="w-full gap-4 flex flex-col">
      <CategorySelector />
      <OutcomeCard />
    </div>
  );
};

export default OutcomeHandle;
