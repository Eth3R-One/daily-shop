const CategoriesSection = ({ filters }) => {
	return (
		<form className="mt-4 border-t border-gray-200">
			<h3 className="sr-only">Categories</h3>

			{filters.map((section) => (
				<div
					key={section.id}
					as="div"
					className="border-t border-gray-200 px-4 py-6"
				>
					<div className="pt-6">
						<div className="space-y-6">
							{section.options.map((option, optionIdx) => (
								<div key={option.value} className="flex items-center">
									<input
										defaultValue={option.value}
										defaultChecked={option.checked}
										id={`filter-mobile-${section.id}-${optionIdx}`}
										name={`${section.id}[]`}
										type="checkbox"
										className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
									/>
									<label
										htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
										className="ml-3 min-w-0 flex-1 text-gray-500"
									>
										{option.label}
									</label>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</form>
	);
};

export default CategoriesSection;
