import Image from "next/image";
import "./Footer.scss";

export const Footer = () => {
	return (
		<div className="d-flex justify-content-center footer">
			<div className="d-flex flex-column size-12 w-25">
				<span>USA Toll-free: 855 280 1081</span>
				<span>Internacional: +52 998 427 0075</span>
				<span>México: 800 649 0858</span>
			</div>

			<Image
				src={"/img/logos/nickelodeon-riviera-maya.svg"}
				alt=""
				width={80}
				height={70}
				className="me-5"
			/>

			<Image
				src={"/img/logos/generation-riviera-maya.svg"}
				alt=""
				width={80}
				height={70}
				className="ms-5 me-5"
			/>

			<Image
				src={"/img/logos/el-dorado-royal.svg"}
				alt=""
				width={80}
				height={70}
				className="ms-5 me-5"
			/>

			<Image
				src={"/img/logos/hidden-beach.svg"}
				alt=""
				width={80}
				height={70}
				className="ms-5 me-5"
			/>

			<Image
				src={"/img/logos/palafitos-overwater.svg"}
				alt=""
				width={80}
				height={70}
				className="ms-5"
			/>
		</div>
	);
};
