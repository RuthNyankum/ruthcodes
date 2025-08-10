const SoftSkills = () => {
  const softSkills = [
    { number: '1', skill: 'Adaptability', color: 'text-primary' },
    { number: '2', skill: 'Communication', color: 'text-primary' },
    { number: '3', skill: 'Attention to Details', color: 'text-primary' },
    { number: '4', skill: 'Team Collaboration', color: 'text-primary' },
    { number: '5', skill: 'Time Management', color: 'text-primary' },
  ];

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-6 font-inter">
        Soft Skills
      </h3>
      <div className="space-y-4">
        {softSkills.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 group cursor-pointer hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300"
          >
            <span
              className={`${item.color} font-bold font-jetbrains text-lg min-w-[24px] group-hover:scale-110 transition-transform`}
            >
              {item.number}
            </span>
            <span className="text-white font-medium group-hover:text-primary font-jetbrains transition-colors">
              {item.skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
