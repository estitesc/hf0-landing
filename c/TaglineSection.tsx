import useWindow from "../h/useWindow";

const TaglineSection: React.FC = () => {
  const { width, height, isDesktop } = useWindow();

  return (
    <div
      style={{
        padding: isDesktop ? 72 : 24,
        fontSize: 32,
        maxWidth: 600,
      }}
    >
      {/* A 12 Week Residency for the World's Most Promising Founders. */}A 12
      week residency for the world&apos;s most promising founders.
    </div>
  );
};

export default TaglineSection;
