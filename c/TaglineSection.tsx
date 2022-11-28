import useWindow from "../h/useWindow";

const TaglineSection: React.FC = () => {
  const { width, height, isDesktop } = useWindow();

  return (
    <div
      style={{
        padding: isDesktop ? 72 : 24,
        fontSize: 32,
        maxWidth: 600,
        color: "#F9F7F5",
      }}
    >
      {/* A 12 week residency for the world&apos;s most promising founders. */}A
      12 week residency for the world&apos;s top technical founders
    </div>
  );
};

export default TaglineSection;
