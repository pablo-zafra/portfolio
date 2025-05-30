interface JoinBoxProps {
  isActive?: boolean;
  className?: string;
}

export const JoinBox: React.FC<JoinBoxProps> = ({
  isActive = false,
  className = "",
}) => {
  return (
    <div
      className={`absolute rounded-xl bg-center bg-cover bg-no-repeat w-16 h-auto aspect-square bg-turquesa transition-[transform,translate,opacity] duration-400 ${className} ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
};
