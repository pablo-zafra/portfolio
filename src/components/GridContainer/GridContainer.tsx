interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

const GridContainer: React.FC<GridContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-8 md:grid-cols-12 gap-2 md:gap-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridContainer;
