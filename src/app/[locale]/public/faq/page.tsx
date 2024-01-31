import Hero3 from "../../../core/template/hero/hero-3";
import Faq from "../../../core/template/faq/Faq";
export default function page() {
	const title: string = "GOT A QUESTION?";
	const subtitle: string = "GET YOUR ANSWER";
	return (
		<div className="overflow-hidden">
			<Hero3
				title={title}
				subtitle={subtitle}
				img="/banner/SlidersIMG_FAQS.jpg"
			></Hero3>
			<section
				className="section-bg pt-80 pb-40 md:pt-40 md:pd-20 text-exotic-text mb-30"
				data-oas="fade-up"
			>
				<div className="container">
					<div className="row justify-center text-center mb-40">
						<div className="col-auto">
							<div className="setionTitle-md">
								<h3>Frequently Asked Questions</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Corporis quo placeat culpa
									corrupti vel sed natus quod tempore, odio
									minus quis? Libero vitae delectus, deserunt
									quaerat ipsum deleniti harum? Laudantium?
								</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-9">
							<h2 className="text-30 fw-500 text-exotic-dark fw-bold mb-3 ps-3">Reservations</h2>
							<div className="col-12">
								<div
									className="accordion -simple row y-gap-20 js-accordion"
									id="Faq1"
								>
									<Faq />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
