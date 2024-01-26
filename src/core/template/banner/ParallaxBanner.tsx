
'use client'

import { FunctionComponent } from "react";
import { Parallax } from "react-parallax";
import { ParallaxBannerProps } from "./ParallaxBannerProps";

export const ParallaxBanner: FunctionComponent<ParallaxBannerProps> = (props) => {
	const { image } = props

	return (
		<>
			<Parallax
				strength={200}
				bgImage={image}
				bgImageAlt="amazing place"
				bgClassName="object-fit-cover"
				>
				<div className="section-bg layout-pt-xl layout-pb-xl">
					<div className="container">
					<div className="row justify-center text-center">
						<div className="col-auto" data-aos="fade">
							<h2 className="text-40 text-white">NICKELODEON HOTELS & RESORT</h2>
							<h3 className="text-white mb-10">RIVIERA MAYA</h3>
						</div>
					</div>
					</div>
				</div>
			</Parallax>
		</>
	);
};
