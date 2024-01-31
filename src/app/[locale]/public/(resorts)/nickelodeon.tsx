import { IResortParams } from "./resort-params";

export const Nickelodeon: IResortParams = {
	banner: {
		subtitle: "",
		title: "",
		default: {
			src: "/img/resorts/nickelodeon/banner/nickelodeon-hotel-resort.jpg",
			alt: "",
		},
	},
	descriptionHotel:
		"Nickelodeon™ Riviera Maya is a 5-star experiential resort with playful surprises designed to ignite the spark of play for guests of all ages. Located 17 miles South of the Cancun Airport in one of the world’s top destinations, the magical Riviera Maya, Mexico, this upscale property boasts the 9-acre Nickelodeon™ Place and Aqua Nick, Club Nick for kids and Plaza Orange Entertainment venue.",
	paragraph: {
		title: "Aqua Nick",
		text: (
			<div className="row">
				<p className="col-12">
					Guests enjoy complimentary unlimited access to this
					sprawling 6-acre themed water complex, surrounded by lush
					tropical gardens and over 500 meters of adventure and lazy
					rivers. Features include: Adventure River-220m/720 ft of
					fast-paced water fun. Lazy River-335m/1100ft of winding
					tranquility with themed sculptures and surprises along the
					way. Over 700 meters of slides, including:
				</p>
				<div className="col-6">
					<p className="mt-3">Soak Summit:</p>
					<ul className="list-point">
						<li>
							<span className="point"></span>
							<span>The Big Plunge – body slide </span>
						</li>
						<li>
							<span className="point"></span>
							<span>Riptide Rush – body slide </span>
						</li>
						<li>
							<span className="point"></span>
							<span>Tubular Twist – body slide </span>
						</li>
						<li>
							<span className="point"></span>
							<span>Gnarly Half Pipe – inner tube slide </span>
						</li>
						<li>
							<span className="point"></span>
							<span>Swirl ‘N Whirl – inner tube slide </span>
						</li>
						<li>
							<span className="point"></span>
							<span>Bowl Blaster – inner tube slide </span>
						</li>
						<li>
							<span className="point"></span>
							<span>Rad Racers – mat racer slides </span>
						</li>
					</ul>
				</div>
				<div className="col-6">
					<p className="mt-3">
						PAW Patrol Adventure Bay with slides for the Little
						onesfeaturing:
					</p>
					<ul className="list-point">
						<li>
							<span className="point"></span>
							<span>The Big Plunge</span>
							<span>The Big Plunge</span>
							<span>The Big Plunge</span>
							<span>The Big Plunge</span>
						</li>
					</ul>
				</div>

				<div className="col-6 my-4">
					<div>Bikini Bottom Beach</div>
					<div>Slime Spot </div>
					<div>Activity pool with scheduled water activities</div>
					<div>
						Towel service, lockers($), changing rooms, restrooms and
						showers
					</div>
					<div>Floating devices</div>
					<div>Chaise lounges and beach chairs</div>
					<div>Sandy area </div>
					<div>Security, medical assistance and lifeguards</div>
					<div>
						4 Aqua Bite serves favorites like burgers,hotdogs,
						pizza, and more.
					</div>
				</div>
			</div>
		),
	},

	gallery: [
		{
			default: {
				src: "/img/resorts/nickelodeon/nickelodeon-gallery-1.jpg",
				alt: "",
				className: "col-6",
			},
		},
		{
			default: {
				src: "/img/resorts/nickelodeon/nickelodeon-gallery-2.jpg",
				alt: "",
				className: "col-6",
			},
		},
		{
			default: {
				src: "/img/resorts/nickelodeon/nickelodeon-gallery-3.jpg",
				alt: "",
				className: "col-4",
			},
		},
		{
			default: {
				src: "/img/resorts/nickelodeon/nickelodeon-gallery-4.jpg",
				alt: "",
				className: "col-4",
			},
		},
		{
			default: {
				src: "/img/resorts/nickelodeon/nickelodeon-gallery-5.jpg",
				alt: "",
				className: "col-4",
			},
		},
	],
	list: [
		{
			title: "Suites",
			description: [
				"ROYAL SWIM-UP OCEANFRONT KING SUITE",
				"ROYAL SWIM-UP OCEANFRONT QUEEN SUITE",
				"ROYAL PENTHOUSE SWIM-UP OCEANFRONT QUEEN SUITE",
				"ROYAL PENTHOUSE SWIM-UP OCEANFRONT KING SUITE",
				"ROYAL SWIM-UP OCEANFRONT POOL DECK LEVEL KING SUITE",
				"ROYAL SWIM-UP OCEANFRONT POOL DECK LEVEL QUEEN SUITE ",
				"PRESIDENTIAL BIG KAHUNA SUITE",
				"PRESIDENTIAL LAIR SUITE",
				"PRESIDENTIAL PINEAPPLE SUITE",
				"SWIM-UP POOL DECK LEVEL CONNECTING",
				"SUITE SWIM-UP OCEANFRONT CONNECTING SUITE",
				"PENTHOUSE SWIM-UP OCEANFRONT CONNECTING SUITE",
				"FAMILY PLAN SWIM-UP OCEANFRONT CONNECTING SUITE",
			],
		},
		{
			title: "Restaurants & Bars",
			description: [
				"YACHTCLUB, WORLD CUISINE ",
				"GOOD BURGER™ ",
				"BIKINI BOTTOM BAR & GOURMET CORNER ",
				"PIAZZA™ ",
				"LE SPATULA –MARKET DINING",
				"SNICK LOUNGE™ ",
				"NICK BISTRO",
				"COSMO’S – SWIM UP BAR",
				"WANDA’S SWIM UP BAR",
			],
		},
		{
			title: "Experiences",
			description: [
				"ORANGE CARPET",
				"CLUB NICK",
				"PAJAMA JAM BREAKFAST",
				"SLIME TIME LIVE",
				"CHARACTER SPOT",
			],
		},
	],
};
