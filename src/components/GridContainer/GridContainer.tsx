interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`w-full grid grid-cols-8 md:grid-cols-12 gap-4 px-4 ${className}`}
    >
      {children}
    </div>
  );
};
