import HeadWithFonts from "../c/HeadWithFonts";
import MarkBar from "../c/MarkBar";
import TaglineSection from "../c/TaglineSection";
import useWindow from "../h/useWindow";
import Image from "next/image";
import EmailForm from "../c/EmailForm";

export default function Landing() {
  const { width, height, isDesktop } = useWindow();

  return (
    <div>
      <HeadWithFonts />

      <div
        style={{
          height: "100vh",
          backgroundColor: "#1A1A23",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          color: "#F9F7F5",
        }}
      >
        <div style={{}}>
          <MarkBar />
        </div>
        <div>
          <TaglineSection />
          <div
            style={{
              width: "100vw",
              display: "flex",
              alignItems: "left",
              flexDirection: "column",
              padding: 12,
              paddingLeft: isDesktop ? 72 : 24,
            }}
          >
            <div style={{ marginTop: 24 }}>Next cohort begins Feb 1 in SF</div>
            <div style={{ marginTop: 12 }}>Applications open Dec 18</div>
            <EmailForm />
          </div>
          <div style={{ height: 60 }} />
        </div>
      </div>
    </div>
  );
}
