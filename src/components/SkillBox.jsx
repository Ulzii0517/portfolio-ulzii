export const SkillBox = ({ iconComponents, text }) => {
  return (
    <div>
      <div className="h-[100px] w-[88px] flex flex-col justify-between items-center gap-2">
        {iconComponents}
        <p>{text}</p>
      </div>
    </div>
  );
};
