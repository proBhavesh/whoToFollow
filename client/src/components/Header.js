import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { FaTwitterSquare } from "react-icons/fa";

import reviewImage from "../assets/hdimg.jpg";
import dp from "../assets/dp.jpg";

const Header = () => {
	return (
		<>
			<div className="pt-12 px-4 bg-lightBlue mx-auto h-auto font-sans text-center md:text-left pt-16">
				<div className="grid grid-rows-2 m-auto md:grid-cols-2 grid-rows-none max-w-6xl  pt-24 gap-8">
					{/*left banner*/}
					<div className="flex flex-col content-between flex-wrap items-center md:items-start">
						<h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-normalBlue to-lightGray leading-extra-loose font-bold mb-6">
							Welcome to WTF - Who to Follow
						</h1>
						<p className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-normalBlue to-lightGray">
							Get a list of people to Follow on Twitter who are
							expert in their fields.
						</p>
						<div className="mt-12 mb-0 flex ">
							<form
								acceptCharset="UTF-8"
								action="https://www.formbackend.com/f/0698d758eddc634e"
								method="POST"
								className=" flex"
							>
								<input
									type="email" id="email" name="email" required
									placeholder="Enter Your Email"
									className="px-4 py-2 rounded text-normalBlue font-sans text-lg font-semibold border focus:outline-none md:text-lg"
								/>
								<Button type="submit" name="Join waitlist - 100% free " />
							</form>

							
						</div>
						<div className="flex flex-row mt-6 py-3 items-center">
							<Image
								src={dp}
								alt="Reviewer's Image"
								width="80"
								height="80"
								className="rounded-full"
							/>
							<div className="ml-3">
								<h2 className="text-xl">Bhavesh Choudhary</h2>

								<a
									href="https://twitter.com/yoBhavesh"
									target="_blank"
									rel="noreferrer"
								>
									<FaTwitterSquare
										size={25}
										color="#6C63FB"
										className="mt-2"
									/>
								</a>
							</div>
						</div>
					</div>
					{/*right banner*/}
					<div className="mix-blend-darken">
						<Image
							src={reviewImage}
							alt="Reviewer's Image"
							// width="80"
							// height="80"
							className="rounded"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
