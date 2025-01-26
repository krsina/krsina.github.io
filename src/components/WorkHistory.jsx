const WorkHistory = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-800">Work History</h3>
      <div className="flex text-gray-600 items-center">
        <img className="w-12 h-12 mr-4" src="braganza.jpg" alt="Braganza Logo"/>
        <div>
          <p className="font-medium">Braganza Tea</p>
          <p>Crew Member</p>
          <p className="text-sm text-gray-500">2021 - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
