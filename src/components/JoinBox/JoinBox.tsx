interface JoinBoxProps {
  isActive?: boolean;
  className?: string;
}

const JoinBox: React.FC<JoinBoxProps> = ({
  isActive = false,
  className = "",
}) => {
  return (
    isActive && (
      <div
        className={`absolute rounded-xl bg-center bg-cover bg-no-repeat w-16 h-auto aspect-square bg-turquesa transition-transform duration-400 ${className}`}
      ></div>
    )
  );
};

export default JoinBox;
