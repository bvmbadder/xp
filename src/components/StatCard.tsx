type PropType = {
  value: string;
  title: string;
};
const StatCard = ({ title, value }: PropType) => {
  return (
    <div className="bg-gray-100 p-3 flex flex-col items-start justify-center gap-2 rounded-lg">
      <h1 className="font-semibold text-base">{value}</h1>
      <h1 className="font-normal text-sm">{title}</h1>
    </div>
  );
};

export default StatCard;
