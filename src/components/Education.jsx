const Education = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-800">Education</h3>
      <div className="text-gray-600 flex items-center">
        <img
          className="w-15 h-10 mr-4"
          src="uw.png"
          alt="University Logo"
        />
        <div>
          <p className="font-medium">University of Washington</p>
          <p>Computer Science & Software Engineering</p>
          <p className="text-sm text-gray-500">2019 - 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
