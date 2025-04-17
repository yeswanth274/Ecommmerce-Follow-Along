import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressCard from "../components/auth/AddressCard";
import NavBar from "../components/auth/nav";
import { useSelector } from "react-redux"; // Import useSelector
import axios from "../axiosConfig";

export default function Profile() {
	// Retrieve email from Redux state
	const email = useSelector((state) => state.user.email);
	const [personalDetails, setPersonalDetails] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		avatarUrl: "",
	});
	const [addresses, setAddresses] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		// Only fetch profile if email exists
		if (!email) return;
		axios
 			.get("/api/v2/user/profile", { params: { email } })
			.then((res) => {
				setPersonalDetails(res.data.user);
				setAddresses(res.data.addresses);
				console.log("User fetched:", res.data.user);
				console.log("Addresses fetched:", res.data.addresses);
			})
			.catch((err) => console.error(err));
	}, [email]);

	const handleAddAddress = () => {
		navigate("/create-address");
	};

	return (
		<>
			<NavBar />
			<div className="w-full min-h-screen bg-neutral-800 p-5">
				<div className="w-full h-full bg-neutral-700 rounded-lg">
					<div className="w-full h-max my-2 p-5">
						<div className="w-full h-max">
							<h1 className="text-3xl text-neutral-100">
								Personal Details
							</h1>
						</div>
						<div className="w-full h-max flex flex-col sm:flex-row p-5 gap-10">
							<div className="w-40 h-max flex flex-col justify-center items-center gap-y-3">
								<div className="w-full h-max text-2xl text-neutral-100 text-left">
									PICTURE
								</div>
								<img
									src={personalDetails.avatarUrl ? `http://localhost:8000/${personalDetails.avatarUrl}` : `https://cdn.vectorstock.com/i/500p/17/61/male-avatar-profile-picture-vector-10211761.jpg`}
									alt="profile"
									className="w-40 h-40 rounded-full"
									onError={(e) => {
										e.target.onerror = null; // Prevents infinite loop if the default image also fails
										e.target.src = "https://cdn.vectorstock.com/i/500x500/17/61/male-avatar-profile-picture-vector-10211761.jpg";
									}}
								/>
							</div>
							<div className="h-max md:flex-grow">
								<div className="w-full h-max flex flex-col justify-center items-center gap-y-3">
									<div className="w-full h-max">
										<div className="text-2xl text-neutral-100 text-left">
											NAME
										</div>
										<div className="text-lg font-light text-neutral-100 text-left break-all">
											{personalDetails.name}
										</div>
									</div>
									<div className="w-full h-max">
										<div className="text-2xl text-neutral-100 text-left">
											EMAIL
										</div>
										<div className="text-lg font-light text-neutral-100 text-left break-all">
											{personalDetails.email}
										</div>
									</div>
									<div className="w-full h-max">
										<div className="text-2xl text-neutral-100 text-left">
											MOBILE
										</div>
										<div className="text-lg font-light text-neutral-100 text-left break-all">
											{personalDetails.phoneNumber}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full h-max my-2 p-5">
						<div className="w-full h-max">
							<h1 className="text-3xl text-neutral-100">
								Addresses
							</h1>
						</div>
						<div className="w-full h-max p-5">
							<button
								className="w-max px-3 py-2 bg-neutral-600 text-neutral-100 rounded-md text-center hover:bg-neutral-100 hover:text-black transition-all duration-100"
								onClick={handleAddAddress}
							>
								Add Address
							</button>
						</div>
						<div className="w-full h-max flex flex-col gap-5 p-5">
							{addresses.length === 0 ? (
								<div className="w-full h-max text-neutral-100 font-light text-left">
									No Addresses Found
								</div>
							) : null}
							{addresses.map((address, index) => (
								<AddressCard key={index} {...address} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}