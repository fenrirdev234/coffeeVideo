import { Composition } from 'remotion';
import { FPS, DURATION } from "./constans.js"
import { ReactVideo } from './ReactVideo/ReactVideo.jsx';


// Each <Composition> is an entry in the sidebar!


export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="ReactVideo"
				component={ReactVideo}
				durationInFrames={DURATION}
				fps={FPS}
				width={1920}
				height={1080}
			/>
		</>
	);
};
