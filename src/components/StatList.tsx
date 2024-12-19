type PropType = {
  value: string;
  title: string;
};
const StatList = ({ title, value }: PropType) => {
  return (
    <div className="p-3 flex flex-col items-center justify-center ">
      <h1 className="font-medium text-base">{value}</h1>
      <h1 className="font-normal text-sm text-gray-300">{title}</h1>
    </div>
  );
};

export default StatList;
