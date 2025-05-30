import { useBreakpoints } from "../..//hooks";

interface FormatEmailProps {
  email?: string;
}

export const FormatEmail: React.FC<FormatEmailProps> = ({
  email = "",
}: FormatEmailProps) => {
  const { isMobile } = useBreakpoints();

  if (email && isMobile) {
    const index = email.indexOf("z");
    if (index !== -1) {
      return (
        <>
          {email.slice(0, index)}
          <br />
          {email.slice(index)}
        </>
      );
    }
  }
  return email;
};
