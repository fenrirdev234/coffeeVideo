import { AbsoluteFill, useCurrentFrame } from "remotion/.";

export const ReactVideo = () => {
    const frame = useCurrentFrame()
    console.log(frame)
    const opacity = frame / 30;
    return (
        <AbsoluteFill>
            <div style={{
                backgroundColor: "#034",
                color: "#fff",
                height: "100%",
                display: "grid",
                placeContent: "center",
                fontSize: "72px",
                fontFamily: "system-ui",
            }}>
                <h1 style={{ opacity }}>Entre</h1>
            </div>
        </AbsoluteFill>
    );
}
