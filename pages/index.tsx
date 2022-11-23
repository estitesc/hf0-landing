import HeadWithFonts from "../c/HeadWithFonts";
import InfoSection from "../c/InfoSection";
import MarkBar from "../c/MarkBar";
import TaglineSection from "../c/TaglineSection";
import useWindow from "../h/useWindow";
import Image from "next/image";
import ApplyButton from "../c/ApplyButton";
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
        <MarkBar />
        <div
          style={{
            // height: "100vh",
            position: "relative",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: isDesktop ? 30 : 110,
              // left: isDesktop ? 140 : 140,
              right: isDesktop ? -140 : -140,
              overflow: "hidden",
              zIndex: "1",
            }}
          >
            <Image
              src="/transparent_orb.png"
              alt="cool planet thing"
              width={isDesktop ? 670 : 370}
              height={isDesktop ? 660 : 360}
              style={{ transform: "rotate(110deg)" }}
            />
          </div>

          <TaglineSection />

          <div
            style={{
              marginTop: isDesktop ? 50 : 350,
              marginLeft: isDesktop ? 48 : 0,
            }}
          >
            <InfoSection>
              <div style={{ fontStyle: "italic", marginBottom: 10 }}>
                founder centric
              </div>
              <div>2.5% program fee</div>
              <div>$250k SAFE</div>
              <div>just 10 companies per batch</div>
            </InfoSection>
            <InfoSection>
              <div style={{ fontStyle: "italic", marginBottom: 10 }}>
                all inclusive
              </div>
              <div>3 meals per day</div>
              <div>highly curated community</div>
              <div>perfected hackspace</div>
            </InfoSection>
            <InfoSection>
              <div style={{ fontStyle: "italic", marginBottom: 10 }}>
                happening
              </div>
              <div>feb 1</div>
              <div>in the heart of SF</div>
            </InfoSection>
            {/* <InfoSection>
              <div>
                we charge 2.5% and invest $250k into just 10 companies per batch
              </div>
            </InfoSection>
            <InfoSection>
              <div>
                3 meals a day, housing in the heart of SF, and a community of
                people like you.
              </div>
            </InfoSection>
            <InfoSection>
              <div>HF0 is where ideas come to be born</div>
            </InfoSection> */}
          </div>
          <div
            style={{
              width: "100vw",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                border: "solid 1px white",
                marginTop: isDesktop ? 72 : 0,
                height: isDesktop ? "25vh" : "15vh",
                width: 1,
              }}
            />
            {/* <ApplyButton /> */}
            <div style={{ marginTop: 24 }}>applications open Dec 18</div>
            <EmailForm />
          </div>
          <div style={{ height: 60 }} />
        </div>
      </div>
    </div>
  );
}
