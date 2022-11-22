interface InfoSectionProps {
  children?: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ children }) => {
  return (
    <div
      style={{
        padding: 12,
        margin: 12,
        background: "hsla(240, 10%, 10%, 1)",
        borderRadius: 8,
        zIndex: "2",
      }}
    >
      {children}
    </div>
  );
};

export default InfoSection;
