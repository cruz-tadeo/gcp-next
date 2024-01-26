const Faq = () => {
	const faqContent = [
		{
			id: 1,
			collapseTarget: "One",
			title: "What are the Lomas Hospitality hotels?",
			content: `Each of these hotels offers a unique and exceptional experience for our guests. Whether you’re looking for a romantic getaway, a family vacation, or a peaceful break, we have the perfect place for you.`,
		},
		{
			id: 2,
			collapseTarget: "Two",
			title: "Where can I review my bookings?",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
		},
		{
			id: 3,
			collapseTarget: "Three",
			title: "Where can I make payments for my reservations?",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
		},
		{
			id: 4,
			collapseTarget: "Four",
			title: "Where can I make payments for my reservations?",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
		},
	];
	return (
		<>
			{faqContent.map((item) => (
				<div className="col-12 text-exotic-text" key={item.id}>
					<div className="accordion__item px-20 py-20 border-light rounded-4">
						<div
							className="accordion__button d-flex items-center"
							data-bs-toggle="collapse"
							data-bs-target={`#${item.collapseTarget}`}
						>
							<div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
								<i className="icon-plus" />
								<i className="icon-minus" />
							</div>
							<div className="button text-dark-1 text-start">
								{item.title}
							</div>
						</div>
						{/* End accordion button */}

						<div
							className="accordion-collapse collapse"
							id={item.collapseTarget}
							data-bs-parent="#Faq1"
						>
							<div className="pt-15 pl-60">
								<p className="text-15">{item.content}</p>
							</div>
						</div>
						{/* End accordion conent */}
					</div>
				</div>
			))}
		</>
	);
};

export default Faq;
