"use client";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import Logo from "@/public/images/shops.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 lg:hidden"
					onClose={setOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12">
								<div className="flex px-4 pb-2 pt-5">
									<button
										type="button"
										className="-m-2 inline-flex items-center justify-center rounded-md p-2 "
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<XMarkIcon
											className="h-6 w-6 text-[#FF4B32]"
											aria-hidden="true"
										/>
									</button>
								</div>

								{/* Links */}

								<div className="space-y-6 border-t border-gray-200 px-4 py-6">
									<div className="flow-root">
										<Link
											href="#"
											className="-m-2 block p-2 font-medium text-gray-900"
										>
											Sign in
										</Link>
									</div>
									<div className="flow-root">
										<Link
											href="#"
											className="-m-2 block p-2 font-medium text-gray-900"
										>
											Create account
										</Link>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
			{/* Top navigation */}
			<nav
				aria-label="Top"
				className="relative z-20 bg-slate-50 bg-opacity-90 backdrop-blur-xl backdrop-filter py-3 rounded-3xl border-b border-[#FB6E16]"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center">
						<button
							type="button"
							className="rounded-md bg-white border p-2 text-gray-400 lg:hidden "
							onClick={() => setOpen(true)}
						>
							<span className="sr-only">Open menu</span>
							<Bars3Icon
								className="h-6 w-6 text-[#FF4B32]"
								aria-hidden="true"
							/>
						</button>

						{/* Logo */}
						<div className="ml-4 flex lg:ml-0 justify-items-center">
							<Link href="/" className="flex flex-row gap-3">
								<span className="sr-only">Daily Shop</span>
								<Image
									className="h-8 w-auto"
									src={Logo}
									alt="daily shop logo"
								/>
								<p className="font-sans uppercase lg:text-4xl font-extrabold text-[#FB6E16] text-2xl">
									Daily Shop
								</p>
							</Link>
						</div>

						{/* Flyout menus */}

						<div className="ml-auto flex items-center">
							<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
								<Link
									href="#"
									className="text-sm font-medium text-gray-700 hover:text-primary-dark"
								>
									Sign in
								</Link>
								<span
									className="h-6 w-px bg-primary-dark text-primary-dark"
									aria-hidden="true"
								/>
								<Link
									href="#"
									className="text-sm font-medium text-gray-700 hover:text-primary-dark"
								>
									Create account
								</Link>
							</div>

							{/* Search */}
							<div className="flex lg:ml-6">
								<Link
									href="#"
									className="p-2 text-gray-400 hover:text-primary-dark"
								>
									<span className="sr-only">Search</span>
									<MagnifyingGlassIcon
										className="h-6 w-6 hover:text-primary-dark"
										aria-hidden="true"
									/>
								</Link>
							</div>

							{/* Cart */}
							<div className="ml-4 flow-root lg:ml-6">
								<Link
									href="#"
									className="group -m-2 flex items-center p-2"
								>
									<ShoppingBagIcon
										className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-primary-dark"
										aria-hidden="true"
									/>
									<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-primary-dark-dark">
										0
									</span>
									<span className="sr-only">
										items in cart, view bag
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
